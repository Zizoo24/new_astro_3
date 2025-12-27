# Responsive Desktop/Mobile Layout Implementation Plan

**Total Pages:** 105
**Strategy:** Desktop = "Information Dashboard" | Mobile = "Step-by-Step Task Runner"

---

## Phase Overview

| Phase | Focus | Pages | Priority |
|-------|-------|-------|----------|
| **Phase 0** | Infrastructure | 2 | Critical |
| **Phase 1** | Hub Pages | 16 | High |
| **Phase 2** | Service Pages (Legal) | 11 | High |
| **Phase 3** | Service Pages (Personal) | 9 | High |
| **Phase 4** | Service Pages (Specialized) | 5 | High |
| **Phase 5** | Attestation Pages | 11 | Medium |
| **Phase 6** | Location Pages | 10 | Medium |
| **Phase 7** | Language Pages | 10 | Medium |
| **Phase 8** | Industries Pages | 4 | Medium |
| **Phase 9** | Resources Pages | 9 | Medium |
| **Phase 10** | Blog Pages | 5 | Low |
| **Phase 11** | Utility Pages | 7 | Low |
| **Phase 12** | Home Page | 1 | Critical |

---

## Phase 0: Infrastructure Setup

**Files to modify:**
1. `src/layouts/BaseLayout.astro` - Link responsive-layouts.css
2. `src/layouts/ServiceLayout.astro` - Add responsive component slots

**Tasks:**
- [ ] Add `<link>` for `responsive-layouts.css` in BaseLayout
- [ ] Add device-specific slot support to ServiceLayout
- [ ] Add responsive utility classes to CategoryLayout

---

## Phase 1: Hub Pages (16 pages)

**Components to use:**
- `MultiCardGrid` - For service category cards
- `DashboardLayout` - For complex hubs with sidebar
- `HorizontalSteps` - For process overviews

### Primary Hubs
| Page | Path | Components |
|------|------|------------|
| Home | `/` | MultiCardGrid, HorizontalSteps |
| Legal Hub | `/legal-translation-dubai/` | MultiCardGrid, DashboardLayout |
| Personal Hub | `/personal-documents/` | MultiCardGrid |
| Specialized Hub | `/specialized-translation/` | MultiCardGrid |
| Services Hub | `/services/` | MultiCardGrid |
| Blog Hub | `/blog/` | MultiCardGrid |
| Resources Hub | `/resources/` | MultiCardGrid |
| Industries Hub | `/industries/` | MultiCardGrid |
| Locations Hub | `/locations/` | MultiCardGrid |

### Sub-Category Hubs
| Page | Path | Components |
|------|------|------------|
| Legal (alt) | `/legal/` | MultiCardGrid |
| Contracts | `/legal/contracts/` | MultiCardGrid |
| Corporate | `/legal/corporate/` | MultiCardGrid |
| Litigation | `/legal/litigation/` | MultiCardGrid |
| Personal (alt) | `/personal/` | MultiCardGrid |
| Vital Records | `/personal/vital-records/` | MultiCardGrid |
| Immigration | `/personal/immigration/` | MultiCardGrid |
| Academic | `/personal/academic/` | MultiCardGrid |
| Medical | `/specialized/medical/` | MultiCardGrid |

---

## Phase 2: Legal Service Pages (11 pages)

**Components to use:**
- `ResponsiveTable` - For pricing/requirements tables
- `HorizontalSteps` - For process steps
- `SplitView` - For before/after document examples
- `DeviceSlot` - For device-specific content

### Contracts (4 pages)
| Page | Path | Special Features |
|------|------|------------------|
| NDA | `/legal/contracts/nda/` | ResponsiveTable (pricing) |
| Lease | `/legal/contracts/lease/` | ResponsiveTable |
| SPA | `/legal/contracts/spa/` | ResponsiveTable |
| MOU | `/legal/contracts/mou/` | ResponsiveTable |

