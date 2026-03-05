/**
 * Reel Addiction III - Instagram Posting Script
 *
 * Schedules Instagram posts via Metricool's API.
 * Includes auto-hashtag generation for fishing/charter content.
 *
 * Usage:
 *   node content/src/post-instagram.js                    # Schedule all pending posts
 *   node content/src/post-instagram.js --dry-run          # Preview without posting
 *   node content/src/post-instagram.js --post-id=ig-001   # Schedule specific post
 *   node content/src/post-instagram.js --generate-hashtags # Regenerate hashtags
 */

const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../config/.env') });

// Configuration
const CONFIG = {
  metricool: {
    baseUrl: 'https://app.metricool.com/api',
    token: process.env.METRICOOL_TOKEN,
    userId: process.env.METRICOOL_USER_ID || '2101489',
    blogId: process.env.METRICOOL_BLOG_ID || '2588722'
  },
  timezone: 'Pacific/Honolulu',
  defaultTimes: {
    morning: '07:30',
    midday: '12:00',
    evening: '17:30'
  },
  hashtags: {
    // Brand hashtags
    brand: ['#ReelAddiction', '#ReelAddictionIII', '#CaptainJR'],

    // Fishing types
    fishing: {
      general: ['#DeepSeaFishing', '#SportFishing', '#OffshoreAngling'],
      pelagic: ['#PelagicFishing', '#BigGameFishing', '#BlueWaterFishing'],
      trolling: ['#Trolling', '#LiveBait', '#FishOn']
    },

    // Species
    species: {
      marlin: ['#Marlin', '#BlueMarlin', '#StripedMarlin', '#MarlinFishing'],
      ahi: ['#Ahi', '#YellowfinTuna', '#Tuna', '#TunaFishing'],
      mahi: ['#MahiMahi', '#Dorado', '#Dolphinfish'],
      ono: ['#Ono', '#Wahoo', '#WahooFishing'],
      aku: ['#Aku', '#Skipjack', '#SkipjackTuna']
    },

    // Location
    location: ['#Hawaii', '#Oahu', '#HawaiiFishing', '#KoOlina', '#HonoluluFishing'],

    // Charter/experience
    charter: ['#FishingCharter', '#CharterFishing', '#DeepSeaCharter', '#HawaiiCharter'],

    // Lifestyle
    lifestyle: ['#FishingLife', '#SaltLife', '#OffshoreLife', '#FishingTrip', '#TightLines']
  }
};

// File paths
const QUEUE_FILE = path.join(__dirname, '../output/instagram-posts-queue.json');

/**
 * Load the Instagram posts queue
 */
