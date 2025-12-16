# Directus Assessment for OnlineTranslation.ae

## What is Directus?

Directus is a **database-first headless CMS** - fundamentally different from Keystatic's git-based approach.

| Aspect | Keystatic | Directus |
|--------|-----------|----------|
| Architecture | Git-based (files in repo) | Database-first (SQL backend) |
| Storage | Markdown/JSON/YAML in codebase | PostgreSQL, MySQL, SQLite, etc. |
| API | None (reads files directly) | Auto-generated REST & GraphQL |
| Hosting | GitHub (free) | Self-hosted or Directus Cloud |
| Auth | GitHub OAuth | JWT + SSO (OAuth, LDAP) |

---

## Directus + Astro Integration

Directus has **official Astro support** with tutorials covering:
- Basic CMS setup
- Dynamic blocks/components
- Authentication
- Real-time updates

### How it Works

```javascript
// Fetch content from Directus API
const response = await fetch('https://your-directus.com/items/blog_posts');
const { data: posts } = await response.json();
```

vs Keystatic:
```javascript
// Read content from local files
import { getEntry } from 'astro:content';
const home = await getEntry('core', 'home');
```

---

## Assessment for OnlineTranslation.ae

### ✅ Directus Advantages

| Advantage | Relevance to Your Site |
|-----------|------------------------|
| **Full API access** | Could power mobile app or other frontends |
| **Complex relationships** | Better for your 90+ serviceLinks relationships |
| **Role-based permissions** | Different editors for different content areas |
| **Asset management** | Built-in DAM for images/PDFs |
| **Multi-language** | Native i18n support for Arabic content |
| **Real-time updates** | Live preview, collaborative editing |
| **Existing DB support** | Could wrap existing data sources |

### ❌ Directus Disadvantages

| Disadvantage | Impact |
|--------------|--------|
| **Requires hosting** | Need server/container (Docker) or Directus Cloud ($$$) |
| **Database setup** | PostgreSQL/MySQL vs simple git repo |
| **More complex** | Steeper learning curve than Keystatic |
| **Content sync** | Content lives in DB, not in git history |
| **Build dependency** | Site won't build without Directus running |
| **Cost** | Directus Cloud: $99-499/mo; Self-hosted: server costs |

---

## Architecture Comparison

### Keystatic Flow
```
Edit in Admin UI
      ↓
Saves to GitHub (PR or direct commit)
      ↓
Vercel detects change, rebuilds
      ↓
Static site deployed
```
- ✅ No runtime dependencies
- ✅ Content versioned in git
- ✅ Free (GitHub + Vercel free tiers)
- ❌ Changes require rebuild

### Directus Flow
```
Edit in Directus Admin
      ↓
Saves to PostgreSQL
      ↓
Option A: Webhook triggers Vercel rebuild (static)
Option B: Astro SSR fetches live data (dynamic)
      ↓
Site serves content
```
- ✅ Instant updates possible (SSR)
- ✅ True relational data
- ✅ API for other apps
- ❌ Runtime dependency
- ❌ Hosting costs

---

## Suitability Matrix

| Requirement | Keystatic | Directus |
|-------------|-----------|----------|
| Simple blog/pages | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| Marketing content edits | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Complex relationships | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| Multi-user roles | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| Zero hosting cost | ⭐⭐⭐⭐⭐ | ⭐⭐ |
| Git-based workflow | ⭐⭐⭐⭐⭐ | ⭐ |
| API for mobile/apps | ⭐ | ⭐⭐⭐⭐⭐ |
| Arabic/i18n | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Setup complexity | ⭐⭐⭐⭐⭐ (simple) | ⭐⭐ (complex) |

---

## Cost Comparison

### Keystatic
| Component | Cost |
|-----------|------|
| GitHub repo | Free |
| Vercel hosting | Free tier sufficient |
| CMS admin | Free (built-in) |
| **Total** | **$0/month** |

### Directus (Self-Hosted)
| Component | Cost |
|-----------|------|
| VPS (DigitalOcean/Render) | $12-25/mo |
| PostgreSQL (managed) | $15-25/mo |
| Vercel hosting | Free tier |
| **Total** | **$27-50/month** |

### Directus Cloud
| Tier | Cost | Includes |
|------|------|----------|
| Starter | $99/mo | 3 users, 10GB storage |
| Pro | $249/mo | 10 users, 50GB storage |
| Enterprise | $499+/mo | Unlimited |

---

## When to Choose Directus

Choose Directus if you need:

1. **Multiple frontends** - Mobile app, kiosk, etc. sharing same content
2. **Complex data relationships** - Your 90+ service links with relationships would be easier
3. **Role-based editing** - Different permissions for different content areas
4. **Multi-language at scale** - Native i18n for Arabic + English
5. **Real-time collaboration** - Multiple editors working simultaneously
6. **Existing database** - Already have PostgreSQL with business data

---

## When to Choose Keystatic

Choose Keystatic if you need:

1. **Zero infrastructure** - No servers to manage
2. **Git-based workflow** - Content changes in PRs, code review
3. **Static site** - Maximum performance, no runtime
4. **Low cost** - $0/month
5. **Simple content** - Blog posts, pages, settings
6. **Developer-friendly** - Content files alongside code

---

## Recommendation for OnlineTranslation.ae

### Short-term: Keystatic ✅

Your current needs are well-served by Keystatic:
- Blog posts and service pages
- Homepage content sections
- FAQ, CTA, hero text
- Basic settings

### Consider Directus if:

1. You add **Arabic language version** (Directus i18n is superior)
2. You need **API access** for mobile app or quote calculator
3. You hire **content editors** who shouldn't access git
4. You want to manage **serviceLinks relationships** in a real DB

### Migration Path

```
Phase 1 (Now): Keystatic
├── Migrate content to Keystatic
├── Validate workflow works
└── Zero cost, fast setup

Phase 2 (If needed): Evaluate Directus
├── When Arabic version launches
├── When mobile app is planned
└── When team grows beyond 2-3 editors
```

---

## Quick Comparison Table

| Factor | Keystatic | Directus | Winner for You |
|--------|-----------|----------|----------------|
| Setup time | 1-2 hours | 4-8 hours | Keystatic |
| Monthly cost | $0 | $27-99+ | Keystatic |
| Content editing UX | Good | Excellent | Directus |
| Developer experience | Excellent | Good | Keystatic |
| Scalability | Medium | High | Directus |
| Git integration | Native | Plugin | Keystatic |
| API capabilities | None | Full REST/GraphQL | Directus |
| Static site fit | Perfect | Good | Keystatic |

---

## Verdict

**For your current requirements, Keystatic is the better choice.**

Directus becomes compelling when:
- You need Arabic language support
- You want to centralize all data (including serviceLinks, navigation)
- You're building additional applications that need the same content
- You hire non-technical content editors

The Keystatic migration plan already covers your needs. Keep Directus on the radar for Phase 2 if your requirements evolve.

---

## Sources

- [Directus Official Site](https://directus.io/)
- [Astro + Directus Guide](https://docs.astro.build/en/guides/cms/directus/)
- [Directus + Astro Tutorial](https://directus.io/docs/tutorials/projects/create-a-cms-using-directus-and-astro)
- [Keystatic vs Directus Comparison](https://www.wisp.blog/compare/keystatic/directus)
- [Headless CMS Landscape 2024](https://www.viget.com/articles/a-view-of-the-headless-cms-landscape)
- [Git-based CMS Comparison](https://dev.to/linkb15/top-5-git-based-cms-comparison-as-of-april-2024-4k1e)
