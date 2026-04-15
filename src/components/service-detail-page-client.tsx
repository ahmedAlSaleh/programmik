"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import {
  getLocalizedText,
  getServiceBySlug,
} from "@/lib/services-content";

type ServiceDetailPageClientProps = {
  slug: string;
};

const copy = {
  en: {
    back: "All Services",
    scope: "Scope",
    timeline: "Timeline",
    deliverables: "Deliverables",
    pricing: "Pricing Models",
    fit: "Best fit",
    contactCta: "Get a tailored proposal",
    contactHint:
      "Share your current stage and target launch window. We will return with recommended scope and pricing.",
  },
  ar: {
    back: "كل الخدمات",
    scope: "النطاق",
    timeline: "الجدول الزمني",
    deliverables: "المخرجات",
    pricing: "نماذج التسعير",
    fit: "الأنسب لـ",
    contactCta: "احصل على عرض مخصص",
    contactHint:
      "شارك مرحلة مشروعك الحالية وموعد الإطلاق المستهدف، وسنقترح لك النطاق والتسعير المناسبين.",
  },
} as const;

export default function ServiceDetailPageClient({
  slug,
}: ServiceDetailPageClientProps) {
  const { language } = useLanguage();
  const text = copy[language];
  const service = getServiceBySlug(slug);

  if (!service) {
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
            href="/services"
            className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.2em] text-blue-100 transition hover:text-white"
          >
            {text.back}
          </Link>

          <div className="mt-6 max-w-3xl space-y-5">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              {getLocalizedText(service.title, language)}
            </h1>
            <p className="text-lg text-blue-100">
              {getLocalizedText(service.subtitle, language)}
            </p>
            <p className="text-base text-blue-100">
              {getLocalizedText(service.overview, language)}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="space-y-8">
            <div className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">
                {text.scope}
              </h2>
              <ul className="mt-5 grid gap-3 text-sm text-slate-600">
                {service.scope.map((item) => (
                  <li key={getLocalizedText(item, language)} className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 flex-none rounded-full bg-blue-500" />
                    <span>{getLocalizedText(item, language)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">
                {text.deliverables}
              </h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {service.deliverables.map((item) => (
                  <div
                    key={getLocalizedText(item, language)}
                    className="rounded-2xl border border-blue-100 bg-blue-50/70 p-4 text-sm text-slate-700"
                  >
                    {getLocalizedText(item, language)}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">
                {text.timeline}
              </h2>
              <div className="mt-5 space-y-4">
                {service.timeline.map((phase, index) => (
                  <div
                    key={getLocalizedText(phase.phase, language)}
                    className="rounded-2xl border border-blue-100 bg-white p-4"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                      {String(index + 1).padStart(2, "0")} -{" "}
                      {getLocalizedText(phase.duration, language)}
                    </p>
                    <h3 className="mt-2 text-base font-semibold text-slate-900">
                      {getLocalizedText(phase.phase, language)}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      {getLocalizedText(phase.description, language)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">
                {text.pricing}
              </h2>
              <div className="mt-5 space-y-4">
                {service.pricingModels.map((pricing) => (
                  <div
                    key={getLocalizedText(pricing.model, language)}
                    className="rounded-2xl border border-blue-100 bg-blue-50/70 p-4"
                  >
                    <h3 className="text-base font-semibold text-slate-900">
                      {getLocalizedText(pricing.model, language)}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      {getLocalizedText(pricing.description, language)}
                    </p>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-[0.15em] text-blue-700">
                      {text.fit}
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      {getLocalizedText(pricing.fit, language)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="rounded-[32px] border border-blue-100 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 px-8 py-12 text-white shadow-[0_28px_70px_rgba(27,66,66,0.3)]">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <p className="max-w-2xl text-sm text-blue-100">{text.contactHint}</p>
              <Link
                href="/contact"
                className="hover-card inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:-translate-y-0.5 hover:bg-blue-50"
              >
                {text.contactCta}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
