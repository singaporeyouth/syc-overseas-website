import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// SITE_URL is the production custom domain. Override at build time via env if needed:
//   SITE_URL=https://www.singaporeyouth.com npm run build
const site = process.env.SITE_URL || 'https://www.singaporeyouth.com';

export default defineConfig({
  site,
  // If deploying to a GitHub Pages *project* site (https://<user>.github.io/<repo>/),
  // set base: '/<repo>/' uncommented and rebuild. For a custom domain (apex/www) keep base: '/'.
  // base: '/syc-website/',
  base: '/',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [
    sitemap({
      // All six languages (en/zh/fr/ru/ja/ko) are published and indexable.
      // No filter: every localized page is included in the sitemap.
    }),
  ],
});
