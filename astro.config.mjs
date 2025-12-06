import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://onlinetranslation.ae',
  output: 'static',
  server: {
    port: 5000,
    host: true
  },
  build: {
    assets: 'assets'
  },
  vite: {
    server: {
      allowedHosts: 'all',
      hmr: false
    }
  }
});
