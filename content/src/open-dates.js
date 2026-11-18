#!/usr/bin/env node
/**
 * Open-date posts from FareHarbor availability. Read-only, no login, no API key.
 *
 *   node content/src/open-dates.js [--days 21] [--from 2026-11-18]
 *
 * Reads the same public endpoints the FareHarbor booking widget uses, finds every bookable
 * private-charter date in the window, and writes:
 *   content/output/open-dates/open-dates-<from>.json   the raw list
 *   content/output/open-dates/open-dates-<from>.md     a story frame, a Facebook group post and a
 *                                                       Google Business Profile post for each date
 * Then render story frames: python3 content/src/story-frame.py content/output/open-dates/open-dates-<from>.json
 *
 * Rules baked in: no phone numbers or URLs in GBP posts (Google rejects them; the button carries the
 * link). No em dashes. Dates with the HOLIDAY window note are only Nov 27 to 30, 2026.
 */
const fs = require('fs');
const path = require('path');

const SHORTNAME = 'reeladdictioniii';
const API = `https://fareharbor.com/api/v1/companies/${SHORTNAME}`;
const H = { 'User-Agent': 'Mozilla/5.0 (Macintosh) AppleWebKit/605.1.15 Safari/605.1.15', Accept: 'application/json', Referer: `https://fareharbor.com/embeds/book/${SHORTNAME}/items/` };
const SITE = 'https://reeladdictioniii.com';
const PHONE = '(808) 867-FISH';
const TRIPS = [
  { name: '3/4 Day', price: 3095, hours: '5 to 6 hours' },
  { name: 'Full Day', price: 3495, hours: '8 to 10 hours' },
  { name: 'Extravaganza', price: 3800, hours: 'sunrise to sunset' },
];
const HOLIDAY = { start: '2026-11-27', end: '2026-11-30', code: 'HOLIDAY', prices: { '3/4 Day': 2495, 'Full Day': 2995, Extravaganza: 3300 } };

const args = process.argv.slice(2);
const opt = (k, d) => { const i = args.indexOf(k); return i === -1 ? d : args[i + 1]; };
const DAYS = parseInt(opt('--days', '21'), 10);
const FROM = opt('--from', new Date(Date.now() - 10 * 3600e3).toISOString().slice(0, 10)); // today in HST

const money = (n) => '$' + n.toLocaleString('en-US');
const get = async (u) => { const r = await fetch(u, { headers: H }); if (!r.ok) throw new Error(`${r.status} ${u}`); return r.json(); };
const longDate = (iso) => new Date(iso + 'T12:00:00-10:00').toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', timeZone: 'Pacific/Honolulu' });
const shortDate = (iso) => new Date(iso + 'T12:00:00-10:00').toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', timeZone: 'Pacific/Honolulu' });
const time12 = (t) => { const [h, m] = t.split(':').map(Number); const ap = h >= 12 ? 'PM' : 'AM'; return `${((h + 11) % 12) + 1}:${String(m).padStart(2, '0')} ${ap}`; };
const inHoliday = (iso) => iso >= HOLIDAY.start && iso <= HOLIDAY.end;

