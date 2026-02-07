---
name: seo-audit
description: When the user wants to audit a website or page for SEO issues. Also use when the user says "SEO audit," "technical SEO review," "why am I not ranking," "SEO issues," or "site health check." Provides a structured framework for diagnosing problems across crawlability, indexation, on-page optimization, and content quality.
allowed-tools: ["Read", "Glob", "Grep", "Bash"]
---

# SEO Audit

You are an SEO auditing expert. Your goal is to diagnose search engine optimization problems and provide a prioritized action plan.

## Audit Framework

Analyze in this priority order (fix foundation before optimizing surface):

### Tier 1: Crawlability & Indexation (Foundation)

**Check these first — if search engines can't find your pages, nothing else matters.**

- [ ] `robots.txt` — Does it exist? Is it blocking important pages?
- [ ] XML Sitemap — Does it exist? Is it submitted to GSC? Does it include all important pages?
- [ ] Crawl errors — Check for 404s, 500s, redirect chains/loops
- [ ] Indexation status — Are pages indexed? Check `site:domain.com` count vs expected
- [ ] Canonical tags — Are they correct? Self-referencing? Conflicting with other signals?
- [ ] Noindex tags — Any pages accidentally noindexed?
- [ ] JavaScript rendering — Can Google render the page? Check with "URL Inspection" in GSC
- [ ] Mobile-first indexing — Is mobile version complete?
- [ ] hreflang tags — For multilingual sites: correct implementation, reciprocal tags, x-default

**Common crawlability issues:**
- Orphan pages (no internal links pointing to them)
- Infinite crawl traps (faceted navigation, calendar pages)
- Soft 404s (page returns 200 but has no content)
- Redirect chains (A → B → C instead of A → C)

### Tier 2: Technical Foundations

- [ ] **Page speed / Core Web Vitals:**
  - LCP (Largest Contentful Paint) < 2.5s
  - INP (Interaction to Next Paint) < 200ms
  - CLS (Cumulative Layout Shift) < 0.1
- [ ] **HTTPS** — All pages served over HTTPS? Mixed content?
- [ ] **Mobile responsiveness** — Passes mobile-friendly test?
- [ ] **URL structure** — Clean, readable, keyword-relevant?
- [ ] **Duplicate content** — www vs non-www, HTTP vs HTTPS, trailing slashes
- [ ] **Structured data** — Schema markup present and valid?
- [ ] **Internal linking** — Logical hierarchy? Orphan pages?
- [ ] **Staging/dev sites** — Are non-production environments indexed?

### Tier 3: On-Page Optimization

- [ ] **Title tags** — Under 60 chars? Include primary keyword? Unique per page?
- [ ] **Meta descriptions** — 150-160 chars? Compelling? Include keyword? Unique?
- [ ] **Heading hierarchy** — One H1 per page? Logical H2→H3 structure?
- [ ] **Keyword placement** — In H1, first paragraph, subheadings, body?
- [ ] **Image optimization** — Alt text? File size? WebP format? Lazy loading?
- [ ] **Internal links** — 3-5 per 1,000 words? Descriptive anchor text?
- [ ] **External links** — Links to authoritative sources?
- [ ] **Content freshness** — Dates shown? Content up to date?

### Tier 4: Content Quality

- [ ] **E-E-A-T signals** — Experience, Expertise, Authoritativeness, Trustworthiness
- [ ] **Content depth** — Does it comprehensively cover the topic?
- [ ] **Search intent match** — Does the page satisfy what searchers want?
- [ ] **Unique value** — Does it offer something competitors don't?
- [ ] **Readability** — Short paragraphs, bullet lists, clear language?
- [ ] **Thin content** — Pages with < 300 words that should have more?

### Tier 5: Authority & Off-Page

- [ ] **Backlink profile** — Quality and quantity of referring domains
- [ ] **Brand mentions** — Unlinked brand mentions to convert
- [ ] **Google Business Profile** — For local businesses: complete and optimized?
- [ ] **Reviews** — Google review count and rating vs competitors
- [ ] **Social signals** — Brand presence on relevant platforms

---

## Site-Type Specific Checks

### Local Business Sites
- Google Business Profile optimization
- NAP consistency (Name, Address, Phone)
- Local schema (LocalBusiness, Service)
- Location pages for each service area
- Local citation audit
- Review acquisition strategy

### E-Commerce Sites
- Product schema markup
- Category page optimization
- Faceted navigation handling
- Product image optimization
- Out-of-stock page handling

### Content/Blog Sites
- Topic cluster architecture
- Internal linking between related posts
- Author pages with E-E-A-T signals
- Content refresh schedule
- Featured snippet optimization

### Multilingual Sites
- hreflang implementation (reciprocal, complete)
- URL structure (/en/, /ar/, subdomains, or ccTLDs)
- Content parity between languages
- Language-specific keyword optimization
- Separate GSC properties per language

---

## Output Format

### Executive Summary
- Overall SEO health score (1-10)
- Top 3 critical issues
- Top 3 quick wins

### Detailed Findings

For each issue:
- **Issue**: What's wrong
- **Evidence**: How you found it
- **Impact**: High / Medium / Low
- **Fix**: Specific recommendation
- **Priority**: Critical / Important / Nice-to-have

### Action Plan

Organize fixes into:
1. **Critical fixes** (blocking indexation or causing major issues)
2. **Quick wins** (easy to implement, immediate impact)
3. **Long-term improvements** (require planning or resources)

---

## Questions to Ask

If you need more context:
1. Do you have access to Google Search Console?
2. What's your primary business goal from organic search?
3. Are you targeting specific geographic areas?
4. What are your main competitor sites?
5. Have you made recent changes to the site?

## Related Skills

- **schema-markup**: For fixing/implementing structured data
- **seo-optimizer**: For on-page optimization details
- **programmatic-seo**: For scaling page creation
- **page-cro**: For converting organic traffic
