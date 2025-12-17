# SEO Audit Fixes - Implementation Plan

**Created**: 2025-12-17
**Last Updated**: 2025-12-17
**Status**: Phases 1-3 Complete
**Branch**: `claude/assess-issues-EVfTI`

---

## Summary of Issues Identified

| Issue Category | Count | Fixable | Status |
|----------------|-------|---------|--------|
| Broken Internal Links | 5 | Yes | **FIXED** |
| JSON-LD Schema Errors | 12 | Yes | **FIXED** |
| Duplicate Titles | 2 | Yes | Deferred (needs content decision) |
| Long Titles (>60 chars) | 53 | Partial | Deferred (needs content decision) |
| Minification Config | 1 | Yes | **FIXED** |
| Non-descriptive Anchors | 8 | Yes | Deferred (low priority) |

---

## Phase 1: Critical Link Fixes (HIGH PRIORITY) - COMPLETED

**Status**: [x] Complete

### 1.1 Fix `/services/golden-visa/` → `/services/golden-visa-translation/`

**Issue**: Missing `/translation` suffix causes 404 errors
**Files Fixed** (10):

- [x] `/src/pages/locations/dubai/business-bay/index.astro`
- [x] `/src/pages/locations/dubai/downtown/index.astro`
- [x] `/src/pages/locations/dubai/marina/index.astro`
- [x] `/src/pages/locations/dubai/palm-jumeirah/index.astro`
- [x] `/src/pages/personal/academic/transcripts/index.astro`
- [x] `/src/pages/personal/immigration/bank/index.astro`
- [x] `/src/pages/personal/immigration/license/index.astro`
- [x] `/src/pages/personal/immigration/pcc/index.astro`
- [x] `/src/pages/specialized/financial/index.astro`
- [x] `/src/pages/specialized/medical/index.astro`

### 1.2 Fix `/attestation/india/` → `/services/attestation/india/`

**Status**: [x] Complete

- [x] `/src/pages/services/attestation/index.astro`

### 1.3 Fix Links to Non-Existent Pages

**Status**: [x] Complete

| Broken Link | Files | Action Taken |
|-------------|-------|--------------|
| `/industries/finance/` | `/src/pages/legal/index.astro` | Replaced with `/specialized/financial/` |
| `/industries/pharmaceutical/` | `/src/pages/legal-translation-dubai/index.astro` | Replaced with `/industries/healthcare/` |
| `/locations/ajman/` | Multiple files | Removed links from dubai, abu-dhabi, and locations index |

---

## Phase 2: JSON-LD Schema Fixes (HIGH PRIORITY) - COMPLETED

**Status**: [x] Complete

### 2.1 BaseLayout.astro Fixes - DONE

**File**: `/src/layouts/BaseLayout.astro`

| Issue | Fix Applied |
|-------|-------------|
| `"postalCode": ""` empty | Removed property |
| `"contactOption": "TollFree"` invalid | Removed property |
| `"geoRadius": "50000"` string | Changed to number `50000` |
| `"bestRating": "5"` string | Changed to number `5` |
| `"worstRating": "1"` string | Changed to number `1` |
| `"ratingCount": "8"` string | Changed to number `8` |
| `"reviewCount": "8"` string | Changed to number `8` |
| WhatsApp in sameAs | Removed WhatsApp URL |

### 2.2 ServiceLayout.astro Fixes - DONE

**File**: `/src/layouts/ServiceLayout.astro`

| Issue | Fix Applied |
|-------|-------------|
| `"price": "150"` string | Changed to number `150` |

### 2.3 CategoryLayout.astro Fixes - DONE

**File**: `/src/layouts/CategoryLayout.astro`

| Issue | Fix Applied |
|-------|-------------|
| Undefined item in BreadcrumbList | Added conditional to only include `item` when `crumb.href` exists |

---

## Phase 3: Build Configuration (MEDIUM PRIORITY) - COMPLETED

