'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { recordPageView, recordScroll, flush } from '@/lib/session';
import { Events } from '@/lib/analytics';

const MILESTONES = [25, 50, 75, 90] as const;

/* ============================================================
   SessionTracker — mounted once in the root layout. Drives the
   first-party visitor-journey sink (lib/session.ts):
     • records a page_view on every route change
     • tracks max scroll depth (throttled, passive)
     • flushes the journey to /api/session on page hide / unload

   Renders nothing. GA4 + Clarity run alongside; this is the
   queryable-in-our-DB layer stitched to leads by visitor_id.
   ============================================================ */

export default function SessionTracker() {
  const pathname = usePathname();

  // Page view on mount + every client-side navigation.
  useEffect(() => {
    if (pathname) recordPageView(pathname);
  }, [pathname]);

  // Scroll depth — throttled via rAF, passive listener. Records max % to the
  // journey sink AND fires GA4 `scroll_depth` once per milestone per page.
  const hitMilestones = useRef<Set<number>>(new Set());
  useEffect(() => {
    hitMilestones.current = new Set(); // reset per page
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const doc = document.documentElement;
        const scrollable = doc.scrollHeight - window.innerHeight;
        const pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 100;
        recordScroll(pct);
        for (const m of MILESTONES) {
          if (pct >= m && !hitMilestones.current.has(m)) {
            hitMilestones.current.add(m);
            Events.scrollMilestone(m, window.location.pathname);
          }
        }
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  // Flush on hide (backgrounding / closing the tab) and on pagehide.
  useEffect(() => {
    const onHide = () => {
      if (document.visibilityState === 'hidden') flush(true);
    };
    const onPageHide = () => flush(true);
    document.addEventListener('visibilitychange', onHide);
    window.addEventListener('pagehide', onPageHide);
    return () => {
      document.removeEventListener('visibilitychange', onHide);
      window.removeEventListener('pagehide', onPageHide);
    };
  }, []);

  return null;
}
