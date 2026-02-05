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
- **Commit:** `1486ea4`
- **Issue:** Tapping the moon icon in mobile header on Arabic pages did nothing
- **Root Cause:** Arabic `MobileShellArabic.astro` was missing `e.preventDefault()` and `e.stopPropagation()` in the click handler, and also missing the `html.className` replacement that the English version had
- **Fix:** Updated theme toggle handler to match English version with proper event prevention and class replacement
- **Files:** `src/components/MobileShellArabic.astro`

#### 6. Mobile language switch causing CSS loading issues
- **Commit:** `1486ea4`
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
| Multiple `!important` overrides | High | `navigation-glassmorphism.css` has 200+ !important to override porto-desktop |
| Deferred CSS loading + View Transitions conflict | Medium | Workaround in place (data-astro-reload) |
| Duplicate styles across files | Medium | RTL, dark mode, mobile styles have overlap |
| Dark mode tokens defined twice | Low | Both `base-architecture.css` and component files define dark mode values |
| Z-index stacking complexity | Medium | Mobile sidebar uses z-index: 2000, overlay: 1999, header: 1050 |

### CSS File Risk Assessment (February 4, 2026) — 80%+ Audit Complete

#### High Priority Files (Large / Complex)
| File | Lines | Risk | Key Patterns | Action |
|------|-------|------|--------------|--------|
| `porto-desktop.css` | 8,234 | **High** | Legacy Porto theme | Extract component styles |
| `navigation-glassmorphism.css` | 1,259 | **Medium** | Dark glassmorphism, specificity wars | Consider merging with megamenu |
| `responsive-layouts.css` | 1,110 | **Low** | Well-structured grid utilities | Keep as-is |
| `services-enhanced.css` | 884 | **Low** | Service page components | Keep as-is |
| `hero-optimization.css` | 844 | **Low** | CTA strategy, PWA optimizations | Consider merging hero files |
| `porto-dropdown-onlinetranslation.css` | 856 | **Medium** | Dropdown overrides | Merge with navigation |

#### Medium Priority Files (Moderate Size)
| File | Lines | Risk | Key Patterns | Action |
|------|-------|------|--------------|--------|
| `ar-ui-fixes.css` | 686 | **Low** | Arabic-specific fixes, RTL | Keep separate |
| `dark-section-scoping.css` | 545 | **Low** | @layer cascade control | Keep as-is |
| `en-ui-fixes.css` | 496 | **Low** | English UI polish | Keep separate |
| `megamenu.css` | 488 | **Medium** | Alt nav system (light bg) | Evaluate usage |
| `text-breaking.css` | 457 | **Low** | Visual relief utilities (14 classes) | Keep as-is |
| `contrast-fixes.css` | 451 | **Low** | Dark mode contrast | Keep as-is |
| `document-pages.css` | 393 | **Low** | Document templates | Keep as-is |
| `micro-cues.css` | 392 | **Low** | Animations, scroll indicators | Keep as-is |

#### Low Priority Files (Small / Well-Contained)
| File | Lines | Risk | Notes |
|------|-------|------|-------|
| `mobile-ios.css` | 385 | **Low** | iOS-specific overrides |
| `hero-enhancements.css` | 379 | **Low** | Hero gradients/patterns |
| `mobile-android.css` | 329 | **Low** | Material Design ripples |
| `faq-accordion.css` | 316 | **Low** | FAQ-specific styles |
| `subsection-menu.css` | 281 | **Low** | Sticky sidebar nav |
| `print.css` | 255 | **Low** | Print stylesheet |
| `trust-bar.css` | 179 | **Low** | Trust logo carousel |
| `desktop-macos.css` | 174 | **Low** | macOS-specific |
| `mobile-action-bar.css` | 156 | **Low** | Mobile bottom bar |
| `hero-intro-optimized.css` | 153 | **Low** | text-wrap: balance |
| `critical.css` | 135 | **Low** | Above-fold critical |

#### Key Findings from Audit

