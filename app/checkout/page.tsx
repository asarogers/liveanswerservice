import { redirect } from "next/navigation";

// Real checkout happens on Stripe-hosted Checkout — the "Start a Free Trial"
// buttons on /start-trial POST to /api/stripe/create-checkout and redirect to
// Stripe directly. Anyone landing on /checkout directly probably came from an
// old link, so just bounce them to /pricing.

export const dynamic = "force-static";

export default function CheckoutPage() {
  redirect("/pricing");
}
