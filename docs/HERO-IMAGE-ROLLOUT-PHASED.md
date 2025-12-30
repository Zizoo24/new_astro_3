# Hero Image Implementation — Strategic Phased Rollout

**Project:** OnlineTranslation.ae
**Repository:** github.com/Zizoo24/new_astro_3
**Created:** December 30, 2025
**Status:** READY TO EXECUTE

---

## Strategic Overview

### Current Situation

- ✅ Hero system **already built** in ServiceLayout.astro
- ✅ Gradient overlay CSS working (135° navy gradient)
- ✅ 7 primary hero images available
- ✅ `heroImages.ts` registry created
- ❌ Only 2 of 98 pages currently use heroes
- ⚠️ Images are oversized (500KB-900KB, need compression)
- ⚠️ No WebP versions for performance

### Success Criteria

| Metric | Target |
|--------|--------|
| Image Size | <200KB (WebP), <300KB (JPG fallback) |
| Coverage | 85+ pages (90%+) |
| LCP Improvement | 1.5-2 seconds on service pages |
| SEO | Proper alt text, lazy loading, dimensions |
| Consistency | All images follow naming convention |

---

## Phase 0: Foundation (BLOCKING)

**Duration:** 1-2 hours
**Priority:** CRITICAL — Must complete before any hero implementation

### Task 0.1: Delete Oversized Files

```bash
# Saves 8.5 MB:
rm "public/assets/images/resources/authenticated-translation-hero 2.png"  # 7.14 MB
rm "public/assets/images/logos/moj.png"  # 1.38 MB (use SVG)
```

### Task 0.2: Compress Images

| File | Current | Target |
|------|---------|--------|
| technical-translation.png | 911 KB | 280 KB |
| vis-translation.png | 760 KB | 250 KB |
| city-cyber.png | 724 KB | 240 KB |
| medical-cyber.png | 691 KB | 230 KB |
| cyber-smith.png | 583 KB | 200 KB |
| ot-man.png | 519 KB | 180 KB |
| office-team.png | 374 KB | 150 KB |

**Tools:** Squoosh.app, TinyPNG.com, or ImageMagick

### Task 0.3: Generate WebP Versions

```bash
# Using cwebp
for file in public/assets/images/onedrive/hero/*.png; do
  cwebp -q 85 "$file" -o "${file%.png}.webp"
done
```

### Phase 0 Gate

- [ ] All images compressed to target
- [ ] WebP versions generated
- [ ] Duplicate files deleted
- [ ] Test page verified

**🚨 Do NOT proceed until all Phase 0 complete**

---

## Phase 1: High-Impact Core Pages (Week 1)

**Duration:** 2-3 days
**Target:** 12 pages
**Traffic Impact:** ~60%

### Tier 1A: Critical Landing (4 pages)

| Page | Path | Hero Image | Traffic |
|------|------|------------|---------|
| Homepage | `/` | city-cyber | 28% |
| Legal Translation | `/services/legal-translation/` | vis-translation | 12% |
| Personal Documents | `/personal-documents/` | office-team | 8% |
| About | `/about/` | office-team | 6% |

### Tier 1B: High-Authority (8 pages)

| Page | Path | Hero Image |
|------|------|------------|
| Legal Hub | `/legal-translation-dubai/` | vis-translation |
| Medical Hub | `/specialized/medical/` | medical-cyber |
| DHA DataFlow | `/specialized/medical/dha-dataflow/` | medical-cyber |
| Specialized Hub | `/specialized-translation/` | technical-translation |
| Attestation Hub | `/services/attestation/` | authenticated |
| MOFA | `/services/attestation/mofa/` | authenticated |
| Locations Hub | `/locations/dubai/` | city-cyber |
| Contact | `/contact/` | office-team |

### Implementation

Add to frontmatter of each page:

```astro
heroImage: "city-cyber",  // Use key from heroImages.ts
```

### Phase 1 Gate

- [ ] 12 pages have hero images
- [ ] LCP <2.5s on homepage
- [ ] LCP <3s on service pages
- [ ] No mobile issues
- [ ] No console errors

---

## Phase 2: Legal Silo (Week 2)

**Duration:** 3-4 days
**Target:** 13 pages

### All Pages Use: `vis-translation`

```
/legal/
/legal/contracts/
/legal/contracts/nda/
/legal/contracts/spa/
/legal/contracts/mou/
/legal/contracts/lease/
/legal/corporate/
/legal/corporate/poa/
/legal/corporate/moa/
/legal/corporate/resolution/
/legal/corporate/license/
/legal/litigation/
/legal/wills/
```

### Phase 2 Gate

- [ ] All 13 pages deployed
- [ ] Consistent image across silo
- [ ] No SEO regressions
- [ ] Performance stable

---

## Phase 3: Personal + Specialized (Week 3)

**Duration:** 4-5 days
**Target:** 21 pages

