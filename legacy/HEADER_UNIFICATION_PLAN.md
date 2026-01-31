# Header Unification Plan

## OnlineTranslation.ae — Unified Bilingual Header Architecture

**Version:** 1.0
**Created:** January 30, 2026
**Completed:** January 30, 2026
**Status:** ✅ COMPLETED — HeaderUnified.astro implemented
**Archived:** January 31, 2026

---

## EXECUTIVE SUMMARY

Currently, the site has two separate header components:
- `Header-porto.astro` (English) — 959 lines, fully functional
- `Header-porto-ar.astro` (Arabic) — 479 lines, broken/incomplete

**Problem:** The Arabic header is fundamentally broken. It's missing the main navigation menu, has different HTML structure, and relies on CSS that doesn't fully load.

**Solution:** Create ONE unified header component that handles both languages through:
1. Same HTML structure
2. CSS-based RTL mirroring (not HTML reordering)
3. Language-specific data passed as props
4. Shared JavaScript functionality

---

## PART 1: CURRENT STATE ANALYSIS

### 1.1 Visual Comparison

| Element | English Header | Arabic Header | Issue |
|---------|---------------|---------------|-------|
| Main Nav Menu | LEGAL, DOCUMENTS, ATTESTATION, SPECIALIZED, LOCATIONS, RESOURCES | **MISSING** | Critical |
| Coral Top Bar | Correct layout | Works (RTL) | OK |
| Logo | Correct position | Strange positioning | Medium |
| Hamburger Menu | 1 on left | 1 on left (should be right) | Medium |
| Action Buttons | Search, Theme, Lang on right | Partial display | Medium |
| Language Switcher | Shows En/ع | Shows ع (partial) | Low |

### 1.2 Root Causes

| Cause | Impact | Evidence |
|-------|--------|----------|
| **Different HTML structure** | High | Arabic reverses column order in HTML instead of CSS |
| **CSS not loading properly** | Critical | Arabic has only 85 lines vs English's 452 lines |
| **Different grid definitions** | High | `.header-row` vs `.header-row-rtl` |
| **Scoped CSS isolation** | Critical | Each component's CSS is scoped, not shared |
| **No base CSS file** | Critical | Each header duplicates/omits styles |

### 1.3 Code Duplication

```
Header-porto.astro:     959 lines
Header-porto-ar.astro:  479 lines
─────────────────────────────────
Total:                 1,438 lines

After unification:      ~1,100 lines (single component)
Savings:                 ~340 lines (24% reduction)
```

---

## PART 2: UNIFIED ARCHITECTURE

### 2.1 Design Principle

**The "CSS Does RTL" Approach:**

```
┌─────────────────────────────────────────────────────────────────┐
│  SAME HTML for both languages                                    │
│  CSS handles direction via:                                      │
│  • html[lang="ar"] selectors                                    │
│  • direction: rtl on containers                                  │
│  • Flexbox/Grid auto-reverse behavior                           │
│  • Logical properties (margin-inline-start, etc.)               │
└─────────────────────────────────────────────────────────────────┘
```

### 2.2 Component Structure

**Before (2 components):**
```
src/components/
├── Header-porto.astro          # English-only
├── Header-porto-ar.astro       # Arabic-only (broken)
└── ...
```

**After (1 unified component):**
```
src/components/
├── Header.astro                # Unified bilingual header
├── Header/
│   ├── CoralTopBar.astro      # Optional: extracted sub-component
│   ├── NavMenu.astro          # Optional: extracted sub-component
│   └── header.css             # All header styles (LTR + RTL)
└── ...
```

### 2.3 Props Interface

```typescript
interface HeaderProps {
  lang: 'en' | 'ar';
  currentPath?: string;
  isHomepage?: boolean;
}
```

### 2.4 Data Flow

```
┌──────────────────┐     ┌──────────────────┐
│ navigation-porto │     │ navigation-ar    │
│ (English data)   │     │ (Arabic data)    │
└────────┬─────────┘     └────────┬─────────┘
         │                        │
         └──────────┬─────────────┘
                    │
                    ▼
         ┌──────────────────┐
         │  Header.astro    │
         │  (unified)       │
         │                  │
         │  const nav =     │
         │    lang === 'ar' │
         │    ? navAr       │
         │    : navEn       │
         └────────┬─────────┘
                  │
         ┌────────┴────────┐
         │                 │
    ┌────▼────┐      ┌────▼────┐
    │ LTR     │      │ RTL     │
    │ (CSS)   │      │ (CSS)   │
    └─────────┘      └─────────┘
```

