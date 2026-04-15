import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InsightDetailPageClient from "@/components/insight-detail-page-client";
import { getInsightBySlug, insightPosts } from "@/lib/insights-content";

export const dynamicParams = false;

export function generateStaticParams() {
  return insightPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getInsightBySlug(slug);

  if (!post) {
    return {
      title: "Insights | Programmik",
      description: "Software insights and guides from Programmik.",
    };
  }

  return {
    title: post.seoTitle,
    description: post.seoDescription,
    keywords: post.tags,
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getInsightBySlug(slug);

  if (!post) {
    notFound();
  }

  return <InsightDetailPageClient slug={slug} />;
}