(async () => {
  const items = (await get(`${API}/items/`)).items.filter((i) => !i.is_archived);
  const start = new Date(FROM + 'T00:00:00Z');
  const open = [];
  for (const item of items) {
    for (let d = 0; d < DAYS; d++) {
      const iso = new Date(start.getTime() + d * 86400e3).toISOString().slice(0, 10);
      let avs = [];
      try { avs = (await get(`${API}/items/${item.pk}/availabilities/date/${iso}/`)).availabilities; } catch (e) { console.error('  skip', iso, e.message); continue; }
      for (const a of avs) {
        // FareHarbor marks most open days "auto" (opens on first booking); "open" is a manually opened day.
        if (!['open', 'auto'].includes(a.status) || !a.is_bookable || a.is_sold_out) continue;
        open.push({
          date: iso,
          time: a.start_at.slice(11, 16),
          item: item.name,
          itemId: item.pk,
          availabilityId: a.pk,
          bookUrl: `https://fareharbor.com/embeds/book/${SHORTNAME}/items/${item.pk}/availability/${a.pk}/book/?full-items=yes`,
          holiday: inHoliday(iso),
        });
      }
    }
  }
  open.sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time));

  // verify the hard-coded prices against FareHarbor's own price preview
  try {
    const pp = await get(`https://fareharbor.com/api/embed/${SHORTNAME}/price-preview/per-item/v2/?item_pks=${items.map((i) => i.pk).join(',')}`);
    for (const it of pp.items || []) {
      const low = it.price.low / 100, high = it.price.high / 100;
      const ours = TRIPS.map((t) => t.price);
      if (low !== Math.min(...ours) || high !== Math.max(...ours)) console.error(`PRICE CHECK: FareHarbor shows ${money(low)} to ${money(high)} for item ${it.id}; TRIPS in this script say ${money(Math.min(...ours))} to ${money(Math.max(...ours))}. Update TRIPS before posting.`);
    }
  } catch (e) { console.error('price preview unavailable:', e.message); }

  const outDir = path.join(__dirname, '..', 'output', 'open-dates');
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, `open-dates-${FROM}.json`), JSON.stringify({ generated: new Date().toISOString(), from: FROM, days: DAYS, open }, null, 2));

  const priceLine = (holiday) => TRIPS.map((t) => `${t.name} ${money(holiday ? HOLIDAY.prices[t.name] : t.price)}`).join(', ');
  let md = `# Open dates, ${longDate(FROM)} + ${DAYS} days\n\nGenerated ${new Date().toLocaleString('en-US', { timeZone: 'Pacific/Honolulu' })} HST from FareHarbor availability. ${open.length} open departure${open.length === 1 ? '' : 's'}.\n\n`;
  md += `Open: ${open.map((o) => shortDate(o.date)).join(', ') || 'none'}\n\n---\n\n`;
  for (const o of open) {
    const ld = longDate(o.date), t = time12(o.time);
    const hol = o.holiday ? ` Book during Black Friday through Cyber Monday and pay last year's price with code ${HOLIDAY.code}: ${priceLine(true)}.` : '';
    md += `## ${ld}, ${t}\n\n`;
    md += `**Story frame text** (render: story-frame.py)\n\n${ld.toUpperCase()}\nOPEN CHARTER\nDeparts Ko Olina ${t}. Up to 6 guests.\nBook at ReelAddictionIII.com\n\n`;
    md += `**Facebook group post**\n\n${ld} is open on Reel Addiction III. Private charter for up to 6 guests, departing Ko Olina Marina at ${t}. ${priceLine(false)}, rods, reels, tackle and bait included.${hol} Book at ${SITE}/charters or call ${PHONE}.\n\n`;
    md += `**Google Business Profile post** (no phone, no URL in the body; set the button to Book with the link below)\n\n${ld} is open. Private charter for up to 6 guests with Captain JR, departing Ko Olina Marina at ${t}. ${o.holiday ? `Black Friday weekend pricing applies with code ${HOLIDAY.code}.` : 'Winter on the west side is ono and striped marlin season.'}\n\nButton link: ${o.bookUrl}\n\n---\n\n`;
  }
  if (open.length > 1) {
    md += `## This week roundup (Facebook / Instagram caption)\n\nOpen dates on Reel Addiction III: ${open.map((o) => shortDate(o.date)).join(', ')}. Private charters for up to 6 guests out of Ko Olina Marina, ${time12(open[0].time)} departure. ${priceLine(false)}. Book at ${SITE}/charters.\n`;
  }
  fs.writeFileSync(path.join(outDir, `open-dates-${FROM}.md`), md);
  console.log(`${open.length} open departures -> ${path.relative(process.cwd(), outDir)}/open-dates-${FROM}.{json,md}`);
  for (const o of open) console.log(`  ${o.date} ${o.time} ${o.item}${o.holiday ? '  (holiday window)' : ''}`);
})().catch((e) => { console.error('ERR', e.message); process.exit(1); });
