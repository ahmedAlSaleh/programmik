"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useLanguage } from "@/components/language-provider";
import {
  formatInsightDate,
  getLocalizedInsightText,
  insightCategoryLabels,
  insightPosts,
  type InsightCategory,
} from "@/lib/insights-content";

const copy = {
  en: {
    eyebrow: "Insights and Guides",
    title: "Engineering articles, product strategy, and launch playbooks.",
    description:
      "Practical insights from real delivery work across software architecture, product planning, and reliable launches.",
    all: "All",
    readTime: "min read",
    readArticle: "Read article",
    rfp: "Request proposal",
  },
  ar: {
    eyebrow: "المقالات والرؤى",
    title: "مقالات هندسية واستراتيجية منتج وأدلة إطلاق.",
    description:
      "رؤى عملية من تنفيذات حقيقية في معمارية البرمجيات وتخطيط المنتج والإطلاق الموثوق.",
    all: "الكل",
    readTime: "دقيقة قراءة",
    readArticle: "قراءة المقال",
    rfp: "طلب عرض",
  },
} as const;

export default function InsightsPageClient() {
  const { language } = useLanguage();
  const text = copy[language];
  const [category, setCategory] = useState<InsightCategory | "all">("all");

  const filteredPosts = useMemo(() => {
    if (category === "all") {
      return insightPosts;
    }
    return insightPosts.filter((post) => post.category === category);
  }, [category]);

  const filters: Array<{ key: InsightCategory | "all"; label: string }> = [
    { key: "all", label: text.all },
    ...(
      ["engineering", "product", "launch"] as InsightCategory[]
    ).map((item) => ({
      key: item,
      label: getLocalizedInsightText(insightCategoryLabels[item], language),
    })),
  ];

  return (
    <div className="bg-transparent">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 text-white gradient-motion">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="parallax-soft absolute -top-32 right-0 h-80 w-80 rounded-full bg-blue-700/35 blur-3xl" />
          <div className="parallax-deep absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-500/30 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-16 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
              {text.eyebrow}
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {text.title}
            </h1>
            <p className="text-lg text-blue-100">{text.description}</p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mb-8 flex flex-wrap gap-3">
            {filters.map((filter) => {
              const active = category === filter.key;
              return (
                <button
                  key={filter.key}
                  type="button"
                  onClick={() => setCategory(filter.key)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition ${
                    active
                      ? "bg-blue-600 text-white"
                      : "border border-blue-200 bg-white text-blue-700 hover:bg-blue-50"
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="hover-card rounded-3xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-600/10"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-700">
                  {getLocalizedInsightText(insightCategoryLabels[post.category], language)}
                </p>
                <h2 className="mt-3 text-xl font-semibold text-slate-900">
                  {getLocalizedInsightText(post.title, language)}
                </h2>
                <p className="mt-3 text-sm text-slate-600">
                  {getLocalizedInsightText(post.excerpt, language)}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-blue-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-5 text-xs text-slate-500">
                  {formatInsightDate(post.publishedAt, language)} • {post.readTime}{" "}
                  {text.readTime}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={`/insights/${post.slug}`}
                    className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700 transition hover:translate-x-1"
                  >
                    {text.readArticle}
                  </Link>
                  <Link
                    href="/rfp"
                    className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700 transition hover:translate-x-1"
                  >
                    {text.rfp}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
