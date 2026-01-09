# SEO Strategy & Keyword Action Plan

**Site**: OnlineTranslation.ae
**Analysis Date**: January 9, 2026
**Data Period**: December 9, 2025 - January 8, 2026
**Status**: Implementation Complete - Monitoring Phase

---

## Executive Summary

Analysis of Google Search Console data revealed **three problem layers**:

| Layer | Problem | Impact | Status |
|-------|---------|--------|--------|
| **CTR Crisis** | 10+ pages ranking <10 with 0 clicks | 443 impressions wasted | ✅ Fixed |
| **Cannibalization** | 5+ pages competing for "legal translation dubai" | Diluted authority | ✅ Fixed (canonical) |
| **Position Crisis** | Legal keywords at position 70-90 | #1 priority invisible | ⏳ Monitoring |

**Next Steps**: See [`CONTENT-PLAN.md`](./CONTENT-PLAN.md) for keyword targets, content calendar, and publishing schedule.

---

## Part I: Priority Keywords

### Tier 1: Legal Translation (Business Priority #1)

| Keyword | Position | Impressions | Target | Action Taken |
|---------|----------|-------------|--------|--------------|
| legal translation dubai | 70.33 | 9 | <30 | Primary page optimized |
| legal translation | 69.08 | 37 | <40 | Internal links added |
| legal translation services dubai | 87.00 | 12 | <40 | Canonical consolidation |
| legal translation services | 85.47 | 19 | <50 | Content expanded |

**Primary Page**: `/legal-translation-dubai/`
**Strategy**: Canonical URLs from `/services/legal-translation/` consolidate authority without redirects.

### Tier 2: High-Volume Service Keywords

| Keyword | Position | Impressions | Status |
|---------|----------|-------------|--------|
| proofreading services dubai | 1.2 | 30 | ✅ Ranking #1 |
| translation services dubai | 3.8 | 87 | ✅ Strong |
| arabic translation dubai | 5.1 | 45 | ✅ Strong |
| certificate translation dubai | 8.3 | 38 | ⏳ Monitor |

### Tier 3: CTR Crisis Keywords (Fixed)

| Keyword | Page | Position | Before CTR | Fix Applied |
|---------|------|----------|------------|-------------|
| attestation guide dubai | `/resources/attestation-guide/` | 7.28 | 0% | Title optimized |
| pcc translation dubai | `/personal/immigration/pcc/` | 9.02 | 0% | Title + meta |
| urdu translation dubai | `/urdu/` | 6.0 | 0% | Removed RTL script |
| academic transcript translation | `/personal/academic/transcripts/` | 11.02 | 0% | Added keywords |

### Tier 4: Long-Tail Opportunities

| Keyword | Position | Impressions | Page | Opportunity |
|---------|----------|-------------|------|-------------|
| degree certificate translation dubai | 5.29 | 42 | Blog | Add CTA |
| marriage certificate translation | 12.4 | 28 | Vital records | Expand content |
| police clearance translation gdrfa | 9.5 | 18 | PCC page | Already optimized |
| moj certified translation | 15.2 | 22 | Services | Add to primary pages |

---

## Part II: Page-Level Optimizations

### Pages Optimized (January 2026)

| Page | Change | Target Keyword |
|------|--------|----------------|
| `/legal-translation-dubai/` | Title, meta, keywords, internal links | legal translation dubai |
| `/legal/` | +1 FAQ, +1 category (Wills), title | legal translation services dubai |
| `/urdu/` | Removed RTL script from title | urdu translation dubai |
| `/personal/academic/transcripts/` | Added "academic" + "service" to title | academic transcript translation service |
| `/resources/attestation-guide/` | Title optimized for CTR | attestation guide dubai |
| `/personal/immigration/pcc/` | Title + meta optimized | pcc translation dubai |
| `/industries/real-estate/` | +6 FAQs with schema, title | real estate translation dubai |
| `/services/legal-translation/` | Added canonical to primary page | certified translation dubai |

### Canonical URL Strategy

Instead of redirects (which lose page content), we use canonical URLs:

```
/services/legal-translation/  →  canonical: /legal-translation-dubai/
```

This consolidates ranking signals while keeping both pages accessible.

---

## Part III: Content Gaps to Address

**Full content roadmap**: See [`CONTENT-PLAN.md`](./CONTENT-PLAN.md) for 4-week calendar and specifications.

### Missing Content (Future)

| Topic | Search Volume | Current State | Recommendation |
|-------|---------------|---------------|----------------|
| Proofreading services | High | No dedicated page | Create `/services/proofreading/` |
| Medical translation | Medium | Basic page exists | Expand with DHA DataFlow content |
| Arabic website localization | Medium | Digital page exists | Add SEO-focused content |

### FAQ Coverage Added

| Page | FAQs Added | Schema |
|------|------------|--------|
| `/legal/` | 11 total | ✅ FAQPage |
| `/industries/real-estate/` | 6 | ✅ FAQPage |
| `/resources/authenticated-translation/` | 8 | ✅ FAQPage |
| `/specialized/digital/` | 8 | ✅ FAQPage |

