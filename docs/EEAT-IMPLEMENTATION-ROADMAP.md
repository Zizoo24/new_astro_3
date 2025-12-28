# E-E-A-T Implementation Roadmap
## OnlineTranslation.ae Strategic Enhancement Plan

**Version:** 1.0
**Created:** December 28, 2025
**Status:** Ready for Implementation

---

## Executive Summary

This roadmap bridges the E-E-A-T gaps identified in the strategic analysis. Implementation is organized into 4 phases over 4 weeks, prioritizing high-impact, low-effort items first.

### Current E-E-A-T Score: 6.5/10
### Target E-E-A-T Score: 8.5/10

---

## Phase 0: Quick Wins (Day 1-2)

### Schema Deployment - Immediate Impact

| Task | File | Effort | Impact |
|------|------|--------|--------|
| Deploy Service schema to ServiceLayout | `src/layouts/ServiceLayout.astro` | 30 min | High |
| Add author bylines to blog posts | Blog template updates | 1 hr | Medium |
| Update AggregateRating in BaseLayout | `src/layouts/BaseLayout.astro` | 15 min | Low |

**Schema Deployment Code:**

```astro
<!-- Add to ServiceLayout.astro -->
<script type="application/ld+json" set:html={JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": heroTitle,
  "description": metaDescription,
  "provider": {
    "@type": "LocalBusiness",
    "@id": "https://onlinetranslation.ae/#organization"
  },
  "serviceType": "Legal Translation",
  "areaServed": {
    "@type": "Country",
    "name": "United Arab Emirates"
  }
})} />
```

---

## Phase 1: Translator Authority (Week 1)

### Primary Deliverable: Translator Biography Page

**URL:** `/about/translator/`

**Files to Create:**
```
src/
├── components/
│   └── eeat/
│       ├── PersonSchema.astro      ← Person structured data
│       ├── TranslatorHero.astro    ← Hero with photo/credentials
│       ├── CredentialsGrid.astro   ← License/language display
│       ├── ExpertiseAccordion.astro ← Expandable expertise areas
│       └── VerificationBadge.astro  ← MOJ verification callout
└── pages/
    └── about/
        └── translator/
            └── index.astro          ← Main biography page
```

**Content Requirements:**
- Khaled's full name (Arabic + English)
- MOJ License #701 with verification instructions
- Oath/liability explanation (300-400 words)
- Expertise areas with document types
- Personal commitment quote
- Photo (or professional placeholder)

**Schema Implementation:**
- Person schema with hasCredential
- Link to Organization via @id reference

**Internal Linking:**
- Add "Meet the Certifier" link to About page
- Add translator reference to footer
- Link from blog author bylines

---

## Phase 2: Local Expertise (Week 2)

### Primary Deliverable: Sharjah Content Hub

**URL:** `/locations/sharjah/tenancy-translation/`

**Files to Create:**
```
src/
├── components/
│   └── eeat/
│       └── SharjahFeeCalculator.astro ← 4% fee calculator
└── pages/
    └── locations/
        └── sharjah/
            ├── index.astro          ← Update existing
            └── tenancy-translation/
                └── index.astro      ← New detailed page
```

**Content Requirements:**
- 4% attestation fee explanation with calculator
- SEWA clearance certificate requirements
- Cross-emirate attestation guidance
- Family visa document chain
- Municipality-specific process steps
- 8+ FAQs with schema markup

**Key Content Elements:**
1. Fee Calculator Widget (interactive)
2. Document Checklist Accordion
3. Cross-Emirate FAQ Section
4. Process Steps with HowTo schema
5. Pricing Table with Service schema

**Internal Linking:**
- Link from `/locations/sharjah/` hub
- Cross-link to `/personal/immigration/` pages
- Reference in attestation guides

---

## Phase 3: Social Proof (Week 3)

### Primary Deliverables

#### A. Client Reviews Hub

**URL:** `/about/reviews/`

**Files to Create:**
```
src/
├── components/
│   └── eeat/
│       └── ReviewCard.astro         ← Enhanced testimonial
└── pages/
    └── about/
        └── reviews/
            └── index.astro          ← Reviews hub page
```

**Content Requirements:**
- 10-15 detailed testimonials (expand from current 3)
- Service type tags per review
- Outcome tags (Visa Approved, Court Accepted, etc.)
- Rating with star display
- Date and source attribution
- Review schema markup per testimonial

#### B. Case Studies Section

**URL:** `/resources/case-studies/`

**Files to Create:**
```
src/
├── components/
│   └── eeat/
│       └── CaseStudyCard.astro      ← Preview cards
└── pages/
    └── resources/
        └── case-studies/
            ├── index.astro          ← Hub page
            ├── rejected-document-rescue/
            │   └── index.astro
            ├── urgent-family-visa/
            │   └── index.astro
            └── dha-dataflow-deadline/
                └── index.astro
```

**Case Study Structure:**
1. The Situation (problem description)
2. Our Approach (process steps)
3. The Outcome (measurable results)
4. Key Learnings (takeaways)
5. Client Testimonial Quote

---

## Phase 4: Authority Consolidation (Week 4)

### Primary Deliverable: Credentials Page

**URL:** `/about/credentials/`

