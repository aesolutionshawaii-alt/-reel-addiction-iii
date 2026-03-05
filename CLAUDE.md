# Reel Addiction III - Project Context

Premium fishing charter website for Captain JR, Ko Olina Marina, Oahu.

## Design Principles
This is a premium charter service - the site should feel high-end, not like a typical fishing boat website. Everything should be thoughtful, modern, and elegant.

- Clean layouts with breathing room
- Smooth transitions and subtle animations
- Professional typography (Outfit font)
- Dark/ocean aesthetic where appropriate
- Mobile-first but polished on all devices
- No cluttered UI or generic patterns

When in doubt, lean toward understated and refined over flashy.

## Stack
- Next.js 14 (App Router)
- Tailwind CSS
- Cloudinary for image optimization
- HLS video streaming for charter cards
- Deployed on Vercel

## Critical: Do Not Modify Without Re-warming

### CloudinaryImage.tsx
The component uses default CldImage settings generating URLs in format: `c_limit,w_[WIDTH]/f_avif/q_auto`

If you add custom `crop`, `quality`, `format`, or other transforms, the URL format changes and pre-warmed images won't match. This causes 2-5 second load times on first visit.

### next.config.js deviceSizes
```js
deviceSizes: [640, 750, 828, 1080, 1200, 1920]
```
Don't add larger sizes without updating the warming script to match.

### CharterSection.tsx
Achieved 16MB page load after extensive debugging. This component is fragile. CharterSectionV2 exists but doesn't work well - stick with V1.

## CDN Warming

Script: `warm-cloudinary.js` in project root

**How it works:**
- Calls Cloudinary's Explicit API to pre-generate all image sizes
- Transformations stored permanently as "derived assets"
- URL format: `c_limit,w_[WIDTH]/f_avif/q_auto`
- Pre-warmed sizes: 640, 750, 828, 1080, 1200, 1920px
- Formats: AVIF, WebP, Auto
- 18 transformations per image (6 sizes × 3 formats)

**Current setup (Jan 2026):** 48 images, 864 total transformations, ~3.36% of free tier

**When to run:**
- After adding new images to Cloudinary
- After bulk uploads
- Before demos or launches

**Scanned folders:** charters, catch, images, species, vessel

**Note:** The `videos` folder exists in Cloudinary but is NOT in the warming script - videos don't use the same image transformation warming.

**If you create a new Cloudinary folder:** Add it to the `FOLDERS` array in warm-cloudinary.js

**Health check:** Fresh incognito > DevTools Network > Filter `res.cloudinary.com` > Wait time (TTFB) should be under 150ms. Over 300ms = transformation mismatch.

**If you must change CloudinaryImage.tsx:**
1. Check what URL format Next.js is now requesting (Network tab)
2. Update warming script's `raw_transformation` to match exactly
3. Run the warming script
4. Test in fresh incognito

## Navigation Structure
- Home (`/`)
- About (`/about`)
- Fish (`/fish`) - with subpages for 6 species
- Charters (`/charters`)
- Gallery (`/gallery`)
- Contact (`/contact`)

## Route Structure
```
src/app/
├── page.tsx (home)
├── about/
├── contact/
├── gallery/
├── catch/
├── vessel/
├── studio/
├── custom/ (redirected from /private-charter)
├── charters/
│   ├── page.tsx (index)
│   ├── 3-4-day/
│   ├── full-day/
│   └── extravaganza/
└── fish/
    ├── page.tsx (index)
    └── [slug]/ (dynamic - ahi, aku, mahi-mahi, ono, pacific-blue-marlin, striped-marlin)
```

## SEO URL Migration

The site is migrating from Squarespace. Navigation and routes are structured to match the existing indexed URLs so we don't lose SEO juice.

**Redirect in next.config.js:**
```js
async redirects() {
  return [
    {
      source: '/private-charter',
      destination: '/custom',
      permanent: true,
    },
  ]
}
```

**SEO-Critical URLs (from Google crawl - must work):**
- `/`, `/charters`, `/about`, `/contact`, `/gallery`
- `/fish`, `/fish/ahi`, `/fish/mahi-mahi`, `/fish/pacific-blue-marlin`
- `/private-charter` → redirect to `/custom`

Don't change these routes without considering SEO impact. These URLs are already indexed by Google.

## Content Management

**Sanity CMS is ONLY for the Recent Catches section.** 

All other images on the site are managed through Cloudinary directly. Don't assume Sanity controls site-wide content - it's a single-purpose integration for the catch gallery that the client can update themselves.

- Recent Catches: Sanity CMS
- Everything else (hero, charters, fish, vessel, etc.): Cloudinary

## Videos
**Desktop videos:** Cloudinary CDN (better global delivery)
- URL pattern: `https://res.cloudinary.com/dmu9szrap/video/upload/q_auto/videos/[name].mp4`
- Files: hero, charter-34day, charter-fullday, charter-extravaganza, charter-custom

**Mobile videos:** Local HLS streams
- Location: `/public/videos/hls/`
- HLS streams optimized to 1.9 Mbps
- Lazy-load via Intersection Observer

