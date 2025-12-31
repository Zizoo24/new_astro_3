# Performance Improvement Plan — Safe Phased Approach

**Report Date:** December 31, 2025
**Current Performance Score:** 60/100 (Mobile)
**Target Performance Score:** 85+ (Mobile)
**Risk Tolerance:** Low (conservative, reversible changes)

---

## Executive Summary

The PageSpeed Insights report reveals critical performance issues, primarily around Largest Contentful Paint (LCP) at **10.1s** (target: <2.5s). This plan addresses issues in order of impact and safety, with each phase being independently testable and reversible.

---

## Current Scores

| Metric | Score | Status |
|--------|-------|--------|
| Performance | 60 | ⚠️ Needs Improvement |
| Accessibility | 88 | ✅ Good |
| Best Practices | 96 | ✅ Excellent |
| SEO | 92 | ✅ Excellent |

### Core Web Vitals

| Metric | Current | Target | Gap |
|--------|---------|--------|-----|
| First Contentful Paint (FCP) | 5.3s | <1.8s | -3.5s |
| Largest Contentful Paint (LCP) | 10.1s | <2.5s | -7.6s |
| Total Blocking Time (TBT) | 100ms | <200ms | ✅ OK |
| Cumulative Layout Shift (CLS) | ~0.1 | <0.1 | ⚠️ Borderline |
| Speed Index | 6.1s | <3.4s | -2.7s |

---

## Phase 1: Quick Wins (Low Risk, High Impact)

**Timeline:** Implement first
**Risk Level:** 🟢 Very Low
**Expected Impact:** +10-15 points

### 1.1 Defer Third-Party Scripts

**Issue:** Chatbase and ClickRank AI load immediately, blocking main thread
**Fix:** Load after user interaction or after page idle

```javascript
// Before: Loads immediately
<script src="https://www.chatbase.co/embed.min.js" defer></script>

// After: Load on interaction
<script>
  function loadChatbase() {
    const script = document.createElement('script');
    script.src = 'https://www.chatbase.co/embed.min.js';
    document.head.appendChild(script);
    window.removeEventListener('scroll', loadChatbase);
    window.removeEventListener('click', loadChatbase);
  }
  window.addEventListener('scroll', loadChatbase, { once: true });
  window.addEventListener('click', loadChatbase, { once: true });
  setTimeout(loadChatbase, 5000); // Fallback: load after 5s
</script>
```

**Files to modify:**
- `src/layouts/BaseLayout.astro` (Chatbase embed)
- Any ClickRank AI script locations

**Rollback:** Remove wrapper, restore original `defer` script

---

### 1.2 Preload Hero Image (LCP Element)

**Issue:** Hero image is the LCP element but not preloaded
**Fix:** Add `<link rel="preload">` for hero image

```html
<!-- Add to <head> in BaseLayout.astro -->
<link rel="preload" as="image" href="/assets/images/hero/hero-main.webp"
      fetchpriority="high" type="image/webp">
```

**Files to modify:**
- `src/layouts/BaseLayout.astro`
- `src/layouts/ServiceLayout.astro`

**Rollback:** Remove preload link

---

### 1.3 Font Display Optimization

**Issue:** Google Fonts may cause FOUT/FOIT
**Fix:** Already using `display=swap` ✅, but add font preload

```html
<!-- Preload primary font (subset if possible) -->
<link rel="preload" as="font" type="font/woff2" crossorigin
      href="https://fonts.gstatic.com/s/montserrat/v26/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCu170w-Y3tcoqK5.woff2">
```

**Risk:** Very low - additive change only

**Rollback:** Remove preload link

---

### 1.4 Reduce Animated Elements

**Issue:** 10 animated elements causing compositor overhead
**Fix:** Add `will-change` judiciously, reduce animations on mobile

```css
/* In base-architecture.css or new performance.css */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}

/* Mobile: reduce non-essential animations */
@media (max-width: 768px) {
  .hero-background,
  .floating-element,
  .shimmer-effect {
    animation: none !important;
  }
}
```

**Files to modify:**
- `public/styles/base-architecture.css` or new `performance.css`

**Rollback:** Remove CSS rules

---

## Phase 2: Image Optimization (Medium Risk, Very High Impact)

**Timeline:** After Phase 1 verified
**Risk Level:** 🟡 Medium
**Expected Impact:** +15-25 points

### 2.1 Enable Astro Image Optimization

