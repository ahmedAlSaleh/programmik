"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useLanguage } from "@/components/language-provider";
import { BOOKING_URL } from "@/lib/lead-config";
import {
  formatInsightDate,
  getInsightBySlug,
  getLocalizedInsightText,
  insightCategoryLabels,
} from "@/lib/insights-content";

type InsightDetailPageClientProps = {
  slug: string;
};

const copy = {
  en: {
    back: "All insights",
    book: "Book appointment",
    rfp: "Request proposal",
    readTime: "min read",
    author: "Author",
  },
  ar: {
    back: "كل المقالات",
    book: "حجز موعد",
    rfp: "طلب عرض",
    readTime: "دقيقة قراءة",
    author: "الكاتب",
  },
} as const;

export default function InsightDetailPageClient({
  slug,
}: InsightDetailPageClientProps) {
  const { language } = useLanguage();
  const text = copy[language];
  const post = getInsightBySlug(slug);

  const articleJsonLd = useMemo(() => {
    if (!post) {
      return "";
    }

    return JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: getLocalizedInsightText(post.title, language),
      description: getLocalizedInsightText(post.summary, language),
      datePublished: post.publishedAt,
      author: {
        "@type": "Organization",
        name: getLocalizedInsightText(post.author, language),
      },
      articleSection: getLocalizedInsightText(
        insightCategoryLabels[post.category],
        language
      ),
      keywords: post.tags.join(", "),
    });
  }, [language, post]);

  if (!post) {
    return null;
  }

  return (
    <div className="bg-transparent">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: articleJsonLd }}
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 text-white gradient-motion">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="parallax-soft absolute -top-36 right-0 h-96 w-96 rounded-full bg-blue-700/35 blur-3xl" />
          <div className="parallax-deep absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue-500/30 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-5xl px-6 pb-20 pt-16 lg:px-8">
          <Link
            href="/insights"
            className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.2em] text-blue-100 transition hover:text-white"
          >
            {text.back}
          </Link>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
            {getLocalizedInsightText(insightCategoryLabels[post.category], language)}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            {getLocalizedInsightText(post.title, language)}
          </h1>
          <p className="mt-5 text-lg text-blue-100">
            {getLocalizedInsightText(post.summary, language)}
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-blue-100">
            <span>
              {formatInsightDate(post.publishedAt, language)} • {post.readTime}{" "}
              {text.readTime}
            </span>
            <span>
              {text.author}: {getLocalizedInsightText(post.author, language)}
            </span>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <article className="space-y-10">
            {post.sections.map((section) => (
              <section
                key={getLocalizedInsightText(section.heading, language)}
                className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm"
              >
                <h2 className="text-2xl font-semibold text-slate-900">
                  {getLocalizedInsightText(section.heading, language)}
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  {getLocalizedInsightText(section.body, language)}
                </p>
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="mt-5 space-y-2 text-sm text-slate-600">
                    {section.bullets.map((bullet) => (
                      <li
                        key={getLocalizedInsightText(bullet, language)}
                        className="flex gap-2"
                      >
                        <span className="mt-1 h-2.5 w-2.5 flex-none rounded-full bg-blue-500" />
                        <span>{getLocalizedInsightText(bullet, language)}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </article>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="rounded-[32px] border border-blue-100 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 px-8 py-12 text-white shadow-[0_28px_70px_rgba(27,66,66,0.3)]">
            <div className="flex flex-wrap gap-3">
              <Link
                href="/rfp"
                className="hover-card inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:-translate-y-0.5 hover:bg-blue-50"
              >
                {text.rfp}
              </Link>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noreferrer"
                className="hover-card inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                {text.book}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
