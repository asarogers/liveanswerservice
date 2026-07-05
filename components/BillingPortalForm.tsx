"use client";

import { useState } from "react";

/** "Make a Payment" / manage billing — Stripe Customer Portal, no site login. */
export default function BillingPortalForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/stripe/portal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json()) as { url?: string; error?: string };
      if (!res.ok || !data.url) {
        setError(data.error || "Couldn't find a subscription for that email.");
        setLoading(false);
        return;
      }
      window.location.href = data.url;
    } catch {
      setError("Something went wrong. Please try again or contact us.");
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
      <input
        type="email"
        required
        placeholder="you@business.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        aria-label="Email"
      />
      <button type="submit" className="btn-secondary" disabled={loading}>
        {loading ? "Loading…" : "Manage Billing"}
      </button>
      {error ? <p style={{ color: "#B3261E", width: "100%", margin: 0 }}>{error}</p> : null}
    </form>
  );
}
