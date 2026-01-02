import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://onlinetranslation.ae',
  output: 'static',
  trailingSlash: 'always',
  compressHTML: true,
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },
  image: {
    // Use Sharp for image optimization (Astro default)
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        limitInputPixels: false,
      },
    },
    // Optimized quality for web
    quality: 80,
    // Generate modern formats
    format: ['webp', 'avif'],
    // Default widths for responsive images
    widths: [400, 800, 1200, 1920],
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
    assets: '_astro',
    // Inline stylesheets smaller than 4KB
    inlineStylesheets: 'auto',
    // Enable CSS code splitting
    cssCodeSplit: true,
  },
  vite: {
    server: {
      host: '0.0.0.0',
      allowedHosts: ['.replit.dev', '.repl.co', 'localhost'],
      hmr: false
    },
    build: {
      // Use esbuild for faster builds
      minify: 'esbuild',
      cssMinify: true,
      // Optimize chunk splitting
      rollupOptions: {
        output: {
          // Manual chunks for better caching
          manualChunks: (id) => {
            // Vendor chunks for third-party libs
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          // Asset file naming for cache busting
          assetFileNames: (assetInfo) => {
            const info = assetInfo.name.split('.');
            const ext = info[info.length - 1];
            if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp|avif/i.test(ext)) {
              return `_astro/[name].[hash][extname]`;
            }
            return `_astro/[name].[hash][extname]`;
          },
          chunkFileNames: '_astro/[name].[hash].js',
          entryFileNames: '_astro/[name].[hash].js',
        }
      },
      // Target modern browsers
      target: 'es2020',
      // Ensure sourcemaps for debugging (disable in prod if needed)
      sourcemap: false,
    },
    // Optimize dependencies
    optimizeDeps: {
      include: ['@vercel/speed-insights', '@vercel/analytics']
    },
    // CSS optimization
    css: {
      devSourcemap: false,
    }
  }
});