---

## PART 3: CSS RTL STRATEGY

### 3.1 The Problem with Current Approach

**Current (broken):**
```html
<!-- English: HTML order = visual order -->
<div class="header-row">
  <div class="sidebar">...</div>
  <div class="logo">...</div>
  <div class="nav">...</div>
  <div class="actions">...</div>
</div>

<!-- Arabic: HTML order REVERSED (wrong approach) -->
<div class="header-row-rtl">
  <div class="actions">...</div>
  <div class="nav">...</div>
  <div class="logo">...</div>
  <div class="sidebar">...</div>
</div>
```

**Why this is wrong:**
- Duplicates HTML structure
- Hard to maintain
- CSS scoping issues
- Different class names (.header-row vs .header-row-rtl)

### 3.2 The Correct Approach: CSS-Only RTL

**HTML (same for both):**
```html
<div class="header-row">
  <div class="header-sidebar">...</div>
  <div class="header-logo">...</div>
  <div class="header-nav">...</div>
  <div class="header-actions">...</div>
</div>
```

**CSS:**
```css
/* Base LTR layout */
.header-row {
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  /* Order: sidebar | logo | nav | actions */
}

/* RTL automatically reverses grid */
html[lang="ar"] .header-row,
[dir="rtl"] .header-row {
  direction: rtl;
  /* Grid auto-reverses: actions | nav | logo | sidebar */
}
```

### 3.3 CSS Logical Properties

Replace physical properties with logical ones:

| Physical (avoid) | Logical (use) | Behavior |
|-----------------|---------------|----------|
| `margin-left` | `margin-inline-start` | Adapts to direction |
| `margin-right` | `margin-inline-end` | Adapts to direction |
| `padding-left` | `padding-inline-start` | Adapts to direction |
| `text-align: left` | `text-align: start` | Adapts to direction |
| `float: left` | N/A (avoid floats) | Use flexbox |
| `left: 0` | `inset-inline-start: 0` | Adapts to direction |

### 3.4 Flexbox/Grid Auto-Reverse

```css
/* Flexbox auto-reverses with direction */
.coral-top-content {
  display: flex;
  justify-content: space-between;
}

/* RTL: flex items automatically reverse order */
html[lang="ar"] .coral-top-content {
  direction: rtl;
  /* No need for flex-direction: row-reverse! */
}

/* Grid auto-reverses with direction */
.header-row {
  display: grid;
  grid-template-columns: auto auto 1fr auto;
}

html[lang="ar"] .header-row {
  direction: rtl;
  /* Grid cells auto-reverse! */
}
```

### 3.5 Dropdown Positioning

```css
/* Base: dropdowns open to the right */
.dropdown-menu {
  left: 0;
  right: auto;
}

/* RTL: dropdowns open to the left */
html[lang="ar"] .dropdown-menu {
  left: auto;
  right: 0;
}

/* Flyout submenus */
.dropdown-submenu > .dropdown-menu {
  left: 100%;
  right: auto;
}

html[lang="ar"] .dropdown-submenu > .dropdown-menu {
  left: auto;
  right: 100%;
}
```

---

## PART 4: IMPLEMENTATION PHASES

### Phase 1: Preparation (1 hour)

**Tasks:**
1. Create backup of current headers
2. Create `src/styles/header.css` for shared styles
3. Verify `navigation-porto.ts` and `navigation-ar.ts` have matching structure
4. Create test page to verify changes

**Deliverables:**
- [ ] Backup created
- [ ] Shared CSS file created
- [ ] Navigation data verified
- [ ] Test page ready

### Phase 2: Create Unified Component (2-3 hours)

**Tasks:**
1. Create `Header.astro` with props interface
2. Import both navigation data sources
3. Use conditional logic for language
4. Write HTML structure (same for both languages)
5. Move all CSS to shared file with RTL rules

**Deliverables:**
- [ ] `Header.astro` created
- [ ] Props: `{ lang, currentPath, isHomepage }`
- [ ] Navigation data conditional import
- [ ] Single HTML structure
- [ ] CSS with RTL rules

