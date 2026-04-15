"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import {
  getLocalizedSolutionText,
  solutionsCatalog,
} from "@/lib/solutions-content";

const copy = {
  en: {
    eyebrow: "Sector Solutions",
    title: "Industry-focused software solutions.",
    description:
      "Explore how we approach architecture, delivery, and business outcomes for each sector.",
    outcomes: "Business outcomes",
    challenges: "Common challenges",
    details: "View solution",
    rfp: "Request proposal",
  },
  ar: {
    eyebrow: "حلول القطاعات",
    title: "حلول برمجية موجهة لكل قطاع.",
    description:
      "اكتشف كيف نعالج المعمارية والتنفيذ والنتائج التجارية لكل قطاع.",
    outcomes: "النتائج التجارية",
    challenges: "التحديات الشائعة",
    details: "عرض الحل",
    rfp: "طلب عرض",
  },
} as const;

export default function SolutionsPage() {
  const { language } = useLanguage();
  const text = copy[language];

  return (
    <div className="bg-transparent">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-blue-600 text-white gradient-motion">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="parallax-soft absolute -top-32 right-0 h-80 w-80 rounded-full bg-blue-500/35 blur-3xl" />
          <div className="parallax-deep absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-400/25 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-16 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-100">
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
          <div className="grid gap-6 md:grid-cols-3">
            {solutionsCatalog.map((solution) => (
              <article
                key={solution.slug}
                className="hover-card rounded-3xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-600/10"
              >
                <h2 className="text-xl font-semibold text-slate-900">
                  {getLocalizedSolutionText(solution.title, language)}
                </h2>
                <p className="mt-3 text-sm text-slate-600">
                  {getLocalizedSolutionText(solution.subtitle, language)}
                </p>

                <div className="mt-6 space-y-4 text-sm text-slate-600">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
                      {text.challenges}
                    </p>
                    <ul className="mt-2 list-disc space-y-1 ps-5">
                      {solution.challenges.slice(0, 2).map((item) => (
                        <li key={getLocalizedSolutionText(item, language)}>
                          {getLocalizedSolutionText(item, language)}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
                      {text.outcomes}
                    </p>
                    <ul className="mt-2 list-disc space-y-1 ps-5">
                      {solution.businessOutcomes.slice(0, 2).map((item) => (
                        <li key={getLocalizedSolutionText(item, language)}>
                          {getLocalizedSolutionText(item, language)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={`/solutions/${solution.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 transition hover:translate-x-1"
                  >
                    {text.details}
                  </Link>
                  <Link
                    href="/rfp"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 transition hover:translate-x-1"
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
