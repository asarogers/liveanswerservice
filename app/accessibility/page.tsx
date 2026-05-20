import type { Metadata } from 'next';

export const dynamic = 'force-static'

export const metadata: Metadata = {
  openGraph: {
  url: "/accessibility",
  images: [{ url: "https://liveanswerservice.com/opengraph-image.png", width: 1024, height: 1024, alt: "Live Answer" }],
  },
  title: 'Accessibility Statement | Live Answer',
  description: 'Accessibility Statement for Live Answer — committed to WCAG 2.1 Level AA across our website and AI answering service.',
  alternates: { canonical: '/accessibility' },
};

export default function AccessibilityPage() {
  return (
    <main className="container-xl section-pad max-w-3xl mx-auto bg-[var(--color-page)]">
      <h1 className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-ink)] mb-6 sm:mb-8">
        Accessibility Statement
      </h1>

      <div className="prose prose-neutral max-w-none text-[var(--color-text)] space-y-6">
        <p className="text-sm text-[var(--color-text-muted)]">Last updated: May 2026</p>

        <section>
          <h2 className="text-lg sm:text-xl font-semibold text-[var(--color-ink)] mb-2">Our Commitment</h2>
          <p>
            Live Answer is committed to ensuring that our website and AI answering service are
            accessible to everyone. We aim to meet WCAG 2.1 Level AA guidelines across our public
            site and to support callers using assistive devices on every line we answer.
          </p>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl font-semibold text-[var(--color-ink)] mb-2">Measures Taken</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Semantic HTML structure with appropriate heading hierarchy</li>
            <li>Alt text on all meaningful images</li>
            <li>Keyboard-navigable interface</li>
            <li>Sufficient color contrast ratios</li>
            <li>Responsive design that works at all viewport sizes and zoom levels</li>
            <li>ARIA labels on interactive elements</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl font-semibold text-[var(--color-ink)] mb-2">Known Limitations</h2>
          <p>
            We are continually working to improve accessibility. If you encounter any barriers,
            please contact us and we will prioritize a fix.
          </p>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl font-semibold text-[var(--color-ink)] mb-2">Feedback and Contact</h2>
          <p>
            If you experience difficulty accessing any part of our website, please contact us at{' '}
            <a href="mailto:hello@liveanswerservice.com" className="text-[var(--color-brand)] underline">
              hello@liveanswerservice.com
            </a>{' '}
            or call{' '}
            <a href="tel:+16693656533" className="text-[var(--color-brand)] underline">
              (669) 365-6533
            </a>. We aim to respond within 2 business days.
          </p>
        </section>
      </div>
    </main>
  );
}