**1. CSS Architecture Quality:**
- `dark-section-scoping.css` - Excellent @layer usage for cascade control
- `text-breaking.css` - Well-documented 14 visual relief utilities
- `critical.css` - Properly optimized for first paint

**2. Merge Candidates:**
- Hero files (3): `hero-enhancements.css`, `hero-intro-optimized.css`, `hero-optimization.css`
- Navigation files (3): `navigation-glassmorphism.css`, `megamenu.css`, `porto-dropdown-onlinetranslation.css`

**3. Platform-Specific CSS:**
- iOS: Frosted glass, safe-area-inset, haptic feedback
- Android: Material Design shadows, ripple effects
- macOS: System fonts, scrollbar styling

**4. Z-Index Stack Documented:**
| Element | Z-Index | File |
|---------|---------|------|
| Mobile sidebar | 2000 | sticky-mobile.css |
| Sidebar overlay | 1999 | sticky-mobile.css |
| Mobile header | 1050 | sticky-mobile.css |
| Desktop header | 1000 | navigation-glassmorphism.css |
| Dropdowns | 999+ | porto-dropdown.css |
| Mobile action bar | 999 | mobile-action-bar.css |

### Performance

| Issue | Severity | Notes |
|-------|----------|-------|
| 30 HTTP requests for CSS (uncombined) | Medium | Consider bundling |
| No CSS purging in production | High | Shipping unused styles |
| No CSS minification pipeline | Medium | `scripts/minify-assets.js` exists but needs audit |

### Search

| Issue | Severity | Notes |
|-------|----------|-------|
| Pagefind doesn't index Arabic content | **High** | Arabic pages not searchable |
| No Arabic stemming support | **Medium** | Pagefind warns: "doesn't support stemming for the language ar" |

### Accessibility

| Issue | Severity | Notes |
|-------|----------|-------|
| Contrast ratio issues in Arabic pages | **High** | Affects both light and dark modes |
| Contrast ratio issues in English dark mode | **Medium** | Dark mode only, light mode OK |
| Some gray text on dark backgrounds | Low | `contrast-fixes.css` addresses most cases |

---

## Investigation Queue

- [ ] **Fix Pagefind Arabic indexing/search** - HIGH PRIORITY
- [ ] **Fix contrast ratio issues in Arabic pages** (both light/dark modes) - HIGH PRIORITY
- [ ] **Fix contrast ratio issues in English dark mode** - MEDIUM PRIORITY
- [ ] Audit `porto-desktop.css` for unused styles
- [x] Consolidate hero-related CSS (3 files → hero-unified.css) - Completed Feb 4, 2026
- [ ] Review navigation CSS (3 files: navigation-glassmorphism, megamenu, porto-dropdown-onlinetranslation)
- [ ] Evaluate CSS-in-JS or CSS modules for component styles
- [x] Upgrade build plugins (astro-min, astro-compressor) - Completed Feb 4, 2026
- [x] Consolidate mobile platform CSS (3 files → mobile-platform.css) - Completed Feb 4, 2026

---

## Ideas / Future Improvements

### Testing & Debugging

| Idea | Priority | Notes |
|------|----------|-------|
| Use Playwright for visual regression testing | Medium | Catch CSS regressions before deploy |
| Automated screenshot comparison | Medium | Compare staging vs production |
| E2E tests for critical user flows | Low | Form submissions, language switching |

---

## Build Optimization Status

### February 4, 2026

**Plugin Upgrades Applied:**
- Replaced `astro-compress` with `astro-min` (Rust-based, faster)
- Added `astro-compressor` for Brotli/gzip compression
- Trimmed PurgeCSS safelist to reduce false positives

**Build Results:**
- Total CSS savings: 114.2 KB (34% reduction)
- Build time: ~same as before
- Compression: Both .br and .gz files generated

**Config Changes:**
```javascript
// astro.config.mjs
import min from 'astro-min';
import compressor from 'astro-compressor';

// Plugin order: purgecss → inline → min → compressor
```

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

*Last Updated: February 5, 2026 (Added Arabic search indexing bug)*