### Corporate (4 pages)
| Page | Path | Special Features |
|------|------|------------------|
| MOA | `/legal/corporate/moa/` | ResponsiveTable |
| POA | `/legal/corporate/poa/` | ResponsiveTable, HorizontalSteps |
| License | `/legal/corporate/license/` | ResponsiveTable |
| Resolution | `/legal/corporate/resolution/` | ResponsiveTable |

### Litigation & Wills (3 pages)
| Page | Path | Special Features |
|------|------|------------------|
| Verdict | `/legal/litigation/verdict/` | ResponsiveTable |
| Arbitration | `/legal/litigation/arbitration/` | ResponsiveTable |
| Wills | `/legal/wills/` | HorizontalSteps |

---

## Phase 3: Personal Service Pages (9 pages)

### Vital Records (4 pages)
| Page | Path | Special Features |
|------|------|------------------|
| Birth | `/personal/vital-records/birth/` | ResponsiveTable, HorizontalSteps |
| Marriage | `/personal/vital-records/marriage/` | ResponsiveTable |
| Divorce | `/personal/vital-records/divorce/` | ResponsiveTable |
| Death | `/personal/vital-records/death/` | ResponsiveTable |

### Academic (2 pages)
| Page | Path | Special Features |
|------|------|------------------|
| Degree | `/personal/academic/degree/` | ResponsiveTable |
| Transcripts | `/personal/academic/transcripts/` | ResponsiveTable |

### Immigration (3 pages)
| Page | Path | Special Features |
|------|------|------------------|
| PCC | `/personal/immigration/pcc/` | HorizontalSteps, ResponsiveTable |
| Bank Statement | `/personal/immigration/bank/` | ResponsiveTable |
| Driving License | `/personal/immigration/license/` | ResponsiveTable |

---

## Phase 4: Specialized Service Pages (5 pages)

| Page | Path | Special Features |
|------|------|------------------|
| DHA DataFlow | `/specialized/medical/dha-dataflow/` | ResponsiveTable, HorizontalSteps |
| Technical | `/specialized/technical/` | MultiCardGrid |
| Financial | `/specialized/financial/` | ResponsiveTable |
| Digital | `/specialized/digital/` | MultiCardGrid |
| Hospitality | `/specialized/hospitality/` | MultiCardGrid |

---

## Phase 5: Attestation Pages (11 pages)

| Page | Path | Special Features |
|------|------|------------------|
| Attestation Hub | `/services/attestation/` | MultiCardGrid, HorizontalSteps |
| Apostille | `/services/attestation/apostille/` | ResponsiveTable |
| India | `/services/attestation/india/` | HorizontalSteps |
| UK | `/services/attestation/uk/` | HorizontalSteps |
| US | `/services/attestation/us/` | HorizontalSteps |
| Canada | `/services/attestation/canada/` | HorizontalSteps |
| Philippines | `/services/attestation/philippines/` | HorizontalSteps |
| Pakistan | `/services/attestation/pakistan/` | HorizontalSteps |
| MOFA | `/services/attestation/mofa/` | HorizontalSteps |
| Embassy | `/services/attestation/embassy/` | ResponsiveTable |

### Other Services (5 pages)
| Page | Path |
|------|------|
| Legal Translation | `/services/legal-translation/` |
| Corporate Translation | `/services/corporate-translation/` |
| Certificate Translation | `/services/certificate-translation/` |
| Golden Visa | `/services/golden-visa-translation/` |
| Title Deed | `/services/title-deed-translation-dubai/` |

---

## Phase 6: Location Pages (10 pages)

**Components:** `MultiCardGrid`, `SplitView` (map + info)

| Page | Path |
|------|------|
| Dubai Hub | `/locations/dubai/` |
| DIFC | `/locations/dubai/difc/` |
| JLT | `/locations/dubai/jlt/` |
| Marina | `/locations/dubai/marina/` |
| Business Bay | `/locations/dubai/business-bay/` |
| Downtown | `/locations/dubai/downtown/` |
| Palm Jumeirah | `/locations/dubai/palm-jumeirah/` |
| Abu Dhabi | `/locations/abu-dhabi/` |
| Sharjah | `/locations/sharjah/` |
| Locations Hub | `/locations/` |

