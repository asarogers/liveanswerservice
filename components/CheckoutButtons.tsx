"use client";

import { useState } from "react";
import { Events } from "@/lib/analytics";

type BillingPeriod = "monthly" | "yearly";

async function startCheckout(billingPeriod: BillingPeriod, setError: (e: string | null) => void, setLoading: (p: BillingPeriod | null) => void) {
  setError(null);
  setLoading(billingPeriod);
  Events.trialStart(`checkout_${billingPeriod}`);
  try {
    const res = await fetch("/api/stripe/create-checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ billing_period: billingPeriod }),
    });
    const data = (await res.json()) as { url?: string; error?: string };
    if (!res.ok || !data.url) {
      setError(data.error || "Something went wrong starting checkout. Please try again or call us.");
      setLoading(null);
      return;
    }
    window.location.href = data.url;
  } catch {
    setError("Something went wrong starting checkout. Please try again or call us.");
    setLoading(null);
  }
}

/** "Start a Free Trial (card)" — Stripe-hosted Checkout, monthly or annual. */
export default function CheckoutButtons() {
  const [loading, setLoading] = useState<BillingPeriod | null>(null);
  const [error, setError] = useState<string | null>(null);

  return (
    <div>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <button
          type="button"
          className="phone-btn"
          disabled={loading !== null}
          onClick={() => startCheckout("monthly", setError, setLoading)}
        >
          {loading === "monthly" ? "Redirecting…" : "Start Trial — $500/mo"}
        </button>
        <button
          type="button"
          className="btn-secondary"
          disabled={loading !== null}
          onClick={() => startCheckout("yearly", setError, setLoading)}
        >
          {loading === "yearly" ? "Redirecting…" : "Start Trial — $5,100/yr (setup waived)"}
        </button>
      </div>
      {error ? <p style={{ color: "#B3261E", marginTop: 12 }}>{error}</p> : null}
    </div>
  );
}
