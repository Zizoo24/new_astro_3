# Visual Relief Implementation Plan

**Version:** 2.0 (Comprehensive Revision)
**Created:** December 27, 2025
**Status:** Planning Phase

---

## Table of Contents

1. [Problem Analysis](#problem-analysis)
2. [Current State Assessment](#current-state-assessment)
3. [Strategic Approach](#strategic-approach)
4. [Phase 0: Foundation](#phase-0-foundation-zero-risk)
5. [Phase 1: Quick Wins](#phase-1-quick-wins-low-risk)
6. [Phase 2: Component Evolution](#phase-2-component-evolution-medium-risk)
7. [Phase 3: Layout Transformation](#phase-3-layout-transformation-higher-risk)
8. [Phase 4: Advanced Interactions](#phase-4-advanced-interactions)
9. [Testing & Validation Strategy](#testing--validation-strategy)
10. [Rollback Plans](#rollback-plans)

---

## Problem Analysis

### The Core Issue: Desktop Scroll Fatigue

On the DHA DataFlow page (and most service pages), desktop users scroll through **~4,500px of vertical content**. This creates cognitive load because:

1. **Sequential Reading Forced**: Explanation text followed by verification table forces users to scroll down, losing context of what they just read
2. **Wasted Horizontal Space**: On a 1920px screen, content occupies only 900px (47%), leaving 53% empty
3. **No Spatial Memory**: Users can't "glance right" to see related information while reading left content
4. **Uniform Density**: Every section looks the same—no visual hierarchy tells users what's important

### What Desktop Users Actually Want

| User Type | Behavior | Need |
|-----------|----------|------|
| Decision Maker | Scans, doesn't read linearly | Key facts visible simultaneously |
| Researcher | Compares information | Side-by-side layouts for comparison |
| First-time Visitor | Needs orientation | Progress indicators, section previews |
| Return Visitor | Jumps to specific section | Anchor navigation |

### Why Mobile Works but Desktop Doesn't

The current design is **mobile-first optimized**:
- Vertical stacking works on 375px screens
- Touch scrolling is natural (thumb swipe)
- No hover states needed (tap to interact)
- Full-width content maximizes limited space

But on desktop:
- Mouse wheel scrolling is slower than thumb swiping
- Hover states are expected but missing
- Wide monitors make single-column feel empty
- Users expect to see more information at once

---

## Current State Assessment

### CSS Architecture (Strengths)

The existing system is well-designed for responsive behavior:

```
public/styles/base-architecture.css
├── CSS Variables with clamp() for fluid scaling
├── 12-column flex grid (.col-1 through .col-12)
├── Responsive breakpoints: 768px, 992px, 1400px
├── Section → Container → Row → Column hierarchy
└── Contrast-enforced text colors
```

### What We Have That We Can Leverage

| Asset | Location | Reuse Potential |
|-------|----------|-----------------|
| `.col--8` hero pattern | ServiceLayout.astro:184 | Extend to split layout |
| `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))` | Multiple pages | Already responsive |
| `.desktop-only` / `.mobile-only` | Not implemented | Need to create |
| Sticky position | Used in mobile-action-bar | Can adapt for sidebar |
| `<details>` accordion | AccordionSection.astro | DOM-complete, SEO-safe |

### Current Page Structure (DHA DataFlow)

```
Hero Section (~1200px height)
├── Title, Subtitle (text)
├── Intro paragraphs (text)
├── Inline Table (hero-table)
├── Feature Grid (3 items)
└── Stats Row (3 items)

Trust Strip (~80px)
Process Steps (~400px)
Accordion Sections (~600px collapsed)

Custom Content (~2500px)
├── Use Case Grid (4 cards)
├── Timeline Section (6 steps)
├── Feature Grid (4 items)
├── Challenge List (5 items)
├── Authority Table
├── Timeline Table
├── Pricing Grid (3 cards)
└── Start Options (3 cards)

FAQ Section (~500px collapsed)
CTA Section (~200px)
Related Services (~400px)
```

### Key Insight: The Hero is Too Dense

The hero section contains **~600 words of content** including:
- 3 paragraphs of explanation
- 1 comparison table (5 rows)
- 1 feature grid (3 items)
- 1 stats row (3 items)

This violates the "above the fold" principle. On desktop, users should see:
- Clear value proposition (what this page is about)
- Quick navigation to sections below
- CTA button visible without scrolling

---

## Strategic Approach

### Guiding Principles

1. **Mobile Must Not Break**: All changes must preserve the current mobile experience
2. **CSS-Only Where Possible**: Avoid JS for layout changes (better performance, no hydration needed)
3. **Progressive Enhancement**: Desktop features are additions, not replacements
4. **Component Reusability**: New patterns should work across all 50+ service pages
5. **SEO Preservation**: All content must remain in DOM (no lazy-loading text)

### The "Three Layer" Strategy

```
Layer 1: Utility CSS (Phase 0-1)
         └── .desktop-only, .mobile-only, .layout-split
         └── Zero risk, immediate use

Layer 2: Component Props (Phase 2)
         └── Extend existing components with layout options
         └── Low risk, gradual adoption

Layer 3: Layout Templates (Phase 3)
         └── New layout patterns for specific page types
         └── Higher risk, pilot on one page first
```

---

## Phase 0: Foundation (Zero Risk)

**Goal:** Add CSS utilities that enable desktop layouts without changing any pages.

**Duration:** 1-2 hours

### 0.1 Create Desktop Layout Utilities

**File:** `public/styles/desktop-layouts.css`

```css
/* ============================================
   DESKTOP LAYOUT UTILITIES
   Visual Relief System for OnlineTranslation.ae

   These utilities enable desktop-specific layouts
   while preserving mobile behavior.
   ============================================ */

/* ----------------------------------------
   DISPLAY UTILITIES
   Control visibility by viewport
   ---------------------------------------- */
.desktop-only {
    display: none !important;
}

.mobile-only {
    display: block;
}

@media (min-width: 992px) {
    .desktop-only {
        display: block !important;
    }

    .desktop-only--flex {
        display: flex !important;
    }

    .desktop-only--grid {
        display: grid !important;
    }

    .desktop-only--inline {
        display: inline !important;
    }

    .mobile-only {
        display: none !important;
    }
}

/* ----------------------------------------
   SPLIT LAYOUT SYSTEM
   Side-by-side content on desktop
   ---------------------------------------- */
.layout-split {
    display: grid;
    gap: var(--gutter, 24px);
    grid-template-columns: 1fr;
}

@media (min-width: 992px) {
    .layout-split {
        grid-template-columns: 1fr 1fr;
        align-items: start;
    }

    /* Layout variants */
    .layout-split--60-40 {
        grid-template-columns: 1.5fr 1fr;
    }

    .layout-split--40-60 {
        grid-template-columns: 1fr 1.5fr;
    }

    .layout-split--70-30 {
        grid-template-columns: 2.33fr 1fr;
    }

    .layout-split--30-70 {
        grid-template-columns: 1fr 2.33fr;
    }

    /* Alignment variants */
    .layout-split--centered {
        align-items: center;
    }

    .layout-split--stretch {
        align-items: stretch;
    }

    /* Gap variants */
    .layout-split--gap-lg {
        gap: calc(var(--gutter, 24px) * 2);
    }

    .layout-split--gap-sm {
        gap: calc(var(--gutter, 24px) / 2);
    }
}

/* ----------------------------------------
   STICKY SIDEBAR (Table of Contents)
   Desktop-only progress navigation
   ---------------------------------------- */
.layout-with-sidebar {
    display: grid;
    gap: var(--gutter, 24px);
    grid-template-columns: 1fr;
}

@media (min-width: 992px) {
    .layout-with-sidebar {
        grid-template-columns: 200px 1fr;
        align-items: start;
    }

    .layout-with-sidebar--right {
        grid-template-columns: 1fr 200px;
    }

    .layout-with-sidebar--wide {
        grid-template-columns: 240px 1fr;
    }
}

.sidebar-nav {
    display: none;
}

@media (min-width: 992px) {
    .sidebar-nav {
        display: block;
        position: sticky;
        top: 100px;
        max-height: calc(100vh - 140px);
        overflow-y: auto;
        padding-right: 1rem;
    }

    .sidebar-nav__title {
        font-size: 0.75rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: var(--text-muted);
        margin-bottom: 1rem;
        padding-bottom: 0.75rem;
        border-bottom: 1px solid var(--border-light);
    }

    .sidebar-nav__list {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .sidebar-nav__link {
        display: block;
        padding: 0.5rem 0.75rem;
        margin-bottom: 0.25rem;
        border-radius: 6px;
        font-size: 0.875rem;
        color: var(--text-secondary);
        text-decoration: none;
        transition: all 0.15s ease;
    }

    .sidebar-nav__link:hover {
        background: var(--surface-muted);
        color: var(--text-heading);
    }

    .sidebar-nav__link.is-active {
        background: var(--accent-coral);
        color: white;
    }
}

/* ----------------------------------------
   ENHANCED GRID COLUMNS
   More control for desktop layouts
   ---------------------------------------- */
@media (min-width: 992px) {
    /* Force specific column counts on desktop */
    .grid-desktop-2 {
        grid-template-columns: repeat(2, 1fr) !important;
    }

    .grid-desktop-3 {
        grid-template-columns: repeat(3, 1fr) !important;
    }

    .grid-desktop-4 {
        grid-template-columns: repeat(4, 1fr) !important;
    }

    /* Centered icon grids (vertical stack per item) */
    .grid-icons-centered .feature-item,
    .grid-icons-centered .grid-item {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
}

/* ----------------------------------------
   HOVER ENHANCEMENTS
   Desktop-only interactive elements
   ---------------------------------------- */
@media (min-width: 992px) {
    /* Cards that lift on hover */
    .hover-lift {
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .hover-lift:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-lg);
    }

    /* Reveal additional content on hover */
    .hover-reveal__content {
        max-height: 0;
        overflow: hidden;
        opacity: 0;
        transition: max-height 0.3s ease, opacity 0.2s ease, margin-top 0.2s ease;
    }

    .hover-reveal:hover .hover-reveal__content {
        max-height: 300px;
        opacity: 1;
        margin-top: 0.75rem;
    }

    /* Table rows with hover details */
    .hover-row {
        position: relative;
    }

    .hover-row__detail {
        display: block;
        max-height: 0;
        overflow: hidden;
        opacity: 0;
        font-size: 0.85rem;
        color: var(--text-muted);
        transition: all 0.2s ease;
    }

    .hover-row:hover .hover-row__detail {
        max-height: 80px;
        opacity: 1;
        margin-top: 0.25rem;
    }
}

/* Mobile: Show hover content by default */
@media (max-width: 991px) {
    .hover-reveal__content {
        max-height: none !important;
        opacity: 1 !important;
        margin-top: 0.75rem;
    }

    .hover-row__detail {
        display: block;
        max-height: none;
        opacity: 1;
        font-size: 0.85rem;
        color: var(--text-muted);
        margin-top: 0.25rem;
    }
}

/* ----------------------------------------
   HERO SPLIT LAYOUT
   Desktop: text left, visual right
   Mobile: text only (visual hidden)
   ---------------------------------------- */
.hero-split {
    display: grid;
    gap: 3rem;
    grid-template-columns: 1fr;
    align-items: center;
}

@media (min-width: 992px) {
    .hero-split {
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
    }

    .hero-split--text-right {
        direction: rtl;
    }

    .hero-split--text-right > * {
        direction: ltr;
    }
}

.hero-split__visual {
    display: none;
}

@media (min-width: 992px) {
    .hero-split__visual {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
```

### 0.2 Add to BaseLayout.astro

Insert after existing stylesheets, before dark-mode:

```astro
<!-- Desktop Layout Utilities -->
<link rel="stylesheet" href="/styles/desktop-layouts.css" />
```

### 0.3 Validation Checklist

- [ ] CSS file created and loads without errors
- [ ] No impact on existing pages (utilities are additive)
- [ ] Mobile breakpoint (991px) matches existing patterns
- [ ] CSS variables reference existing tokens

---

## Phase 1: Quick Wins (Low Risk)

**Goal:** Apply desktop utilities to existing page patterns without modifying components.

**Duration:** 2-4 hours per page

### 1.1 Side-by-Side Tables (DHA DataFlow)

**Current Pattern:**
```html
<p>What is DHA DataFlow?</p>
<p>DataFlow is the mandatory PSV process...</p>
<table class="hero-table">...</table>
```

**Improved Pattern:**
```html
<div class="layout-split">
    <div>
        <p>What is DHA DataFlow?</p>
        <p>DataFlow is the mandatory PSV process...</p>
    </div>
    <div class="desktop-only">
        <table class="hero-table">...</table>
    </div>
</div>

<!-- Mobile: Table in accordion -->
<div class="mobile-only">
    <details>
        <summary>What Gets Verified?</summary>
        <table class="hero-table">...</table>
    </details>
</div>
```

**Why This Works:**
- Desktop: Text and table visible simultaneously
- Mobile: Table hidden behind accordion (reduces scroll)
- SEO: Table content in DOM for both versions
- No component changes needed

### 1.2 Feature Grids to Multi-Column

**Current CSS in page-specific styles:**
```css
.feature-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}
```

**Add desktop-specific class:**
```html
<div class="feature-grid grid-desktop-4">
```

**Result:**
- Mobile: 1 column (stacks naturally)
- Tablet: 2 columns (auto-fit kicks in)
- Desktop: Forced 4 columns (more compact)

### 1.3 Timeline to Horizontal (Desktop)

**Current:** 6 vertical steps with connecting line

**Desktop Enhancement:**
```css
@media (min-width: 992px) {
    .timeline-section {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }

    .timeline-step {
        flex-direction: column;
        text-align: center;
    }

    /* Horizontal connecting line */
    .timeline-step:not(:last-child)::after {
        content: '';
        position: absolute;
        right: -1rem;
        top: 50%;
        width: calc(100% + 2rem);
        height: 2px;
        background: var(--accent-coral);
        opacity: 0.3;
    }
}
```

**Result:**
- Mobile: Vertical timeline (unchanged)
- Desktop: 2 rows × 3 columns, horizontal flow

### 1.4 Pages to Apply Quick Wins

| Page | Improvement | Effort |
|------|-------------|--------|
| `/specialized/medical/dha-dataflow/` | Split hero table, 4-col features | 2 hours |
| `/specialized/medical/` | 3-col mosaic already done | 0 hours |
| `/legal-translation-dubai/` | Side-by-side checklist + process | 1 hour |
| `/personal-documents/` | Multi-column vital records cards | 1 hour |
| `/services/attestation/` | Embassy chain as horizontal steps | 2 hours |

---

## Phase 2: Component Evolution (Medium Risk)

**Goal:** Add optional props to existing components to enable desktop layouts.

**Duration:** 3-4 hours per component

### 2.1 ProcessSteps Component Enhancement

**File:** `src/components/ProcessSteps.astro`

**Current Interface:**
```typescript
interface Props {
    title: string;
    steps: ProcessStep[];
}
```

**Enhanced Interface:**
```typescript
interface Props {
    title: string;
    steps: ProcessStep[];
    layout?: 'vertical' | 'horizontal' | 'auto'; // NEW
}
```

**Implementation Strategy:**
```astro
---
const { title, steps, layout = 'auto' } = Astro.props;

const gridClass = {
    'vertical': '',
    'horizontal': 'process-grid--horizontal',
    'auto': 'process-grid--auto'
}[layout];
---

<div class={`ot-process-grid ${gridClass}`}>
    ...
</div>

<style>
/* Default: vertical on all screens */
.ot-process-grid { ... }

/* Horizontal: side-by-side on desktop */
@media (min-width: 992px) {
    .process-grid--horizontal {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
}

/* Auto: vertical on mobile, horizontal on desktop for 4 or fewer steps */
@media (min-width: 992px) {
    .process-grid--auto:has(.ot-process-step:nth-child(-n+4):last-child) {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
}
</style>
```

**Usage:**
```astro
<ProcessSteps
    title="How It Works"
    steps={processSteps}
    layout="horizontal"  <!-- NEW PROP -->
/>
```

### 2.2 AccordionSection Side-by-Side Option

**Current:** Single accordion column

**Enhanced:** Accordion left, summary right on desktop

```astro
---
interface Props {
    title: string;
    items: AccordionItem[];
    id?: string;
    sideContent?: string; // NEW: HTML content for right side
}
---

<section class="ot-accordion-section">
    <div class="container">
        <h2>{title}</h2>
        <div class={sideContent ? 'layout-split' : ''}>
            <div class="ot-accordion">
                {items.map(...)}
            </div>
            {sideContent && (
                <aside class="desktop-only accordion-sidebar">
                    <Fragment set:html={sideContent} />
                </aside>
            )}
        </div>
    </div>
</section>
```

### 2.3 New Component: TableOfContents.astro

**Purpose:** Sticky sidebar navigation for long pages

```astro
---
interface Props {
    sections: Array<{
        id: string;
        label: string;
        icon?: string;
    }>;
}

const { sections } = Astro.props;
---

<nav class="sidebar-nav desktop-only" aria-label="Table of contents">
    <h3 class="sidebar-nav__title">On This Page</h3>
    <ul class="sidebar-nav__list">
        {sections.map(section => (
            <li>
                <a
                    href={`#${section.id}`}
                    class="sidebar-nav__link"
                    data-section={section.id}
                >
                    {section.icon && <i class={section.icon}></i>}
                    {section.label}
                </a>
            </li>
        ))}
    </ul>
</nav>

<script>
// Intersection Observer for active state
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.sidebar-nav__link');
    const sections = document.querySelectorAll('section[id]');

    if (links.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                links.forEach(link => {
                    const isActive = link.getAttribute('data-section') === id;
                    link.classList.toggle('is-active', isActive);
                });
            }
        });
    }, {
        rootMargin: '-100px 0px -66% 0px',
        threshold: 0
    });

    sections.forEach(section => observer.observe(section));
});
</script>
```

**Integration Pattern:**
```astro
<div class="layout-with-sidebar">
    <TableOfContents sections={[
        { id: 'overview', label: 'Overview' },
        { id: 'requirements', label: 'Requirements' },
        { id: 'process', label: 'Process' },
        { id: 'pricing', label: 'Pricing' },
        { id: 'faq', label: 'FAQ' }
    ]} />

    <main>
        <section id="overview">...</section>
        <section id="requirements">...</section>
        <!-- etc -->
    </main>
</div>
```

### 2.4 Component Migration Order

| Order | Component | Risk | Reason |
|-------|-----------|------|--------|
| 1 | TableOfContents.astro | Low | New component, no existing usage |
| 2 | ProcessSteps.astro | Low | Additive prop, default unchanged |
| 3 | AccordionSection.astro | Medium | Existing usage needs testing |
| 4 | ServiceLayout.astro | Medium | Many pages depend on it |

---

## Phase 3: Layout Transformation (Higher Risk)

**Goal:** Create new layout patterns for desktop-optimized service pages.

**Duration:** 8-12 hours for pilot page

### 3.1 Split Hero Pattern

**Current Hero (ServiceLayout.astro:176-207):**
- Single column with `.col--8`
- All content stacked vertically
- Table embedded in `heroIntro` HTML string

**Proposed Split Hero:**
```astro
<section class="section section--hero bg-dark">
    <div class="container">
        <div class="hero-split">
            <!-- Left: Text content -->
            <div class="hero-split__text">
                <h1>{heroTitle}</h1>
                <h2>{heroSubtitle}</h2>
                <p>{heroIntroShort}</p>
                <ul class="service-snapshot">...</ul>
                <a class="btn btn--primary">CTA</a>
            </div>

            <!-- Right: Visual content (desktop only) -->
            <div class="hero-split__visual">
                {heroVisual === 'table' && <table>...</table>}
                {heroVisual === 'process' && <ProcessMini steps={3}/>}
                {heroVisual === 'document' && <DocumentPreview />}
            </div>
        </div>
    </div>
</section>
```

**Key Changes:**
1. Hero intro is **shorter** (move details to body sections)
2. Visual panel shows **summary** content, not full table
3. Mobile **hides visual** (content moved to body)

### 3.2 Content-Visual Pairing

For sections below the hero, pair explanation with visual:

```astro
<section id="dataflow" class="section">
    <div class="container">
        <div class="layout-split layout-split--60-40">
            <article>
                <h2>What is DHA DataFlow?</h2>
                <p>DataFlow is the mandatory Primary Source Verification...</p>
                <p>Healthcare professionals must complete this verification...</p>
            </article>
            <aside class="desktop-only">
                <table class="verification-table">...</table>
            </aside>
        </div>

        <!-- Mobile: Full table visible -->
        <div class="mobile-only">
            <details open>
                <summary>Verification Details</summary>
                <table class="verification-table">...</table>
            </details>
        </div>
    </div>
</section>
```

### 3.3 Pilot Page: DHA DataFlow

**Why This Page:**
- Recently created (December 27, 2025)
- Complex content (ideal test case)
- Specific audience (healthcare professionals)
- Not a high-traffic hub page (lower risk)

**Transformation Plan:**

| Section | Current | Proposed Desktop | Mobile Change |
|---------|---------|------------------|---------------|
| Hero | 600 words inline | 150 words + visual | Shorter intro |
| What is DataFlow | Text then table | Side-by-side | Table in accordion |
| Timeline | 6 vertical steps | 2×3 grid | No change |
| Features | 4 stacked cards | 2×2 grid | No change |
| Challenges | 5 stacked items | 2-col list | No change |
| Pricing | 3 cards | Horizontal row | No change |
| FAQ | Accordion | With sidebar nav | No change |

### 3.4 Estimated Scroll Reduction

| Metric | Current | After Phase 3 |
|--------|---------|---------------|
| Desktop page height | ~4,500px | ~2,800px |
| Scroll reduction | — | 38% |
| Content visible at 1080p | ~850px | ~850px (same) |
| Sections visible above fold | 1 | 1.5 |

---

## Phase 4: Advanced Interactions

**Goal:** Add polish interactions for desktop users.

**Duration:** 4-6 hours

### 4.1 Hover-State Table Rows

For verification tables, show additional detail on hover:

```html
<tr class="hover-row">
    <td>
        Educational Qualifications
        <span class="hover-row__detail">
            Medical degrees verified with issuing universities
        </span>
    </td>
    <td>MBBS, MD, specialty certificates</td>
</tr>
```

**Mobile Behavior:** Detail text is always visible.

### 4.2 Tooltip System

For technical terms, show definitions on hover:

```html
<abbr class="tooltip" data-tip="Primary Source Verification">PSV</abbr>
```

```css
@media (min-width: 992px) {
    .tooltip {
        position: relative;
        cursor: help;
        border-bottom: 1px dotted var(--text-muted);
    }

    .tooltip::after {
        content: attr(data-tip);
        position: absolute;
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        padding: 0.5rem 0.75rem;
        background: var(--surface-navy);
        color: var(--text-on-dark);
        font-size: 0.85rem;
        border-radius: 6px;
        white-space: nowrap;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.2s, visibility 0.2s;
    }

    .tooltip:hover::after {
        opacity: 1;
        visibility: visible;
    }
}
```

### 4.3 Smooth Scroll + Active Section

When clicking TOC links:

```javascript
// Already in TableOfContents.astro
link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.getElementById(link.dataset.section);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
});
```

### 4.4 Keyboard Navigation

For accessibility, add keyboard support to TOC:

```javascript
// Arrow key navigation within TOC
tocNav.addEventListener('keydown', (e) => {
    const links = [...tocNav.querySelectorAll('.sidebar-nav__link')];
    const current = document.activeElement;
    const index = links.indexOf(current);

    if (e.key === 'ArrowDown' && index < links.length - 1) {
        e.preventDefault();
        links[index + 1].focus();
    }
    if (e.key === 'ArrowUp' && index > 0) {
        e.preventDefault();
        links[index - 1].focus();
    }
});
```

---

## Testing & Validation Strategy

### Viewport Testing Matrix

| Viewport | Device | Breakpoint | Priority |
|----------|--------|------------|----------|
| 375×667 | iPhone SE | Mobile | High |
| 414×896 | iPhone 11 | Mobile | High |
| 768×1024 | iPad | Tablet | Medium |
| 1024×768 | iPad Landscape | Tablet | Medium |
| 1366×768 | Laptop | Desktop | High |
| 1920×1080 | Desktop | Desktop | High |
| 2560×1440 | Large Desktop | Desktop | Low |

### Performance Metrics to Monitor

| Metric | Target | Current | Post-Implementation |
|--------|--------|---------|---------------------|
| First Contentful Paint | <1.0s | TBD | TBD |
| Cumulative Layout Shift | <0.05 | TBD | TBD |
| CSS File Size | <50KB | TBD | TBD |
| Total Page Size | <1.5MB | TBD | TBD |

### Visual Regression Testing

For each phase, capture screenshots at:
- 375px width (mobile)
- 768px width (tablet)
- 1200px width (desktop)

Compare before/after for:
- Text readability
- Button accessibility
- Grid alignment
- Spacing consistency

### Accessibility Checklist

- [ ] All interactive elements have 44px touch targets
- [ ] Color contrast meets WCAG AA (4.5:1)
- [ ] Focus indicators visible on all links
- [ ] Screen reader announces TOC correctly
- [ ] Keyboard navigation works without mouse

---

## Rollback Plans

### Phase 0 Rollback
**Risk:** Minimal
**Action:** Remove `<link>` from BaseLayout.astro

### Phase 1 Rollback
**Risk:** Low
**Action:** Remove utility classes from affected pages

### Phase 2 Rollback
**Risk:** Medium
**Action:** Revert component files to previous version

### Phase 3 Rollback
**Risk:** Higher
**Action:**
1. Keep old page version as `_backup.astro`
2. If issues, rename backup to replace modified version
3. Clear Vercel cache

---

## Implementation Order Summary

```
Week 1: Phase 0 + Phase 1 (Low Risk)
├── Day 1: Create desktop-layouts.css
├── Day 2: Test utilities on staging
├── Day 3-5: Apply quick wins to 5 pages

Week 2: Phase 2 (Medium Risk)
├── Day 1-2: TableOfContents component
├── Day 3: ProcessSteps enhancement
├── Day 4-5: Testing and refinement

Week 3: Phase 3 (Higher Risk)
├── Day 1-3: DHA DataFlow pilot page
├── Day 4: Testing at all viewports
├── Day 5: Performance validation

Week 4: Phase 4 + Rollout
├── Day 1-2: Advanced interactions
├── Day 3-5: Apply patterns to remaining pages
```

---

## Success Criteria

| Criterion | Measurement | Target |
|-----------|-------------|--------|
| Desktop scroll reduction | Page height comparison | 35-45% reduction |
| Mobile experience unchanged | Visual regression | No differences |
| Performance maintained | Lighthouse score | 90+ |
| SEO preserved | Search Console | No indexing drops |
| User engagement | Analytics | Time on page +10% |

---

## Next Steps

1. **Approve Plan:** Review this document and confirm approach
2. **Phase 0:** Create `desktop-layouts.css` and test
3. **Pilot Page:** Select DHA DataFlow as first implementation
4. **Iterate:** Refine based on testing, then expand

---

*Last Updated: December 27, 2025 — Version 2.0*
