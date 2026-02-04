# Bug Log

Track bugs, fixes, and known issues for OnlineTranslation.ae

---

## Fixed Bugs

### February 4, 2026

#### 1. Dropdown max-height not working
- **Commit:** `13ea8bc`
- **Issue:** Dropdown menus could overflow viewport on pages with many items
- **Root Cause:** `porto-dropdown-onlinetranslation.css` had `overflow: visible !important` on `.dropdown-menu` which overrode the `max-height: 70vh` and `overflow-y: auto` from `HeaderUnified.astro`
- **Fix:** Added `max-height: 70vh` and `overflow-y: auto !important` to the more specific selector `.header-nav-main nav > ul > li.dropdown > .dropdown-menu` in `porto-dropdown-onlinetranslation.css`
- **Files:** `public/styles/porto-dropdown-onlinetranslation.css`

#### 2. CSS not loading when switching Arabic to English
- **Commit:** `13ea8bc`
- **Issue:** When using language switcher (AR → EN or EN → AR), CSS files would not load correctly until page refresh
- **Root Cause:** Astro View Transitions doesn't re-trigger `onload` handlers for CSS files loaded with `media="print" onload="this.media='all'"` pattern. English and Arabic layouts load different CSS files:
  - English: `en-ui-fixes.css`
  - Arabic: `rtl.css` + `ar-ui-fixes.css`
- **Fix:** Added `data-astro-reload` attribute to all language switcher links in `LanguageSwitcher.astro`, forcing full page reload on language change
- **Files:** `src/components/LanguageSwitcher.astro`

#### 3. Coral bar hide-on-scroll (comment cleanup)
- **Commit:** `13ea8bc`
- **Issue:** Code comments said "compacts on scroll" but actual behavior was "hides on scroll"
- **Fix:** Updated comments in `HeaderUnified.astro` to accurately reflect behavior
- **Files:** `src/components/HeaderUnified.astro`

#### 4. Icon overflow in circular containers
- **Commit:** `1882835`
- **Issue:** Icons were overflowing their circular containers on hover/transform
- **Fix:** Added `overflow: hidden` to 4 icon containers:
  - `.overlap-card-icon`
  - `.specialist-icon`
  - `.why-card i`
  - `.exodus-step .step-icon`
- **Files:** `public/styles/porto-desktop.css`

#### 5. Mobile dark mode toggle not working (Arabic)
- **Commit:** `TBD`
- **Issue:** Tapping the moon icon in mobile header on Arabic pages did nothing
- **Root Cause:** Arabic `MobileShellArabic.astro` was missing `e.preventDefault()` and `e.stopPropagation()` in the click handler, and also missing the `html.className` replacement that the English version had
- **Fix:** Updated theme toggle handler to match English version with proper event prevention and class replacement
- **Files:** `src/components/MobileShellArabic.astro`

#### 6. Mobile language switch causing CSS loading issues
- **Commit:** `TBD`
- **Issue:** Tapping language switch (EN/ع) in mobile footer bar caused CSS to not load properly on the target page
- **Root Cause:** Same View Transitions + deferred CSS issue as #2, but the mobile footer bar links weren't updated with `data-astro-reload`
- **Fix:** Added `data-astro-reload` attribute to language switch links in both `MobileShell.astro` and `MobileShellArabic.astro`
- **Files:** `src/components/MobileShell.astro`, `src/components/MobileShellArabic.astro`

---

## Known Issues / Technical Debt

### CSS Architecture

| Issue | Severity | Notes |
|-------|----------|-------|
| 30 CSS files totaling 606KB | High | Needs consolidation and dead code removal |
| `porto-desktop.css` is 162KB | High | Single massive file, difficult to maintain |
| Multiple `!important` overrides | Medium | Specificity wars between stylesheets |
| Deferred CSS loading + View Transitions conflict | Medium | Workaround in place (data-astro-reload) |
| Duplicate styles across files | Medium | RTL, dark mode, mobile styles have overlap |

### Performance

| Issue | Severity | Notes |
|-------|----------|-------|
| 30 HTTP requests for CSS (uncombined) | Medium | Consider bundling |
| No CSS purging in production | High | Shipping unused styles |
| No CSS minification pipeline | Medium | `scripts/minify-assets.js` exists but needs audit |

### Accessibility

| Issue | Severity | Notes |
|-------|----------|-------|
| Some gray text on dark backgrounds | Low | `contrast-fixes.css` addresses most cases |

---

## Investigation Queue

- [ ] Audit `porto-desktop.css` for unused styles
- [ ] Consolidate hero-related CSS (3 files: hero-enhancements, hero-intro-optimized, hero-optimization)
- [ ] Review navigation CSS (3 files: navigation-glassmorphism, megamenu, porto-dropdown-onlinetranslation)
- [ ] Evaluate CSS-in-JS or CSS modules for component styles
- [ ] Test PurgeCSS or similar tool for dead code removal

---

## How to Add Bugs

```markdown
### [Date]

#### Bug Title
- **Commit:** `hash` (if fixed)
- **Issue:** What was wrong
- **Root Cause:** Why it happened
- **Fix:** How it was resolved
- **Files:** Affected files
```

---

*Last Updated: February 4, 2026*
