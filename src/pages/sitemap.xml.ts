import type { APIRoute } from 'astro';

const SITE_URL = 'https://onlinetranslation.ae';

interface SitemapURL {
  loc: string;
  lastmod?: string;
  changefreq?: string;
  priority?: string;
}

const pages: SitemapURL[] = [
  { loc: '/', lastmod: '2025-12-09', changefreq: 'weekly', priority: '1.0' },
  { loc: '/about/', lastmod: '2025-12-09', changefreq: 'monthly', priority: '0.6' },
  { loc: '/contact/', lastmod: '2025-12-09', changefreq: 'monthly', priority: '0.8' },
  { loc: '/privacy/', lastmod: '2025-12-09', changefreq: 'yearly', priority: '0.3' },
  { loc: '/terms/', lastmod: '2025-12-09', changefreq: 'yearly', priority: '0.3' },

  { loc: '/services/', lastmod: '2025-12-09', changefreq: 'weekly', priority: '0.9' },
  { loc: '/services/legal-translation/', lastmod: '2025-12-09', changefreq: 'weekly', priority: '0.9' },
  { loc: '/services/golden-visa-translation/', lastmod: '2025-12-09', changefreq: 'weekly', priority: '0.9' },
  { loc: '/services/attestation/', lastmod: '2025-12-09', changefreq: 'weekly', priority: '0.9' },
  { loc: '/services/certificate-translation/', lastmod: '2025-12-09', changefreq: 'weekly', priority: '0.9' },
  { loc: '/services/corporate-translation/', lastmod: '2025-12-09', changefreq: 'weekly', priority: '0.9' },

  { loc: '/personal/', lastmod: '2025-12-09', changefreq: 'weekly', priority: '0.9' },
  { loc: '/personal/vital-records/birth/', lastmod: '2025-12-09', changefreq: 'weekly', priority: '0.9' },
  { loc: '/personal/vital-records/marriage/', lastmod: '2025-12-09', changefreq: 'weekly', priority: '0.9' },
  { loc: '/personal/vital-records/death/', lastmod: '2025-12-09', changefreq: 'weekly', priority: '0.9' },
  { loc: '/personal/vital-records/divorce/', lastmod: '2025-12-09', changefreq: 'weekly', priority: '0.9' },
  { loc: '/personal/vital-records/passport/', lastmod: '2025-12-09', changefreq: 'weekly', priority: '0.8' },
  { loc: '/personal/education/degree/', lastmod: '2025-12-09', changefreq: 'weekly', priority: '0.9' },
  { loc: '/personal/academic/transcripts/', lastmod: '2025-12-09', changefreq: 'weekly', priority: '0.9' },
  { loc: '/personal/immigration/pcc/', lastmod: '2025-12-09', changefreq: 'weekly', priority: '0.9' },
  { loc: '/personal/immigration/bank/', lastmod: '2025-12-09', changefreq: 'weekly', priority: '0.9' },
  { loc: '/personal/immigration/license/', lastmod: '2025-12-09', changefreq: 'weekly', priority: '0.9' },
  { loc: '/personal/immigration/visa/', lastmod: '2025-12-09', changefreq: 'weekly', priority: '0.8' },

  { loc: '/legal/', lastmod: '2025-12-09', changefreq: 'weekly', priority: '0.9' },
  { loc: '/legal/contracts/', lastmod: '2025-12-09', changefreq: 'weekly', priority: '0.9' },
  { loc: '/legal/contracts/nda/', lastmod: '2025-12-09', changefreq: 'weekly', priority: '0.9' },
  { loc: '/legal/contracts/employment/', lastmod: '2025-12-09', changefreq: 'weekly', priority: '0.8' },
  { loc: '/legal/corporate/', lastmod: '2025-12-09', changefreq: 'weekly', priority: '0.9' },
  { loc: '/legal/corporate/poa/', lastmod: '2025-12-09', changefreq: 'weekly', priority: '0.9' },
  { loc: '/legal/corporate/moa/', lastmod: '2025-12-09', changefreq: 'weekly', priority: '0.9' },
  { loc: '/legal/litigation/', lastmod: '2025-12-09', changefreq: 'weekly', priority: '0.8' },
  { loc: '/legal/wills/', lastmod: '2025-12-09', changefreq: 'weekly', priority: '0.8' },

  { loc: '/locations/', lastmod: '2025-12-09', changefreq: 'monthly', priority: '0.8' },
  { loc: '/locations/dubai/', lastmod: '2025-12-09', changefreq: 'monthly', priority: '0.8' },
  { loc: '/locations/dubai/palm-jumeirah/', lastmod: '2025-12-09', changefreq: 'monthly', priority: '0.8' },
  { loc: '/locations/dubai/difc/', lastmod: '2025-12-09', changefreq: 'monthly', priority: '0.8' },
  { loc: '/locations/dubai/jlt/', lastmod: '2025-12-09', changefreq: 'monthly', priority: '0.8' },
  { loc: '/locations/dubai/business-bay/', lastmod: '2025-12-09', changefreq: 'monthly', priority: '0.8' },
  { loc: '/locations/abu-dhabi/', lastmod: '2025-12-09', changefreq: 'monthly', priority: '0.8' },
  { loc: '/locations/sharjah/', lastmod: '2025-12-09', changefreq: 'monthly', priority: '0.8' },

  { loc: '/industries/', lastmod: '2025-12-09', changefreq: 'monthly', priority: '0.7' },
  { loc: '/industries/legal/', lastmod: '2025-12-09', changefreq: 'monthly', priority: '0.7' },
  { loc: '/industries/healthcare/', lastmod: '2025-12-09', changefreq: 'monthly', priority: '0.7' },
  { loc: '/industries/real-estate/', lastmod: '2025-12-09', changefreq: 'monthly', priority: '0.7' },
  { loc: '/industries/e-commerce/', lastmod: '2025-12-09', changefreq: 'monthly', priority: '0.7' },

  { loc: '/specialized/', lastmod: '2025-12-09', changefreq: 'monthly', priority: '0.7' },
  { loc: '/specialized/medical/', lastmod: '2025-12-09', changefreq: 'monthly', priority: '0.8' },
  { loc: '/specialized/financial/', lastmod: '2025-12-09', changefreq: 'monthly', priority: '0.7' },

  { loc: '/resources/', lastmod: '2025-12-09', changefreq: 'monthly', priority: '0.7' },
  { loc: '/resources/faq/', lastmod: '2025-12-09', changefreq: 'monthly', priority: '0.8' },
  { loc: '/resources/pricing-guide/', lastmod: '2025-12-09', changefreq: 'monthly', priority: '0.8' },
  { loc: '/resources/document-checklist/', lastmod: '2025-12-09', changefreq: 'monthly', priority: '0.7' },
  { loc: '/resources/attestation-guide/', lastmod: '2025-12-09', changefreq: 'monthly', priority: '0.7' },
  { loc: '/resources/golden-visa-checklist/', lastmod: '2025-12-09', changefreq: 'monthly', priority: '0.8' },
];

function generateSitemap(pages: SitemapURL[]): string {
  const urls = pages
    .map((page) => {
      const loc = `${SITE_URL}${page.loc}`;
      let entry = `  <url>\n    <loc>${loc}</loc>`;

      if (page.lastmod) {
        entry += `\n    <lastmod>${page.lastmod}</lastmod>`;
      }
      if (page.changefreq) {
        entry += `\n    <changefreq>${page.changefreq}</changefreq>`;
      }
      if (page.priority) {
        entry += `\n    <priority>${page.priority}</priority>`;
      }

      entry += '\n  </url>';
      return entry;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls}
</urlset>`;
}

export const GET: APIRoute = () => {
  const sitemap = generateSitemap(pages);

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
