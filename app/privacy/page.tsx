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
            When you contact us or sign up for our service, we collect essential details such as your name, business name, email address, phone number, and billing information. This allows us to effectively communicate with you, manage your account, and provide the services you’ve requested. Additionally, we gather general usage data including login credentials, account activity, preferences, and communication choices to operate your account and improve the service.
          </p>
          <p>
            As part of our answering service, we process caller information such as their name, phone number, reason for calling, and the audio of the call. This data is required for accurate message-taking, appointment scheduling, and passing messages reliably between you and your customers. All collected information is stored securely in compliance with relevant privacy regulations.
          </p>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl font-semibold text-[var(--color-ink)] mb-2">How We Use Your Information</h2>
          <p>
            The primary purpose of collecting your information is to deliver the services you’ve requested. This includes answering inbound calls, routing messages and bookings to your business, sending call summaries, and supporting your account. Beyond these core functions, we analyze usage patterns to identify trends and opportunities for service improvement. For instance, common caller questions or scheduling requests can help us refine our automated responses and introduce new features that better serve your business.
          </p>
          <p>
            Caller data is used exclusively to fulfill our obligations as your service provider. We do not sell, rent, or share this information with third parties for marketing purposes. Additionally, we use this data to provide you with analytics and insights into your business's call patterns and customer engagement, helping you make informed decisions about your operations.
          </p>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl font-semibold text-[var(--color-ink)] mb-2">CCPA Two-Party Consent &amp; Call Recordings</h2>
          <p>
            In compliance with California law, we require two-party consent for recorded calls. A clear disclosure is played at the start of every call informing callers that their conversation may be recorded. All recordings and transcripts are encrypted during transmission and while stored to ensure maximum security.
          </p>
          <p>
            Recordings are retained for 90 days by default, giving you sufficient time to review interactions and address customer inquiries before data deletion. Encryption keys are regularly rotated, and backups are securely stored in multiple locations to prevent accidental loss. If desired, call recording can be disabled entirely through your account settings, and specific recordings can be deleted upon request within 30 days.
          </p>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl font-semibold text-[var(--color-ink)] mb-2">Cookies and Analytics</h2>
          <p>
            Our website uses essential cookies to optimize performance and troubleshoot issues. We also employ analytics tools to track usage statistics such as page views, session duration, and navigation paths. These insights help us improve the user experience and ensure our platform operates smoothly.
          </p>
          <p>
            Analytics data is anonymized and not linked to personally identifiable information. Our cookie policy ensures transparency and compliance with privacy laws. You can manage your cookie preferences directly through your browser settings if desired.
          </p>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl font-semibold text-[var(--color-ink)] mb-2">Your CCPA Rights</h2>
          <p>
            California residents have several rights under the CCPA, including the right to know what personal information we collect, request deletion of that information, opt out of sale (we do not sell data), and not be discriminated against for exercising these rights. To exercise any of these rights, please contact us using the details provided below.
          </p>
          <p>
            You may also designate an authorized agent to submit requests on your behalf by providing written permission from you. We will verify both your identity and the agent's authority before processing such requests to ensure security and compliance with legal requirements.
          </p>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl font-semibold text-[var(--color-ink)] mb-2">Contact Us</h2>
          <p>
            If you have any questions about this privacy policy, please reach out to us at{' '}
            <a href="mailto:ace@liveanswerservice.com" className="text-[var(--color-brand)] underline">
              ace@liveanswerservice.com
            </a>{' '}
            or call{' '}
            <a href="tel:+16693161742" className="text-[var(--color-brand)] underline">
              (669) 316-1742
            </a>.
          </p>
          <p>
            We strive to respond to all inquiries within 24-48 hours during normal business hours. For urgent matters, please note that response times may vary depending on the complexity of your request.
          </p>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl font-semibold text-[var(--color-ink)] mb-2">Frequently Asked Questions</h2>
          <dl className="space-y-6">
            <div>
              <dt className="font-medium">Do you share my business data with third parties?</dt>
              <dd className="mt-2">No, we only share your data as necessary to fulfill our services or comply with legal obligations. We do not sell or rent your information for marketing purposes.</dd>
            </div>
            <div>
              <dt className="font-medium">How long do you keep call recordings?</dt>
              <dd className="mt-2">Recordings are retained for 90 days by default, but this period can be customized based on your preferences. Specific recordings can also be deleted upon request.</dd>
            </div>
            <div>
              <dt className="font-medium">Can I request specific data deletion?</dt>
              <dd className="mt-2">Yes. We honor all reasonable data deletion requests within the legal timelines specified in our policy. Please contact us to initiate a request.</dd>
            </div>
            <div>
              <dt className="font-medium">What happens to my data if I cancel my account?</dt>
              <dd className="mt-2">Upon account cancellation, we will securely delete your data in accordance with our retention policies and applicable laws. Please note that certain records may be retained for legal or compliance purposes as required by law.</dd>
            </div>
            <div>
              <dt className="font-medium">Do you provide access to my business data for audit purposes?</dt>
              <dd className="mt-2">Yes, we are happy to assist with providing necessary data access for audits. We will verify your identity and comply with relevant legal requirements before releasing any information.</dd>
            </div>
            <div>
              <dt className="font-medium">How do you ensure the security of my data?</dt>
              <dd className="mt-2">We implement industry-standard security measures, including encryption for data in transit and at rest. Our systems are regularly audited to ensure compliance with privacy regulations and best practices.</dd>
            </div>
            <div>
              <dt className="font-medium">What types of cookies do you use?</dt>
              <dd className="mt-2">We use essential cookies for website functionality and analytics cookies to track usage patterns. No personally identifiable information is collected through these cookies.</dd>
            </div>
          </dl>
        </section>
      </div>
    </main>
  );
}