### Phase 3: CSS RTL Implementation (2 hours)

**Tasks:**
1. Extract all CSS from Header-porto.astro
2. Add RTL rules using `html[lang="ar"]` selectors
3. Replace physical properties with logical where possible
4. Test coral top bar RTL
5. Test nav menu RTL
6. Test dropdowns RTL
7. Test action buttons RTL

**Deliverables:**
- [ ] Complete CSS file (~500 lines)
- [ ] All elements properly mirrored
- [ ] Dropdowns open correct direction
- [ ] Icons positioned correctly

### Phase 4: JavaScript Unification (1 hour)

**Tasks:**
1. Merge scroll behavior (identical in both)
2. Merge sidebar toggle handlers
3. Merge search toggle handlers
4. Merge theme toggle
5. ADD keyboard navigation (missing from Arabic)
6. ADD flyout edge detection (adapt for RTL)

**Deliverables:**
- [ ] Single JavaScript block
- [ ] RTL-aware flyout detection
- [ ] Keyboard navigation for both
- [ ] Console logging for debugging

### Phase 5: Layout Integration (1 hour)

**Tasks:**
1. Update `BaseLayout.astro` to use unified Header
2. Update `BaseLayoutArabic.astro` to use unified Header with `lang="ar"`
3. Remove old Header-porto.astro
4. Remove old Header-porto-ar.astro
5. Test English pages
6. Test Arabic pages

**Deliverables:**
- [ ] Both layouts updated
- [ ] Old components removed
- [ ] English pages working
- [ ] Arabic pages working

### Phase 6: Testing & QA (1 hour)

**Tasks:**
1. Desktop: Test English header
2. Desktop: Test Arabic header
3. Test all dropdown menus
4. Test all flyout submenus
5. Test scroll behavior
6. Test theme toggle
7. Test search overlay
8. Test sidebar toggle
9. Test responsive breakpoints
10. Test keyboard navigation

**Deliverables:**
- [ ] All tests pass
- [ ] Screenshots captured
- [ ] No visual regressions

---

## PART 5: UNIFIED COMPONENT CODE OUTLINE

### 5.1 Header.astro Structure

