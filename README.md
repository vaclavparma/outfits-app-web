# the-outfits-app-web

The website for [Outfits](https://github.com/vaclavparma/outfits-app) at [theoutfits.app](https://theoutfits.app), a local-first wardrobe app for planning outfits: photograph what you own, mix tops, bottoms, shoes and layers into an outfit, save the combinations you like, and keep a diary of what you wore. Everything lives on your device — there's no account, no backend and no network access.

[Google Play](https://play.google.com/store/apps/details?id=eu.oscillator.outfits) · [App Store](https://apps.apple.com/app/id6802752111)

## Pages

English lives at `/`, Czech at `/cs/`.

- `/`, `/cs/` — landing page with a small interactive outfit (tap a piece to swap it)
- `/privacy`, `/cs/privacy` — privacy policy (the Privacy Policy URL for the App Store and Google Play)
- `/support`, `/cs/support` — support and FAQ (the Support URL)

## Tech stack

- [Astro](https://astro.build), building a fully static site with Astro's built-in i18n routing.
- Self-hosted fonts via Fontsource (Inter, IBM Plex Mono) — the site loads nothing from third parties.

## Getting started

Requires Node.js 22.23.4 or newer.

```bash
git clone https://github.com/vaclavparma/the-outfits-app-web.git
cd the-outfits-app-web
npm install
npm run dev
```

The dev server runs at `localhost:4321`.

| Command           | Action                                     |
| :---------------- | :----------------------------------------- |
| `npm run dev`     | Start the local dev server                 |
| `npm run build`   | Build the production site to `./dist/`     |
| `npm run preview` | Preview the build locally before deploying |

### Project structure

```
src/
  site.ts                  # Links, contact email, author, privacy policy date
  i18n.ts                  # All copy (en + cs) and the sample garments for the hero
  styles/global.css        # Colors, type scale, buttons, long-form pages
  layouts/Base.astro       # <head>, header, footer
  components/
    Home.astro             # Landing page sections
    OutfitCanvas.astro     # Interactive outfit in the hero
    Privacy.astro          # Privacy policy (en + cs)
    Support.astro          # Support + FAQ
  pages/                   # Thin routes: index, privacy, support, 404, and cs/
public/
  favicon.ico, icon.png, apple-touch-icon.png
  img/                     # Header icon, Open Graph images (og-en, og-cs)
  clothes/                 # Clothing illustrations, 480 × 480 on white
  screenshots/             # App screenshots, 660 × 1434
scripts/
  sync-from-app.py         # Regenerates the images above from outfits-app
```

### Images

The images come from the [outfits-app](https://github.com/vaclavparma/outfits-app) repo, checked out next to this one, and keep their file names from there — only the extension changes to `.webp`:

| outfits-app                                   | this repo                         |
| :-------------------------------------------- | :-------------------------------- |
| `assets/icon/app_icon.png`                    | `public/favicon.ico`, `icon.png`, `apple-touch-icon.png`, `img/icon-160.webp` |
| `graphics/clothes/<name>.PNG`                 | `public/clothes/<name>.webp`      |
| `graphics/screenshots/iphone/<name>.png`      | `public/screenshots/<name>.webp`  |

To change one, replace it in outfits-app and run (needs Python with Pillow):

```bash
npm run sync:app
```

- Which clothes the hero outfit uses, and in what order, is the `garments` list in `src/i18n.ts`.
- Which screenshot shows which screen is `SCREENSHOTS` in `src/site.ts` (`outfit: 1, diary: 2, …`).
- `en_screenshot_3` and `cs_screenshot_3` (stats) are retouched for the site — the cut-off list and the + button are removed — so the script leaves them alone. Remove them from `RETOUCHED` in the script to take them from the app again.
- The Open Graph images (`img/og-*.png`) were designed separately and aren't generated.

## Deployment (Cloudflare Pages)

1. Cloudflare → Workers & Pages → Create → Pages → Connect to Git → pick this repo.
2. Framework preset: Astro, build command `npm run build`, output directory `dist`.
3. After the first deploy: Custom domains → add `theoutfits.app` (and `www.theoutfits.app`).
4. Email Routing: forward `support@theoutfits.app` to your inbox.

## Contact

support@theoutfits.app

## License

The code is MIT — see [LICENSE](LICENSE).

The clothing illustrations in `public/clothes/` (and visible in the screenshots) are © [lucylens.cz](https://lucylens.cz), all rights reserved. They're not covered by the MIT license and may not be reused without the author's permission.

Fonts (Inter, IBM Plex Mono) are licensed under the [SIL Open Font License 1.1](https://openfontlicense.org/).
