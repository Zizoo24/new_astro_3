import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import compress from 'astro-compress';
import inline from '@playform/inline';
import purgecss from 'astro-purgecss';

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
    // 1. Sitemap - generates sitemap.xml
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
    }),

    // 2. Partytown - move third-party scripts to web worker
    partytown({
      config: {
        // Forward dataLayer.push calls to main thread (required for GTM)
        forward: ['dataLayer.push'],
        // Debug mode (disable in production)
        debug: false,
      },
    }),

    // 3. PurgeCSS - remove unused CSS (runs BEFORE inline for proper CSS extraction)
    purgecss({
      // Keep keyframes for animations and View Transitions
      keyframes: false,
      // Keep CSS variables
      variables: false,
      // Safelist dynamic classes that can't be detected statically
      safelist: [
        // FAQ accordion states
        'is-open',
        'is-active',
        'is-visible',
        'is-hidden',
        'is-loading',
        // Navigation states
        'active',
        'open',
        'closed',
        'expanded',
        'collapsed',
        // Mobile menu
        'mobile-menu-open',
        'sidebar-open',
        'overlay-visible',
        // Theme classes
        'theme-light',
        'theme-dark',
        'dark-mode',
        // Animation classes
        'fade-in',
        'fade-out',
        'slide-in',
        'slide-out',
        // View Transitions
        /^astro-/,
        // Font Awesome (dynamic icons)
        /^fa-/,
        /^fas$/,
        /^fab$/,
        /^far$/,
        // RTL classes
        'rtl',
        'rtl-page',
        'ltr',
        // OS-specific classes
        /^os-/,
        // Homepage class
        'homepage',
        'is-homepage',
      ],
    }),

    // 4. Inline - extract and inline critical CSS from purged stylesheets (uses Beasties)
    inline({
      // Beasties options for critical CSS extraction
      Beasties: {
        // Inline critical CSS
        inlineFonts: false,
        // Preload remaining CSS
        preload: 'swap',
        // Don't prune unused selectors (purgecss already handled this)
        pruneSource: false,
      },
    }),

    // 5. Compress - minify HTML, CSS, JS, images, SVGs (MUST BE LAST)
    compress({
      CSS: true,
      HTML: {
        'html-minifier-terser': {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
          minifyCSS: true,
          minifyJS: true,
        }
      },
      Image: {
        // Convert images to modern formats
        sharp: {
          // WebP settings for lossy compression
          webp: {
            quality: 80,
            effort: 6,
          },
          // AVIF for browsers that support it
          avif: {
            quality: 65,
            effort: 6,
          },
          // PNG optimization
          png: {
            quality: 80,
            compressionLevel: 9,
          },
          // JPEG optimization
          jpeg: {
            quality: 80,
            mozjpeg: true,
          },
        },
      },
      JavaScript: true,
      SVG: true,
      // Log compression results
      Logger: 1,
    }),
  ],
  server: {
    port: 5000,
    host: '0.0.0.0'
  },
  build: {
    assets: '_astro',
    // IMPORTANT: Set to 'never' for purgecss to work on external stylesheets
    inlineStylesheets: 'never',
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
