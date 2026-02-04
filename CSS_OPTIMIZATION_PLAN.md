# CSS Optimization Plan

## Current State Analysis

### File Statistics (26,580 lines, 606KB total)

| File | Lines | Size | Category |
|------|-------|------|----------|
| `porto-desktop.css` | 8,234 | 162KB | **Critical - needs audit** |
| `dark-mode-tokenized.css` | 1,980 | 45KB | Theming |
| `base-architecture.css` | 1,752 | 47KB | Foundation |
| `sticky-mobile.css` | 1,407 | 30KB | Mobile |
| `rtl.css` | 1,361 | 32KB | Arabic/RTL |
| `navigation-glassmorphism.css` | 1,258 | 36KB | Navigation |
| `responsive-layouts.css` | 1,109 | 21KB | Responsive |
| `services-enhanced.css` | 883 | 17KB | Services |
| `porto-dropdown-onlinetranslation.css` | 855 | 21KB | Dropdowns |
| `hero-optimization.css` | 843 | 18KB | Hero |
| Other (20 files) | ~8,000 | ~177KB | Various |

### Current Optimization Pipeline

Already configured in `astro.config.mjs`:

1. **`astro-purgecss`** - Removes unused CSS
2. **`@playform/inline`** - Critical CSS extraction (Beasties)
3. **`astro-compress`** - Minification

### Known Issues

1. **View Transitions + Deferred CSS conflict** - Workaround: `data-astro-reload` on language links
2. **CSS specificity wars** - Multiple `!important` overrides between stylesheets
3. **Duplicate styles** - RTL, dark mode, mobile files have overlapping rules
4. **No CSS code splitting** - `inlineStylesheets: 'never'` to support PurgeCSS

---

## Optimization Strategy

### Phase 1: Quick Wins (This Week)

#### 1.1 Upgrade Plugins

Replace current plugins with better alternatives:

```javascript
// astro.config.mjs changes
import purgecss from '@zokki/astro-purgecss'; // Better fork
import { min } from 'astro-min';               // Rust-based, faster
import compressor from 'astro-compressor';      // Brotli compression
```

**Benefits:**
- `@zokki/astro-purgecss` fixes false positives for `:hover`, `:where`, `:is`, `:has`
- `astro-min` is 10x faster than `astro-compress` for minification
- `astro-compressor` adds Brotli (20% smaller than gzip)

#### 1.2 Audit Critical CSS

Run Chrome DevTools Coverage on key pages:
- Homepage
- `/legal-translation-dubai/`
- `/ar/` (Arabic homepage)
- Any service page

**Goal:** Identify unused CSS per page to validate PurgeCSS effectiveness.

#### 1.3 Update PurgeCSS Safelist

Current safelist may be over-aggressive. Review and trim:

```javascript
safelist: [
  // Keep only truly dynamic classes
  'is-open', 'is-active', 'is-visible', 'is-hidden',
  'active', 'open', 'scrolled', 'hidden',
  'theme-light', 'theme-dark',
  /^fa-/, /^fas$/, /^fab$/, /^far$/,
  /^astro-/,
]
```

---

### Phase 2: File Consolidation (Next 2 Weeks)

#### 2.1 Merge Hero CSS (3 files → 1)

Combine:
- `hero-enhancements.css` (378 lines)
- `hero-intro-optimized.css` (225 lines)
- `hero-optimization.css` (843 lines)

**Into:** `hero.css` (estimated 800 lines after dedup)

#### 2.2 Merge Navigation CSS (3 files → 1)

Combine:
- `navigation-glassmorphism.css` (1,258 lines)
- `megamenu.css` (487 lines)
- `porto-dropdown-onlinetranslation.css` (855 lines)

**Into:** `navigation.css` (estimated 1,800 lines after dedup)

#### 2.3 Audit `porto-desktop.css`

This 8,234-line file needs surgical attention:

1. **Extract component-specific styles** to their respective components
2. **Move unused styles** to a deprecated file
3. **Identify duplicate rules** with `navigation.css` and `hero.css`

**Target:** Reduce to <4,000 lines

---

### Phase 3: Architecture Improvements (Month 2)

#### 3.1 CSS Variables Consolidation

Current: Variables scattered across multiple files
Target: Single `tokens.css` file imported first