## SpeciesGrid Component
- On `/fish` page: Cards link to `/fish/{slug}` (species data has slugs)
- On charter pages: Cards display only, no navigation (charter data has no slugs)
- Do NOT add modals back - links are better for SEO

## Sitemap
Location: `/public/sitemap.xml` (manually maintained)
- When adding new pages, update sitemap manually
- Currently 19 pages indexed
- Resubmit in GSC after major changes

## Fish Species Data
Shared data file: `src/data/species.ts`
Species: ahi, aku, mahi-mahi, ono, pacific-blue-marlin, striped-marlin
Each has: name, hawaiianName, season, image, description, techniques, size, hawaiiFact

## Cloudinary Credentials
- Cloud name: dmu9szrap
- Folders: charters, catch, images, species, vessel, videos

## Common Tasks

### Adding a new image
1. Upload to appropriate Cloudinary folder
2. Run `node warm-cloudinary.js`
3. Use in component: `<CloudinaryImage src="folder/image-name" ... />`

### Adding a new Cloudinary folder
1. Create folder in Cloudinary dashboard
2. Add folder name to `FOLDERS` array in `warm-cloudinary.js`
3. Run the warming script

### Testing performance
Always test on production (Vercel), not localhost. Dev mode is slow and misleading.

## Instagram Posting

Schedule posts to Instagram via Metricool.

### Commands
```bash
reel-post                      # Schedule all pending posts
reel-post --dry-run            # Preview without posting
reel-post --post-id=ig-001     # Schedule specific post
reel-post --generate-hashtags  # Regenerate hashtags
```

Or use npm:
```bash
npm run instagram              # Schedule all pending
npm run instagram:dry          # Dry run
npm run instagram:hashtags     # Regenerate hashtags
```

### Post Queue
Posts are stored in `content/output/instagram-posts-queue.json`. Each post needs:
- `id` - Unique identifier (e.g., "ig-001")
- `caption` - Post text (hook must be under 125 chars)
- `hashtags` - Array of 3-5 hashtags (auto-generated or manual)
- `images` - Array of public URLs (Cloudinary)
- `type` - Content type (catch, charter, lifestyle, etc.)
- `status` - "pending_review" or "approved"

### Image Workflow
1. Upload images to Cloudinary: `mcp__cloudinary__upload-asset`
2. Copy the `secure_url` from the response
3. Add URL to the post's `images` array
4. Run `reel-post` to schedule

### Creating Posts from New Images (IMPORTANT)

**DO NOT batch-view images then write posts from memory.** You WILL mix up URLs.

**Correct process:**
1. View each image with the Read tool
2. Immediately create a catalog entry:
   ```
   sah8yolzpgjgmqeccxsh.jpg → blue marlin jumping, side angle
   fagfl2mnmkgik9v4lp3n.jpg → mahi-mahi on gaff, bright yellow
   nyuar6bxecv9ihbxvsek.jpg → ahi on deck, red meat visible
   ```
3. Build posts by pulling URLs from your catalog based on content match
4. Never guess which URL is which - refer back to catalog

**Image tracking:** The queue tracks `usedImages` by year. Script will warn/skip if you try to reuse an image within the same calendar year.

### Metricool Credentials
- Blog ID: 2588722
- User ID: 2101489
- Config: `content/config/.env`

### Hashtag Strategy
Auto-generated based on content:
- Brand: #ReelAddictionIII, #CaptainJR
- Species: #Ahi, #MarlinFishing, #MahiMahi, #Ono
- Location: #HawaiiFishing, #Oahu, #KoOlina
- Lifestyle: #DeepSeaFishing, #TightLines, #FishingLife

## Dev Commands
```bash
npm run dev          # localhost:3000
npm run build        # check for errors before push
node warm-cloudinary.js  # pre-warm CDN
```

## Deploy
Push to main branch triggers Vercel deploy automatically.

## Notes
- Vercel is case-sensitive for filenames (Mac is not)
- Always hard refresh (Cmd+Shift+R) to test changes
- CharterSectionV2 exists but is broken - ignore it

## Troubleshooting

### Testing CDN Warming (Performance Verification)

**Method:**
1. Open fresh Incognito/Private window (critical - no cache)
2. Open DevTools > Network tab
3. Load the production URL (not localhost)
4. Filter by `res.cloudinary.com`
5. Look at the "Wait" column (TTFB - Time To First Byte)

**Baselines:**
- Healthy (warmed): TTFB under 150ms
- Problem (cold/mismatched): TTFB over 300ms, often 2-5 seconds

**If TTFB is high:**
1. Check if image is in a scanned folder
2. Run `node warm-cloudinary.js`
3. Compare the URL format in Network tab to what the warming script generates
4. If formats don't match, update the script's `raw_transformation`

### Safari Web Inspector Data Bloat (RED HERRING)
When testing mobile via Safari's Develop menu (phone connected to Mac), the Network tab will show massively inflated data transfer numbers - sometimes 3-4x the actual size. This is a Safari debugging artifact, NOT a real performance issue.

**We wasted a full day chasing this.**

To get accurate mobile performance numbers:
- Use Chrome DevTools device emulation
- Use Vercel Analytics
- Test on actual production URL, not localhost

Don't trust Safari Web Inspector's data transfer numbers when debugging connected iOS devices.
