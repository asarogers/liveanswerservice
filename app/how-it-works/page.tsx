import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import { loadSitePlan, noindexSlugs, gatedRobots } from "@/lib/site-plan";

const SLUG = "how-it-works";
const NOINDEX = noindexSlugs(loadSitePlan()).has(SLUG);

export const metadata: Metadata = {
  openGraph: {
  url: "https://liveanswerservice.com/how-it-works",
  },
  robots: gatedRobots("/how-it-works"),
  title: "How It Works — Live Answer AI receptionist setup",
  description:
    "How Live Answer works — forward your phone in 60 seconds, we answer every call 24/7, you get the booking. Plus the engineering behind it.",
  alternates: { canonical: `/${SLUG}` },
  ...(NOINDEX ? { robots: { index: false, follow: true, googleBot: { index: false, follow: true } } } : {}),
};

export default function HowItWorksPage() {
  return (
    <>
      <section className="la-hero">
        <div className="wrap-narrow">
          <h1>How <em>Live Answer</em> works.</h1>
          <p className="sub">
            Three minutes to set up. Real calls answered within 24 hours. Here&rsquo;s the
            whole flow — and the engineering behind it.
          </p>
        </div>
      </section>

      <section className="plan" id="steps" aria-label="The 3-step flow">
        <div className="wrap">
          <div className="section-eyebrow">The flow</div>
          <h2 className="section-title">From dial to booking in 60 seconds.</h2>
          <div className="plan-grid">
            <div className="plan-step">
              <div className="num">1</div>
              <h3>Forward your phone</h3>
              <p>60-second setup. Works with any provider — Twilio, Google Voice, RingCentral, Verizon, AT&amp;T, T-Mobile.</p>
              <p>We handle all the technical details so you can focus on what matters most: growing your business. Whether you're a solo professional or managing a team, Live Answer makes it easy to take control of your call flow in minutes.</p>
            </div>
            <div className="plan-step">
              <div className="num">2</div>
              <h3>We answer every call</h3>
              <p>24/7, English or Spanish, your vertical script. Books into your CRM, calendar, or PMS in real time.</p>
              <p>Our AI is trained on thousands of real-world interactions to provide natural, professional responses tailored to your industry. We handle everything from scheduling appointments to providing essential information about your services, ensuring every caller feels valued and supported.</p>
            </div>
            <div className="plan-step">
              <div className="num">3</div>
              <h3>You get the booking</h3>
              <p>SMS summary + email within 60 seconds. Emergencies trigger an immediate text to your cell.</p>
              <p>Never miss a beat with our real-time updates. Whether it's a routine appointment or an urgent matter, you'll be notified instantly so you can take action without delay. Plus, all interactions are securely recorded and stored for easy reference.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="scenarios" aria-label="Under the hood">
        <div className="wrap">
          <div className="section-eyebrow">Under the hood</div>
          <h2 className="section-title">What&rsquo;s actually happening on the call.</h2>
          <div className="scenarios-grid">
            <div className="scenario-card">
              <div className="time"><i className="ti ti-microphone" aria-hidden="true" /> Voice</div>
              <div className="body">
                Best-in-class TTS (Inworld 1.5 Max, Cartesia, ElevenLabs) tuned for phone audio.
                Sub-300ms latency with Deepgram Nova for speech recognition.
                <p>These technologies ensure crystal-clear communication, making every interaction sound natural and professional. We continuously optimize our systems to provide the best possible experience for both you and your callers.</p>
              </div>
            </div>
            <div className="scenario-card">
              <div className="time"><i className="ti ti-brain" aria-hidden="true" /> Brain</div>
              <div className="body">
                Claude Sonnet 4.6 with vertical-specific system prompts. Hard guardrails against
                fabrication, advice-giving, and overbooking. Escalation by design.
                <p>Our AI is designed to be both intelligent and safe, ensuring it provides accurate information while avoiding potentially harmful or inaccurate responses. The escalation feature guarantees that complex situations are brought to your attention promptly.</p>
              </div>
            </div>
            <div className="scenario-card">
              <div className="time"><i className="ti ti-plug-connected" aria-hidden="true" /> Integrations</div>
              <div className="body">
                Direct API into Jobber, Service Titan, HousecallPro, FieldEdge, Clio, MyCase,
                PracticePanther, Lawmatics. 35+ total. Custom integrations on the Custom plan.
                <p>These integrations allow seamless data flow between Live Answer and your existing tools, saving you time and reducing manual entry. Whether you're managing a law firm, a service business, or a medical practice, we've got you covered with tailored solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stakes" aria-label="What you get back">
        <div className="wrap">
          <div className="section-eyebrow">Key benefits</div>
          <h2 className="section-title">What you get when you choose Live Answer.</h2>
          <div className="stakes-grid">
            <div className="stakes-stat">
              <div className="num">&lt;2 rings</div>
              <div className="label">average pick-up time, 24/7</div>
              <p>Minimal wait times ensure your customers feel valued and attended to immediately, enhancing their experience and building trust in your brand.</p>
            </div>
            <div className="stakes-stat">
              <div className="num">60 sec</div>
              <div className="label">to your phone with the call summary</div>
              <p>Quick updates mean you can respond to inquiries or confirm appointments without delay, keeping communication smooth and efficient.</p>
            </div>
            <div className="stakes-stat">
              <div className="num">90 days</div>
              <div className="label">of call recordings + transcripts retained</div>
              <p>Complete records help you review past interactions, improve your services, and provide accurate information to your clients when needed.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="wrap">
          <div className="section-eyebrow">Frequently Asked Questions</div>
          <h2 className="section-title">Common questions about Live Answer.</h2>
          <dl className="faq-list">
            <div className="faq-item">
              <dt>Is there a contract?</dt>
              <dd>We offer month-to-month plans with no long-term commitments, giving you the flexibility to scale as your business grows.</dd>
            </div>
            <div className="faq-item">
              <dt>Can I cancel anytime?</dt>
              <dd>Yes. We believe in transparency and trust, so you can pause or cancel your subscription at any time with no hidden fees.</dd>
            </div>
            <div className="faq-item">
              <dt>What if I need help setting up?</dt>
              <dd>Our dedicated support team is here to assist you every step of the way. We offer comprehensive onboarding and ongoing support to ensure your experience is smooth and successful.</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="final-cta">
        <div className="wrap">
          <h2>Try it now. Three minutes.</h2>
          <div className="sub">Dial the demo line and roleplay your worst customer. See what happens.</div>
          <a href={siteConfig.phone.href} className="phone-btn">
            <i className="ti ti-phone-call" aria-hidden="true" />
            <span>{siteConfig.phone.display}</span>
          </a>
        </div>
      </section>
    </>
  );
}