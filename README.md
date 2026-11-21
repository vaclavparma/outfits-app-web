# the-outfits-app-web

The website for [Outfits](https://github.com/vaclavparma/outfits-app), a local-first wardrobe app for planning outfits: photograph what you own, mix tops, bottoms, shoes and layers into an outfit, save the combinations you like, and keep a diary of what you wore. Everything lives on your device — there's no account, no backend and no network access.

[Google Play](https://play.google.com/store/apps/details?id=eu.oscillator.outfits&pcampaignid=web_share) · [App Store](https://apps.apple.com/us/app/outfits-app/id6802752111)

## Tech stack

- [Astro](https://astro.build), building a fully static site.

## Getting started

Requires Node.js 22.23.4 or newer.

```bash
git clone https://github.com/vaclavparma/the-outfits-app-web.git
cd the-outfits-app-web
npm install
npm run dev
```

The dev server runs at `localhost:4321`.

### Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm run dev`     | Start the local dev server                   |
| `npm run build`   | Build the production site to `./dist/`       |
| `npm run preview` | Preview the build locally before deploying   |

### Project structure

```
public/
  favicon.ico            # 16/32/48 px, rounded like the home-screen icon
  icon.png               # 192 px PNG icon
  apple-touch-icon.png   # 180 px, square (iOS rounds it itself)
src/
  pages/
    index.astro          # Landing page
```

### Regenerating the icons

The icons are generated from the app's `assets/icon/app_icon.png` (in the [outfits-app](https://github.com/vaclavparma/outfits-app) repo, checked out next to this one). Needs Python with Pillow.

```bash
python3 - <<'EOF'
from PIL import Image, ImageDraw
im = Image.open('../outfits-app/assets/icon/app_icon.png').convert('RGBA')
S, k = im.size[0], 4
mask = Image.new('L', (S * k, S * k), 0)
ImageDraw.Draw(mask).rounded_rectangle((0, 0, S * k - 1, S * k - 1), radius=int(S * k * 0.22), fill=255)
rounded = im.copy()
rounded.putalpha(mask.resize((S, S), Image.LANCZOS))
rounded.save('public/favicon.ico', sizes=[(16, 16), (32, 32), (48, 48)])
rounded.resize((192, 192), Image.LANCZOS).save('public/icon.png')
im.convert('RGB').resize((180, 180), Image.LANCZOS).save('public/apple-touch-icon.png')
for f in ['public/icon.png', 'public/apple-touch-icon.png']:
    Image.open(f).convert('RGBA').quantize(256, method=Image.Quantize.FASTOCTREE,
        dither=Image.Dither.NONE).save(f, optimize=True)
EOF
```

## Contact

support@theoutfits.app

## License

MIT — see [LICENSE](LICENSE).
