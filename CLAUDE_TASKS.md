# Claude Code Task List

Instructions for AI assistants working on this Astro site (onlinetranslation.ae).

---

## Scan Order (Priority)

Run checks in this order - if earlier steps fail, fix them before proceeding:

1. **Repo build/check** - if build fails, nothing else matters
2. **Crawl for 404s + redirect chains**
3. **Indexing** (robots/sitemap/canonicals/noindex)
4. **Performance** (LCP/CLS/JS/CSS)
5. **Accessibility + contrast**
6. **Security headers + secrets scan**

---

## 1. Repo Quality Checks (Automated)

### A) Build Must Succeed

```bash
npm ci
npm run build
npm run preview
npm run check  # Astro TypeScript validation
```

**What this catches:**
- Missing imports/components
- TypeScript issues
- Build-time route/data problems

### B) Dependency Vulnerability Scan

```bash
npm audit
npm audit --production
```

**Fix high/critical vulnerabilities before deploying.**

### C) Lint + Format + CSS

```bash
npm run lint          # ESLint
npm run lint:css      # Stylelint
npm run format:check  # Prettier
```

**Auto-fix:**
```bash
npm run lint:fix
npm run lint:css:fix
npm run format
```

### D) Dead Links in Repo

```bash
npm run build
npm run links:check
```

Or manually:
```bash
npx linkinator ./dist --recurse
```

### E) Secrets Detection

Run before committing:
```bash
npx gitleaks detect --source . --verbose
```

**Never commit:** `.env`, `credentials.json`, API keys, tokens.

---

## 2. Live Website Scans

Site URL: https://onlinetranslation.ae

### A) Performance + Core Web Vitals

**Tools to use:**
- PageSpeed Insights: https://pagespeed.web.dev/
- Lighthouse (Chrome DevTools > Lighthouse tab)
- WebPageTest: https://www.webpagetest.org/

**Key pages to test:**
- [ ] Homepage: https://onlinetranslation.ae/
- [ ] Legal Translation: https://onlinetranslation.ae/legal/
- [ ] Services Hub: https://onlinetranslation.ae/services/
- [ ] Locations Hub: https://onlinetranslation.ae/locations/

**What to check:**
- [ ] LCP (Largest Contentful Paint) < 2.5s
- [ ] CLS (Cumulative Layout Shift) < 0.1
- [ ] FID/INP (Interaction to Next Paint) < 200ms
- [ ] JS payload size (aim for < 200KB compressed)
- [ ] Render-blocking CSS
- [ ] Image optimization (WebP, lazy loading)

### B) Crawl for Broken Links + Status Codes

**Use any crawler:**
- Screaming Frog (desktop)
- Ahrefs/Semrush site audit
- Online: https://www.brokenlinkcheck.com/

**Check for:**
- [ ] 404/410 pages (dead links)
- [ ] Redirect chains (301 → 301 → 200) - max 1 redirect
- [ ] Orphan pages (no internal links pointing to them)
- [ ] Canonical mismatches

### C) Indexing Hygiene (SEO)

**robots.txt:**
- [ ] Exists at https://onlinetranslation.ae/robots.txt
- [ ] Points to sitemap
- [ ] No accidental blocks on public pages

**Sitemap:**
- [ ] Exists at https://onlinetranslation.ae/sitemap-index.xml
- [ ] All public pages included
- [ ] No 404 URLs in sitemap
- [ ] Submitted to Google Search Console

**On-page SEO (check each template):**
- [ ] Unique `<title>` per page (50-60 chars)
- [ ] Unique `<meta name="description">` (150-160 chars)
- [ ] One `<h1>` per page
- [ ] Clean heading hierarchy (h1 → h2 → h3)
- [ ] Canonical tags (`<link rel="canonical">`)
- [ ] No accidental `noindex` on public pages
- [ ] Open Graph tags (og:title, og:description, og:image)
- [ ] Twitter cards (twitter:card, twitter:title)

**Google Search Console checks:**
- [ ] Coverage report - no errors
- [ ] Sitemap submitted and indexed
- [ ] robots.txt validated
- [ ] Mobile usability - no issues

### D) Accessibility + UX

**Lighthouse Accessibility score target: 90+**

