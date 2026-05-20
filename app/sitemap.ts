import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';
import { getAllServiceSlugs } from '@/lib/services-data';
import { getAllLocationSlugs } from '@/lib/locations-data';
import { loadSitePlan, priorityServiceSlugs, noindexSlugs, urlToSlug } from '@/lib/site-plan';

const ORIGIN = 'https://liveanswerservice.com';

// Static date — avoids every build re-stamping pages as "modified today".
// Update manually when you make meaningful content changes.
const SITE_LAST_MODIFIED = new Date("2026-05-13");

export default function sitemap(): MetadataRoute.Sitemap {
  // Tier data from site-plan.json (optional — sitemap still works without it).
  // Used to enforce the publishing schedule: pages in plan.exclude are omitted
  // and rendered with robots:noindex via per-page generateMetadata.
  const plan          = loadSitePlan();
  const prioritySlugs = priorityServiceSlugs(plan);
  const noindex       = noindexSlugs(plan);
  const priorityLocs  = plan
    ? new Set(
        plan.sitemaps.priority.urls
          .filter((u) => u.url.startsWith('/locations/'))
          .map((u) => urlToSlug(u.url)),
      )
    : new Set<string>();

  // Top-level page slugs that may be gated by site-plan
  const topLevelGated = (slug: string) => !noindex.has(slug);

  const posts = getAllPosts();
  const blogUrls = posts.map((post) => ({
    url: `${ORIGIN}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const serviceUrls = getAllServiceSlugs()
    .filter((slug) => !noindex.has(slug))
    .map((slug) => ({
      url: `${ORIGIN}/services/${slug}`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: 'monthly' as const,
      priority: prioritySlugs.has(slug) ? 0.95 : 0.8,
    }));

  const locationUrls = getAllLocationSlugs()
    .filter((slug) => !noindex.has(slug))
    .map((slug) => ({
      url: `${ORIGIN}/locations/${slug}`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: 'monthly' as const,
      priority: priorityLocs.has(slug) ? 0.95 : 0.8,
    }));

  // Optional top-level marketing pages — each gated by site-plan exclude list.
  // Pricing + calculator are Week 1; the rest are scheduled later.
  const topLevel: Array<{ slug: string; priority: number; freq: MetadataRoute.Sitemap[number]['changeFrequency'] }> = [
    { slug: 'pricing',                       priority: 0.95, freq: 'monthly' },
    { slug: 'calculator',                    priority: 0.9,  freq: 'monthly' },
    { slug: 'how-it-works',                  priority: 0.85, freq: 'monthly' },
    { slug: 'comparison',                    priority: 0.8,  freq: 'monthly' },
    { slug: 'ccpa-compliance-call-recording', priority: 0.6, freq: 'yearly'  },
    { slug: 'start-trial',                   priority: 0.85, freq: 'monthly' },
    { slug: 'free-trial',                    priority: 0.85, freq: 'monthly' },
    { slug: 'cheap-answering-service',       priority: 0.85, freq: 'monthly' },
    { slug: '24-7-answering-service',        priority: 0.85, freq: 'monthly' },
    { slug: 'bilingual-answering-service-california', priority: 0.85, freq: 'monthly' },
    { slug: 'vs-hiring-a-receptionist',      priority: 0.8,  freq: 'monthly' },
  ];

  const topLevelUrls = topLevel
    .filter((p) => topLevelGated(p.slug))
    .map((p) => ({
      url: `${ORIGIN}/${p.slug}`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: p.freq,
      priority: p.priority,
    }));

  return [
    {
      url: ORIGIN,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${ORIGIN}/about`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${ORIGIN}/services`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${ORIGIN}/locations`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${ORIGIN}/blog`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${ORIGIN}/book`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${ORIGIN}/privacy`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${ORIGIN}/terms`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${ORIGIN}/accessibility`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    ...topLevelUrls,
    ...serviceUrls,
    ...locationUrls,
    ...blogUrls,
  ];
}
