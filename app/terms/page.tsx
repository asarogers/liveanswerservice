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
            services to California small businesses. Our service is designed to streamline your 
            operations by handling customer inquiries 24/7 with professionalism and accuracy. The
            system uses state-of-the-art natural language processing to understand caller needs,
            qualify leads, and schedule appointments as needed.
          </p>
          <p>
            Whether you need assistance with answering general business hours calls, managing 
            after-hours inquiries, or qualifying potential customers for your services, Live Answer 
            is built around how small businesses actually handle calls. Our AI system
            can handle a wide range of scenarios including appointment scheduling, lead qualification,
            product information requests, and customer service support.
          </p>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl font-semibold text-[var(--color-ink)] mb-2">Free Trial &amp; Setup</h2>
          <p>
            The 7-day free trial allows you to experience our service without financial commitment.
            During this period, you can evaluate how well Live Answer meets your business needs. A 
            one-time $199 setup fee applies to new paid accounts and is waived for those who prepay
            annually. Setup includes an onboarding call where we configure your AI
            system according to your specific requirements.
          </p>
          <p>
            Our team will work with you to customize the AI script, ensuring it reflects your brand's 
            voice and tone while meeting your operational needs. This involves defining response 
            parameters, setting up call flows, and establishing escalation protocols for complex 
            inquiries that require human intervention.
          </p>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl font-semibold text-[var(--color-ink)] mb-2">Billing &amp; Cancellation</h2>
          <p>
            Monthly plans are month-to-month and may be cancelled at any time. Annual prepay is
            non-refundable after day 30 but coverage continues for the full prepaid term. We offer 
            flexible payment options including credit card, ACH direct debit, and invoicing.
          </p>
          <p>
            Detailed billing statements are provided each month showing your usage metrics and costs.
            For annual prepay customers, a single invoice is generated at the time of purchase with 
            coverage for 12 months. You may port your forwarded number out at any time, including 
            after cancellation, at no charge. We provide an easy-to-use online portal for managing 
            your account and payment details.
          </p>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl font-semibold text-[var(--color-ink)] mb-2">Booking Guarantee</h2>
          <p>
            We are confident in the effectiveness of our AI system which is why we offer a 
            booking-quality guarantee. Specific thresholds for this guarantee are determined during
            your kickoff call and vary based on your industry and business needs.
          </p>
          <p>
            If your AI agent fails to meet the agreed-upon booking targets within the first 30 days,
            we will credit one full month of service. This guarantee is designed to ensure measurable 
            results while allowing flexibility for unique business requirements across different 
            industries.
          </p>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl font-semibold text-[var(--color-ink)] mb-2">Your Responsibilities</h2>
          <p>
            You are responsible for ensuring the accuracy of all business information provided during 
            onboarding, including your phone number, address, hours of operation, and service details.
            It is also your responsibility to maintain compliance with applicable privacy laws such as 
            the California Consumer Privacy Act (CCPA) when obtaining caller consent.
          </p>
          <p>
            You must comply with all federal, state, and local laws relating to telephone services,
            telemarketing, and consumer protection. We recommend consulting with legal counsel to
            ensure compliance with specific regulations that may apply to your business operations.
          </p>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl font-semibold text-[var(--color-ink)] mb-2">Limitation of Liability</h2>
          <p>
            Live Answer&rsquo;s liability is limited to the fees paid for the current monthly billing
            period. We are not responsible for indirect, incidental, or consequential damages resulting 
            from our services.
          </p>
          <p>
            This limitation applies regardless of whether such damages were foreseeable or arise in 
            contract, tort, or otherwise. By using our services, you agree to these limitations and
            understand that Live Answer operates as a technology platform facilitating communication
            between businesses and their customers.
          </p>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl font-semibold text-[var(--color-ink)] mb-2">FAQ</h2>
          <p>
            We've compiled some frequently asked questions to help you better understand our services
            and policies:
          </p>
          <ul className="list-disc pl-6 mt-4">
            <li>How long does setup typically take? Setup is completed within 48 hours of kickoff.</li>
            <li>Can I cancel my service at any time? Yes, monthly plans are month-to-month and can be 
              cancelled anytime.
            </li>
            <li>Do you offer annual payment discounts? Annual prepayment provides significant savings
              compared to monthly billing.
            </li>
            <li>What happens if my AI agent doesn't meet the booking guarantee? We'll credit one full 
              month of service as outlined in our terms.
            </li>
            <li>Is there a contract or long-term commitment required? No, all plans are month-to-month
              with no long-term contracts.
            </li>
            <li>How do I update my business information if it changes? Updates can be made through your 
              online account portal or by contacting our support team.
            </li>
            <li>Are there any hidden fees? No, pricing is transparent with clear breakdowns of setup,
              monthly service, and optional features.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl font-semibold text-[var(--color-ink)] mb-2">Contact</h2>
          <p>
            Questions about these terms? Contact us at{' '}
            <a href="mailto:hello@liveanswerservice.com" className="text-[var(--color-brand)] underline">
              hello@liveanswerservice.com
            </a>, or call our office during regular business hours at (555) 123-4567. Our customer 
            support team is available Monday through Friday from 9 AM to 6 PM Pacific Time.
          </p>
        </section>
      </div>
    </main>
  );
}