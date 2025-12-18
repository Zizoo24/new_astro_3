# SEO Title Audit - OnlineTranslation.ae

**Last Updated:** December 18, 2025  
**Target:** All titles ≤60 characters  
**Status:** 🟡 Extraction in Progress  

---

## Quick Stats
- **Total Pages:** ~75
- **Extracted:** 5
- **Long Titles Found:** 5 (all extracted so far are over limit)
- **Fixed:** 0

---

## Extracted Titles (Long - Need Shortening)

| # | URL | Current Title | Chars | Suggested |
|---|-----|---------------|-------|-----------|
| 1 | `/` | MOJ Certified Legal Translation Dubai \| Court-Ready Documents \| OnlineTranslation.ae | 85 | Legal Translation Dubai \| MOJ Certified Court-Ready (52) |
| 2 | `/legal/` | Legal Translation Dubai \| MOJ Certified Court & Contract Translation \| OnlineTranslation.ae | 86 | Legal Translation Dubai \| Court & Contract (45) |
| 3 | `/legal/contracts/lease/` | Lease Agreement Translation in Dubai - Tenancy Contract Translation \| OnlineTranslation.ae | 88 | Lease Translation Dubai \| MOJ Certified (41) |
| 4 | `/legal/corporate/moa/` | MOA Translation in Dubai – MOJ Certified \| OnlineTranslation.ae | 62 | MOA Translation Dubai – MOJ Certified (38) |
| 5 | `/services/attestation/india/` | India Document Attestation UAE \| HRD MEA Embassy \| All States | 62 | India Attestation UAE \| HRD MEA (33) |

---

## Shortening Strategy

### Remove these patterns when over limit:
1. **" | OnlineTranslation.ae"** — brand suffix (21 chars saved)
2. **"in Dubai"** when "Dubai" appears elsewhere — redundant
3. **Expand to "Translation" only when crucial** — keep for SEO

### Title Formula (60 char target):
```
[Service] Dubai | [Qualifier] [Differentiator]
```

Example:
- ❌ "Lease Agreement Translation in Dubai - Tenancy Contract Translation | OnlineTranslation.ae" (88)
- ✓ "Lease Translation Dubai | MOJ Certified for RERA & Courts" (57)

---

## Remaining Pages to Extract

### High Priority (Legal Silo)
- [ ] /legal/contracts/
- [ ] /legal/contracts/mou/
- [ ] /legal/contracts/nda/
- [ ] /legal/contracts/spa/
- [ ] /legal/corporate/
- [ ] /legal/corporate/poa/
- [ ] /legal/corporate/license/
- [ ] /legal/corporate/resolution/
- [ ] /legal/litigation/
- [ ] /legal/litigation/arbitration/
- [ ] /legal/litigation/verdict/
- [ ] /legal/wills/

### High Priority (Attestation Silo)
- [ ] /services/attestation/
- [ ] /services/attestation/mofa/
- [ ] /services/attestation/embassy/
- [ ] /services/attestation/apostille/
- [ ] /services/attestation/pakistan/
- [ ] /services/attestation/philippines/
- [ ] /services/attestation/uk/
- [ ] /services/attestation/us/

### Personal Documents
- [ ] /personal/
- [ ] /personal/vital-records/
- [ ] /personal/vital-records/birth/
- [ ] /personal/vital-records/marriage/
- [ ] /personal/vital-records/divorce/
- [ ] /personal/vital-records/death/
- [ ] /personal/academic/
- [ ] /personal/academic/degree/
- [ ] /personal/academic/transcripts/
- [ ] /personal/immigration/
- [ ] /personal/immigration/pcc/
- [ ] /personal/immigration/bank/
- [ ] /personal/immigration/license/

### Locations
- [ ] /locations/
- [ ] /locations/dubai/
- [ ] /locations/dubai/difc/
- [ ] /locations/dubai/downtown/
- [ ] /locations/dubai/marina/
- [ ] /locations/dubai/jlt/
- [ ] /locations/dubai/business-bay/
- [ ] /locations/dubai/palm-jumeirah/
- [ ] /locations/abu-dhabi/
- [ ] /locations/sharjah/

### Industries & Specialized
- [ ] /industries/
- [ ] /industries/healthcare/
- [ ] /industries/legal/
- [ ] /industries/real-estate/
- [ ] /industries/e-commerce/
- [ ] /specialized/medical/
- [ ] /specialized/financial/
- [ ] /specialized/technical/
- [ ] /specialized/digital/
- [ ] /specialized/hospitality/

### Resources & Core
- [ ] /resources/
- [ ] /resources/faq/
- [ ] /resources/pricing-guide/
- [ ] /resources/attestation-guide/
- [ ] /resources/document-checklist/
- [ ] /resources/golden-visa-checklist/
- [ ] /resources/moj-vs-certified/
- [ ] /about/
- [ ] /contact/
- [ ] /services/
- [ ] /services/legal-translation/
- [ ] /services/certificate-translation/
- [ ] /services/corporate-translation/
- [ ] /services/golden-visa-translation/

---

## Fast Extraction Command

For حذيفه or future AI agent - run this in Git Bash or WSL from repo root:

```bash
grep -rhoP 'title=["'"'"'][^"'"'"']+["'"'"']' src/pages/ | \
  sed 's/title=[\"'"'"']//g' | sed 's/[\"'"'"']$//g' | \
  while read -r title; do
    echo "$title ($(echo -n "$title" | wc -c) chars)"
  done | sort -t'(' -k2 -rn
```

---

## Implementation Notes

Once titles are reviewed and approved:
1. Create branch: `fix/seo-titles`
2. Batch update using sed or manual edits
3. Test locally: `npm run build`
4. Verify no broken title references
5. Commit and push for Vercel deploy

---

*This document persists across AI sessions. Future agents: read this file first.*