---

## Phase 7: Language Pages (10 pages)

**Components:** `MultiCardGrid`, `ResponsiveTable` (language pairs)

| Page | Path |
|------|------|
| Arabic | `/عربي/` |
| Bengali | `/bengali/` |
| Russian | `/russian/` |
| Malayalam | `/malayalam/` |
| Tagalog | `/tagalog/` |
| Urdu | `/urdu/` |
| Hindi | `/hindi/` |
| French | `/french/` |
| Chinese | `/chinese/` |
| Farsi | `/farsi/` |

---

## Phase 8: Industries Pages (4 pages)

| Page | Path |
|------|------|
| Legal Industry | `/industries/legal/` |
| Healthcare | `/industries/healthcare/` |
| Real Estate | `/industries/real-estate/` |
| E-commerce | `/industries/e-commerce/` |

---

## Phase 9: Resources Pages (9 pages)

**Components:** `ResponsiveTable`, `HorizontalSteps`, `SplitView`

| Page | Path | Special Features |
|------|------|------------------|
| FAQ | `/resources/faq/` | DeviceSlot (accordion) |
| MOJ vs Certified | `/resources/moj-vs-certified/` | SplitView |
| Authenticated Translation | `/resources/authenticated-translation/` | HorizontalSteps |
| Pricing Guide | `/resources/pricing-guide/` | ResponsiveTable |
| Turnaround Times | `/resources/turnaround-times/` | ResponsiveTable |
| Document Checklist | `/resources/document-checklist/` | ResponsiveTable |
| Golden Visa Checklist | `/resources/golden-visa-checklist/` | HorizontalSteps |
| Attestation Guide | `/resources/attestation-guide/` | HorizontalSteps |
| US Citizens Guide | `/resources/us-citizens-dubai-guide/` | HorizontalSteps |

---

## Phase 10: Blog Pages (5 pages)

**Use:** Standard blog layout with responsive images and `DeviceSlot` for code examples

---

## Phase 11: Utility Pages (7 pages)

| Page | Path | Notes |
|------|------|-------|
| About | `/about` | SplitView for team |
| Contact | `/contact` | SplitView (form + map) |
| Thank You | `/thank-you` | Minimal |
| Privacy | `/privacy` | Prose styling |
| Terms | `/terms` | Prose styling |
| Offline | `/offline` | PWA-specific |
| 404 | `/404` | Minimal |

---

## Phase 12: Home Page (1 page)

**Critical page - implement last after patterns are proven**

**Components:**
- `MultiCardGrid` - Service categories
- `HorizontalSteps` - Process overview
- `SplitView` - Trust section
- CSS utilities from `responsive-layouts.css`

---

## Implementation Checklist

### Per-Page Implementation Steps:
1. [ ] Import required components
2. [ ] Replace static tables with `ResponsiveTable`
3. [ ] Replace process lists with `HorizontalSteps`
4. [ ] Add `DeviceSlot` for device-specific content
5. [ ] Add responsive CSS utility classes
6. [ ] Test on desktop (1200px+)
7. [ ] Test on tablet (768-1199px)
8. [ ] Test on mobile (< 768px)

### Testing Priorities:
- [ ] Touch targets (44px minimum)
- [ ] Accordion behavior on mobile
- [ ] Table → Accordion transformation
- [ ] Sticky elements on desktop
- [ ] PWA bottom bar clearance

---

## Success Metrics

| Metric | Target |
|--------|--------|
| Mobile usability score | 95+ |
| Desktop layout density | 3-column where appropriate |
| Touch target compliance | 100% |
| Accordion adoption | All tables on mobile |
| Process visualization | HorizontalSteps on all service pages |

---

*Created: December 27, 2025*
*Status: Phase 0 - Infrastructure Setup*
