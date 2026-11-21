// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://theoutfits.app',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'cs'],
    routing: { prefixDefaultLocale: false },
  },
});
