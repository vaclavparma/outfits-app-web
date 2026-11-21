// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { rename, rmdir } from 'node:fs/promises';

// Astro only builds the root 404 as 404.html; /cs/404 comes out as
// cs/404/index.html. Cloudflare Pages serves the nearest 404.html up the
// path, so move it to cs/404.html.
/** @type {import('astro').AstroIntegration} */
const localized404 = {
  name: 'localized-404',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      const from = new URL('cs/404/index.html', dir);
      await rename(from, new URL('cs/404.html', dir));
      await rmdir(new URL('cs/404/', dir));
    },
  },
};

export default defineConfig({
  site: 'https://theoutfits.app',
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'cs'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      filter: (page) => !/\/404\/?$/.test(page),
      i18n: { defaultLocale: 'en', locales: { en: 'en', cs: 'cs' } },
    }),
    localized404,
  ],
});
