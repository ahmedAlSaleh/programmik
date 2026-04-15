"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import {
  getLocalizedText,
  servicesCatalog,
  type ServiceDetail,
} from "@/lib/services-content";

const copy = {
  en: {
    eyebrow: "Services",
    title: "Detailed service tracks for software teams.",
    description:
      "Each service page defines scope, timeline, deliverables, and pricing models so you can choose with confidence.",
    scopeLabel: "Scope highlights",
    timelineLabel: "Typical timeline",
    deliverablesLabel: "Deliverables",
    pricingLabel: "Pricing model",
    detailsCta: "View details",
    contactCta: "Discuss your project",
  },
  ar: {
    eyebrow: "الخدمات",
    title: "مسارات خدمة مفصلة لفرق البرمجيات.",
    description:
      "كل صفحة خدمة توضح النطاق والزمن والمخرجات ونموذج التسعير لتختار بثقة.",
    scopeLabel: "أبرز النطاق",
    timelineLabel: "الجدول الزمني",
    deliverablesLabel: "المخرجات",
    pricingLabel: "نموذج التسعير",
    detailsCta: "عرض التفاصيل",
    contactCta: "ناقش مشروعك",
  },
} as const;

function getTimelineSummary(service: ServiceDetail, language: "en" | "ar") {
  const first = service.timeline[0];
  const last = service.timeline[service.timeline.length - 1];

  return `${getLocalizedText(first.phase, language)} (${getLocalizedText(
    first.duration,
    language
  )}) - ${getLocalizedText(last.phase, language)} (${getLocalizedText(
    last.duration,
    language
  )})`;
}

export default function ServicesPage() {
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
            <Link
              href="/contact"
              className="hover-card inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:-translate-y-0.5 hover:bg-blue-50"
            >
              {text.contactCta}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {servicesCatalog.map((service) => (
              <article
                key={service.slug}
                className="hover-card rounded-3xl border border-blue-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-600/10"
              >
                <h2 className="text-2xl font-semibold text-slate-900">
                  {getLocalizedText(service.title, language)}
                </h2>
                <p className="mt-3 text-sm text-slate-600">
                  {getLocalizedText(service.subtitle, language)}
                </p>

                <div className="mt-6 space-y-4 text-sm text-slate-600">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                      {text.scopeLabel}
                    </p>
                    <ul className="mt-2 list-disc space-y-1 ps-5">
                      {service.scope.slice(0, 2).map((point) => (
                        <li key={getLocalizedText(point, language)}>
                          {getLocalizedText(point, language)}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                      {text.timelineLabel}
                    </p>
                    <p className="mt-2">
                      {getTimelineSummary(service, language)}
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-blue-100 bg-blue-50/60 px-4 py-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">
                        {text.deliverablesLabel}
                      </p>
                      <p className="mt-1 text-slate-700">
                        {service.deliverables.length}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-blue-100 bg-blue-50/60 px-4 py-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">
                        {text.pricingLabel}
                      </p>
                      <p className="mt-1 text-slate-700">
                        {service.pricingModels.length}
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 transition hover:translate-x-1"
                >
                  {text.detailsCta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