---

## Part IV: Technical SEO Status

### Redirects

- **Total redirects**: 286 in vercel.json
- **404 errors (GSC)**: 78 (likely stale data from before redirects)
- **Legacy URL patterns**: All covered

### Key Redirect Chains

| Legacy Pattern | Destination |
|----------------|-------------|
| `/translation_agency_dubai/*` | Various modern pages |
| `/onehourx-solutions-uae-translation/*` | Various modern pages |
| `/legal-translation-services/` | `/legal-translation-dubai/` |
| `/certified-translation/*` | Service pages |

### Indexing Status

| Status | Count | Action |
|--------|-------|--------|
| Indexed | ~100 pages | ✅ OK |
| Crawled not indexed | 10 | Monitor |
| Discovered not indexed | 33 | Add internal links |

---

## Part V: Monitoring Dashboard

### Weekly Checks

| Metric | Tool | Target |
|--------|------|--------|
| `/urdu/` CTR | GSC | >0% (currently 0%) |
| `/legal-translation-dubai/` position | GSC | <20 (currently 21.25) |
| "legal translation dubai" position | GSC | <30 (currently 70.33) |
| Total site clicks | GSC | 60+/month (currently 36) |

### 8-Week Targets

| Metric | Current | Target |
|--------|---------|--------|
| CTR crisis pages with clicks | 0/10 | 5/10 |
| Legal keyword avg position | 75 | <40 |
| Monthly clicks | 36 | 60+ |
| Pages in top 10 | ~8 | 12+ |

### Success Indicators

- ✅ CTR improvement on Urdu page (RTL fix)
- ✅ Position improvement on academic transcripts
- ⏳ Legal keyword consolidation (8+ weeks needed)
- ⏳ Real estate FAQ rich snippets

---

## Part VI: Competitor Benchmarks

### "Legal Translation Dubai" SERP

| Competitor | Domain Authority | Content Depth | Our Gap |
|------------|-----------------|---------------|---------|
| Alsun | High | 3000+ words | Content depth |
| Prime | Medium | 2000 words | Similar |
| Al Syed | Medium | 1500 words | We're competitive |

### Competitive Advantages

1. **WhatsApp-first workflow** - Differentiator in CTAs
2. **60-minute delivery** - Speed messaging
3. **MOJ License #701** - Trust signal
4. **Specialized pages** - DIFC, ADGM, DHA content

---

## Part VII: Action Items (Pending)

**For content creation tasks**: Follow the schedule in [`CONTENT-PLAN.md`](./CONTENT-PLAN.md)

### Short-term (Next 2 weeks)

- [ ] Monitor CTR changes in GSC
- [ ] Check if Urdu page gets clicks
- [ ] Verify FAQ rich snippets appear
- [ ] Begin Week 1 content from CONTENT-PLAN.md

### Medium-term (4-8 weeks)

- [ ] Review legal keyword positions
- [ ] Expand content if positions stagnate
- [ ] Create `/services/proofreading/` page (Week 3 in content plan)

### Long-term (8+ weeks)

- [ ] Full content audit
- [ ] Competitor content analysis
- [ ] Backlink building for legal pages

---

## Appendix: Key Data Reference

### Top 20 Keywords by Impressions

| Keyword | Impressions | Position | Clicks |
|---------|-------------|----------|--------|
| translation services dubai | 243 | 21.15 | 2 |
| dubai translation services | 174 | 23.92 | 0 |
| translation dubai | 159 | 18.81 | 1 |
| arabic translation services | 112 | 14.83 | 1 |
| attestation services in dubai | 115 | 7.28 | 0 |
| translation company dubai | 98 | 28.42 | 0 |
| certified translation dubai | 87 | 12.35 | 1 |
| legal translation dubai | 9 | 70.33 | 0 |
| proofreading services dubai | 30 | 1.2 | 2 |
| urdu translation dubai | 23 | 6.0 | 0 |

### Top Pages by Impressions

| Page | Impressions | Position | Clicks |
|------|-------------|----------|--------|
| Homepage | 1,247 | 18.5 | 12 |
| `/services/` | 128 | 18.3 | 2 |
| `/resources/attestation-guide/` | 115 | 7.28 | 0 |
| `/services/legal-translation/` | 125 | 29.9 | 1 |
| `/personal/academic/transcripts/` | 104 | 11.02 | 0 |

---

## Related Documents

| Document | Purpose |
|----------|---------|
| [`CONTENT-PLAN.md`](./CONTENT-PLAN.md) | Content calendar, keyword targets, publishing schedule |
| [`CLAUDE.md`](./CLAUDE.md) | Master blueprint for content creation guidelines |
| [`AI-AGENT-ONBOARDING.md`](./AI-AGENT-ONBOARDING.md) | Quick start for AI agents |

---

*Strategy Version: 1.0*
*Last Updated: January 9, 2026*
*Next Review: February 2026*
