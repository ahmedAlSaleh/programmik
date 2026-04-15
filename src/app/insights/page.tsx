import type { Metadata } from "next";
import InsightsPageClient from "@/components/insights-page-client";

export const metadata: Metadata = {
  title: "Insights | Programmik",
  description:
    "Engineering insights, product strategy articles, and launch guides for software teams.",
};

export default function InsightsPage() {
  return <InsightsPageClient />;
}
