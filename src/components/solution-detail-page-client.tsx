"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { BOOKING_URL } from "@/lib/lead-config";
import {
  getLocalizedSolutionText,
  getSolutionBySlug,
} from "@/lib/solutions-content";

type SolutionDetailPageClientProps = {
  slug: string;
};

const copy = {
  en: {
    back: "All Solutions",
    challenges: "Challenges",
    blueprint: "Solution Blueprint",
    architecture: "Architecture Highlights",
    security: "Security and Compliance",
    outcomes: "Expected Outcomes",
    delivery: "Delivery Model",
    rfp: "Request Proposal",
    bookCall: "Book Appointment",
  },
  ar: {
    back: "كل الحلول",
    challenges: "التحديات",
    blueprint: "تصميم الحل",
    architecture: "أبرز المعمارية",
    security: "الأمان والامتثال",
    outcomes: "النتائج المتوقعة",
    delivery: "نموذج التنفيذ",
    rfp: "طلب عرض",
    bookCall: "حجز موعد",
  },
} as const;

export default function SolutionDetailPageClient({
  slug,
}: SolutionDetailPageClientProps) {
  const { language } = useLanguage();
  const text = copy[language];
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    return null;
  }

  return (
    <div className="bg-transparent">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-blue-600 text-white gradient-motion">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="parallax-soft absolute -top-36 right-0 h-96 w-96 rounded-full bg-blue-500/35 blur-3xl" />
          <div className="parallax-deep absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue-400/25 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-16 lg:px-8">
          <Link
            href="/solutions"
            className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.2em] text-blue-100 transition hover:text-white"
          >
            {text.back}
          </Link>

          <div className="mt-6 max-w-3xl space-y-5">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              {getLocalizedSolutionText(solution.title, language)}
            </h1>
            <p className="text-lg text-blue-100">
              {getLocalizedSolutionText(solution.subtitle, language)}
            </p>
            <p className="text-base text-blue-100">
              {getLocalizedSolutionText(solution.overview, language)}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-2 lg:px-8">
          <div className="space-y-8">
            <div className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">
                {text.challenges}
              </h2>
              <ul className="mt-5 grid gap-3 text-sm text-slate-700">
                {solution.challenges.map((item) => (
                  <li
                    key={getLocalizedSolutionText(item, language)}
                    className="flex gap-3"
                  >
                    <span className="mt-1 h-2.5 w-2.5 flex-none rounded-full bg-blue-500" />
                    <span>{getLocalizedSolutionText(item, language)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">
                {text.blueprint}
              </h2>
              <ul className="mt-5 grid gap-3 text-sm text-slate-700">
                {solution.solutionBlueprint.map((item) => (
                  <li
                    key={getLocalizedSolutionText(item, language)}
                    className="flex gap-3"
                  >
                    <span className="mt-1 h-2.5 w-2.5 flex-none rounded-full bg-blue-500" />
                    <span>{getLocalizedSolutionText(item, language)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">
                {text.delivery}
              </h2>
              <p className="mt-4 text-sm text-slate-700">
                {getLocalizedSolutionText(solution.engagementModel, language)}
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">
                {text.architecture}
              </h2>
              <ul className="mt-5 grid gap-3 text-sm text-slate-700">
                {solution.architectureHighlights.map((item) => (
                  <li
                    key={getLocalizedSolutionText(item, language)}
                    className="flex gap-3"
                  >
                    <span className="mt-1 h-2.5 w-2.5 flex-none rounded-full bg-blue-500" />
                    <span>{getLocalizedSolutionText(item, language)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">
                {text.security}
              </h2>
              <ul className="mt-5 grid gap-3 text-sm text-slate-700">
                {solution.complianceAndSecurity.map((item) => (
                  <li
                    key={getLocalizedSolutionText(item, language)}
                    className="flex gap-3"
                  >
                    <span className="mt-1 h-2.5 w-2.5 flex-none rounded-full bg-blue-500" />
                    <span>{getLocalizedSolutionText(item, language)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">
                {text.outcomes}
              </h2>
              <ul className="mt-5 grid gap-3 text-sm text-slate-700">
                {solution.businessOutcomes.map((item) => (
                  <li
                    key={getLocalizedSolutionText(item, language)}
                    className="flex gap-3"
                  >
                    <span className="mt-1 h-2.5 w-2.5 flex-none rounded-full bg-blue-500" />
                    <span>{getLocalizedSolutionText(item, language)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="rounded-[32px] border border-blue-100 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 px-8 py-12 text-white shadow-[0_28px_70px_rgba(27,66,66,0.3)]">
            <div className="flex flex-wrap gap-4">
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
                {text.bookCall}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
