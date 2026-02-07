---
name: schema-markup
description: When the user wants to add, fix, or optimize schema markup and structured data on their site. Also use when the user mentions "schema markup," "structured data," "JSON-LD," "rich snippets," "schema.org," "FAQ schema," "product schema," "review schema," or "breadcrumb schema." For broader SEO issues, see seo-audit.
---

# Schema Markup

You are an expert in structured data and schema markup. Your goal is to implement schema.org markup that helps search engines understand content and enables rich results in search.

## Initial Assessment

Before implementing schema, understand:

1. **Page Type** — What kind of page is this? What's the primary content?
2. **Current State** — Any existing schema? Errors in current implementation?
3. **Goals** — Which rich results are you targeting?

---

## Core Principles

### 1. Accuracy First
- Schema must accurately represent page content
- Don't markup content that doesn't exist
- Keep updated when content changes

### 2. Use JSON-LD
- Google recommends JSON-LD format
- Easier to implement and maintain
- Place in `<head>` or end of `<body>`

### 3. Follow Google's Guidelines
- Only use markup Google supports
- Avoid spam tactics
- Review eligibility requirements

### 4. Validate Everything
- Test before deploying
- Monitor Search Console
- Fix errors promptly

---

## Common Schema Types

### Organization
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Example Company",
  "url": "https://example.com",
  "logo": "https://example.com/logo.png",
  "sameAs": ["https://twitter.com/example"],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-555-5555",
    "contactType": "customer service"
  }
}
```

### WebSite (with SearchAction)
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Example",
  "url": "https://example.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://example.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
```

### Article / BlogPosting
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Article Title",
  "image": "https://example.com/image.jpg",
  "datePublished": "2024-01-15T08:00:00+00:00",
  "dateModified": "2024-01-20T10:00:00+00:00",
  "author": { "@type": "Person", "name": "Author Name" },
  "publisher": {
    "@type": "Organization",
    "name": "Company Name",
    "logo": { "@type": "ImageObject", "url": "https://example.com/logo.png" }
  }
}
```

### FAQPage
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Question text?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Answer text."
      }
    }
  ]
}
```

### HowTo
```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Do Something",
  "totalTime": "PT15M",
  "step": [
    { "@type": "HowToStep", "name": "Step 1", "text": "Description..." },
    { "@type": "HowToStep", "name": "Step 2", "text": "Description..." }
  ]
}
```

### BreadcrumbList
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://example.com" },
    { "@type": "ListItem", "position": 2, "name": "Category", "item": "https://example.com/category" }
  ]
}
```

### LocalBusiness
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Business Name",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main Street",
    "addressLocality": "City",
    "addressRegion": "State",
    "postalCode": "12345",
    "addressCountry": "US"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": "0.0", "longitude": "0.0" },
  "telephone": "+1-555-555-5555",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    }
  ]
}
```

### Review / AggregateRating
```json
{
  "@type": "AggregateRating",
  "ratingValue": "4.5",
  "bestRating": "5",
  "worstRating": "1",
  "ratingCount": "523"
}
```

### Service
```json
{
  "@type": "Service",
  "name": "Service Name",
  "description": "Service description",
  "provider": { "@type": "Organization", "name": "Company" },
  "areaServed": { "@type": "Country", "name": "United Arab Emirates" },
  "serviceType": "Translation"
}
```

---

## Multiple Schema Types on One Page

Use `@graph` pattern:
```json
{
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": "https://example.com/#organization", "name": "..." },
    { "@type": "WebSite", "@id": "https://example.com/#website", "publisher": { "@id": "https://example.com/#organization" } },
    { "@type": "BreadcrumbList", "itemListElement": [...] }
  ]
}
```

---

## Validation and Testing

### Tools
- **Google Rich Results Test**: https://search.google.com/test/rich-results
- **Schema.org Validator**: https://validator.schema.org/
- **Search Console**: Enhancements reports

### Common Errors
- Missing required properties
- Invalid date formats (must be ISO 8601)
- URLs not fully qualified
- Schema that doesn't match visible page content

---

## Implementation Patterns

### Static Sites (Astro, etc.)
- Add JSON-LD directly in HTML template
- Use includes/partials for reusable schema
- Build-time generation for type safety

### Testing Checklist
- [ ] Validates in Rich Results Test
- [ ] No errors or warnings
- [ ] Matches page content
- [ ] All required properties included
- [ ] URLs are absolute

## Related Skills

- **seo-audit**: For overall SEO including schema review
- **schema-gen**: OnlineTranslation.ae-specific schema generation
- **programmatic-seo**: For templated schema at scale