function loadQueue() {
  try {
    const data = fs.readFileSync(QUEUE_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error loading queue:', error.message);
    process.exit(1);
  }
}

/**
 * Save the Instagram posts queue
 */
function saveQueue(queue) {
  queue.metadata.lastUpdated = new Date().toISOString();
  fs.writeFileSync(QUEUE_FILE, JSON.stringify(queue, null, 2));
}

/**
 * Analyze caption content and generate relevant hashtags
 *
 * Instagram 2026 best practices: Use 3-5 highly targeted hashtags.
 */
function generateHashtags(caption, existingHashtags = []) {
  const lowerCaption = caption.toLowerCase();
  const candidates = [];

  // Priority 1: Brand hashtag (always include one)
  candidates.push({ tag: '#ReelAddictionIII', priority: 1 });

  // Priority 2: Species-specific based on content
  const speciesKeywords = {
    marlin: { keywords: ['marlin', 'blue marlin', 'striped marlin', 'billfish'], tag: '#MarlinFishing' },
    ahi: { keywords: ['ahi', 'yellowfin', 'tuna', 'bigeye'], tag: '#Ahi' },
    mahi: { keywords: ['mahi', 'dorado', 'dolphinfish'], tag: '#MahiMahi' },
    ono: { keywords: ['ono', 'wahoo'], tag: '#Ono' },
    aku: { keywords: ['aku', 'skipjack'], tag: '#Aku' }
  };

  for (const [species, config] of Object.entries(speciesKeywords)) {
    if (config.keywords.some(kw => lowerCaption.includes(kw))) {
      candidates.push({ tag: config.tag, priority: 2 });
      break;
    }
  }

  // Priority 3: Fishing type
  if (lowerCaption.includes('deep sea') || lowerCaption.includes('offshore') || lowerCaption.includes('blue water')) {
    candidates.push({ tag: '#DeepSeaFishing', priority: 3 });
  } else if (lowerCaption.includes('sport') || lowerCaption.includes('big game')) {
    candidates.push({ tag: '#SportFishing', priority: 3 });
  } else {
    candidates.push({ tag: '#DeepSeaFishing', priority: 3 });
  }

  // Priority 4: Location
  if (lowerCaption.includes('oahu') || lowerCaption.includes("o'ahu") || lowerCaption.includes('ko olina') || lowerCaption.includes('honolulu')) {
    candidates.push({ tag: '#HawaiiFishing', priority: 4 });
  } else {
    candidates.push({ tag: '#Oahu', priority: 4 });
  }

  // Priority 5: Charter/experience
  if (lowerCaption.includes('charter') || lowerCaption.includes('trip') || lowerCaption.includes('book')) {
    candidates.push({ tag: '#FishingCharter', priority: 5 });
  }

  // Priority 6: Lifestyle tag
  candidates.push({ tag: '#TightLines', priority: 6 });

  // Sort by priority and take top 5
  candidates.sort((a, b) => a.priority - b.priority);

  // Deduplicate and limit to 5
  const seen = new Set();
  const result = [];
  for (const candidate of candidates) {
    if (!seen.has(candidate.tag) && result.length < 5) {
      seen.add(candidate.tag);
      result.push(candidate.tag);
    }
  }

  // Fill remaining slots if under 3
  const fillers = ['#FishingLife', '#SaltLife', '#OffshoreLife'];
  for (const filler of fillers) {
    if (!seen.has(filler) && result.length < 3) {
      result.push(filler);
    }
  }

  return result;
}

/**
 * Format the full caption with hashtags
 */
function formatCaption(caption, hashtags) {
  const hashtagString = hashtags.join(' ');
  return `${caption}\n\n.\n.\n.\n${hashtagString}`;
}

/**
 * Check if any images have been used this year
 */
function checkUsedImages(images, usedImages) {
  const currentYear = new Date().getFullYear().toString();
  const usedThisYear = usedImages[currentYear] || [];

  const duplicates = images.filter(img => usedThisYear.includes(img));
  const fresh = images.filter(img => !usedThisYear.includes(img));

  return { duplicates, fresh, year: currentYear };
}

/**
 * Add images to the used tracking list
 */
function trackUsedImages(queue, images) {
  const currentYear = new Date().getFullYear().toString();

  if (!queue.usedImages) {
    queue.usedImages = {};
  }

  if (!queue.usedImages[currentYear]) {
    queue.usedImages[currentYear] = [];
  }

  for (const img of images) {
    if (!queue.usedImages[currentYear].includes(img)) {
      queue.usedImages[currentYear].push(img);
    }
  }
}

/**
 * Validate post for 2026 best practices
 */
function validatePost(post) {
  const warnings = [];
  const suggestions = [];

  // Check hook length (first 125 chars visible before "...more")
  const firstLine = post.caption.split('\n')[0];
  if (firstLine.length > 125) {
    warnings.push(`Hook too long (${firstLine.length} chars). Only 125 chars show before "...more".`);
  }

  // Check for save/share CTA
  const caption = post.caption.toLowerCase();
  const hasSaveCTA = caption.includes('save') || caption.includes('bookmark');
  const hasShareCTA = caption.includes('send this') || caption.includes('share this') || caption.includes('tag a friend') || caption.includes('tag someone');
  const hasQuestionCTA = caption.includes('?');

  if (!hasSaveCTA && !hasShareCTA && !hasQuestionCTA) {
    suggestions.push('Consider adding a CTA. Saves and shares drive 3x more reach than likes.');
  }

  // Check caption length category
  const wordCount = post.caption.split(/\s+/).length;
  let lengthCategory;
  if (wordCount < 30) {
    lengthCategory = 'short';
  } else if (wordCount < 100) {
    lengthCategory = 'medium';
  } else {
    lengthCategory = 'long';
  }

  // Check images
  const images = post.images || (post.image ? [post.image] : []);
  const localImages = images.filter(img => !img.startsWith('http'));
  const urlImages = images.filter(img => img.startsWith('http'));

  // Determine format
  let format = post.format || 'single';
  const imageCount = images.length;

  if (imageCount >= 2 && format === 'single') {
    format = 'carousel';
  }

  // Carousel validation
  if (format === 'carousel') {
    if (imageCount < 2) {
      warnings.push('Carousel needs at least 2 images.');
    } else if (imageCount > 10) {
      warnings.push('Instagram allows max 10 slides per carousel.');
    }
  }

  if (format === 'single' && imageCount === 1) {
    suggestions.push('Single images get less reach. Consider adding 2-5 more images for a carousel.');
  }

  if (localImages.length > 0) {
    warnings.push(`Local paths need upload to Cloudinary first: ${localImages.join(', ')}`);
  }

  if (images.length === 0) {
    warnings.push('No images specified. Instagram requires at least one image.');
  }

  return { warnings, suggestions, lengthCategory, format, urlImages, localImages, imageCount };
}

/**
 * Get next available schedule time
 */
function getNextScheduleTime(existingTimes = []) {
  const now = new Date();
  const times = Object.values(CONFIG.defaultTimes);

  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);

  for (let dayOffset = 0; dayOffset < 14; dayOffset++) {
    const checkDate = new Date(tomorrow);
    checkDate.setDate(checkDate.getDate() + dayOffset);
    const dateStr = checkDate.toISOString().split('T')[0];

    for (const time of times) {
      const formattedDateTime = `${dateStr}T${time}:00`;

      if (!existingTimes.includes(formattedDateTime)) {
        return {
          dateTime: formattedDateTime,
          timezone: CONFIG.timezone
        };
      }
    }
  }

  const fallbackDate = new Date(now);
  fallbackDate.setDate(fallbackDate.getDate() + 1);
  const dateStr = fallbackDate.toISOString().split('T')[0];

  return {
    dateTime: `${dateStr}T07:30:00`,
    timezone: CONFIG.timezone
  };
}

