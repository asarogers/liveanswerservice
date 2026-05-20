import type { Metadata } from "next";
import VerticalLandingPage from "@/components/VerticalLandingPage";
import { hvacConfig } from "@/lib/verticals/hvac";

export const metadata: Metadata = {
  title: hvacConfig.meta.title,
  description: hvacConfig.meta.description,
  alternates: { canonical: hvacConfig.meta.canonical },
};

export default function HomePage() {
  return <VerticalLandingPage config={hvacConfig} />;
}
