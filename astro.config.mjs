import { defineConfig } from 'astro/config';
import { remarkReadingTime } from './src/core/remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});
