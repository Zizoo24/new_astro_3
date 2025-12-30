# Hero Image Implementation — Quick Reference Checklist

**Mobile-Friendly Workflow Guide**
**Created:** December 30, 2025

---

## PHASE 0: FOUNDATION (Do This First!)

### CRITICAL: Image Optimization

#### Files to Delete Immediately (Saves 7.14 MB)

```
✅ DELETED: /public/assets/images/resources/authenticated-translation-hero 2.png (7.14 MB)
⚠️ PENDING: /public/assets/images/logos/moj.png (1.38 MB - use moj-uae.svg instead)
```

#### Images to Compress (Use Squoosh.app or TinyPNG.com)

| File | Current | Target |
|------|---------|--------|
| technical-translation.png | 911 KB | 280 KB |
| vis-translation.png | 760 KB | 250 KB |
| city-cyber.png | 724 KB | 240 KB |
| medical-cyber.png | 691 KB | 230 KB |
| cyber-smith.png | 583 KB | 200 KB |
| ot-man.png | 519 KB | 180 KB |
| office-team.png | 374 KB | 150 KB |

**Tools:**
- Squoosh.app (upload image, compress, download)
- TinyPNG.com (drag-drop, auto-optimize)

---

## PHASE 1: HIGH-IMPACT PAGES (Week 1)

### Top 12 Pages by Priority

| # | Page | Correct Path | Hero Key |
|---|------|--------------|----------|
| 1 | Homepage | `src/pages/index.astro` | `city-cyber` |
| 2 | Legal Translation | `src/pages/services/legal-translation/index.astro` | `vis-translation` |
| 3 | Personal Documents | `src/pages/personal-documents/index.astro` | `office-team` |
| 4 | About | `src/pages/about.astro` | `office-team` |
| 5 | Legal Hub | `src/pages/legal-translation-dubai/index.astro` | `vis-translation` |
| 6 | Medical Hub | `src/pages/specialized/medical/index.astro` | `medical-cyber` |
| 7 | DHA DataFlow | `src/pages/specialized/medical/dha-dataflow/index.astro` | `medical-cyber` |
| 8 | Specialized Hub | `src/pages/specialized-translation/index.astro` | `technical-translation` |
| 9 | Attestation Hub | `src/pages/services/attestation/index.astro` | `authenticated` |
| 10 | MOFA | `src/pages/services/attestation/mofa/index.astro` | `authenticated` |
| 11 | Dubai Locations | `src/pages/locations/dubai/index.astro` | `city-cyber` |
| 12 | Contact | `src/pages/contact.astro` | `office-team` |

---

### Day 1: Homepage + About

**File:** `src/pages/index.astro`
```astro
heroImage: "city-cyber",
```

**File:** `src/pages/about.astro`
```astro
heroImage: "office-team",
```

**Verify:** Visit site, check images load, test on mobile

---

### Day 2: Top Service Pages

**File:** `src/pages/services/legal-translation/index.astro`
```astro
heroImage: "vis-translation",
```
*(Note: This page already has heroImage set)*

**File:** `src/pages/personal-documents/index.astro`
```astro
heroImage: "office-team",
```

**Verify:** Check both pages, test mobile

---

### Day 3: High-Authority Pages

**File:** `src/pages/legal-translation-dubai/index.astro`
```astro
heroImage: "vis-translation",
```

**File:** `src/pages/specialized/medical/index.astro`
```astro
heroImage: "medical-cyber",
```

**File:** `src/pages/specialized/medical/dha-dataflow/index.astro`
```astro
heroImage: "medical-cyber",
```

**File:** `src/pages/specialized-translation/index.astro`
```astro
heroImage: "technical-translation",
```

**Verify:** Test all 4 pages

---

### Day 4: Complete Phase 1

**File:** `src/pages/services/attestation/index.astro`
```astro
heroImage: "authenticated",
```

**File:** `src/pages/services/attestation/mofa/index.astro`
```astro
heroImage: "authenticated",
```

**File:** `src/pages/locations/dubai/index.astro`
```astro
heroImage: "city-cyber",
```

**File:** `src/pages/contact.astro`
```astro
heroImage: "office-team",
```

**Verify:** All 12 Phase 1 pages live

---

## HOW TO ADD HERO IMAGE

### Step 1: Find the Props Object

Look for `ServiceLayout` props in the frontmatter:

```astro
---
const props = {
  title: "...",
  description: "...",
  heroTitle: "...",
  // ADD heroImage HERE ↓
```

### Step 2: Add This Line

```typescript
heroImage: "city-cyber",  // Change key as needed
```

### Full Example

```astro
---
const props = {
  title: "Legal Translation Dubai",
  description: "MOJ-certified legal translation...",
  heroTitle: "Legal Translation Dubai",
  heroSubtitle: "MOJ-Certified",
  heroIntro: "...",
  heroImage: "vis-translation",  // ← ADD THIS LINE
  snapshot: [...],
  breadcrumbs: [...]
};
---
```

---

## IMAGE DECISION TREE

```
What type of page?
├── Legal/Court/Contract → vis-translation
├── Medical/Healthcare/DHA → medical-cyber
├── Technical/Engineering → technical-translation
├── Academic/Education/Blog → cyber-smith
├── Location/Dubai/Corporate → city-cyber
├── Attestation/Embassy/MOFA → authenticated
├── Personal/About/Contact/Resources → office-team
├── Translator Bio → ot-man
├── Palm Jumeirah → palm-jumeirah
└── Sharjah → sharjah
```

