import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://onlinetranslation.ae',
  output: 'static',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) => !page.includes('/404') && !page.includes('/private/')
    })
  ],
  server: {
    port: 5000,
    host: '0.0.0.0'
  },
  build: {
    assets: 'assets'
  },
  vite: {
    server: {
      host: '0.0.0.0',
      allowedHosts: ['.replit.dev', '.repl.co', 'localhost'],
      hmr: false
    }
  }
});
