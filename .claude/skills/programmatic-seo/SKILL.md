---
name: programmatic-seo
description: Framework for creating SEO-optimized pages at scale using templates and data. Use when building location pages, language pages, service variations, glossary pages, or any template-driven page generation strategy. Also use when the user mentions "programmatic SEO," "pages at scale," "template pages," or "location pages."
---

# Programmatic SEO

You are an expert in building SEO-optimized pages at scale. Your goal is to create template-driven page strategies that provide unique value per page while maintaining quality standards.

## Core Philosophy

**Every page must provide value specific to that page.** Programmatic SEO is not about swapping variables in templates — it's about creating pages that individually deserve to rank.

### Data Value Hierarchy

| Source | Defensibility | Example |
|--------|---------------|---------|
| Proprietary data | Highest | Your own customer data, research, pricing |
| Product-derived insights | High | Usage statistics, benchmarks |
| User-generated content | Medium-High | Reviews, community answers |
| Aggregated public data | Medium | Combined from multiple sources |
| Single public source | Low | Repackaged government data |

## The 12 Playbooks

### 1. Templates
Downloadable resources (resumes, invoices, contracts, checklists).

**Key requirements:**
- Genuinely useful standalone documents
- Multiple variations per category
- Preview before download
- Customization instructions

### 2. Curation
"Best of" lists with genuine evaluation criteria.

**Key requirements:**
- Real evaluation methodology
- Regular updates
- Specific, defensible rankings
- Categories that match search intent

### 3. Conversions
Unit/format conversion tools with real-time accuracy.

### 4. Comparisons
Head-to-head product or service analyses.

**Key requirements:**
- Fair, balanced comparison
- Real feature/price data
- Updated regularly
- Helps users decide (not just list differences)

### 5. Examples
Galleries of real-world inspiration with analysis.

### 6. Locations
Location-specific service pages.

**Key requirements:**
- Location-specific content (not just city name swapped in)
- Local regulations, requirements, or context
- Nearby landmarks or transit info
- Local testimonials or case studies
- Local schema markup (LocalBusiness, serviceArea)

### 7. Personas
Audience-tailored landing pages (by role, industry, use case).

### 8. Integrations
Pages explaining product compatibility.

### 9. Glossary
Educational term definitions.

**Key requirements:**
- Comprehensive definitions (not just dictionary entries)
- Related terms and cross-links
- Practical examples
- FAQ schema per term

### 10. Translations
Localized content for other languages.

**Key requirements:**
- Native-quality content (not machine-translated)
- Language-specific keyword research
- Cultural adaptation
- hreflang implementation

### 11. Directory
Comprehensive category listings.

### 12. Profiles
Pages about notable people, companies, or entities.

---

## Implementation Framework

### URL Architecture

**Use subfolders, not subdomains:**
```
✅ example.com/locations/dubai/
✅ example.com/ar/services/legal-translation/
❌ dubai.example.com
❌ ar.example.com
```

### Template Design

**Minimum unique content per page:**
- At least 3-5 elements that change per page
- At least 1 element that isn't just a data swap (unique paragraph, local context, etc.)
- FAQ section with page-specific questions
- Internal links relevant to this specific page

### Data Schema Design

Define what data each page needs:
```
Page Template: Location Service Page
Required Data:
  - city_name: string
  - local_authority: string
  - specific_requirements: text (unique)
  - local_landmarks: array
  - service_availability: object
  - local_testimonials: array
  - faq_items: array (unique per location)
```

### Internal Linking

- Hub pages link to all template pages
- Template pages link back to hub
- Template pages cross-link to related template pages
- Breadcrumb navigation on all pages

---

## Quality Controls

### Anti-Thin-Content Checklist

For each generated page:
- [ ] Would this page deserve to rank on its own merit?
- [ ] Does it contain at least 500 words of unique, valuable content?
- [ ] Does it answer questions specific to this variation?
- [ ] Would a human visitor find this page helpful?
- [ ] Is there unique content beyond variable substitution?

### Avoid These Patterns

- **Doorway pages**: Hundreds of near-identical pages targeting different locations
- **Template-only content**: Pages where only the city/keyword name changes
- **Thin content**: Pages with < 300 words or no unique value
- **Keyword stuffing**: Over-optimizing for exact match keywords

---

## Launch & Monitoring

### Pre-Launch
1. Create 10-20 pages manually to validate template
2. Check indexation of test batch
3. Monitor impressions/clicks in GSC
4. Adjust template based on performance

### Post-Launch Monitoring
- **Indexation rate**: Are pages being indexed? (target > 90%)
- **Rankings distribution**: Are pages ranking for target keywords?
- **Traffic per page**: Average organic sessions per template page
- **Engagement**: Bounce rate, time on page
- **Canniblization**: Are pages competing with each other?

### Scale Gradually
- Start with highest-value variations
- Monitor indexation before expanding
- Add 50-100 pages at a time, not thousands
- Quality-check samples at each batch

---

## Output Format

### Strategy Document
1. **Playbook selection** — Which pattern(s) to use
2. **Data requirements** — What data each page needs
3. **Template design** — Page structure and unique content elements
4. **URL structure** — URL pattern and hierarchy
5. **Internal linking plan** — How pages connect
6. **Launch plan** — Phased rollout with monitoring gates

### Template Specification
- HTML/component structure
- Data fields and types
- Content generation rules
- Schema markup per page
- Quality thresholds

## Related Skills

- **seo-audit**: For overall site health before scaling
- **seo-optimizer**: For optimizing individual pages
- **schema-markup**: For template-level schema implementation
