import { notFound } from "next/navigation";
import SolutionDetailPageClient from "@/components/solution-detail-page-client";
import { getSolutionBySlug, solutionsCatalog } from "@/lib/solutions-content";

export const dynamicParams = false;

export function generateStaticParams() {
  return solutionsCatalog.map((solution) => ({ slug: solution.slug }));
}

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  return <SolutionDetailPageClient slug={slug} />;
}
