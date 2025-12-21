import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://onlinetranslation.ae',
  output: 'hybrid',
  adapter: node({
    mode: 'standalone'
  }),
  trailingSlash: 'always',
  compressHTML: true,
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      filter: (page) => !page.includes('/404') && !page.includes('/private/')
    })
  ],
  server: {
    port: 5000,
    host: '0.0.0.0'
  },
  build: {
    assets: 'assets',
    inlineStylesheets: 'auto'
  },
  vite: {
    server: {
      host: '0.0.0.0',
      allowedHosts: ['.replit.dev', '.repl.co', 'localhost'],
      hmr: false
    },
    build: {
      minify: 'esbuild',
      cssMinify: true
    }
  }
});