**Manual checks:**
- [ ] Keyboard navigation works (Tab through all interactive elements)
- [ ] Focus indicators visible
- [ ] Skip link present ("Skip to content")
- [ ] Alt text on all images
- [ ] Color contrast (4.5:1 minimum for text)
- [ ] Form labels associated with inputs
- [ ] ARIA labels where needed
- [ ] No autoplaying media

**Tools:**
- axe DevTools (browser extension)
- WAVE: https://wave.webaim.org/

### E) Security Headers

**Check at:** https://securityheaders.com/?q=onlinetranslation.ae

**Required headers:**
- [ ] `Strict-Transport-Security` (HSTS)
- [ ] `X-Content-Type-Options: nosniff`
- [ ] `X-Frame-Options: DENY` or `SAMEORIGIN`
- [ ] `Referrer-Policy`
- [ ] `Content-Security-Policy` (at least basic)
- [ ] `Permissions-Policy`

**Add to `vercel.json` headers section if missing.**

---

## 3. Pre-existing Issues to Fix

Found during initial quality scan:

### TypeScript/Module Errors

- [ ] `personal-documents/index.astro:2` - Missing module `../../layouts/ServiceLayout.astro`
- [ ] `scripts/Trialhz/Header-porto.astro:16` - Missing module `../data/navigation-porto`
- [ ] `src/pages/personal/vital-records/death/index.astro:225` - Missing `currentLabel` prop on `<DocumentFamily>`
- [ ] `src/pages/personal/vital-records/marriage/index.astro:291` - Missing `currentLabel` prop on `<DocumentFamily>`

### Unused Variables (Clean up)

- [ ] `src/components/CrossSiloLinks.astro` - unused `serviceLinks`, `pageRelationships`
- [ ] `src/components/RelatedServices.astro` - unused `serviceLinks`, `pageRelationships`
- [ ] `src/components/DocumentFamily.astro:33` - unused `index`
- [ ] Various unused `catIndex`, `_e` parameters

### Inline Script Hints

Add `is:inline` to JSON-LD scripts to silence hints:
```astro
<script is:inline type="application/ld+json" set:html={JSON.stringify({...})} />
```

Pages affected: Most service/location pages with structured data.

---

## 4. Vercel Configuration

**File:** `vercel.json`

### Redirects to Maintain

Check that all legacy redirects are working:
- [ ] `/legal-translation/` → `/legal/`
- [ ] `/medical-translation/` → `/specialized/medical/`

### Headers to Add

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    }
  ]
}
```

---

## 5. GitHub Actions CI

**File:** `.github/workflows/ci.yml`

**Jobs configured:**
1. `build` - Must pass (blocks merge)
2. `astro-check` - TypeScript validation
3. `lint` - ESLint, Stylelint, Prettier
4. `security-audit` - npm audit
5. `secrets-scan` - Gitleaks
6. `link-check` - Internal links

**Runs on:** Push to `main`/`master`, all PRs

---

## 6. Regular Maintenance Tasks

### Weekly
- [ ] Check Google Search Console for new errors
- [ ] Review Core Web Vitals in Search Console
- [ ] Check for npm audit warnings

### Monthly
- [ ] Full site crawl for broken links
- [ ] PageSpeed test on key pages
- [ ] Security headers check
- [ ] Update dependencies (`npm update`)

### Before Each Deploy
- [ ] `npm run build` passes
- [ ] `npm run check` passes (or known issues only)
- [ ] No new security vulnerabilities
- [ ] Test critical user flows locally

---

## Quick Commands Reference

```bash
# Full quality check
npm run quality

# Build and preview locally
npm run build && npm run preview

# Fix formatting issues
npm run format

# Fix lint issues
npm run lint:fix && npm run lint:css:fix

# Check for secrets before commit
npx gitleaks detect --source .

# Check links in built site
npm run build && npm run links:check
```

---

## Files Reference

| File | Purpose |
|------|---------|
| `astro.config.mjs` | Astro configuration |
| `vercel.json` | Vercel deployment config, redirects, headers |
| `robots.txt` | Search engine crawl rules |
| `eslint.config.mjs` | ESLint configuration |
| `stylelint.config.mjs` | Stylelint configuration |
| `.prettierrc` | Prettier configuration |
| `.gitleaks.toml` | Secrets detection config |
| `.github/workflows/ci.yml` | GitHub Actions CI |
