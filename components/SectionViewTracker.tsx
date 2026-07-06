'use client';

import { useEffect, useRef } from 'react';
import { Events } from '@/lib/analytics';
import { recordSectionEnter, recordSectionExit } from '@/lib/session';

/* ============================================================
   SectionViewTracker — two jobs:
     1. fire ONE `section_view` GA event the first time this
        section scrolls into view (drop-off funnel).
     2. feed the first-party journey: record enter/exit so
        lib/session.ts can total dwell time per section per
        visitor (how long they actually looked at each part).

   Renders an invisible full-width marker and observes it.
   ============================================================ */

export default function SectionViewTracker({ section }: { section: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            recordSectionEnter(section);
            if (!fired.current) {
              fired.current = true;
              Events.sectionView(section);
            }
          } else {
            recordSectionExit(section);
          }
        }
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    // On unmount, close the dwell timer so navigation doesn't lose the tail.
    return () => {
      recordSectionExit(section);
      io.disconnect();
    };
  }, [section]);

  return <div ref={ref} aria-hidden="true" style={{ height: 1, width: '100%' }} />;
}
