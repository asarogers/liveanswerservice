"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

type Preset = {
  label: string;
  description: string;
  callsPerWeek: number;
  missRatePct: number;
  avgJobValueUsd: number;
};

const PRESETS: Record<string, Preset> = {
  solo: {
    label: "Solo / owner-operator",
    description: "1 truck · you answer the phone yourself",
    callsPerWeek: 35,
    missRatePct: 50,
    avgJobValueUsd: 400,
  },
  small: {
    label: "Small shop",
    description: "2–5 trucks · spouse or part-timer answers",
    callsPerWeek: 90,
    missRatePct: 35,
    avgJobValueUsd: 550,
  },
  medium: {
    label: "Medium shop",
    description: "6–15 trucks · dedicated dispatcher 9–5",
    callsPerWeek: 200,
    missRatePct: 25,
    avgJobValueUsd: 700,
  },
};

export default function CalculatorPage() {
  const [preset, setPreset] = useState<keyof typeof PRESETS>("small");
  const [callsPerWeek, setCallsPerWeek] = useState(PRESETS.small.callsPerWeek);
  const [missRatePct, setMissRatePct] = useState(PRESETS.small.missRatePct);
  const [avgJobValue, setAvgJobValue] = useState(PRESETS.small.avgJobValueUsd);

  function applyPreset(key: keyof typeof PRESETS) {
    setPreset(key);
    const p = PRESETS[key];
    setCallsPerWeek(p.callsPerWeek);
    setMissRatePct(p.missRatePct);
    setAvgJobValue(p.avgJobValueUsd);
  }

  const out = useMemo(() => {
    const missedPerWeek = callsPerWeek * (missRatePct / 100);
    const missedPerYear = missedPerWeek * 52;
    const lostRevenueYear = missedPerYear * avgJobValue;
    const lostRevenueMonth = lostRevenueYear / 12;
    const paybackMonths = lostRevenueMonth > 0 ? 500 / lostRevenueMonth : Infinity;
    const jobsPerMonthToBreakEven = 500 / avgJobValue;
    return {
      missedPerWeek: missedPerWeek.toFixed(1),
      missedPerYear: Math.round(missedPerYear),
      lostRevenueYear: Math.round(lostRevenueYear),
      lostRevenueMonth: Math.round(lostRevenueMonth),
      paybackMonths: paybackMonths.toFixed(2),
      jobsPerMonthToBreakEven: jobsPerMonthToBreakEven.toFixed(1),
    };
  }, [callsPerWeek, missRatePct, avgJobValue]);

  return (
    <>
      <div className="vertical-bar">
        <i className="ti ti-temperature" aria-hidden="true" />
        Built for California HVAC contractors
      </div>

      <section className="la-hero">
        <div className="wrap-narrow">
          <h1>
            How much are missed calls <em>actually</em> costing your shop?
          </h1>
          <p className="sub">
            <strong>Drop in your numbers. We&rsquo;ll show you the math.</strong> Most HVAC
            contractors are leaking $5,000–$50,000/month and have no idea — because the calls
            that get missed are the ones you never hear about.
          </p>
        </div>
      </section>

      <section className="calc-section" aria-label="Missed-call calculator">
        <div className="wrap" style={{ maxWidth: 720 }}>
          <span className="section-num" style={{ textAlign: "center", display: "block" }}>
            01 · Your shop
          </span>
          <h2 className="section-title" style={{ textAlign: "center", marginTop: 0, marginBottom: 24 }}>
            Pick the size that fits.
          </h2>

          <div className="calc-presets">
            {(Object.keys(PRESETS) as Array<keyof typeof PRESETS>).map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => applyPreset(k)}
                className={`calc-preset ${preset === k ? "active" : ""}`}
              >
                <strong>{PRESETS[k].label}</strong>
                <span>{PRESETS[k].description}</span>
              </button>
            ))}
          </div>

          <p className="preset-notes">
            Not sure which size fits your shop? Think about how many trucks you have and who handles phone duties.
            For example, solo contractors usually answer the phone themselves, while medium-sized shops might
            have a dedicated dispatcher. You can adjust the numbers below later to match your specific situation.
          </p>

          <div className="calc-sliders">
            <Field label="Inbound calls per week" suffix={`${callsPerWeek} calls/wk`}>
              <input type="range" min={5} max={500} step={5} value={callsPerWeek} onChange={(e) => setCallsPerWeek(Number(e.target.value))} />
            </Field>
            <Field label="% of calls you miss (voicemail, busy, no answer)" suffix={`${missRatePct}%`}>
              <input type="range" min={5} max={75} step={1} value={missRatePct} onChange={(e) => setMissRatePct(Number(e.target.value))} />
            </Field>
            <Field label="Average ticket value (service call, install, emergency)" suffix={`$${avgJobValue.toLocaleString()}`}>
              <input type="range" min={150} max={3000} step={25} value={avgJobValue} onChange={(e) => setAvgJobValue(Number(e.target.value))} />
            </Field>
          </div>

          <div className="calc-output">
            <div className="calc-output-eyebrow">You&rsquo;re leaking</div>
            <div className="calc-output-num">
              ${out.lostRevenueYear.toLocaleString()}
              <span className="calc-output-per">/ year</span>
            </div>
            <div className="calc-output-sub">
              That&rsquo;s {out.missedPerYear.toLocaleString()} missed calls × ${avgJobValue.toLocaleString()} each ·{" "}
              <strong>${out.lostRevenueMonth.toLocaleString()}/month walking away</strong>
            </div>
            <div className="calc-payback">
              <strong>Payback on $500/mo Unlimited:</strong>{" "}
              {Number(out.paybackMonths) < 1
                ? `You'd cover it in ${out.paybackMonths} months. Capture ${out.jobsPerMonthToBreakEven} booking per month — that's it.`
                : `Capture ${out.jobsPerMonthToBreakEven} bookings per month and it pays for itself.`}
            </div>
          </div>

          <div className="calc-cta">
            <Link href="/" className="btn-secondary">
              ← Back to homepage
            </Link>
            <a href={siteConfig.phone.href} className="phone-btn">
              <i className="ti ti-phone-call" aria-hidden="true" />
              <span>Call to test</span>
            </a>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="wrap">
          <h2>Stop the leak.</h2>
          <div className="sub">Three minutes to know if this is for you.</div>
          <a href={siteConfig.phone.href} className="phone-btn">
            <i className="ti ti-phone-call" aria-hidden="true" />
            <span>{siteConfig.phone.display}</span>
          </a>
        </div>
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
          <div className="faq-item">
            <h3>Why should HVAC contractors care about missed calls?</h3>
            <p>
              Missed calls in the HVAC industry can mean lost opportunities for service calls, installations,
              and emergency repairs — all of which are critical revenue streams. Every unanswered call could
              be a potential customer seeking heating or cooling solutions that your business isn't equipped
              to capture. In fact, studies show that up to 85% of missed calls result in lost sales, making it
              imperative for contractors to address this issue proactively.
            </p>
          </div>
          <div className="faq-item">
            <h3>How do you calculate the impact of missed calls?</h3>
            <p>
              We use your average job value and apply it to the number of estimated missed jobs per year,
              based on your current call volume and miss rate. This gives a clear picture of annual revenue
              lost due to unattended calls. For example, if you miss 10% of 200 weekly calls at an average
              job value of $700, that's approximately $72,800 in lost revenue annually.
            </p>
          </div>
          <div className="faq-item">
            <h3>What makes HVAC contractors particularly vulnerable?</h3>
            <p>
              The nature of HVAC work often requires immediate attention, especially for emergency repairs.
              Missed calls can lead to unhappy customers and lost business. Additionally, seasonal peaks
              (like extreme weather) create higher call volumes that can overwhelm even the most efficient
              dispatch systems. During peak seasons, contractors may experience up to 40% more calls,
              increasing the risk of missed opportunities.
            </p>
          </div>
        </div>
      </section>

      <section className="impact-section">
        <h2>Why Missed Calls Impact HVAC Businesses</h2>
        <div className="impact-grid">
          <div className="impact-card">
            <h3>Damaged Reputation</h3>
            <ul>
              <li>Customers who reach voicemail may perceive your business as unprofessional or unavailable.</li>
              <li>Poor phone etiquette (or lack of response) can lead to negative reviews online, which 80% of customers check before choosing a service provider.</li>
              <li>Missed calls during emergencies can result in long-term customer distrust and potential legal issues if equipment damage occurs due to neglect.</li>
            </ul>
          </div>
          <div className="impact-card">
            <h3>Reduced Customer Satisfaction</h3>
            <ul>
              <li>Unanswered calls create frustration for customers seeking timely assistance, especially during extreme weather conditions when HVAC services are critical.</li>
              <li>Missed opportunities to address urgent issues can lead to further problems (e.g., equipment damage), increasing customer dissatisfaction and reducing trust in your service.</li>
              <li>Customers may take their business elsewhere if they feel neglected, potentially costing you not only the immediate job but also future referrals and long-term relationships.</li>
            </ul>
          </div>
          <div className="impact-card">
            <h3>Lost Revenue</h3>
            <ul>
              <li>Every missed call represents potential revenue lost from service calls, installations, or repairs. Even a 10% miss rate on 200 weekly calls at $700 per job equals over $70k annually.</li>
              <li>During peak seasons, high call volumes can overwhelm dispatchers, leading to increased missed calls and significant revenue loss when customers seek immediate solutions elsewhere.</li>
              <li>Missed calls during business hours are particularly damaging, as they occur when customers expect immediate attention and may result in lost opportunities for premium services.</li>
            </ul>
          </div>
          <div className="impact-card">
            <h3>Decreased Efficiency</h3>
            <ul>
              <li>Constantly playing phone tag wastes valuable time that could be spent on service work or customer retention, reducing overall productivity and profitability.</li>
              <li>Missed calls create a need for follow-up, adding unnecessary complexity to your workflow and potentially delaying other critical tasks.</li>
              <li>Poor communication leads to misunderstandings and inefficiencies in scheduling and dispatching, which can compound during high-volume periods when efficiency is crucial.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="scenarios-section">
        <h2>Common Scenarios Where Missed Calls Occur</h2>
        <div className="scenario-grid">
          <div className="scenario-card">
            <h3>Peak Seasons</h3>
            <p>
              During extreme weather, your shop may receive a surge in calls. Without an efficient system
              to handle high volumes, you risk missing critical leads that could translate into thousands
              of dollars in lost revenue. For example, during a heatwave, you might see 50% more calls than usual,
              making it challenging for even the most organized dispatch teams to keep up.
            </p>
          </div>
          <div className="scenario-card">
            <h3>After-Hours Emergencies</h3>
            <p>
              Emergency HVAC issues often occur outside regular business hours. Missed calls during these times can lead to unhappy customers and potential equipment damage that requires expensive repairs. Many customers expect 24/7 availability for urgent issues, especially when their comfort or safety is at risk.
            </p>
          </div>
          <div className="scenario-card">
            <h3>High-Volume Days</h3>
            <p>
              Some days are busier than others, especially when weather patterns shift suddenly. Without
              adequate phone coverage, you risk missing out on multiple opportunities throughout the day.
              For instance, a unexpected cold snap can cause a sudden spike in heating service requests,
              overwhelming your current systems and leading to missed connections with potential customers.
            </p>
          </div>
          <div className="scenario-card">
            <h3>Dispatch Errors</h3>
            <p>
              Even with a dedicated dispatcher, mistakes happen. Busy signals, dropped calls, or improper
              routing can result in missed connections that cost your business dearly. For example, if a dispatcher is handling multiple lines during peak times, the likelihood of human error increases, potentially costing you thousands in lost revenue.
            </p>
          </div>
        </div>
      </section>

    </>
  );
}

function Field({ label, suffix, children }: { label: string; suffix: string; children: React.ReactNode }) {
  return (
    <div className="calc-field">
      <div className="calc-field-label">
        <span>{label}</span>
        <span className="calc-field-value">{suffix}</span>
      </div>
      {children}
    </div>
  );
}