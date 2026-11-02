// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://sportsperformancepsychology.com',
  compressHTML: true,
  integrations: [sitemap()],
});
