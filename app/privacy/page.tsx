import type { Metadata } from 'next';

export const dynamic = 'force-static'

export const metadata: Metadata = {
  openGraph: {
  url: "/privacy",
  images: [{ url: "https://liveanswerservice.com/opengraph-image.png", width: 1024, height: 1024, alt: "Live Answer" }],
  },
  title: 'Privacy Policy | Live Answer',
  description: 'Privacy Policy for Live Answer — AI answering service for California small business. How we collect, use, and protect your information and your callers’ information.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <main className="container-xl section-pad max-w-3xl mx-auto bg-[var(--color-page)]">
      <h1 className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-ink)] mb-6 sm:mb-8">
        Privacy Policy
      </h1>

      <div className="prose prose-neutral max-w-none text-[var(--color-text)] space-y-6">
        <p className="text-sm text-[var(--color-text-muted)]">Last updated: May 2026</p>

        <section>
          <h2 className="text-lg sm:text-xl font-semibold text-[var(--color-ink)] mb-2">Information We Collect</h2>
          <p>
            When you contact us or sign up for service, we collect your name, business name, email,
            phone number, billing information, and any other details you provide. As part of the
            answering service, we also process information about callers to your business — name,
            phone number, reason for the call, and the audio of the call itself.
          </p>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl font-semibold text-[var(--color-ink)] mb-2">How We Use Your Information</h2>
          <p>
            We use the information you provide to answer your inbound calls, route messages and
            bookings to your business, send call summaries, and support your account. Caller data is
            processed solely on your behalf as a service provider — we do not sell, rent, or share
            your or your callers’ personal information for marketing purposes.
          </p>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl font-semibold text-[var(--color-ink)] mb-2">CCPA Two-Party Consent &amp; Call Recordings</h2>
          <p>
            California law requires two-party consent for recorded calls. A consent disclosure plays
            at the start of every recorded call. Recordings and transcripts are encrypted at rest and
            in transit and retained for 90 days by default. Recording can be disabled per account.
            Deletion requests are honored within 30 days.
          </p>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl font-semibold text-[var(--color-ink)] mb-2">Cookies and Analytics</h2>
          <p>
            Our website uses essential cookies and aggregate analytics to understand how visitors use
            the site. Analytics data is not linked to personally identifiable information.
          </p>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl font-semibold text-[var(--color-ink)] mb-2">Your CCPA Rights</h2>
          <p>
            California residents have the right to know what personal information we collect, request
            deletion of that information, opt out of sale (we do not sell), and not be discriminated
            against for exercising these rights. To exercise any of these rights, contact us using
            the details below.
          </p>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl font-semibold text-[var(--color-ink)] mb-2">Contact Us</h2>
          <p>
            If you have questions about this privacy policy, contact us at{' '}
            <a href="mailto:hello@liveanswerservice.com" className="text-[var(--color-brand)] underline">
              hello@liveanswerservice.com
            </a>{' '}
            or call{' '}
            <a href="tel:+16693656533" className="text-[var(--color-brand)] underline">
              (669) 365-6533
            </a>.
          </p>
        </section>
      </div>
    </main>
  );
}
