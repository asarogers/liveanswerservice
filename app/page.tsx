import type { Metadata } from "next";
import CategoryHomePage from "@/components/CategoryHomePage";

// 2026-06-11 rework: the homepage previously rendered the HVAC vertical, wasting
// the strongest URL on a 480/mo term and duplicating /services/hvac-answering-service.
// It now targets the category head terms (AI receptionist 5,400/mo · KD 9 · +237% YoY;
// AI answering service 1,900/mo) — see COPY-REWORK-2026-06-11.md.
export const metadata: Metadata = {
  title: { absolute: "AI Receptionist & 24/7 Answering Service for California | Live Answer" },
  description:
    "Done-for-you AI answering service and virtual receptionist for California small businesses. Every call answered 24/7 in English and Spanish, appointments booked, leads captured — $500/mo flat, unlimited calls. Free 7-day trial, no card.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return <CategoryHomePage />;
}
