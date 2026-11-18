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
      // Chinese pages are a review draft (zh) and are intentionally excluded from the sitemap
      // until content sign-off. Remove this filter after zh copy is approved for publication.
      filter: (page) => !page.includes('/zh/'),
    }),
  ],
});
