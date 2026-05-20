import type { Metadata } from 'next';

export const dynamic = 'force-static'

export const metadata: Metadata = {
  openGraph: {
    url: "/terms",
    images: [{ url: "https://liveanswerservice.com/opengraph-image.png", width: 1024, height: 1024, alt: "Live Answer" }],
  },
  title: 'Terms of Service | Live Answer',
  description: 'Terms of Service for Live Answer — AI answering service for California small business. Service terms, billing, cancellation, and limitations.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <main className="container-xl section-pad max-w-3xl mx-auto bg-[var(--color-page)]">
      <h1 className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-ink)] mb-6 sm:mb-8">
        Terms of Service
      </h1>

      <div className="prose prose-neutral max-w-none text-[var(--color-text)] space-y-6">
        <p className="text-sm text-[var(--color-text-muted)]">Last updated: May 2026</p>

        <section>
          <h2 className="text-lg sm:text-xl font-semibold text-[var(--color-ink)] mb-2">Services</h2>
          <p>
            Live Answer provides AI-powered telephone answering, call qualification, and booking
            services to California small businesses. Service is billed monthly at the plan you sign
            up for, with the rate locked at sign-up.
          </p>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl font-semibold text-[var(--color-ink)] mb-2">Free Trial &amp; Setup</h2>
          <p>
            The 7-day free trial requires no credit card. A one-time $199 setup fee applies to new
            paid accounts and is waived for accounts that prepay annually. Setup is delivered within
            48 hours of kickoff.
          </p>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl font-semibold text-[var(--color-ink)] mb-2">Billing &amp; Cancellation</h2>
          <p>
            Monthly plans are month-to-month and may be cancelled at any time. Annual prepay is
            non-refundable after day 30 but coverage continues for the full prepaid term. You may
            port your forwarded number out at any time, including after cancellation, at no charge.
          </p>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl font-semibold text-[var(--color-ink)] mb-2">Booking Guarantee</h2>
          <p>
            We offer a booking-quality guarantee detailed in your service agreement. If your AI
            agent fails to capture the bookings we committed to in your kickoff call during the first
            30 days, we will credit one full month of service. Specific thresholds are
            vertical-specific and confirmed at onboarding.
          </p>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl font-semibold text-[var(--color-ink)] mb-2">Your Responsibilities</h2>
          <p>
            You are responsible for the accuracy of the business information you provide during
            onboarding, for obtaining any consent required from your callers, and for compliance with
            applicable laws. You retain ownership of all data we process on your behalf.
          </p>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl font-semibold text-[var(--color-ink)] mb-2">Limitation of Liability</h2>
          <p>
            Live Answer&rsquo;s liability is limited to the fees paid for the current monthly billing
            period. We are not responsible for indirect, incidental, or consequential damages.
          </p>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl font-semibold text-[var(--color-ink)] mb-2">Contact</h2>
          <p>
            Questions about these terms? Contact us at{' '}
            <a href="mailto:hello@liveanswerservice.com" className="text-[var(--color-brand)] underline">
              hello@liveanswerservice.com
            </a>.
          </p>
        </section>
      </div>
    </main>
  );
}