```astro
---
/**
 * Header.astro - Unified Bilingual Header
 * Handles both LTR (English) and RTL (Arabic)
 */

// Navigation data
import { mainNavigation } from '../data/navigation-porto';
import { mainNavigationAr, siteContactAr, uiLabelsAr } from '../data/navigation-ar';
import { siteContact } from '../data/navigation';
import LanguageSwitcher from './LanguageSwitcher.astro';

interface Props {
  lang?: 'en' | 'ar';
  currentPath?: string;
  isHomepage?: boolean;
}

const {
  lang = 'en',
  currentPath = Astro.url.pathname,
  isHomepage = false
} = Astro.props;

// Select data based on language
const isArabic = lang === 'ar';
const navigation = isArabic ? mainNavigationAr : mainNavigation;
const contact = isArabic ? siteContactAr : siteContact;
const labels = isArabic ? uiLabelsAr : {
  topBarHours: 'Daily: 8:00 AM - 10:00 PM',
  sendDocs: 'Send Documents',
  // ... other labels
};

// Helper function
function isActive(href: string): boolean {
  if (href === '/' || href === '/ar/') return currentPath === href;
  return currentPath.startsWith(href);
}
---

<!-- Header wrapper - direction set by lang attribute on <html> -->
<div class="header-wrapper" id="headerWrapper">

  <!-- Coral Top Bar -->
  <div class="coral-top-bar" id="coralTopBar">
    <div class="container">
      <div class="coral-top-content">
        <div class="coral-top-left">
          <a href={`tel:${contact.phone.replace(/\s/g, '')}`} class="coral-top-link">
            <i class="fas fa-phone-alt"></i>
            <span dir="ltr">{contact.phoneDisplay}</span>
          </a>
          <a href={`mailto:${contact.email}`} class="coral-top-link coral-top-email">
            <i class="fas fa-envelope"></i>
            <span dir="ltr">{contact.email}</span>
          </a>
        </div>
        <div class="coral-top-right">
          <span class="coral-top-hours">
            <i class="fas fa-clock"></i>
            {labels.topBarHours}
          </span>
        </div>
      </div>
    </div>
  </div>

  <!-- Navy Header -->
  <header id="header" class:list={["site-header", { "header-homepage": isHomepage }]}>
    <div class="header-body">
      <div class="header-container container">
        <div class="header-row">

          <!-- Sidebar Toggle (always first in HTML, CSS positions it) -->
          <div class="header-column header-column-sidebar">
            <button id="desktopSidebarToggle" class="desktop-sidebar-toggle" type="button" aria-label={isArabic ? 'فتح القائمة' : 'Open sidebar menu'}>
              <i class="fas fa-bars" aria-hidden="true"></i>
            </button>
          </div>

          <!-- Logo -->
          <div class="header-column header-column-logo">
            <a href={isArabic ? '/ar/' : '/'} class="header-logo">
              <img src="/assets/images/logo/brand/emblem-clean.png" alt="OnlineTranslation.ae" width="45" height="45" class="logo-emblem" loading="eager" />
              <div class="logo-text-block">
                <span class="logo-text" dir="ltr">Online<span class="logo-suffix">Translation</span><span class="logo-domain">.ae</span></span>
                <span class="logo-tagline">{isArabic ? 'ترجمة قانونية معتمدة' : 'Boutique Legal Translation'}</span>
              </div>
            </a>
          </div>

          <!-- Navigation -->
          <div class="header-column header-column-nav">
            <div class="header-nav">
              <div class="header-nav-main">
                <nav id="mainNav" aria-label={isArabic ? 'التنقل الرئيسي' : 'Main navigation'}>
                  <ul class="nav nav-pills" role="menubar">
                    {navigation.map((item) => (
                      <!-- Same template as current English header -->
                      <!-- Dropdown menus render identically -->
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="header-column header-column-actions">
            <LanguageSwitcher variant="pill" size="sm" />
            <button id="desktopSearchToggle" class="header-action-btn search-toggle" type="button" aria-label={isArabic ? 'بحث' : 'Search'}>
              <i class="fas fa-search" aria-hidden="true"></i>
            </button>
            <button id="portoThemeToggle" class="header-action-btn theme-toggle" type="button" aria-label={isArabic ? 'تبديل الوضع المظلم' : 'Toggle dark mode'}>
              <i class="fas fa-moon theme-icon-dark" aria-hidden="true"></i>
              <i class="fas fa-sun theme-icon-light" aria-hidden="true"></i>
            </button>
          </div>

        </div>
      </div>
    </div>
  </header>
</div>

<div class="header-spacer"></div>

<style>
  /* Import shared header styles */
  @import '../styles/header.css';
</style>

<script>
  // Unified JavaScript - same for both languages
  // RTL detection done via document.documentElement.lang
</script>
```

### 5.2 header.css Structure

```css
/* ============================================
   HEADER STYLES - UNIFIED LTR/RTL
   ============================================ */

/* --------------------------------------------
   CSS VARIABLES
   -------------------------------------------- */
:root {
  --coral-bar-height: 40px;
  --header-height: 70px;
  --header-compact: 50px;
}

/* --------------------------------------------
   BASE STYLES (LTR)
   -------------------------------------------- */

/* Header Wrapper */
.header-wrapper { ... }

/* Coral Top Bar */
.coral-top-bar { ... }
.coral-top-content {
  display: flex;
  justify-content: space-between;
}

/* Navy Header */
.site-header { ... }
.header-row {
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  /* sidebar | logo | nav | actions */
}

/* Logo */
.header-logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

/* Navigation */
.header-nav-main { ... }
.nav-pills {
  display: flex;
  gap: 2px;
}

/* Dropdowns */
.dropdown-menu {
  position: absolute;
  left: 0;
  right: auto;
}

.dropdown-submenu > .dropdown-menu {
  left: 100%;
  right: auto;
}

/* Actions */
.header-column-actions {
  display: flex;
  gap: 8px;
}

/* --------------------------------------------
   RTL OVERRIDES
   -------------------------------------------- */

html[lang="ar"] .header-wrapper,
[dir="rtl"] .header-wrapper {
  direction: rtl;
}

/* Grid auto-reverses with direction: rtl */
html[lang="ar"] .header-row {
  direction: rtl;
}

/* Flex containers auto-reverse */
html[lang="ar"] .coral-top-content,
html[lang="ar"] .header-logo,
html[lang="ar"] .header-column-actions,
html[lang="ar"] .nav-pills {
  /* No need for row-reverse! direction: rtl does it */
}

/* Dropdowns flip */
html[lang="ar"] .dropdown-menu {
  left: auto;
  right: 0;
}

html[lang="ar"] .dropdown-submenu > .dropdown-menu {
  left: auto;
  right: 100%;
}

/* Logo text stays LTR */
html[lang="ar"] .logo-text {
  direction: ltr;
}

/* Text alignment */
html[lang="ar"] .logo-tagline {
  text-align: right;
}

/* Dropdown items */
html[lang="ar"] .dropdown-item {
  text-align: right;
}

html[lang="ar"] .dropdown-item i {
  margin-inline-start: 0;
  margin-inline-end: 8px;
}

/* --------------------------------------------
   RESPONSIVE
   -------------------------------------------- */

@media (max-width: 991px) {
  .header-wrapper {
    display: none !important;
  }
}
```

