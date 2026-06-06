import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  goneSlugs,
  serviceRedirects,
  archivedLocationSlugs,
  archivedBlogSlugs,
  archivedCategorySlugs,
  archivedGBPCategorySlugs,
  blogToGuideRedirects,
} from "@/lib/redirects";

/**
 * Edge middleware: handle 410 Gone / 301 redirects for archived URLs,
 * then inject per-page hreflang via HTTP Link header.
 *
 * Next.js 16 introduces "proxy.ts" (Node.js runtime) but @opennextjs/cloudflare
 * requires Edge runtime for middleware. We stay on middleware.ts until
 * opennextjs adds Node.js proxy support.
 *
 * Google accepts HTTP Link headers for hreflang:
 * https://developers.google.com/search/docs/specialty/international/localization-page
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // --- Phase 1 redirects: archived & redirected URLs ---

  // /services/categories index — entire categories layer archived
  if (pathname === "/services/categories" || pathname === "/services/categories/") {
    return new Response(null, {
      status: 410,
      headers: { "Cache-Control": "no-store" },
    });
  }

  // Archived GBP category subroutes at /services/categories/<slug>
  const categoryMatch = pathname.match(/^\/services\/categories\/([^\/]+)\/?$/);
  if (categoryMatch && archivedGBPCategorySlugs.includes(categoryMatch[1])) {
    return new Response(null, {
      status: 410,
      headers: { "Cache-Control": "no-store" },
    });
  }

  // Service URLs
  const serviceMatch = pathname.match(/^\/services\/([^\/]+)\/?$/);
  if (serviceMatch) {
    const slug = serviceMatch[1];
    if (goneSlugs.includes(slug) || archivedCategorySlugs.includes(slug)) {
      return new Response(null, {
        status: 410,
        headers: { "Cache-Control": "no-store" },
      });
    }
    if (serviceRedirects[slug]) {
      const target = new URL(`/services/${serviceRedirects[slug]}`, request.url);
      return NextResponse.redirect(target, 301);
    }
  }

  // Location URLs
  const locationMatch = pathname.match(/^\/locations\/([^\/]+)\/?$/);
  if (locationMatch) {
    const slug = locationMatch[1];
    if (archivedLocationSlugs.includes(slug)) {
      const target = new URL("/locations", request.url);
      return NextResponse.redirect(target, 301);
    }
  }

  // Blog → Guides: 301 entire /blog index to /guides index
  if (pathname === "/blog" || pathname === "/blog/") {
    const target = new URL("/guides", request.url);
    return NextResponse.redirect(target, 301);
  }

  // Blog → Guides: 301 individual blog posts to /guides/<slug>
  const blogMatch = pathname.match(/^\/blog\/([^\/]+)\/?$/);
  if (blogMatch) {
    const slug = blogMatch[1];
    // Archived blog slugs return 410 Gone (currently empty, but checked first)
    if (archivedBlogSlugs.includes(slug)) {
      return new Response(null, {
        status: 410,
        headers: { "Cache-Control": "no-store" },
      });
    }
    // All 3 migrated blog posts 301 → /guides/<slug>
    if (blogToGuideRedirects[slug]) {
      const target = new URL(`/guides/${blogToGuideRedirects[slug]}`, request.url);
      return NextResponse.redirect(target, 301);
    }
  }

  // --- Existing hreflang Link header injection ---
  const pageUrl = `https://liveanswerservice.com${pathname}`;

  const response = NextResponse.next();

  // Per-page hreflang — points to the exact canonical URL of this page
  response.headers.set(
    "Link",
    `<${pageUrl}>; rel="alternate"; hreflang="en-US", <${pageUrl}>; rel="alternate"; hreflang="x-default"`,
  );

  return response;
}

export const config = {
  matcher: [
    // All page routes — skip Next.js internals, static assets, and robots/sitemap
    "/((?!_next/static|_next/image|favicon\\.ico|robots\\.txt|sitemap\\.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff|woff2|css)).*)",
  ],
};