**Issue:** Images not optimized at build time
**Fix:** Configure Sharp for automatic WebP/AVIF conversion

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        limitInputPixels: false,
      },
    },
    domains: ['onlinetranslation.ae'],
    remotePatterns: [{ protocol: 'https' }],
  },
  // ... rest of config
});
```

**Files to modify:**
- `astro.config.mjs`
- `package.json` (add sharp dependency)

**Rollback:** Revert astro.config.mjs changes

---

### 2.2 Convert Hero Images to WebP

**Issue:** Hero images may be PNG/JPG, not WebP
**Fix:** Convert manually or use Astro Image component

```astro
---
// Before
<img src="/assets/images/hero/hero.png" alt="...">

// After
import { Image } from 'astro:assets';
import heroImage from '../assets/images/hero/hero.png';
---
<Image src={heroImage} alt="..." format="webp" quality={80} />
```

**Files to modify:**
- All hero sections in layouts
- Homepage hero
- Service page heros

**Rollback:** Revert to original `<img>` tags

---

### 2.3 Implement Responsive Images

**Issue:** Same large image served to all devices
**Fix:** Add srcset for different viewport widths

```html
<img
  src="/assets/images/hero/hero-800.webp"
  srcset="
    /assets/images/hero/hero-400.webp 400w,
    /assets/images/hero/hero-800.webp 800w,
    /assets/images/hero/hero-1200.webp 1200w
  "
  sizes="(max-width: 600px) 400px, (max-width: 1000px) 800px, 1200px"
  alt="..."
  loading="eager"
  fetchpriority="high"
>
```

**Prerequisite:** Generate multiple image sizes (can use Sharp script)

**Rollback:** Revert to single image src

---

## Phase 3: CSS Optimization (Medium Risk, High Impact)

**Timeline:** After Phase 2 verified
**Risk Level:** 🟡 Medium
**Expected Impact:** +5-10 points

### 3.1 Critical CSS Inlining

**Issue:** All CSS blocks rendering
**Fix:** Inline above-the-fold CSS

```astro
<!-- In BaseLayout.astro <head> -->
<style is:inline>
  /* Critical CSS - above-fold styles only */
  :root { /* CSS variables */ }
  body { font-family: ...; margin: 0; }
  .header { /* header styles */ }
  .hero { /* hero styles */ }
  /* ~3-5KB of critical styles */
</style>

<!-- Defer non-critical CSS -->
<link rel="preload" href="/styles/main.css" as="style"
      onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="/styles/main.css"></noscript>
```

**Complexity:** High - requires identifying critical CSS
**Tool:** Use critical-css npm package or manual extraction

**Rollback:** Remove inline styles, restore regular link tags

---

### 3.2 Remove Unused CSS

**Issue:** ~24KB of CSS, likely 30-40% unused
**Fix:** Audit and remove dead code

**Safe approach:**
1. Use Chrome DevTools Coverage tab to identify unused CSS
2. Document unused selectors before removing
3. Remove in small batches, test each

**DO NOT:** Use PurgeCSS blindly - can break dynamic classes

**Files to audit:**
- `public/styles/porto-desktop.css` (8.2KB)
- `public/styles/dark-mode-tokenized.css` (2KB)
- `public/styles/navigation-glassmorphism.css` (1.2KB)

**Rollback:** Restore from git

---

## Phase 4: JavaScript Optimization (Low Risk, Medium Impact)

**Timeline:** After Phase 3 verified
**Risk Level:** 🟢 Low
**Expected Impact:** +3-5 points

### 4.1 Lazy Load Non-Critical Scripts

**Issue:** 10 deferred scripts still block parser completion
**Fix:** Dynamic import after page load

```javascript
// Instead of: <script defer src="/scripts/testimonials-carousel.js">
// Use: Dynamic import when needed

