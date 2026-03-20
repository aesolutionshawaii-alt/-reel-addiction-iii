#!/usr/bin/env node
/**
 * Reel Addiction III - Guided Post Creation
 *
 * Forces the correct workflow:
 * 1. View image → describe what you see
 * 2. Identify species correctly
 * 3. Check/run image optimization
 * 4. Upload to Cloudinary
 * 5. Write caption following voice guide
 * 6. Validate against voice guide rules
 * 7. Check diversity against recent posts
 * 8. Add to queue
 *
 * Usage:
 *   reel-add /path/to/image.jpg
 *   reel-add /path/to/folder/
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { execSync } = require('child_process');

// Paths
const CONTENT_DIR = path.join(__dirname, '..');
const QUEUE_FILE = path.join(CONTENT_DIR, 'output/instagram-posts-queue.json');
const CATALOG_FILE = path.join(CONTENT_DIR, 'data/photo-catalog.json');
const VOICE_GUIDE = path.join(CONTENT_DIR, 'voice-guide.md');

// Valid species
const VALID_SPECIES = ['mahi', 'ahi', 'shibi', 'marlin', 'ono', 'aku', 'mixed', 'none'];

// Banned phrases from voice guide
const BANNED_PHRASES = [
  'full send',
  'full body',
  'epic',
  'insane',
  'fire',
  'incredible',
  'on fire',
  'crushing it',
  'bucket list',
  'live your best',
  'pure chaos',
  'game on',
  'this is why we do this',
  'tag someone',
  'save this',
  'the moment',
  'zero hesitation'
];

// Copywriter fragment patterns (short punchy sentences)
const FRAGMENT_PATTERNS = [
  /^[A-Z][a-z]+\.\s+[A-Z][a-z]+\.\s+[A-Z][a-z]+\./m,  // "Full body. Full send. Full airshow."
  /^[A-Z][a-z]+ [a-z]+\.\s+[A-Z][a-z]+ [a-z]+\.\s+/m   // "Line tight. Hook set."
];

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question) {
  return new Promise(resolve => {
    rl.question(question, answer => {
      resolve(answer.trim());
    });
  });
}

function loadQueue() {
  try {
    return JSON.parse(fs.readFileSync(QUEUE_FILE, 'utf8'));
  } catch (e) {
    console.error('Error loading queue:', e.message);
    process.exit(1);
  }
}

function loadCatalog() {
  try {
    return JSON.parse(fs.readFileSync(CATALOG_FILE, 'utf8'));
  } catch (e) {
    return { recentPosts: { history: [] }, catalog: {} };
  }
}

function saveQueue(queue) {
  queue.metadata.lastUpdated = new Date().toISOString();
  fs.writeFileSync(QUEUE_FILE, JSON.stringify(queue, null, 2));
}

function saveCatalog(catalog) {
  catalog.lastUpdated = new Date().toISOString().split('T')[0];
  fs.writeFileSync(CATALOG_FILE, JSON.stringify(catalog, null, 2));
}

function getNextPostId(queue) {
  const allPosts = [...queue.queue, ...queue.posted];
  const ids = allPosts.map(p => parseInt(p.id.replace('ig-', ''), 10));
  const maxId = Math.max(0, ...ids);
  return `ig-${String(maxId + 1).padStart(3, '0')}`;
}

function checkImageSize(imagePath) {
  const stats = fs.statSync(imagePath);
  const sizeKB = stats.size / 1024;
  const sizeMB = sizeKB / 1024;
  return { sizeKB, sizeMB, needsOptimization: sizeMB > 1.5 };
}

function validateCaption(caption) {
  const errors = [];
  const warnings = [];
  const lower = caption.toLowerCase();

  // Check for banned phrases
  for (const phrase of BANNED_PHRASES) {
    if (lower.includes(phrase)) {
      errors.push(`Banned phrase: "${phrase}" — rewrite without hype/copywriter speak`);
    }
  }

  // Check for copywriter fragments
  for (const pattern of FRAGMENT_PATTERNS) {
    if (pattern.test(caption)) {
      errors.push('Copywriter fragment style detected — write in complete sentences');
    }
  }

  // Check for educational content (should have some substance)
  const wordCount = caption.split(/\s+/).length;
  if (wordCount < 30) {
    warnings.push('Caption seems short — voice guide says to educate and add value');
  }

  // Check for proper line breaks
  const lines = caption.split('\n').filter(l => l.trim());
  if (lines.length < 3) {
    warnings.push('Add more line breaks for readability');
  }

  // Check for simple CTA
  if (!lower.includes('link in bio') && !lower.includes('reeladdictioniii.com')) {
    warnings.push('Missing booking CTA — add "link in bio" or website');
  }

  // Check for emoji (should not have)
  const emojiPattern = /[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/u;
  if (emojiPattern.test(caption)) {
    errors.push('Remove emojis — voice guide says no emoji spam');
  }

  // Check for ALL CAPS words (except species names)
  const capsWords = caption.match(/\b[A-Z]{3,}\b/g) || [];
  const allowedCaps = ['III', 'CTA', 'OK'];
  const badCaps = capsWords.filter(w => !allowedCaps.includes(w));
  if (badCaps.length > 0) {
    errors.push(`Remove ALL CAPS: ${badCaps.join(', ')}`);
  }

  return { errors, warnings, isValid: errors.length === 0 };
}

function checkDiversity(species, catalog) {
  const history = catalog.recentPosts?.history || [];
  const issues = [];

  if (history.length > 0) {
    // Check for back-to-back same species
    const lastPost = history[0];
    if (lastPost.species === species && species !== 'none') {
      issues.push(`Back-to-back ${species} — last post was also ${species}`);
    }

    // Check for too many of same species in last 7 posts
    const last7 = history.slice(0, 7);
    const speciesCount = last7.filter(p => p.species === species).length;
    if (speciesCount >= 2 && species !== 'none') {
      issues.push(`Already ${speciesCount} ${species} posts in last 7 days — try a different species`);
    }
  }

  return issues;
}

function printVoiceGuideReminder() {
  console.log(`
╔══════════════════════════════════════════════════════════════════╗
║                    VOICE GUIDE REMINDER                          ║
╠══════════════════════════════════════════════════════════════════╣
║  Write like a knowledgeable captain, not a marketing agency.     ║
║                                                                  ║
║  DO:                                                             ║
║  • State what's happening or give a fishing fact                 ║
║  • Educate — tell people something real about the fish           ║
║  • Use local names (mahi, ahi, shibi, ono, aku)                  ║
║  • Keep CTA simple: "link in bio"                                ║
║                                                                  ║
║  DON'T:                                                          ║
║  • "Full send" / "Pure chaos" / copywriter fragments             ║
║  • "EPIC" / "INSANE" / "ON FIRE" / fake hype                     ║
║  • "Save this for your bucket list" / generic CTAs               ║
║  • Emojis                                                        ║
╚══════════════════════════════════════════════════════════════════╝
`);
}

async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log('Usage: reel-add /path/to/image.jpg');
    console.log('       reel-add /path/to/folder/');
    process.exit(1);
  }

  const inputPath = args[0];

  if (!fs.existsSync(inputPath)) {
    console.error(`File not found: ${inputPath}`);
    process.exit(1);
  }

  // Get list of images
  let images = [];
  const stats = fs.statSync(inputPath);

  if (stats.isDirectory()) {
    const files = fs.readdirSync(inputPath);
    images = files
      .filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f))
      .map(f => path.join(inputPath, f));
  } else {
    images = [inputPath];
  }

  if (images.length === 0) {
    console.error('No images found');
    process.exit(1);
  }

  console.log(`\nFound ${images.length} image(s) to process\n`);
  console.log('═'.repeat(60));

  const queue = loadQueue();
  const catalog = loadCatalog();
  let postsAdded = 0;

  for (const imagePath of images) {
    console.log(`\n📷 IMAGE: ${path.basename(imagePath)}`);
    console.log('─'.repeat(60));

    // Step 1: Check if image exists and get size
    const sizeInfo = checkImageSize(imagePath);
    console.log(`   Size: ${sizeInfo.sizeMB.toFixed(2)} MB`);

    if (sizeInfo.needsOptimization) {
      console.log(`   ⚠️  Image is ${sizeInfo.sizeMB.toFixed(1)}MB — needs optimization`);
      console.log(`   Run: webimg "${imagePath}"`);

      const optimize = await ask('\n   Optimize now? (y/n): ');

      if (optimize.toLowerCase() === 'y') {
        console.log('   Running webimg...');
        try {
          execSync(`webimg "${imagePath}"`, { stdio: 'inherit' });
          console.log('   ✓ Optimized');
        } catch (e) {
          console.error('   ✗ Optimization failed:', e.message);
          const cont = await ask('   Continue anyway? (y/n): ');
          if (cont.toLowerCase() !== 'y') continue;
        }
      } else {
        const cont = await ask('   Continue with unoptimized image? (y/n): ');
        if (cont.toLowerCase() !== 'y') continue;
      }
    } else {
      console.log(`   ✓ Size OK`);
    }

    // Step 2: User must view and describe image
    console.log(`\n   STEP 1: View the image and describe what you see`);
    console.log(`   Open: ${imagePath}`);

    await ask('\n   Press Enter when you have viewed the image...');

    console.log(`\n   What fish species is in this image?`);
    console.log(`   Valid options: ${VALID_SPECIES.join(', ')}`);

    let species = '';
    while (!VALID_SPECIES.includes(species)) {
      species = await ask('   Species: ');
      species = species.toLowerCase();
      if (!VALID_SPECIES.includes(species)) {
        console.log(`   Invalid. Choose from: ${VALID_SPECIES.join(', ')}`);
      }
    }

    // Step 3: Get detailed description
    console.log(`\n   STEP 2: Describe the image in detail`);
    console.log(`   (What's happening? Action shot? On deck? Who's in frame? Colors?)`);

    const description = await ask('   Description: ');

    if (description.length < 20) {
      console.log('   ⚠️  Description too short. Be specific about what you see.');
      const better = await ask('   Try again: ');
      if (better.length < 10) {
        console.log('   Skipping — need proper description');
        continue;
      }
    }

    // Step 4: Check diversity
    console.log(`\n   STEP 3: Checking content diversity...`);
    const diversityIssues = checkDiversity(species, catalog);

    if (diversityIssues.length > 0) {
      console.log('   ⚠️  Diversity warnings:');
      diversityIssues.forEach(issue => console.log(`      - ${issue}`));

      const cont = await ask('   Continue anyway? (y/n): ');
      if (cont.toLowerCase() !== 'y') continue;
    } else {
      console.log('   ✓ Diversity OK');
    }

    // Step 5: Upload to Cloudinary
    console.log(`\n   STEP 4: Upload to Cloudinary`);
    console.log(`   You need to upload this image to Cloudinary and paste the URL.`);
    console.log(`   Use: mcp__cloudinary__upload-asset`);

    const cloudinaryUrl = await ask('   Cloudinary URL: ');

    if (!cloudinaryUrl.startsWith('https://res.cloudinary.com')) {
      console.log('   ⚠️  That doesn\'t look like a Cloudinary URL');
      const cont = await ask('   Continue anyway? (y/n): ');
      if (cont.toLowerCase() !== 'y') continue;
    }

    // Step 6: Write caption with voice guide
    printVoiceGuideReminder();

    console.log(`   STEP 5: Write your caption`);
    console.log(`   Species: ${species}`);
    console.log(`   Description: ${description}`);
    console.log(`\n   Write a caption following the voice guide.`);
    console.log(`   (Enter a blank line when done)`);

    let caption = '';
    let line;
    while ((line = await ask('')) !== '') {
      caption += line + '\n';
    }
    caption = caption.trim();

    if (caption.length < 50) {
      console.log('   Caption too short. Voice guide says to educate.');
      continue;
    }

    // Step 7: Validate caption
    console.log(`\n   STEP 6: Validating caption...`);
    const validation = validateCaption(caption);

    if (validation.errors.length > 0) {
      console.log('   ✗ Caption has errors:');
      validation.errors.forEach(e => console.log(`      - ${e}`));

      const fix = await ask('\n   Fix caption? (y/n): ');
      if (fix.toLowerCase() === 'y') {
        console.log('   Re-enter caption (blank line when done):');
        caption = '';
        while ((line = await ask('')) !== '') {
          caption += line + '\n';
        }
        caption = caption.trim();

        // Re-validate
        const revalidation = validateCaption(caption);
        if (revalidation.errors.length > 0) {
          console.log('   Still has errors. Skipping.');
          continue;
        }
      } else {
        console.log('   Skipping — fix voice guide violations');
        continue;
      }
    }

    if (validation.warnings.length > 0) {
      console.log('   Warnings:');
      validation.warnings.forEach(w => console.log(`      - ${w}`));
    }

    console.log('   ✓ Caption validated');

    // Step 8: Generate hashtags
    console.log(`\n   STEP 7: Hashtags`);
    console.log(`   Enter hashtags (space-separated, include #):`);
    console.log(`   Example: #MahiMahi #OahuFishing #ReelAddictionIII #SpringFishing`);

    const hashtagInput = await ask('   Hashtags: ');
    const hashtags = hashtagInput.split(/\s+/).filter(h => h.startsWith('#'));

    if (hashtags.length < 3) {
      console.log('   ⚠️  Add at least 3-5 relevant hashtags');
    }
    if (hashtags.length > 10) {
      console.log('   ⚠️  Too many hashtags — voice guide says 5-10 max');
    }

    // Step 9: Schedule time
    console.log(`\n   STEP 8: Schedule`);
    console.log(`   Enter date/time (YYYY-MM-DD HH:MM) or leave blank for auto:`);

    const scheduleInput = await ask('   Schedule: ');
    let scheduledFor;

    if (scheduleInput) {
      const [date, time] = scheduleInput.split(' ');
      scheduledFor = `${date}T${time || '08:00'}:00`;
    }

    // Create the post
    const postId = getNextPostId(queue);
    const post = {
      id: postId,
      caption,
      hashtags,
      images: [cloudinaryUrl],
      type: species === 'none' ? 'lifestyle' : 'catch',
      species,
      imageDescription: description,
      sourceFile: path.basename(imagePath),
      status: 'approved'
    };

    if (scheduledFor) {
      post.scheduledFor = scheduledFor;
    }

    // Add to queue
    queue.queue.push(post);

    // Update catalog
    const catalogKey = path.basename(imagePath, path.extname(imagePath));
    catalog.catalog[catalogKey] = {
      file: path.basename(imagePath),
      species,
      type: post.type,
      description,
      used: true,
      usedDate: new Date().toISOString().split('T')[0]
    };

    // Update recent posts history
    if (!catalog.recentPosts) catalog.recentPosts = { history: [] };
    catalog.recentPosts.history.unshift({
      date: new Date().toISOString().split('T')[0],
      species,
      type: post.type,
      postId
    });
    catalog.recentPosts.history = catalog.recentPosts.history.slice(0, 14);

    console.log(`\n   ✓ Post ${postId} added to queue`);
    postsAdded++;
  }

  // Save everything
  if (postsAdded > 0) {
    saveQueue(queue);
    saveCatalog(catalog);
    console.log(`\n${'═'.repeat(60)}`);
    console.log(`✓ Added ${postsAdded} post(s) to queue`);
    console.log(`\nRun 'reel-post --dry-run' to preview`);
    console.log(`Run 'reel-post' to schedule to Metricool`);
  } else {
    console.log('\nNo posts added');
  }

  rl.close();
}

main().catch(e => {
  console.error(e);
  rl.close();
  process.exit(1);
});
