# Legal Translation Page Consolidation Decision

**Created**: January 9, 2026
**Status**: Resolved
**Decision**: `/legal-translation-dubai/` is the PRIMARY legal translation page

---

## The Conflict

The ROLLOUT-PLAN.md (v2.0) recommended:
- `/legal/` as the primary page for "legal translation dubai"
- Redirect `/legal-translation-dubai/` to `/legal/`

However, Phase 1 implementation used:
- `/legal-translation-dubai/` as the primary page
- Internal links updated to point to `/legal-translation-dubai/`

---

## Analysis

### GSC Data (December 2025)

| Page | Position | Impressions | Clicks | CTR |
|------|----------|-------------|--------|-----|
| `/legal/` | 15.59 | 29 | 0 | 0% |
| `/legal-translation-dubai/` | 21.25 | 63 | 0 | 0% |
| `/services/legal-translation/` | 29.9 | 125 | 0 | 0% |

### Redirect Structure (vercel.json)

**Legacy URLs redirecting to `/legal-translation-dubai/`:**
- `/translation_agency_dubai/translation-services/legal-translation/`
- `/legal-translation-services/`
- `/legal-translations/`
- `/dubai-legal-translation/`

**Legacy URLs redirecting to `/services/legal-translation/`:**
- Various legacy paths (scheduled for consolidation)

### URL Analysis

| Page | Keyword in URL | URL Structure |
|------|----------------|---------------|
| `/legal/` | No | Hub pattern |
| `/legal-translation-dubai/` | Yes (exact match) | Service + location pattern |
| `/services/legal-translation/` | Yes | Services pattern |

---

## Decision Rationale

**Selected: `/legal-translation-dubai/` as PRIMARY**

1. **Legacy Redirect Equity**: 5+ legacy URLs already redirect here. This consolidated link equity should not be fragmented again.

2. **Exact-Match Keyword URL**: The URL contains "legal-translation-dubai" - the exact target keyword. URL keywords are a ranking factor.

3. **Page Purpose Differentiation**:
   - `/legal/` = Hub page linking to contracts, corporate, litigation sub-pages
   - `/legal-translation-dubai/` = Primary service landing page
   - Different purposes, both should exist

4. **Phase 1 Already Deployed**: Changes are live. Reversing would:
   - Create additional redirect complexity
   - Potentially confuse Google during re-indexing
   - Delay results by 4-8 weeks

---

## Implementation Status

### Completed (Phase 1)

- [x] Optimized `/legal-translation-dubai/` title for "legal translation dubai"
- [x] Updated homepage internal links to point to `/legal-translation-dubai/`
- [x] Added keywords targeting legal translation services

### Deferred

- [ ] Redirect `/services/legal-translation/` to `/legal-translation-dubai/` (monitor first)
- [ ] Optimize `/legal/` as silo hub (secondary priority)

---

## Monitoring Plan

### Success Metrics (8 weeks)

| Metric | Current | Target |
|--------|---------|--------|
| `/legal-translation-dubai/` position | 21.25 | <15 |
| "legal translation dubai" position | 70.33 | <30 |
| Total legal silo impressions | ~200 | 400+ |
| Legal silo clicks | 0 | 10-20/month |

### Fallback Plan

If after 8 weeks:
- `/legal-translation-dubai/` shows no position improvement
- "legal translation dubai" keyword still >50

Then consider:
1. Redirect `/legal-translation-dubai/` to `/legal/`
2. Optimize `/legal/` as new primary
3. Update all internal links

---

## Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Cannibalization continues | Medium | Medium | Monitor positions, consolidate if needed |
| Phase 1 changes hurt rankings | Low | Medium | Rollback documented, can revert |
| Wrong page chosen | Medium | Low | 8-week monitoring will validate |

---

*Decision Version: 1.0*
*Last Updated: January 9, 2026*
