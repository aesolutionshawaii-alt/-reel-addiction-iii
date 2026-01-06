const cloudinary = require('cloudinary').v2;

// Configure with your credentials
cloudinary.config({
  cloud_name: 'dmu9szrap',
  api_key: '778742796577292',
  api_secret: 'msHh6qisvKfowMV-Z8tpzliLYnA'
});

// Folders to scan for images
const FOLDERS = [
  'charters',
  'catch', 
  'images',
  'species',
  'vessel'
];

// Transformations to match what Next.js/next-cloudinary actually requests
// Format: c_limit,w_WIDTH/f_avif/q_auto (chained, not combined)
const WIDTHS = [640, 750, 828, 1080, 1200, 1920];

async function getAllImages(folder) {
  const images = [];
  let nextCursor = null;

  do {
    const result = await cloudinary.api.resources({
      type: 'upload',
      prefix: folder,
      max_results: 500,
      next_cursor: nextCursor
    });

    images.push(...result.resources);
    nextCursor = result.next_cursor;
  } while (nextCursor);

  return images;
}

async function warmImage(publicId) {
  try {
    // Build eager transformations to match Next.js URL format exactly
    // Next.js requests: c_limit,w_1920/f_avif/q_auto
    const eagerTransforms = WIDTHS.flatMap(width => [
      // AVIF format (most browsers)
      { 
        raw_transformation: `c_limit,w_${width}/f_avif/q_auto`
      },
      // WebP fallback
      { 
        raw_transformation: `c_limit,w_${width}/f_webp/q_auto`
      },
      // Auto format (let Cloudinary decide)
      {
        raw_transformation: `c_limit,w_${width}/f_auto/q_auto`
      }
    ]);

    await cloudinary.uploader.explicit(publicId, {
      type: 'upload',
      eager: eagerTransforms,
      eager_async: true
    });
    console.log(`✓ Warmed: ${publicId}`);
    return true;
  } catch (error) {
    console.error(`✗ Failed: ${publicId} - ${error.message}`);
    return false;
  }
}

async function main() {
  console.log('🔥 Cloudinary Image Warmer (Next.js Format)');
  console.log('============================================\n');

  let totalImages = 0;
  let successCount = 0;
  let failCount = 0;

  for (const folder of FOLDERS) {
    console.log(`\n📁 Scanning folder: ${folder}`);
    
    try {
      const images = await getAllImages(folder);
      console.log(`   Found ${images.length} images\n`);

      for (const image of images) {
        totalImages++;
        const success = await warmImage(image.public_id);
        if (success) successCount++;
        else failCount++;
        
        // Small delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 200));
      }
    } catch (error) {
      console.error(`   Error scanning ${folder}: ${error.message}`);
    }
  }

  console.log('\n============================================');
  console.log(`🏁 Complete!`);
  console.log(`   Total images: ${totalImages}`);
  console.log(`   Success: ${successCount}`);
  console.log(`   Failed: ${failCount}`);
  console.log(`   Transformations per image: ${WIDTHS.length * 3}`);
  console.log(`   Total transformations: ${successCount * WIDTHS.length * 3}`);
}

main();
