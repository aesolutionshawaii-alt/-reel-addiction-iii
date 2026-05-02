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

## Instagram Content Creation

### Workflow (Streamlined)

**IMPORTANT:** Claude cannot reliably identify fish species from images or track which photos have been used. The user must provide this information.

**User provides:**
1. Paste images directly into chat
2. Tell Claude the species for each image (mahi, ahi, aku, ono, marlin, shibi, or "lifestyle/crew")
3. Any context needed (e.g., "sunrise catching live bait", "otaru over 20 lbs")

**Claude handles:**
1. Optimize images with `webimg` (target <500KB)
2. Upload to Cloudinary (`social` folder)
3. Write captions following voice guide
4. Add to queue and schedule via `reel-post`

**Diversity rules (user tracks this):**
- No back-to-back same species
- Max 2 of same species per 7 posts
- Mix types: catch, action, lifestyle, crew

### Voice Guide
**Read `content/voice-guide.md` before writing ANY caption.**

The voice is a knowledgeable captain — NOT a marketing agency, NOT an influencer.

**Banned phrases (script validates):**
- "full send", "full body", "epic", "insane", "fire", "incredible"
- "on fire", "crushing it", "bucket list", "live your best"
- "pure chaos", "game on", "this is why we do this"
- "tag someone", "save this", "the moment", "zero hesitation"

**Every caption must:**
- Correctly identify the fish species (Hawaii names: mahi, ahi, shibi, aku, ono)
- Include something educational (fish behavior, season, technique)
- Sound like a real person
- End with simple CTA ("link in bio")
- NO emojis, NO ALL CAPS

### Technical Steps (Claude runs these)

**Optimize:**
```bash
webimg /path/to/image.jpg
```

**Upload to Cloudinary:**
```bash
mcp-cli call cloudinary/upload-asset '{"upload_request": {"file": "file:///path/to/image.jpg", "folder": "social"}}'
```

**Schedule:**
```bash
reel-post --dry-run    # Preview
reel-post              # Schedule to Metricool
```

### Good Caption Examples

**Mahi Action Shot:**
```
Mahi are known for their spectacular aerial displays and pound for pound they're one of the hardest fighting fish in the ocean. This one came unglued the second it felt the hook — full body out of the water, tail shaking, doing what mahi do best.

Spring mahi season is heating up off the West side of Oahu. The schools are pushing in and when they're on, they're on. Everyone on the boat gets a chance to fight one and the action can be nonstop.

Great fish for families, first-timers, and experienced anglers. They fight hard and they're some of the best eating fish in Hawaii.

Book now before spring dates fill up — link in bio.
```

**Shibi Being Gaffed:**
```
Shibi coming over the rail and the colors on this one were unreal.

Shibi are juvenile yellowfin tuna and one of the best eating fish in Hawaii. When they first come out of the water their colors are electric — deep purples, blues, and bright yellow finlets that you have to see in person to believe. Those colors fade fast so if you want the shot you better be ready.

These fish are built for speed and power. Even at 20-30 pounds they pull hard and make screaming runs that will have your arms burning. They're a blast to catch and even better on the plate — fresh shibi sashimi right off the boat is as good as it gets.

We've been finding them mixed in with the mahi this spring. Book your charter and come put some color in the fish box — link in bio.
```

**Informative Mahi Post:**
```
Mahi mahi are one of the fastest growing fish in the ocean. They can reach over 40 pounds in less than a year and rarely live past five. That rapid growth rate makes them one of the most sustainable offshore fish you can target.

They travel in schools, feed aggressively, and are known for their spectacular jumps when hooked. The colors on a live mahi are unreal — electric blues, greens, and yellows that fade within minutes of leaving the water.

On top of all that they're one of the best eating fish in Hawaii. Light, firm, and versatile whether you grill it, sear it, or eat it raw.

Spring mahi season is here and the schools are showing up off the West side. Book your charter and come see what all the fuss is about — link in bio.
```

**Aku/Otaru (Skipjack Tuna):**
```
Otaru on the gaff. That's a big aku.

Aku is skipjack tuna — locals prize this sashimi and many prefer it over ahi. When they get over 20 pounds we call them otaru, and this one definitely qualifies. These fish fight like crazy for their size, screaming runs and pure power.

That silver-blue body with the stripes on the belly is unmistakable. Fresh aku sashimi right off the boat is one of the best things you can eat in Hawaii. The meat is darker and richer than ahi with a flavor that's hard to describe until you try it.

We find them running with the mahi off the West side. Book your charter — link in bio.
```

### BAD Caption Examples (DO NOT WRITE LIKE THIS)

```
Blue marlin going vertical. Full body. Full send. Full airshow. This is what 300 pounds of adrenaline looks like mid-flight. Save this for your bucket list.
```
**Why it's bad:** Copywriter fragment style. "Full send" is influencer speak. "Save this for your bucket list" is generic. No educational content.

```
AHI SEASON IS ON FIRE! The yellowfin are absolutely crushing it right now - lines screaming, reels smoking, and coolers filling up! 🔥🎣
```
**Why it's bad:** ALL CAPS hype. Emoji spam. Generic excitement words. Sounds like every other fishing page. Doesn't teach anything.

### Post Queue Structure
Posts stored in `content/output/instagram-posts-queue.json`:
```json
{
  "id": "ig-039",
  "caption": "Your caption here...",
  "hashtags": ["#ReelAddictionIII", "#MahiMahi", "#HawaiiFishing", "#KoOlina", "#SpringFishing"],
  "images": ["https://res.cloudinary.com/dmu9szrap/image/upload/v.../social/xxxxx.jpg"],
  "type": "catch",
  "species": "mahi",
  "status": "approved"
}
```

### Metricool Credentials
- Blog ID: 2588722
- User ID: 2101489
- Config: `content/config/.env`

### Hashtag Strategy (5 per post)
- Brand: #ReelAddictionIII, #CaptainJR
- Species: #Ahi, #Aku, #MahiMahi, #Ono, #Shibi, #MarlinFishing, #SkipjackTuna
- Location: #HawaiiFishing, #Oahu, #KoOlina, #WestOahu
- Activity: #DeepSeaFishing, #CharterFishing, #SportFishing
- Seasonal: #SpringFishing, #MahiSeason, #TunaFishing

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
