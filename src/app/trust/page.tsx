import type { Metadata } from "next";
import TrustPageClient from "@/components/trust-page-client";

export const metadata: Metadata = {
  title: "Trust and Reliability | Programmik",
  description:
    "Explore SLA commitments, security practices, maintenance plans, and support response times.",
};

export default function TrustPage() {
  return <TrustPageClient />;
}
