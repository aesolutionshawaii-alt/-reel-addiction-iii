#!/usr/bin/env python3
"""Render 1080x1920 Instagram/Facebook story frames from real photos with typeset text.

  python3 content/src/story-frame.py content/output/open-dates/open-dates-2026-11-18.json
  python3 content/src/story-frame.py --lines "BLACK FRIDAY" "LAST YEAR'S PRICES" --sub "Nov 27 to 30. Code HOLIDAY." --cta "ReelAddictionIII.com" --bg boat --out content/output/stories/bf-announce.png

Photos come from content/assets/story-bg-*.jpg (real catch photos). Fonts are Barlow (OFL) in
content/assets/fonts. No vector decoration; text over a darkened photo only.
"""
import json, os, sys, argparse
from PIL import Image, ImageDraw, ImageFont, ImageFilter

ROOT = os.path.join(os.path.dirname(__file__), '..')
FONTS = os.path.join(ROOT, 'assets', 'fonts')
W, H = 1080, 1920
NAVY = (8, 44, 64)
LIME = (227, 241, 125)
WHITE = (255, 255, 255)


PHOTO_H = int(H * 0.56)


def load_bg(name):
    """Photo fills the top 56% (cover crop, faces kept); solid navy panel below carries the text."""
    p = os.path.join(ROOT, 'assets', f'story-bg-{name}.jpg')
    im = Image.open(p).convert('RGB')
    scale = max(W / im.width, PHOTO_H / im.height)
    im = im.resize((round(im.width * scale), round(im.height * scale)), Image.LANCZOS)
    left, top = (im.width - W) // 2, (im.height - PHOTO_H) // 2
    im = im.crop((left, top, left + W, top + PHOTO_H))
    canvas = Image.new('RGB', (W, H), NAVY)
    canvas.paste(im, (0, 0))
    fade = 90
    grad = Image.new('L', (W, fade))
    for y in range(fade):
        for x in range(0, W, W):
            pass
    for y in range(fade):
        grad.paste(int(255 * y / fade), (0, y, W, y + 1))
    canvas.paste(Image.new('RGB', (W, fade), NAVY), (0, PHOTO_H - fade), grad)
    return canvas


def font(name, size):
    return ImageFont.truetype(os.path.join(FONTS, name), size)


def fit(draw, text, fname, size, max_w, min_size=60):
    while size > min_size:
        f = font(fname, size)
        if draw.textlength(text, font=f) <= max_w:
            return f
        size -= 4
    return font(fname, min_size)


def render(lines, sub, cta, bg, out, kicker='REEL ADDICTION III'):
    im = load_bg(bg)
    d = ImageDraw.Draw(im)
    margin = 80
    y = PHOTO_H + 40
    k = font('Barlow-Bold.ttf', 34)
    x = margin
    for ch in kicker:
        d.text((x, y), ch, font=k, fill=LIME)
        x += d.textlength(ch, font=k) + 5
    y += 70
    for line in lines:
        f = fit(d, line, 'BarlowCondensed-ExtraBold.ttf', 128, W - 2 * margin)
        d.text((margin, y), line, font=f, fill=WHITE)
        y += int(f.size * 0.96)
    y += 30
    if sub:
        f = font('Barlow-SemiBold.ttf', 38)
        # wrap
        words, cur, out_lines = sub.split(), '', []
        for w_ in words:
            t = (cur + ' ' + w_).strip()
            if d.textlength(t, font=f) <= W - 2 * margin:
                cur = t
            else:
                out_lines.append(cur); cur = w_
        out_lines.append(cur)
        for l in out_lines:
            d.text((margin, y), l, font=f, fill=(214, 229, 235))
            y += 50
    if cta:
        y += 28
        f = font('Barlow-Bold.ttf', 40)
        tw = d.textlength(cta, font=f)
        pad = 34
        d.rectangle((margin, y, margin + tw + 2 * pad, y + 96), fill=LIME)
        d.text((margin + pad, y + 24), cta, font=f, fill=NAVY)
    os.makedirs(os.path.dirname(out) or '.', exist_ok=True)
    im.save(out, 'PNG', optimize=True)
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('json', nargs='?', help='open-dates JSON from open-dates.js')
    ap.add_argument('--lines', nargs='+')
    ap.add_argument('--sub', default='')
    ap.add_argument('--cta', default='ReelAddictionIII.com')
    ap.add_argument('--bg', default='dock', choices=['dock', 'marlin', 'boat'])
    ap.add_argument('--out')
    a = ap.parse_args()
    if a.json:
        data = json.load(open(a.json))
        outdir = os.path.join(ROOT, 'output', 'stories', f"open-dates-{data['from']}")
        from datetime import datetime
        bgs = ['dock', 'marlin', 'boat']
        for i, o in enumerate(data['open']):
            dt = datetime.strptime(o['date'], '%Y-%m-%d')
            day = dt.strftime('%A').upper()
            md = dt.strftime('%B %-d').upper()
            hh, mm = map(int, o['time'].split(':'))
            t = f"{(hh + 11) % 12 + 1}:{mm:02d} {'PM' if hh >= 12 else 'AM'}"
            sub = f"Private charter departs Ko Olina {t}. Up to 6 guests."
            if o.get('holiday'):
                sub += " Last year's prices with code HOLIDAY."
            out = os.path.join(outdir, f"{o['date']}.png")
            render([day, md, 'OPEN CHARTER'], sub, 'Book at ReelAddictionIII.com', bgs[i % 3], out)
            print(out)
    elif a.lines:
        print(render(a.lines, a.sub, a.cta, a.bg, a.out or os.path.join(ROOT, 'output', 'stories', 'frame.png')))
    else:
        ap.print_help()


if __name__ == '__main__':
    main()