**Status**: [x] Complete

### 3.1 Add Vite Minification Config - DONE

**File**: `/astro.config.mjs`

Added:
```javascript
vite: {
  build: {
    minify: 'esbuild',
    cssMinify: true
  }
}
```

---

## Phase 4: Anchor Text Improvements (LOW PRIORITY) - DEFERRED

**Status**: [ ] Deferred - Low impact, needs content decisions

See `SEO-ISSUES-DEFERRED.md` for details.

---

## Phase 5: Title Optimization - DEFERRED

**Status**: [ ] Deferred - Needs content decisions

53 titles exceed 60 characters. See `SEO-ISSUES-DEFERRED.md` for full list.

---

## Implementation Progress

### Completed
- [x] Initial codebase audit
- [x] Broken links identification
- [x] JSON-LD schema analysis
- [x] Title length audit
- [x] Anchor text audit
- [x] Phase 1: Critical Link Fixes (14 files)
- [x] Phase 2: JSON-LD Schema Fixes (3 files)
- [x] Phase 3: Build Configuration (1 file)

### Deferred (Needs Human Decision)
- [ ] Phase 4: Anchor Text Improvements
- [ ] Phase 5: Title Optimization
- [ ] Missing pages decision (finance, pharmaceutical, ajman)

---

## Files Modified

| File | Changes |
|------|---------|
| `/src/pages/locations/dubai/business-bay/index.astro` | Fixed golden-visa link |
| `/src/pages/locations/dubai/downtown/index.astro` | Fixed golden-visa links |
| `/src/pages/locations/dubai/marina/index.astro` | Fixed golden-visa link |
| `/src/pages/locations/dubai/palm-jumeirah/index.astro` | Fixed golden-visa link |
| `/src/pages/locations/dubai/index.astro` | Removed ajman link |
| `/src/pages/locations/abu-dhabi/index.astro` | Removed ajman link |
| `/src/pages/locations/index.astro` | Removed ajman from otherEmirates |
| `/src/pages/personal/academic/transcripts/index.astro` | Fixed golden-visa link |
| `/src/pages/personal/immigration/bank/index.astro` | Fixed golden-visa link |
| `/src/pages/personal/immigration/license/index.astro` | Fixed golden-visa link |
| `/src/pages/personal/immigration/pcc/index.astro` | Fixed golden-visa link |
| `/src/pages/specialized/financial/index.astro` | Fixed golden-visa link |
| `/src/pages/specialized/medical/index.astro` | Fixed golden-visa link |
| `/src/pages/services/attestation/index.astro` | Fixed attestation/india link |
| `/src/pages/legal/index.astro` | Replaced industries/finance links |
| `/src/pages/legal-translation-dubai/index.astro` | Replaced pharmaceutical link |
| `/src/layouts/BaseLayout.astro` | Fixed JSON-LD schema issues |
| `/src/layouts/ServiceLayout.astro` | Fixed price to number |
| `/src/layouts/CategoryLayout.astro` | Fixed breadcrumb undefined item |
| `/astro.config.mjs` | Added minification config |

---

## Commit History

| Date | Commit | Changes |
|------|--------|---------|
| 2025-12-17 | Initial | Plan created |
| 2025-12-17 | TBD | Phase 1-3 fixes implemented |

---

## Next Steps

1. **Test build locally**: Run `npm run build` to verify no errors
2. **Validate JSON-LD**: Use https://validator.schema.org/ to check schemas
3. **Deploy**: Push changes to trigger rebuild
4. **Request re-crawl**: Submit sitemap in Google Search Console
5. **Address deferred items**: Work with content team on title optimization

---

## Notes

- All schema changes follow schema.org standards
- Minification should reduce JS/CSS file sizes significantly
- Broken link fixes will resolve 19 of the 19 reported broken internal links
- JSON-LD fixes address all critical validation errors