**Content Sections:**
1. MOJ License Display (with verification)
2. DUL Badge (with portal link)
3. Government Acceptance Logos (with context)
4. Security & Compliance Measures
5. "What We Don't Do" Transparency Section

---

## Implementation Checklist

### Week 1: Translator Authority
- [ ] Create `src/components/eeat/` directory
- [ ] Implement `PersonSchema.astro`
- [ ] Implement `TranslatorHero.astro`
- [ ] Implement `CredentialsGrid.astro`
- [ ] Implement `ExpertiseAccordion.astro`
- [ ] Implement `VerificationBadge.astro`
- [ ] Create `/about/translator/index.astro`
- [ ] Add Person schema to page
- [ ] Update navigation with translator link
- [ ] Add translator reference to About page

### Week 2: Local Expertise
- [ ] Implement `SharjahFeeCalculator.astro`
- [ ] Create `/locations/sharjah/tenancy-translation/index.astro`
- [ ] Add Service schema to page
- [ ] Add HowTo schema for process steps
- [ ] Add FAQPage schema for FAQ section
- [ ] Update Sharjah hub with link
- [ ] Cross-link from immigration pages

### Week 3: Social Proof
- [ ] Implement `ReviewCard.astro`
- [ ] Implement `CaseStudyCard.astro`
- [ ] Create `/about/reviews/index.astro`
- [ ] Add Review schema per testimonial
- [ ] Update AggregateRating in BaseLayout
- [ ] Create case studies hub
- [ ] Create 3 individual case study pages
- [ ] Add Article schema to case studies

### Week 4: Authority Consolidation
- [ ] Create `/about/credentials/index.astro`
- [ ] Consolidate all trust signals
- [ ] Update internal linking
- [ ] Final schema validation
- [ ] Performance testing

---

## Measurement & Validation

### Schema Validation
- Use Google Rich Results Test for each new page
- Validate Person, Service, Review, Article schemas
- Check for schema errors in Search Console

### E-E-A-T Indicators to Monitor
| Signal | Baseline | Target | Measurement |
|--------|----------|--------|-------------|
| Person Schema | 0 pages | 5+ pages | Schema validation |
| Service Schema | 0 pages | 100+ pages | Automated check |
| Review Count | 3 | 15+ | Manual count |
| Case Studies | 0 | 3+ | Manual count |
| Translator Visibility | Hidden | Prominent | Page audit |

### Search Console Metrics
- Monitor "Experience" signals in Core Web Vitals
- Track rich result appearances
- Monitor indexed page count

---

## File Reference

### New Pages (8 total)
| URL | Priority | Week |
|-----|----------|------|
| `/about/translator/` | P0 | 1 |
| `/locations/sharjah/tenancy-translation/` | P1 | 2 |
| `/about/reviews/` | P1 | 3 |
| `/resources/case-studies/` | P1 | 3 |
| `/resources/case-studies/rejected-document-rescue/` | P2 | 3 |
| `/resources/case-studies/urgent-family-visa/` | P2 | 3 |
| `/resources/case-studies/dha-dataflow-deadline/` | P2 | 3 |
| `/about/credentials/` | P2 | 4 |

### New Components (8 total)
| Component | Purpose | Week |
|-----------|---------|------|
| `PersonSchema.astro` | Translator structured data | 1 |
| `TranslatorHero.astro` | Bio page hero | 1 |
| `CredentialsGrid.astro` | License display | 1 |
| `ExpertiseAccordion.astro` | Expertise areas | 1 |
| `VerificationBadge.astro` | MOJ verification | 1 |
| `SharjahFeeCalculator.astro` | Fee calculator | 2 |
| `ReviewCard.astro` | Enhanced testimonial | 3 |
| `CaseStudyCard.astro` | Case study preview | 3 |

### Modified Files
| File | Changes | Week |
|------|---------|------|
| `ServiceLayout.astro` | Add Service schema | 0 |
| `BaseLayout.astro` | Update AggregateRating | 0 |
| `about.astro` | Add translator link | 1 |
| `navigation.ts` | Add new page links | 1-4 |
| `/locations/sharjah/index.astro` | Add tenancy link | 2 |

---

## Related Documentation

| Document | Purpose |
|----------|---------|
| `EEAT-PAGE-DESIGNS.md` | Detailed page wireframes and content structure |
| `EEAT-COMPONENT-SPECS.md` | Technical component specifications with code |
| `CLAUDE.md` | Master blueprint (content standards, brand voice) |

---

## Success Criteria

### Phase Completion Gates

**Phase 0 Complete When:**
- [ ] Service schema deployed to ServiceLayout
- [ ] Schema validates in Rich Results Test

**Phase 1 Complete When:**
- [ ] Translator bio page live
- [ ] Person schema validates
- [ ] Internal links added

**Phase 2 Complete When:**
- [ ] Sharjah tenancy page live
- [ ] Fee calculator functional
- [ ] HowTo/FAQ schemas validate

**Phase 3 Complete When:**
- [ ] Reviews hub live with 10+ testimonials
- [ ] 3 case studies published
- [ ] Review schemas validate

**Phase 4 Complete When:**
- [ ] Credentials page live
- [ ] All trust signals consolidated
- [ ] Full schema audit passes

---

*Implementation Start: Pending User Approval*
*Estimated Completion: 4 Weeks*
*Total New Pages: 8*
*Total New Components: 8*