### Personal Silo (13 pages)

| Category | Hero Image |
|----------|------------|
| Vital Records (5) | office-team |
| Immigration (4) | city-cyber |
| Academic (3) | cyber-smith |
| Hub | office-team |

### Specialized Silo (8 pages)

| Category | Hero Image |
|----------|------------|
| Medical (2) | medical-cyber |
| Technical (2) | technical-translation |
| Financial/Hospitality (2) | city-cyber |
| Digital/Hub (2) | cyber-smith / technical |

### Phase 3 Gate

- [ ] 21 pages deployed
- [ ] Multiple image types working
- [ ] 75% total coverage achieved
- [ ] Performance maintained

---

## Phase 4: Locations + Resources + Services (Week 4)

**Duration:** 5-6 days
**Target:** 40+ pages

### Locations (11 pages)

All use `city-cyber` except:
- Palm Jumeirah → `palm-jumeirah`
- Sharjah pages → `sharjah`

### Resources (14 pages)

| Type | Hero Image |
|------|------------|
| General guides | office-team |
| Attestation guides | authenticated |
| Legal guides | vis-translation |
| Golden Visa | city-cyber |

### Services Hub (15 pages)

| Type | Hero Image |
|------|------------|
| Main hub | city-cyber |
| Attestation pages | authenticated |
| Certificate | office-team |
| Golden Visa / Title Deed | city-cyber |

### Phase 4 Gate

- [ ] 40+ pages deployed
- [ ] 90%+ coverage achieved
- [ ] Site-wide LCP <3.5s
- [ ] Local SEO intact

---

## Phase 5: Final Polish (Week 5)

**Duration:** 2-3 days
**Target:** Remaining pages + optimization

### Remaining Pages

- Language pages (10) → `city-cyber`
- Industry pages (5) → Mixed
- Blog pages → `cyber-smith`
- Misc pages

### Final Tasks

- [ ] Full Lighthouse audit
- [ ] SEO validation
- [ ] Mobile UX polish
- [ ] Documentation update

---

## Rollback Procedures

### Performance Degradation

```bash
# Remove hero from specific page
# Edit frontmatter, remove: heroImage: "..."
# Commit: "ROLLBACK: Remove hero from [page]"
```

### Image Loading Failures

1. Check path in heroImages.ts
2. Verify file exists on server
3. Check WebP fallback
4. Clear CDN cache

### SEO Impact

1. Verify alt text
2. Check image dimensions
3. Validate Schema.org
4. Monitor GSC

---

## Success Metrics

### Performance Targets

| Metric | Baseline | Phase 1 | Final |
|--------|----------|---------|-------|
| Homepage LCP | 4.2s | <2.5s | <2.0s |
| Service LCP | 3.8s | <3.0s | <2.5s |
| Lighthouse | 68 | >75 | >85 |
| Mobile Speed | 42 | >60 | >75 |

### UX Targets

| Metric | Baseline | Target |
|--------|----------|--------|
| Bounce Rate | 52% | <45% |
| Time on Page | 1:23 | >2:00 |
| CTA Click Rate | 3.2% | >5% |

---

## Time Investment

| Phase | Dev Time | QA Time | Total |
|-------|----------|---------|-------|
| Phase 0 | 2 hrs | 1 hr | 3 hrs |
| Phase 1 | 4 hrs | 2 hrs | 6 hrs |
| Phase 2 | 6 hrs | 2 hrs | 8 hrs |
| Phase 3 | 8 hrs | 3 hrs | 11 hrs |
| Phase 4 | 12 hrs | 4 hrs | 16 hrs |
| Phase 5 | 4 hrs | 3 hrs | 7 hrs |
| **TOTAL** | **36 hrs** | **15 hrs** | **51 hrs** |

---

## Quick Reference

### Image Key → Path Mapping

```typescript
'city-cyber'           → /assets/images/onedrive/hero/city-cyber.webp
'medical-cyber'        → /assets/images/onedrive/hero/medical-cyber.webp
'office-team'          → /assets/images/onedrive/hero/office-team.webp
'vis-translation'      → /assets/images/onedrive/hero/vis-translation.webp
'technical-translation'→ /assets/images/onedrive/hero/technical-translation.webp
'cyber-smith'          → /assets/images/onedrive/hero/cyber-smith.webp
'ot-man'               → /assets/images/onedrive/hero/ot-man.webp
'authenticated'        → /assets/images/resources/authenticated-translation-hero.webp
'palm-jumeirah'        → /assets/images/onedrive/locations/palm-jumeirah.webp
'sharjah'              → /assets/images/onedrive/locations/sharjah.webp
```

### Adding Hero to Any Page

```astro
---
// Add to frontmatter
heroImage: "city-cyber",  // Just the key!
---
```

---

*Document Version: 1.0 | Created: December 30, 2025*