---

## AVAILABLE HERO KEYS

| Key | Best For |
|-----|----------|
| `city-cyber` | Dubai, corporate, locations, business |
| `vis-translation` | Legal, courts, contracts, MOJ |
| `medical-cyber` | Healthcare, DHA, medical |
| `technical-translation` | Engineering, technical, industries |
| `cyber-smith` | Academic, digital, education, blog |
| `office-team` | Personal, about, contact, resources |
| `ot-man` | Translator bio page |
| `authenticated` | Attestation, embassy, MOFA |
| `palm-jumeirah` | Palm location only |
| `sharjah` | Sharjah pages only |

---

## MOBILE WORKFLOW (GitHub Web UI)

### Using GitHub on iPhone

1. Navigate to: `github.com/Zizoo24/new_astro_3/blob/main/src/pages/[path]`
2. Tap pencil icon (Edit)
3. Find the frontmatter section (between `---` markers)
4. Add `heroImage: "image-key",` after other hero props
5. Scroll to bottom → Commit changes
6. Add commit message: "Add hero image to [page name]"
7. Commit directly to main branch
8. Wait ~2 minutes for Vercel deployment

### Quick Copy-Paste Snippets

**Legal Pages:** `heroImage: "vis-translation",`
**Personal/Resource Pages:** `heroImage: "office-team",`
**Location Pages:** `heroImage: "city-cyber",`
**Medical Pages:** `heroImage: "medical-cyber",`
**Technical Pages:** `heroImage: "technical-translation",`
**Academic Pages:** `heroImage: "cyber-smith",`

---

## PHASE 1 SUCCESS CHECK

### Performance Check (Use PageSpeed Insights)

- [ ] Homepage LCP <2.5s
- [ ] About page loads properly on mobile
- [ ] Service pages show images correctly
- [ ] No console errors

### Visual Check

- [ ] Gradient overlay visible
- [ ] Text readable on all images
- [ ] CTA buttons prominent
- [ ] Scroll indicator works

---

## BATCH UPDATE TEMPLATE

For updating multiple files at once:

```typescript
// Legal Silo - ALL use vis-translation
"src/pages/legal-translation-dubai/index.astro"
"src/pages/legal/index.astro"
"src/pages/legal/contracts/index.astro"
"src/pages/legal/contracts/nda/index.astro"
"src/pages/legal/contracts/spa/index.astro"
"src/pages/legal/contracts/mou/index.astro"
"src/pages/legal/contracts/lease/index.astro"
"src/pages/legal/corporate/index.astro"
"src/pages/legal/corporate/poa/index.astro"
"src/pages/legal/corporate/moa/index.astro"
"src/pages/legal/corporate/resolution/index.astro"
"src/pages/legal/corporate/license/index.astro"
"src/pages/legal/litigation/index.astro"
"src/pages/legal/wills/index.astro"

// Personal Silo - Mix of office-team and city-cyber
"src/pages/personal-documents/index.astro"     // office-team
"src/pages/personal/vital-records/index.astro" // office-team
"src/pages/personal/immigration/index.astro"   // city-cyber
"src/pages/personal/academic/index.astro"      // cyber-smith
```

---

## TESTING CHECKLIST

After adding hero to a page:

- [ ] Image loads (check network tab)
- [ ] Gradient overlay visible
- [ ] Text readable over image
- [ ] Mobile responsive
- [ ] No console errors
- [ ] CTA buttons accessible

---

## COMMON ISSUES & FIXES

### Image Not Showing
```
Cause: Wrong key or typo
Fix: Check key exists in heroImages.ts
```

### Gradient Too Dark
```
Cause: CSS opacity too high
Fix: Adjust in hero-enhancements.css (line 63-67)
```

### Mobile Layout Broken
```
Cause: Image too large
Fix: Compress to <200KB
```

### Slow Loading
```
Cause: No WebP version
Fix: Generate WebP with cwebp
```

---

## WHEN TO PAUSE & REVIEW

### Stop and Check If:
- Images not loading on mobile
- Page load time increased >2 seconds
- Text unreadable on hero images
- Layout broken on any device
- Console shows errors

### Resume When:
- All images loading correctly
- Performance metrics acceptable
- Mobile UX validated
- No critical issues

---

## EMERGENCY ROLLBACK

If something breaks:

1. Remove `heroImage: "...",` line from page
2. Commit with message: `ROLLBACK: Remove hero from [page]`
3. Push immediately

---

## PHASE 1 PROGRESS TRACKER

- [ ] Homepage
- [ ] About
- [ ] Legal Translation
- [ ] Personal Documents
- [ ] Legal Hub
- [ ] Medical Hub
- [ ] DHA DataFlow
- [ ] Specialized Hub
- [ ] Attestation Hub
- [ ] MOFA Attestation
- [ ] Dubai Location
- [ ] Contact

**Progress:** ___/12 complete

---

*Quick reference for OnlineTranslation.ae hero implementation*
*Refer to full plan: `HERO-IMAGE-ROLLOUT-PHASED.md`*
