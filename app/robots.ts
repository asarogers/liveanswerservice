import { MetadataRoute } from 'next';

// One rule per user-agent avoids misinterpretation by audit tools and
// older parsers that don't handle multi-UA group syntax correctly.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // AI crawlers explicitly allowed — appear in ChatGPT, Perplexity, and Google AI Overviews
      { userAgent: 'GPTBot',          allow: '/' },
      { userAgent: 'OAI-SearchBot',   allow: '/' },
      { userAgent: 'ChatGPT-User',    allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'PerplexityBot',   allow: '/' },
      { userAgent: 'ClaudeBot',       allow: '/' },
      { userAgent: 'Claude-Web',      allow: '/' },
      { userAgent: 'anthropic-ai',    allow: '/' },
      { userAgent: 'Bytespider',      allow: '/' },
      { userAgent: 'cohere-ai',       allow: '/' },
      // All other crawlers — block private + checkout + leftover preview routes
      { userAgent: '*', allow: '/', disallow: ['/checkout', '/logo-preview', '/dev-nav'] },
    ],
    sitemap: 'https://liveanswerservice.com/sitemap.xml',
  };
}
