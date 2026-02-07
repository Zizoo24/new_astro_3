---
name: authority-page
description: Generate an authority-specific process guide page template for OnlineTranslation.ae. Creates structured content for GDRFA, MOHRE, DHA, MOFA, MOHESR, DIFC, ADJD, or ADGM guides. Use when creating new authority content from CONTENT-PLAN.md.
argument-hint: "[authority] [document-type] [language: en|ar]"
disable-model-invocation: true
---

# Authority Process Guide Generator

Generate a guide for: `$ARGUMENTS`

This creates content for Pillar 1 (Authority Process Guides) or Pillar 2 (Rejection Prevention) from the content strategy. These are the pages where ZERO translation companies compete.

## Step 1: Select Authority Context

Read `RESEARCH.md` for the authority's operational intelligence. Key facts by authority:

| Authority | Jurisdiction | Key System | Translation Requirement Source |
|-----------|-------------|------------|-------------------------------|
| GDRFA | Dubai immigration | Amer centers, GDRFA app | FAQ: "documents not in Arabic should be translated by certified legal translators" |
| MOHRE | Federal labour | Tasheel, "Eye" AI system | FDL 33/2021: contracts in Arabic or bilingual |
| DHA | Dubai healthcare | Sheryan portal | DHA Manual v1.1, Section 5.7 |
| MOFA | Federal foreign affairs | eDAS 2.0 | Attestation gateway |
| MOHESR | Federal higher education | — | Certificate of Recognition process |
| DIFC | Dubai financial free zone | DIFC Courts | Dubai Law No. 2 of 2025 |
| ADJD | Abu Dhabi courts | — | Federal Decree Law No. 42 of 2022 |
| ADGM | Abu Dhabi financial free zone | ADGM Courts | 2025 ADGM-Dubai Courts MoU |

## Step 2: Generate Page Structure

Follow CLAUDE.md Part V page structure (2,000-4,000 words):

### Hero Section
- Service badge with authority name
- H1: "[Document Type] for [Authority] — Complete Guide 2026"
- 3-sentence intro: What this guide covers, who it's for, why it matters
- Snapshot bullets (4-5 key facts)
- CTA: "Not sure what documents you need? WhatsApp us"

### Module A: Document Checklist (Accordion)
- List every document needed for this authority process
- Mark which ones need translation (MOJ vs Certified)
- Include "Documents you DON'T need to translate" section (right-selling)
- Note the correct sequence: Attestation → Translation → Submission

### Module B: Step-by-Step Process (4 Steps)
1. Prepare & authenticate documents (home country)
2. UAE attestation (MOFA, if applicable)
3. Translation by MOJ-certified translator
4. Submit to [Authority] via [portal/center]

Include timelines, fees (ranges, not exact), and portal names.

### Module C: Common Mistakes / Rejection Prevention
- What gets rejected and why
- Specific to this authority (use RESEARCH.md data)
- Include the GloboPrime case study if relevant (German family rejected for non-MOJ translation)
- Mention: rejection notices are often generic — "you may not even know translation was the issue"

### Module D: After-Care
- What happens after submission
- Processing timelines
- What to do if rejected
- How to contact the authority

### Module E: FAQ (8-15 Questions)
- Include FAQPage schema
- Questions should match common search queries for this authority
- First sentence: direct answer. Second: key detail. Third: CTA.

## Step 3: Apply SEO

- Title: Max 60 chars, includes [Authority] + translation
- Meta: Max 155 chars, includes [Authority] + document type + CTA
- Internal links: 10+ (link to related service pages, attestation guide, other authority guides)
- Schema: HowTo + FAQPage + BreadcrumbList

## Step 4: Arabic Version

If language is "ar":
- Use `BaseLayoutArabic.astro`
- Apply Arabic keyword formulas from `SEO_ARABIC_KEYWORDS.md`
- Abu Dhabi first in title/meta
- Link to other Arabic pages
- Natural Arabic (not machine-translated)

## Step 5: Verify

Before outputting, run the fact-checker mentally:
- Hague Convention references correct?
- Authority name spelled correctly?
- Legal citations accurate?
- Document sequence correct (Attestation → Translation → Submission)?
- No banned words?
- Sentence length under 25 words?

## Output

Complete Astro page file ready for `src/pages/resources/` or `src/pages/ar/resources/`.