/**
 * Validate an image URL for Metricool
 */
function validateImageUrl(imageUrl) {
  if (!imageUrl.startsWith('http')) {
    return { success: false, error: 'Must be a public URL, not local path' };
  }

  return { success: true, url: imageUrl };
}

/**
 * Schedule a post via Metricool API
 */
async function schedulePost(post, scheduledTime, imageUrls = []) {
  const url = `${CONFIG.metricool.baseUrl}/v2/scheduler/posts?userId=${CONFIG.metricool.userId}&blogId=${CONFIG.metricool.blogId}`;

  const fullCaption = formatCaption(post.caption, post.hashtags);

  const payload = {
    text: fullCaption,
    publicationDate: scheduledTime,
    providers: [{ network: 'instagram' }],
    instagramData: {
      autoPublish: true
    }
  };

  console.log('\n>>> Scheduling Instagram post...');
  console.log('Caption preview:', post.caption.substring(0, 100) + '...');
  console.log('Hashtags:', post.hashtags.length);
  console.log('Scheduled for:', scheduledTime.dateTime, scheduledTime.timezone);

  if (imageUrls.length > 0) {
    console.log(`\nProcessing ${imageUrls.length} image(s)...`);

    const validUrls = [];
    for (const imageUrl of imageUrls) {
      const result = validateImageUrl(imageUrl);

      if (result.success) {
        validUrls.push(result.url);
        console.log(`   OK ${imageUrl.substring(0, 60)}...`);
      } else {
        console.log(`   FAIL ${result.error}: ${imageUrl}`);
      }
    }

    if (validUrls.length > 0) {
      payload.media = validUrls;
    }

    if (validUrls.length === 0) {
      console.log('\nWARNING: No valid images. Post will be text-only (may fail on Instagram).');
    }
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Mc-Auth': CONFIG.metricool.token
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API error ${response.status}: ${errorText}`);
    }

    const result = await response.json();
    console.log('SUCCESS - Scheduled!');
    return { success: true, result };

  } catch (error) {
    console.error('FAILED:', error.message);
    return { success: false, error: error.message };
  }
}

/**
 * Main function
 */
async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const regenerateHashtags = args.includes('--generate-hashtags');
  const postIdArg = args.find(a => a.startsWith('--post-id='));
  const specificPostId = postIdArg ? postIdArg.split('=')[1] : null;

  if (!CONFIG.metricool.token && !dryRun && !regenerateHashtags) {
    console.error('ERROR: METRICOOL_TOKEN not set in content/config/.env');
    process.exit(1);
  }

  console.log('Reel Addiction III - Instagram Poster');
  console.log('=====================================');

  if (dryRun) {
    console.log('DRY RUN MODE - No posts will be scheduled\n');
  }

  const queue = loadQueue();
  const scheduledTimes = [];

  if (regenerateHashtags) {
    console.log('Regenerating hashtags for pending posts...\n');

    let updated = 0;
    for (const post of queue.queue) {
      if (post.status === 'pending_review' || post.status === 'approved') {
        const newHashtags = generateHashtags(post.caption);
        post.hashtags = newHashtags;
        updated++;
        console.log(`Post ${post.id}: ${newHashtags.length} hashtags generated`);
        console.log(`  ${newHashtags.join(' ')}\n`);
      }
    }

    saveQueue(queue);
    console.log(`Updated ${updated} post(s)`);
    return;
  }

  let postsToSchedule = queue.queue.filter(p => p.status === 'pending_review' || p.status === 'approved');

  if (specificPostId) {
    postsToSchedule = postsToSchedule.filter(p => p.id === specificPostId);
  }

  if (postsToSchedule.length === 0) {
    console.log('No posts pending in queue.');
    console.log('\nTo add posts, edit content/output/instagram-posts-queue.json');
    return;
  }

  console.log(`Found ${postsToSchedule.length} post(s) to schedule\n`);

  for (const post of postsToSchedule) {
    let scheduleTime;
    if (post.scheduledFor) {
      scheduleTime = {
        dateTime: post.scheduledFor,
        timezone: CONFIG.timezone
      };
    } else {
      scheduleTime = getNextScheduleTime(scheduledTimes);
    }
    scheduledTimes.push(scheduleTime.dateTime);

    const validation = validatePost(post);
    const images = post.images || (post.image ? [post.image] : []);

    // Check for duplicate images
    const imageCheck = checkUsedImages(images, queue.usedImages || {});

    console.log('---');
    console.log(`Post ID: ${post.id}`);

    if (imageCheck.duplicates.length > 0) {
      console.log(`\n⚠️  WARNING: ${imageCheck.duplicates.length} image(s) already used in ${imageCheck.year}:`);
      imageCheck.duplicates.forEach(img => {
        const shortUrl = img.split('/').pop();
        console.log(`   - ${shortUrl}`);
      });

      if (imageCheck.fresh.length === 0) {
        console.log('\nSKIPPING - All images have been used this year.');
        console.log('Use different images or wait until next year.\n');
        continue;
      }
    }

    const formatDisplay = validation.format === 'carousel'
      ? `CAROUSEL (${validation.imageCount} slides)`
      : `single image`;
    console.log(`Type: ${post.type || 'general'} | Format: ${formatDisplay} | Length: ${validation.lengthCategory}`);

    console.log(`\nHook (first line):`);
    console.log(`  "${post.caption.split('\n')[0]}"`);
    console.log(`  (${post.caption.split('\n')[0].length}/125 chars)`);
    console.log(`\nCaption preview:\n${post.caption.substring(0, 150)}...`);
    console.log(`\nHashtags (${post.hashtags.length}): ${post.hashtags.join(' ')}`);

    if (validation.format === 'carousel') {
      console.log(`\nCarousel slides (${validation.imageCount}):`);
      images.forEach((img, i) => {
        const imgPreview = img.length > 50 ? img.substring(0, 50) + '...' : img;
        console.log(`  ${i + 1}. ${imgPreview}`);
      });
    } else {
      console.log(`Images: ${images.length} file(s)`);
    }

    if (validation.warnings.length > 0) {
      console.log('\nWarnings:');
      validation.warnings.forEach(w => console.log(`   - ${w}`));
    }
    if (validation.suggestions.length > 0) {
      console.log('\nSuggestions:');
      validation.suggestions.forEach(s => console.log(`   - ${s}`));
    }

    if (dryRun) {
      console.log(`\nWould schedule for: ${scheduleTime.dateTime} ${scheduleTime.timezone}`);
      console.log('Dry run - skipped\n');
    } else {
      if (validation.urlImages.length === 0) {
        console.log('\nSkipping - no valid image URLs.');
        console.log('   Upload images to Cloudinary first, then update queue with URLs.\n');
        continue;
      }

      const result = await schedulePost(post, scheduleTime, validation.urlImages);

      if (result.success) {
        const postIndex = queue.queue.findIndex(p => p.id === post.id);
        queue.queue[postIndex].status = 'scheduled';
        queue.queue[postIndex].scheduledFor = scheduleTime.dateTime;
        queue.queue[postIndex].metricoolResponse = result.result;

        queue.posted.push(queue.queue[postIndex]);
        queue.queue.splice(postIndex, 1);

        queue.metadata.totalPosted++;

        // Track used images to prevent reuse this year
        trackUsedImages(queue, validation.urlImages);
        console.log(`Tracked ${validation.urlImages.length} image(s) as used in ${new Date().getFullYear()}`);
      }
    }
  }

  if (!dryRun) {
    saveQueue(queue);
    console.log('\nQueue updated');
  }

  console.log('\nDone!');
}

module.exports = { generateHashtags, formatCaption };

if (require.main === module) {
  main().catch(console.error);
}