document.addEventListener('DOMContentLoaded', () => {
  // Load carousel only if carousel element exists
  if (document.querySelector('.testimonials-carousel')) {
    import('/scripts/testimonials-carousel.js');
  }
});
```

**Files to modify:**
- `src/layouts/BaseLayout.astro`
- Create a script loader utility

**Rollback:** Restore original script tags

---

### 4.2 Code Split Large Scripts

**Issue:** Single large main.js bundle
**Fix:** Split by route/component

This is lower priority as TBT is already good (100ms).

---

## Phase 5: Accessibility Fixes (Very Low Risk)

**Timeline:** Can run parallel to other phases
**Risk Level:** 🟢 Very Low
**Expected Impact:** +5-8 accessibility points

### 5.1 Contrast Ratio Fixes

**Issue:** Background/foreground colors insufficient contrast
**Current:** Already have `contrast-fixes.css`
**Fix:** Audit remaining issues

```css
/* Ensure all text on navy backgrounds uses proper tokens */
.bg-dark .text-muted {
  color: var(--text-on-dark) !important; /* Not gray */
}
```

**Files:** `public/styles/contrast-fixes.css`

---

### 5.2 Touch Target Sizes

**Issue:** Touch targets too small (<44x44px)
**Fix:** Ensure minimum 44x44px tap targets

```css
button, a, input[type="submit"], .clickable {
  min-height: 44px;
  min-width: 44px;
}
```

---

### 5.3 Heading Hierarchy

**Issue:** Headings not in sequential order
**Fix:** Audit pages for h1→h2→h3 order

**Manual audit required:** Check each page template

---

### 5.4 Link Accessibility

**Issue:** Links rely on color alone
**Fix:** Add underline or other visual indicator

```css
a:not(.btn):not(.nav-link) {
  text-decoration: underline;
  text-underline-offset: 2px;
}
```

---

## Phase 6: Best Practices & Security (Low Risk)

**Timeline:** After core performance fixed
**Risk Level:** 🟢 Low

### 6.1 Image Aspect Ratios

**Issue:** Images displayed with incorrect aspect ratio
**Fix:** Add explicit width/height or use `aspect-ratio` CSS

```css
.service-image {
  aspect-ratio: 16 / 9;
  object-fit: cover;
}
```

---

### 6.2 CSP Enhancement

**Issue:** CSP not fully effective against XSS
**Current:** CSP already configured in vercel.json
**Fix:** Audit and tighten if needed (careful - can break features)

---

### 6.3 HSTS Policy

**Issue:** May need stronger HSTS
**Fix:** Add to vercel.json headers

```json
{
  "key": "Strict-Transport-Security",
  "value": "max-age=31536000; includeSubDomains; preload"
}
```

---

## Implementation Checklist

### Phase 1 (Do First)
- [ ] Defer Chatbase loading until interaction
- [ ] Defer ClickRank AI loading
- [ ] Add hero image preload
- [ ] Add prefers-reduced-motion CSS
- [ ] Reduce mobile animations

### Phase 2 (After Phase 1 OK)
- [ ] Install Sharp dependency
- [ ] Configure Astro image optimization
- [ ] Convert hero images to WebP
- [ ] Generate responsive image sizes
- [ ] Update hero components to use srcset

### Phase 3 (After Phase 2 OK)
- [ ] Extract critical CSS
- [ ] Implement CSS defer loading
- [ ] Audit unused CSS
- [ ] Remove dead CSS code

### Phase 4 (After Phase 3 OK)
- [ ] Implement dynamic script loading
- [ ] Lazy load carousel script
- [ ] Lazy load form handler
- [ ] Consider route-based code splitting

### Phase 5 (Parallel)
- [ ] Fix contrast ratios
- [ ] Increase touch target sizes
- [ ] Fix heading hierarchy
- [ ] Add link underlines

### Phase 6 (Final)
- [ ] Fix image aspect ratios
- [ ] Tighten CSP policy
- [ ] Add HSTS preload

---

## Testing Protocol

**Before each phase:**
1. Run local Lighthouse audit: `npx lighthouse http://localhost:4321 --view`
2. Document baseline scores
3. Create git branch for changes

**After each phase:**
1. Run Lighthouse again
2. Compare scores
3. If regression: rollback immediately
4. If improvement: merge to main

**Production verification:**
1. Deploy to preview URL
2. Run PageSpeed Insights on preview
3. If OK, deploy to production
4. Monitor Real User Metrics (RUM) for 24-48 hours

---

## Expected Results

| Phase | Performance Gain | New Score |
|-------|------------------|-----------|
| Phase 1 | +10-15 | 70-75 |
| Phase 2 | +15-25 | 85-95 |
| Phase 3 | +5-10 | 90-100 |
| Phase 4 | +3-5 | 95-100 |

**Target:** Performance score 85+ (achievable with Phase 1+2)

---

## Risk Mitigation

1. **Git branching:** Each phase in separate branch
2. **Preview deploys:** Test on Vercel preview before production
3. **Rollback plan:** Document exact rollback steps for each change
4. **Monitoring:** Use Vercel Analytics to watch for regressions
5. **Incremental:** Never batch multiple risky changes

---

## Files Modified (Summary)

| File | Phase | Changes |
|------|-------|---------|
| `src/layouts/BaseLayout.astro` | 1, 2, 3 | Script defer, preloads, critical CSS |
| `src/layouts/ServiceLayout.astro` | 2 | Image optimization |
| `astro.config.mjs` | 2 | Sharp configuration |
| `public/styles/base-architecture.css` | 1, 3 | Reduced motion, critical CSS |
| `public/styles/contrast-fixes.css` | 5 | Accessibility fixes |
| `vercel.json` | 6 | Security headers |
| `package.json` | 2 | Sharp dependency |

---

*Plan created: December 31, 2025*
*Author: Claude Code*
*Status: Ready for Phase 1 implementation*