```css
/* tokens.css */
:root {
  /* Colors */
  --ot-coral: #FF1654;
  --ot-navy: #0E2B48;
  --ot-teal: #0077b6;
  --ot-gold: #d4a54c;

  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 48px;

  /* Typography */
  --font-primary: 'Montserrat', sans-serif;
  --font-secondary: 'Open Sans', sans-serif;
  --font-arabic: 'Noto Sans Arabic', sans-serif;
}
```

#### 3.2 Component-Scoped CSS

Move component styles to Astro components using `<style>` tags:

**Example:** Move `.specialist-card` styles from `porto-desktop.css` to component:

```astro
<!-- SpecialistCard.astro -->
<div class="specialist-card">...</div>

<style>
  .specialist-card {
    /* styles here */
  }
</style>
```

**Benefits:**
- Automatic scoping (no collisions)
- Tree-shaking (unused components = no CSS)
- Co-located code (easier maintenance)

#### 3.3 Consider CSS Modules for Complex Components

For components with many states:

```astro
---
import styles from './MobileShell.module.css';
---

<div class={styles.sidebar}>...</div>
```

---

### Phase 4: Performance Targets

| Metric | Current | Target |
|--------|---------|--------|
| Total CSS (source) | 606KB | <300KB |
| CSS per page (after purge) | Unknown | <80KB |
| Critical CSS (inlined) | Unknown | <15KB |
| HTTP requests (CSS) | 30 | <10 |
| LCP impact | Unknown | <100ms contribution |

---

## Implementation Checklist

### Phase 1 (This Week)

- [ ] Install `@zokki/astro-purgecss`
- [ ] Install `astro-min` and `astro-compressor`
- [ ] Update `astro.config.mjs` with new plugins
- [ ] Run Chrome Coverage audit on 5 key pages
- [ ] Document unused CSS findings
- [ ] Trim PurgeCSS safelist

### Phase 2 (Next 2 Weeks)

- [ ] Create `hero.css` from 3 hero files
- [ ] Create `navigation.css` from 3 nav files
- [ ] Update layout imports
- [ ] Delete original files
- [ ] Audit `porto-desktop.css` section by section
- [ ] Extract 10+ component styles to components

### Phase 3 (Month 2)

- [ ] Create `tokens.css` with all CSS variables
- [ ] Migrate 20+ components to scoped styles
- [ ] Remove corresponding styles from global CSS
- [ ] Measure build size reduction
- [ ] Document final architecture

---

## Tools & Commands

### Check CSS Coverage (Chrome DevTools)

1. Open DevTools → More tools → Coverage
2. Reload page
3. Click on CSS file to see unused bytes

### Analyze CSS File Sizes

```bash
# Total CSS size
du -sh public/styles/

# Size per file (sorted)
du -h public/styles/*.css | sort -rh | head -20

# Line count per file
wc -l public/styles/*.css | sort -rn | head -20
```

### Test PurgeCSS Output

```bash
# Build and check dist size
npm run build
du -sh dist/_astro/*.css
```

### Find Duplicate Selectors

```bash
# Find selectors that appear in multiple files
grep -h "^\." public/styles/*.css | sort | uniq -c | sort -rn | head -50
```

---

## Plugin Configuration (Final)

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import purgecss from '@zokki/astro-purgecss';
import inline from '@playform/inline';
import { min } from 'astro-min';
import compressor from 'astro-compressor';

export default defineConfig({
  // ... other config

  integrations: [
    sitemap({ /* config */ }),
    partytown({ /* config */ }),

    // CSS Pipeline (order matters!)
    purgecss({
      keyframes: false,
      variables: false,
      safelist: [
        'is-open', 'is-active', 'is-visible', 'is-hidden',
        'active', 'open', 'scrolled', 'hidden', 'compact',
        'theme-light', 'theme-dark',
        /^fa-/, /^fas$/, /^fab$/, /^far$/,
        /^astro-/,
      ],
    }),

    inline({
      Beasties: {
        inlineFonts: false,
        preload: 'swap',
        pruneSource: false,
      },
    }),

    min(),           // Rust-based minification (fast!)
    compressor(),    // Brotli + gzip compression (last!)
  ],

  build: {
    inlineStylesheets: 'never', // Required for PurgeCSS
    cssCodeSplit: true,
  },
});
```

---

## Success Metrics

After all phases:

1. **Build size:** CSS reduced by 50%+ (606KB → <300KB)
2. **Page load:** CSS per page <80KB (after purge + split)
3. **Maintainability:** Component styles co-located
4. **Developer experience:** Fewer specificity conflicts

---

*Created: February 4, 2026*
*Version: 1.0*
