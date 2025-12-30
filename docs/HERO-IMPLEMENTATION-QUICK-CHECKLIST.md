# Hero Image Quick Implementation Checklist

**For:** Mobile-friendly workflow via GitHub Web UI
**Created:** December 30, 2025

---

## Phase 1 Priority List (Do These First)

### Top 12 Pages by Impact

| # | Page | Path | Hero Key |
|---|------|------|----------|
| 1 | Homepage | `/src/pages/index.astro` | `city-cyber` |
| 2 | Legal Translation | `/src/pages/services/legal-translation/index.astro` | `vis-translation` |
| 3 | Personal Documents | `/src/pages/personal-documents/index.astro` | `office-team` |
| 4 | About | `/src/pages/about.astro` | `office-team` |
| 5 | Legal Hub | `/src/pages/legal-translation-dubai/index.astro` | `vis-translation` |
| 6 | Medical Hub | `/src/pages/specialized/medical/index.astro` | `medical-cyber` |
| 7 | DHA DataFlow | `/src/pages/specialized/medical/dha-dataflow/index.astro` | `medical-cyber` |
| 8 | Specialized Hub | `/src/pages/specialized-translation/index.astro` | `technical-translation` |
| 9 | Attestation Hub | `/src/pages/services/attestation/index.astro` | `authenticated` |
| 10 | MOFA | `/src/pages/services/attestation/mofa/index.astro` | `authenticated` |
| 11 | Dubai Locations | `/src/pages/locations/dubai/index.astro` | `city-cyber` |
| 12 | Contact | `/src/pages/contact.astro` | `office-team` |

---

## How to Add Hero Image (Copy-Paste)

### Step 1: Find the Props Object

Look for `ServiceLayout` props in the frontmatter:

```astro
---
const props = {
  title: "...",
  description: "...",
  heroTitle: "...",
  // ADD HERE ↓
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
  heroImage: "vis-translation",  // ← ADD THIS
  snapshot: [...],
  breadcrumbs: [...]
};
---
```

---

## Image Decision Tree

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

## Available Hero Keys

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

## Pre-Flight Checks

Before adding heroes:

- [ ] Phase 0 complete (images compressed)
- [ ] WebP versions exist
- [ ] `heroImages.ts` registry exists
- [ ] ServiceLayout supports image keys

---

## Common Issues & Fixes

### Image Not Showing

```
Cause: Wrong key or typo
Fix: Check key exists in heroImages.ts
```

### Gradient Too Dark

```
Cause: CSS opacity too high
Fix: Adjust in hero-enhancements.css
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

## Batch Update Template

For updating multiple files at once:

```typescript
// Files to update (copy path, change key)

// Legal Silo - ALL use vis-translation
"/src/pages/legal-translation-dubai/index.astro"
"/src/pages/legal/index.astro"
"/src/pages/legal/contracts/index.astro"
"/src/pages/legal/contracts/nda/index.astro"
// ...add heroImage: "vis-translation",

// Personal Silo - Mix of office-team and city-cyber
"/src/pages/personal-documents/index.astro"     // office-team
"/src/pages/personal/vital-records/index.astro" // office-team
"/src/pages/personal/immigration/index.astro"   // city-cyber
"/src/pages/personal/academic/index.astro"      // cyber-smith
```

---

## Testing Checklist

After adding hero to a page:

- [ ] Image loads (check network tab)
- [ ] Gradient overlay visible
- [ ] Text readable over image
- [ ] Mobile responsive
- [ ] No console errors
- [ ] CTA buttons accessible

---

## Emergency Rollback

If something breaks:

1. Remove `heroImage: "...",` line from page
2. Commit with message: `ROLLBACK: Remove hero from [page]`
3. Push immediately

---

*Quick reference for OnlineTranslation.ae hero implementation*
