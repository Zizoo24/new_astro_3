# Content Creation Checklist

**MANDATORY: Follow this checklist for EVERY new page or content update.**

This document ensures consistency, proper navigation integration, and SEO compliance for all new content on OnlineTranslation.ae.

---

## Pre-Creation Checklist

### 1. Read CLAUDE.md First
- [ ] Review Part I: Critical Facts (Hague Convention status)
- [ ] Review Part V: Content Standards (readability rules)
- [ ] Review Part VI: Brand Codex (voice & tone)
- [ ] Review Part VII: UI/UX Standards (contrast rules)

### 2. Determine Page Location
- [ ] Identify correct silo (Legal, Personal, Attestation, Specialized, Locations, Resources)
- [ ] Determine parent page if nested
- [ ] Choose URL slug (lowercase, hyphens, no special chars)

---

## Page Creation Steps

### Step 1: Create the Page File

```
src/pages/{silo}/{slug}/index.astro
```

**Required elements:**
- [ ] Import correct layout (BaseLayout, ServiceLayout, or CategoryLayout)
- [ ] Set page title (max 60 characters)
- [ ] Set meta description (max 155 characters)
- [ ] Add breadcrumb navigation
- [ ] Include FAQPage schema if FAQs present
- [ ] Add RelatedServices component with correct `pageKey`

### Step 2: Apply Contrast Rules (CRITICAL)

**For hero sections and dark backgrounds:**

```css
/* NEVER use these on navy/dark backgrounds: */
--text-muted
--text-secondary
--text-subtle
gray colors

/* ALWAYS use these on navy/dark backgrounds: */
--text-on-dark          /* Primary text */
--text-on-dark-muted    /* Only if 9:1+ contrast */
--link-on-dark          /* Links */
opacity: 0.95           /* For subtle hierarchy, NOT gray */
```

**Hero section text must be:**
```css
.hero-intro {
  color: var(--text-on-dark);  /* Bright white */
  opacity: 0.95;               /* NOT gray color */
}
```

### Step 3: Update Navigation

**File:** `src/data/navigation.ts`

#### Desktop Navigation (mainNav)
Add to appropriate silo's `children` array:
```typescript
{ label: 'Page Name', href: '/silo/slug/' }
```

For nested pages (child of another page):
```typescript
{
  label: 'Parent Page',
  href: '/silo/parent/',
  children: [
    { label: 'Child Page', href: '/silo/parent/child/' }
  ]
}
```

#### Mobile Navigation (mobileNav.accordions)
Add to appropriate accordion's `children` array:
```typescript
{ label: 'Page Name', href: '/silo/slug/' }
```

### Step 4: Update Service Links

**File:** `src/data/serviceLinks.ts`

#### Add Service Link Entry
```typescript
pageKey: {
  url: "/silo/slug/",
  text: "Short name",
  full: "Full descriptive name",
  icon: "fas fa-icon-name"
},
```

#### Add Page Relationships
```typescript
pageKey: {
  related: ["relatedPage1", "relatedPage2"],
  family: ["siblingPage1", "siblingPage2"],
  crossSilo: ["pageFromOtherSilo"],
  locations: ["dubai", "abuDhabi"]
},
```

### Step 5: Regenerate Search Index

**Run this command:**
```bash
npm run search:generate
```

This updates `public/scripts/search-index.js` with the new page.

### Step 6: Validate Navigation

**Run this command:**
```bash
npm run nav:check
```

Ensure output shows:
- "All navigation links are valid!"
- No missing pages

---

## Post-Creation Checklist

### Content Quality
- [ ] Sentences under 25 words (target 15-20)
- [ ] Paragraphs 3-4 sentences max
- [ ] Lists for 3+ items
- [ ] Subheadings every 2-3 paragraphs
- [ ] No banned vocabulary (see CLAUDE.md Part VI)
- [ ] UAE-specific entities mentioned (GDRFA, MOFA, etc.)

### SEO
- [ ] Title under 60 characters
- [ ] Description under 155 characters
- [ ] FAQPage schema if FAQs present
- [ ] BreadcrumbList schema (automatic with Breadcrumb component)
- [ ] Internal links to related pages (8+ recommended)

### Accessibility
- [ ] Color contrast 4.5:1 minimum for text
- [ ] No gray text on navy backgrounds
- [ ] Touch targets 44x44px minimum
- [ ] ARIA labels on interactive elements

### Final Validation
- [ ] Run `npm run nav:check` — all links valid
- [ ] Run `npm run search:generate` — index updated
- [ ] Visual check in browser — no contrast issues
- [ ] Mobile responsive check

---

## Commit Checklist

Before committing, ensure these files are staged:

```bash
git add src/pages/{new-page}/
git add src/data/navigation.ts
git add src/data/serviceLinks.ts
git add public/scripts/search-index.js
```

**Commit message format:**
```
Add {page-name} page under {parent/silo}

- Create new page at /{url-path}/
- Update navigation (desktop and mobile)
- Add service links and page relationships
- Regenerate search index
```

---

## Quick Reference: Color Tokens for Dark Backgrounds

| Use Case | Token | Notes |
|----------|-------|-------|
| Primary text | `--text-on-dark` | Bright white (#f4f7fc) |
| Subtle text | `--text-on-dark` + `opacity: 0.95` | NOT gray |
| Links | `--link-on-dark` | Cyan (#7fd1ff) |
| Link hover | `--link-on-dark-hover` | Gold (#ffe178) |
| Borders | `--border-on-dark` | rgba(255,255,255,0.2) |

**NEVER use on dark backgrounds:**
- `--text-muted`
- `--text-secondary`
- `--text-subtle`
- Any hardcoded gray (#64748b, #94a3b8, etc.)

---

## Recent Lessons Learned

### December 2024: Gray-on-Navy Fix
- **Issue:** Hero intro text using `--text-on-dark-muted` appeared too gray
- **Fix:** Use `--text-on-dark` with `opacity: 0.95` for hierarchy
- **Prevention:** Global CSS rule in `contrast-fixes.css` now enforces bright text on all `.bg-dark`, `[data-theme="dark"]`, and `.hero-section` elements

### December 2024: Navigation Updates
- **Issue:** New pages not appearing in navigation or search
- **Fix:** Must update BOTH `navigation.ts` AND run `npm run search:generate`
- **Prevention:** This checklist now requires both steps

---

*Last Updated: December 26, 2024*
