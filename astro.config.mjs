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
      filter: (page) => {
        // Exclude pages that should not be indexed
        const excludePatterns = [
          '/404',
          '/thank-you',
          '/offline',
          '/private/'
        ];
        return !excludePatterns.some(pattern => page.includes(pattern));
      },
      serialize: (item) => {
        // Set custom priorities and changefreq based on page type
        if (item.url.endsWith('/')) {
          // Homepage
          if (item.url === 'https://onlinetranslation.ae/') {
            item.priority = 1.0;
            item.changefreq = 'daily';
          }
          // Service hub pages
          else if (
            item.url.includes('/services/') ||
            item.url.includes('/legal/') ||
            item.url.includes('/personal/') ||
            item.url.includes('/specialized/')
          ) {
            item.priority = 0.9;
            item.changefreq = 'weekly';
          }
          // Location pages
          else if (item.url.includes('/locations/')) {
            item.priority = 0.85;
            item.changefreq = 'monthly';
          }
          // Blog posts
          else if (item.url.includes('/blog/')) {
            item.priority = 0.7;
            item.changefreq = 'monthly';
          }
          // Resource pages
          else if (item.url.includes('/resources/')) {
            item.priority = 0.75;
            item.changefreq = 'monthly';
          }
          // About pages
          else if (item.url.includes('/about/')) {
            item.priority = 0.6;
            item.changefreq = 'monthly';
          }
          // Language pages
          else if (
            item.url.includes('/hindi/') ||
            item.url.includes('/urdu/') ||
            item.url.includes('/bengali/') ||
            item.url.includes('/tagalog/') ||
            item.url.includes('/malayalam/') ||
            item.url.includes('/chinese/') ||
            item.url.includes('/french/') ||
            item.url.includes('/russian/') ||
            item.url.includes('/farsi/') ||
            item.url.includes('/عربي/')
          ) {
            item.priority = 0.8;
            item.changefreq = 'monthly';
          }
          // Other pages
          else {
            item.priority = 0.7;
            item.changefreq = 'monthly';
          }
        }
        return item;
      }
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
