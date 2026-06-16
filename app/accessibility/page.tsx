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
            At Live Answer, we are dedicated to creating inclusive digital experiences. Our mission is to ensure that everyone, regardless of ability, can access and use our website and AI answering service effectively. We've integrated accessibility into every stage of development and design, making it a core aspect of how we operate.
          </p>
          <p>
            By adhering to WCAG 2.1 Level AA guidelines, we strive to remove barriers for users with disabilities while maintaining an exceptional user experience for all. This commitment reflects our belief in equal access to technology and information. We believe that accessibility is not just about compliance—it's about creating meaningful experiences that empower everyone to engage fully with our platform.
          </p>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl font-semibold text-[var(--color-ink)] mb-2">Why Accessibility Matters</h2>
          <p>
            Accessibility benefits not only people with disabilities but also improves the user experience for everyone. For instance, clear typography and high contrast ratios make content easier to read for all users, while keyboard navigation ensures compatibility with a wide range of devices.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Approximately 15% of the global population lives with some form of disability</li>
            <li>Accessible design often leads to better SEO and increased website usability</li>
            <li>Inclusive practices can expand your audience and demonstrate corporate responsibility</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl font-semibold text-[var(--color-ink)] mb-2">Measures Taken</h2>
          <p>
            We've implemented a thorough approach to accessibility, including:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Semantic HTML structure with appropriate heading hierarchy and document landmarks for better navigation</li>
            <li>Alt text on all meaningful images, including complex infographics with detailed descriptions</li>
            <li>Keyboard-navigable interface supporting screen readers and other assistive technologies</li>
            <li>Sufficient color contrast ratios of at least 4.5:1 for normal text and 3:1 for large text</li>
            <li>Responsive design that works at all viewport sizes, with clear typography even at maximum zoom levels</li>
            <li>ARIA labels on interactive elements to provide better context for assistive technologies</li>
            <li>Regular accessibility audits using automated tools and manual testing with real users</li>
            <li>Providing multiple input methods (e.g., voice, keyboard, touch) for maximum inclusivity</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl font-semibold text-[var(--color-ink)] mb-2">Accessibility Features</h2>
          <p>
            Our platform includes several features designed specifically to enhance accessibility:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Customizable font sizes and contrast settings in user preferences</li>
            <li>Screen reader compatibility across all major browsers and devices</li>
            <li>Clear focus states for keyboard navigation</li>
            <li>Support for braille output and refreshable displays</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl font-semibold text-[var(--color-ink)] mb-2">Known Limitations</h2>
          <p>
            While we strive for excellence in accessibility, we recognize there are areas where we can improve. We are actively working on:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Adding more sign language content and translations</li>
            <li>Improving audio descriptions for video content</li>
            <li>Expanding support for low-literacy users through simpler language options</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl font-semibold text-[var(--color-ink)] mb-2">Future Goals</h2>
          <p>
            We're committed to continuous improvement in accessibility. Our roadmap includes:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Implementing real-time captioning for all live interactions</li>
            <li>Developing an accessible mobile app with the same high standards as our website</li>
            <li>Training all customer support representatives in accessibility best practices</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl font-semibold text-[var(--color-ink)] mb-2">Feedback and Contact</h2>
          <p>
            If you experience difficulty accessing any part of our website, please contact us at{' '}
            <a href="mailto:ace@liveanswerservice.com" className="text-[var(--color-brand)] underline">
              ace@liveanswerservice.com
            </a>{' '}
            or call{' '}
            <a href="tel:+16693161742" className="text-[var(--color-brand)] underline">
              (669) 316-1742
            </a>. We aim to respond within 2 business days and will work with you to resolve any accessibility issues.
          </p>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl font-semibold text-[var(--color-ink)] mb-2">FAQs</h2>
          <ul className="space-y-4">
            <li>
              <strong>What browsers are supported?</strong>{' '}
              We fully support the latest versions of Chrome, Firefox, Safari, and Edge. These browsers offer the best compatibility with our accessibility features.
            </li>
            <li>
              <strong>Can I use a screen reader?</strong>{' '}
              Yes! Our website is designed to work with popular screen readers like JAWS, NVDA, VoiceOver, and TalkBack.
            </li>
            <li>
              <strong>Are all images described?</strong>{' '}
              Every meaningful image on our site includes detailed alt text. Purely decorative images are marked as such in their alt attributes to prevent unnecessary narration by screen readers.
            </li>
            <li>
              <strong>How can I provide feedback?</strong>{' '}
              We welcome your input! You can contact us directly through email or phone, and we'll ensure your feedback is considered for future improvements.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl font-semibold text-[var(--color-ink)] mb-2">How We Test Accessibility</h2>
          <p>
            Our accessibility testing process includes:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Automated audits using tools like Lighthouse and axe-core</li>
            <li>Manual testing with real users and assistive technologies</li>
            <li>Regular internal reviews by our design and development teams</li>
            <li>A/B testing of accessibility features to measure user impact</li>
          </ul>
        </section>
      </div>
    </main>
  );
}