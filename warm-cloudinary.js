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

// Transformations to pre-generate (matching what your site uses)
const EAGER_TRANSFORMS = [
  { width: 640, crop: 'scale', quality: 'auto', format: 'avif' },
  { width: 750, crop: 'scale', quality: 'auto', format: 'avif' },
  { width: 1080, crop: 'scale', quality: 'auto', format: 'avif' },
  { width: 1200, crop: 'scale', quality: 'auto', format: 'avif' },
  { width: 1920, crop: 'scale', quality: 'auto', format: 'avif' },
  // Also generate WebP for browsers that don't support AVIF
  { width: 640, crop: 'scale', quality: 'auto', format: 'webp' },
  { width: 750, crop: 'scale', quality: 'auto', format: 'webp' },
  { width: 1080, crop: 'scale', quality: 'auto', format: 'webp' },
  { width: 1200, crop: 'scale', quality: 'auto', format: 'webp' },
  { width: 1920, crop: 'scale', quality: 'auto', format: 'webp' },
];

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
    await cloudinary.uploader.explicit(publicId, {
      type: 'upload',
      eager: EAGER_TRANSFORMS,
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
  console.log('🔥 Cloudinary Image Warmer');
  console.log('==========================\n');

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
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    } catch (error) {
      console.error(`   Error scanning ${folder}: ${error.message}`);
    }
  }

  console.log('\n==========================');
  console.log(`🏁 Complete!`);
  console.log(`   Total: ${totalImages}`);
  console.log(`   Success: ${successCount}`);
  console.log(`   Failed: ${failCount}`);
  console.log(`\n   Transformations generated: ${successCount * EAGER_TRANSFORMS.length}`);
}

main();
