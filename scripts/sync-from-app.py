#!/usr/bin/env python3
"""Regenerate the site's images from the outfits-app repo.

Every file keeps its name from the app repo, only the extension changes:

  ../outfits-app/assets/icon/app_icon.png          -> public/favicon.ico, icon.png,
                                                      apple-touch-icon.png, img/icon-160.webp
  ../outfits-app/graphics/clothes/<name>.PNG       -> public/clothes/<name>.webp
  ../outfits-app/graphics/screenshots/iphone/<name>.png
                                                   -> public/screenshots/<name>.webp

To change an illustration or screenshot, replace it in the app repo and run
`npm run sync:app`. Needs Python with Pillow.

Usage: python3 scripts/sync-from-app.py [path/to/outfits-app]
"""
import sys
from pathlib import Path

from PIL import Image, ImageChops, ImageDraw

ROOT = Path(__file__).resolve().parent.parent
APP = Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT.parent / 'outfits-app'
PUBLIC = ROOT / 'public'

# Retouched by hand for the site (the cut-off "Times worn" list and the +
# button are removed), so they're not regenerated. Delete a name here to
# take that screenshot straight from the app repo again.
RETOUCHED = {'en_screenshot_3', 'cs_screenshot_3'}


def quantize(path: Path) -> None:
    # The icon fits a 256-color palette: ~85 % smaller, visually identical.
    Image.open(path).convert('RGBA').quantize(
        256, method=Image.Quantize.FASTOCTREE, dither=Image.Dither.NONE
    ).save(path, optimize=True)


def icons() -> None:
    im = Image.open(APP / 'assets/icon/app_icon.png').convert('RGBA')
    size, k = im.size[0], 4
    # Rounded like the home-screen icon; mask drawn at 4x for smooth edges.
    mask = Image.new('L', (size * k, size * k), 0)
    ImageDraw.Draw(mask).rounded_rectangle(
        (0, 0, size * k - 1, size * k - 1), radius=int(size * k * 0.22), fill=255
    )
    rounded = im.copy()
    rounded.putalpha(mask.resize((size, size), Image.LANCZOS))
    rounded.save(PUBLIC / 'favicon.ico', sizes=[(16, 16), (32, 32), (48, 48)])
    rounded.resize((192, 192), Image.LANCZOS).save(PUBLIC / 'icon.png')
    quantize(PUBLIC / 'icon.png')
    # iOS rounds the corners itself, so it gets the plain square.
    im.convert('RGB').resize((180, 180), Image.LANCZOS).save(PUBLIC / 'apple-touch-icon.png')
    quantize(PUBLIC / 'apple-touch-icon.png')
    # Header, footer and download box (rounded in CSS).
    (PUBLIC / 'img').mkdir(exist_ok=True)
    im.convert('RGB').resize((160, 160), Image.LANCZOS).save(
        PUBLIC / 'img/icon-160.webp', quality=88, method=6
    )
    print('icons')


def clothes() -> None:
    out = PUBLIC / 'clothes'
    out.mkdir(exist_ok=True)
    for src in sorted((APP / 'graphics/clothes').glob('*.[pP][nN][gG]')):
        im = Image.open(src).convert('RGBA')
        white = Image.new('RGBA', im.size, (255, 255, 255, 255))
        white.alpha_composite(im)
        im = white.convert('RGB')
        # Crop to the garment, then center it at 80 % of a white square.
        ink = ImageChops.difference(im, Image.new('RGB', im.size, (255, 255, 255)))
        im = im.crop(ink.convert('L').point(lambda v: 255 if v > 12 else 0).getbbox())
        w, h = im.size
        side = int(max(w, h) / 0.8)
        square = Image.new('RGB', (side, side), (255, 255, 255))
        square.paste(im, ((side - w) // 2, (side - h) // 2))
        square.resize((480, 480), Image.LANCZOS).save(out / f'{src.stem}.webp', quality=85, method=6)
        print('clothes/', src.stem)


def screenshots() -> None:
    out = PUBLIC / 'screenshots'
    out.mkdir(exist_ok=True)
    for src in sorted((APP / 'graphics/screenshots/iphone').glob('*.png')):
        if src.stem in RETOUCHED:
            print('screenshots/', src.stem, '(retouched, kept)')
            continue
        Image.open(src).convert('RGB').resize((660, 1434), Image.LANCZOS).save(
            out / f'{src.stem}.webp', quality=80, method=6
        )
        print('screenshots/', src.stem)


if __name__ == '__main__':
    if not APP.is_dir():
        sys.exit(f'outfits-app not found at {APP}')
    icons()
    clothes()
    screenshots()