---

## PART 6: MIGRATION CHECKLIST

### Pre-Migration

- [ ] Backup `Header-porto.astro`
- [ ] Backup `Header-porto-ar.astro`
- [ ] Backup `BaseLayout.astro`
- [ ] Backup `BaseLayoutArabic.astro`
- [ ] Create git branch for migration

### During Migration

- [ ] Create unified `Header.astro`
- [ ] Create `src/styles/header.css`
- [ ] Test English rendering
- [ ] Test Arabic rendering
- [ ] Test all dropdowns
- [ ] Test mobile breakpoint

### Post-Migration

- [ ] Remove `Header-porto.astro`
- [ ] Remove `Header-porto-ar.astro`
- [ ] Update all layout imports
- [ ] Full regression test
- [ ] Performance audit
- [ ] Commit and push

---

## PART 7: RISK ASSESSMENT

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Breaking existing English header | Medium | High | Keep backups, test thoroughly |
| CSS specificity conflicts | Medium | Medium | Use consistent selectors |
| Navigation data mismatch | Low | Medium | Verify both data files |
| JavaScript errors | Low | High | Add error handling, logging |
| Mobile shell conflicts | Medium | Medium | Test mobile navigation |

---

## PART 8: ESTIMATED EFFORT

| Phase | Time | Complexity |
|-------|------|------------|
| Phase 1: Preparation | 1 hour | Low |
| Phase 2: Create Component | 2-3 hours | High |
| Phase 3: CSS RTL | 2 hours | Medium |
| Phase 4: JavaScript | 1 hour | Medium |
| Phase 5: Integration | 1 hour | Medium |
| Phase 6: Testing | 1 hour | Low |
| **Total** | **8-9 hours** | **High** |

---

## PART 9: SUCCESS CRITERIA

1. **Visual Parity:** Arabic header looks identical to English (just mirrored)
2. **Navigation Works:** All dropdown menus visible and functional in both languages
3. **No Duplicate Code:** Single component handles both languages
4. **CSS-Only RTL:** No HTML reordering for RTL support
5. **Accessibility:** Keyboard navigation works in both languages
6. **Performance:** No regression in page load times
7. **Maintainability:** Future changes only need to be made once

---

## APPENDIX A: FILES TO MODIFY

| File | Action |
|------|--------|
| `src/components/Header.astro` | CREATE (unified) |
| `src/styles/header.css` | CREATE (shared styles) |
| `src/layouts/BaseLayout.astro` | UPDATE (import unified) |
| `src/layouts/BaseLayoutArabic.astro` | UPDATE (import unified with lang="ar") |
| `src/components/Header-porto.astro` | DELETE (after migration) |
| `src/components/Header-porto-ar.astro` | DELETE (after migration) |

## APPENDIX B: COMMANDS

```bash
# Create backup branch
git checkout -b backup/pre-header-unification

# Return to main branch
git checkout claude/multilingual-content-process-RVVtm

# Create migration branch
git checkout -b feature/unified-header

# After testing, merge
git checkout claude/multilingual-content-process-RVVtm
git merge feature/unified-header
```

---

**Document Status:** Ready for implementation
**Approved By:** [Pending user approval]
**Next Step:** Begin Phase 1 after user confirms approach
