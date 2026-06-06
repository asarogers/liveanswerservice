import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "About Live Answer — AI Receptionist Built for California",
  description:
    "Live Answer is an AI-powered answering service built in San Jose for California small business. Founded by Ace Rodgers. Bilingual EN/ES, 24/7, $500/mo flat.",
  alternates: { canonical: "/about" },
};

const DEMO_CHAT: Array<{ speaker: "ai" | "caller"; text: string }> = [
  { speaker: "ai", text: "Live Answer — this is Sarah. How can I help?" },
  { speaker: "caller", text: "Hi, my AC stopped blowing cold air. It's 96 inside." },
  { speaker: "ai", text: "I'm sorry — let's get a tech out today. What's the address?" },
  { speaker: "caller", text: "1240 Lincoln Ave, San Jose." },
  { speaker: "ai", text: "Booked for 4:30 PM with Mike. Confirmation texted to your phone." },
];

export default function AboutPage() {
  return (
    <>
      <section className="la-hero">
        <div className="wrap about-hero-grid" style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 48, alignItems: "center" }}>
          <div>
            <div className="hero-eyebrow">
              <span className="dot" aria-hidden="true" />
              <span>About Live Answer</span>
            </div>
            <h1>Built in San Jose. <em>For California.</em></h1>
            <p className="sub">
              <strong>An AI answering service for California small business — starting with HVAC contractors.</strong>{" "}
              Bilingual EN/ES standard, 24/7 coverage, $500/mo flat rate that doesn&rsquo;t punish growth.
              Expanding to legal and beyond as we earn it.
            </p>
            <form className="hero-call-form" action="/api/demo-call" method="post">
              <input type="tel" name="phone" placeholder="Enter your phone number" required aria-label="Your phone number" />
              <button type="submit">
                <i className="ti ti-phone-outgoing" aria-hidden="true" />
                Call me
              </button>
            </form>
            <div style={{ fontSize: 13, color: "#94867a" }}>
              Have one of our AI agents call you now · no credit card · cancel anytime
            </div>
            <div className="hero-transitional">
              Ready to talk to a human? <Link href="/book">Book a 30-min setup consult →</Link>
            </div>
          </div>

          <div className="hero-phone-wrap">
            <div className="phone-mockup" role="img" aria-label="Sample AI receptionist conversation">
              <div className="phone-notch" aria-hidden="true" />
              <div className="phone-screen">
                <div className="phone-status">
                  <span>9:41</span>
                  <span aria-hidden="true">
                    <i className="ti ti-signal-4g" /> <i className="ti ti-wifi" /> <i className="ti ti-battery" />
                  </span>
                </div>
                <div className="phone-callbar">
                  <i className="ti ti-phone-call" aria-hidden="true" />
                  <span>Live Answer · 0:34</span>
                </div>
                <div className="chat-thread">
                  {DEMO_CHAT.map((msg, i) => (
                    <div key={i} className={`chat-bubble ${msg.speaker}`}>
                      {msg.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="scenarios" aria-label="What we do">
        <div className="wrap">
          <div className="section-eyebrow">What we do</div>
          <h2 className="section-title">Three things, every call, every time.</h2>
          <div className="scenarios-grid">
            <div className="scenario-card">
              <div className="time"><i className="ti ti-phone-call" aria-hidden="true" /> Answer</div>
              <div className="body">
                Pick up every call within two rings, 24/7, in English or Spanish. Spam and
                robocalls filtered. Emergency calls escalated to the owner&rsquo;s cell within
                30 seconds.
              </div>
            </div>
            <div className="scenario-card">
              <div className="time"><i className="ti ti-calendar-event" aria-hidden="true" /> Book</div>
              <div className="body">
                Real-time CRM and calendar sync — Jobber, ServiceTitan, HousecallPro, FieldEdge for
                HVAC; Clio, MyCase, PracticePanther for legal. 35+ integrations total.
              </div>
            </div>
            <div className="scenario-card">
              <div className="time"><i className="ti ti-message-2" aria-hidden="true" /> Notify</div>
              <div className="body">
                SMS + email summary to the owner within 60 seconds of call end. Transcript and
                recording stored 90 days. CCPA two-party-consent disclosure baked in.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="plan" aria-label="Who runs Live Answer">
        <div className="wrap">
          <div className="section-eyebrow">The team</div>
          <h2 className="section-title">Local, accountable, reachable.</h2>
          <div className="plan-grid">
            <div className="plan-step">
              <div className="num">A</div>
              <h3>Ace — Founder</h3>
              <p>Built Live Answer in Willow Glen after watching California SMB owners hemorrhage revenue to missed calls. Hands-on with every new client setup.</p>
            </div>
            <div className="plan-step">
              <div className="num">SJ</div>
              <h3>Headquarters</h3>
              <p> San Jose, CA. Setup consults and monthly call reviews handled by the local team — not a national call center.</p>
            </div>
            <div className="plan-step">
              <div className="num">CA</div>
              <h3>California-focused</h3>
              <p>Bilingual EN/ES by default. CCPA-compliant by default. Vertical scripts tuned for the businesses we work with: HVAC contractors first, law firms next.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="stakes" aria-label="The problem we solve">
        <div className="wrap">
          <div className="stakes-grid">
            <div className="stakes-stat">
              <div className="num">62%</div>
              <div className="label">of calls to your business go to voicemail</div>
            </div>
            <div className="stakes-stat">
              <div className="num">$126K</div>
              <div className="label">average yearly cost of missed calls per SMB</div>
            </div>
            <div className="stakes-stat">
              <div className="num">10.4M</div>
              <div className="label">Spanish-speakers in California we cover natively</div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 760px) {
          .about-hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
      <section className="final-cta">
        <div className="wrap">
          <h2>Try it before you trust it.</h2>
          <div className="sub">Call the demo line. Three minutes to know if this is for you.</div>
          <a href={siteConfig.phone.href} className="phone-btn">
            <i className="ti ti-phone-call" aria-hidden="true" />
            <span>{siteConfig.phone.display}</span>
          </a>
          <div style={{ marginTop: 20 }}>
            <Link href="/book" className="btn-secondary">
              Or book a 30-min setup consult →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
