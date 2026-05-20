"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

/**
 * /calculator — HVAC missed-call cost calculator.
 *
 * HVAC-only. Three shop-size presets (solo / small / medium) seed the math;
 * user can override every input. Output is annualized lost revenue + payback
 * ratio against the $500/mo Unlimited plan.
 */
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

          <div className="calc-sliders">
            <Field label="Inbound calls per week" suffix={`${callsPerWeek} calls/wk`}>
              <input type="range" min={5} max={500} step={5} value={callsPerWeek} onChange={(e) => setCallsPerWeek(Number(e.target.value))} />
            </Field>
            <Field label="% of calls you miss (voicemail, busy, no answer)" suffix={`${missRatePct}%`}>
              <input type="range" min={5} max={75} step={1} value={missRatePct} onChange={(e) => setMissRatePct(Number(e.target.value))} />
            </Field>
            <Field label="Average job value (service call, install, emergency)" suffix={`$${avgJobValue.toLocaleString()}`}>
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
              That&rsquo;s {out.missedPerYear.toLocaleString()} missed jobs × ${avgJobValue.toLocaleString()} each ·{" "}
              <strong>${out.lostRevenueMonth.toLocaleString()}/month walking away</strong>
            </div>
            <div className="calc-payback">
              <strong>Payback on $500/mo Unlimited:</strong>{" "}
              {Number(out.paybackMonths) < 1
                ? `You'd cover it in ${out.paybackMonths} months. Capture ${out.jobsPerMonthToBreakEven} job per month — that's it.`
                : `Capture ${out.jobsPerMonthToBreakEven} jobs per month and it pays for itself.`}
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
