"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { BOOKING_URL } from "@/lib/lead-config";
import {
  getLocalizedTrustText,
  trustHighlights,
  trustPageCopy,
} from "@/lib/trust-content";

const copy = {
  en: {
    rfp: "Request proposal",
    book: "Book appointment",
  },
  ar: {
    rfp: "طلب عرض",
    book: "حجز موعد",
  },
} as const;

export default function TrustPageClient() {
  const { language } = useLanguage();
  const text = copy[language];

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
              {getLocalizedTrustText(trustPageCopy.eyebrow, language)}
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {getLocalizedTrustText(trustPageCopy.title, language)}
            </h1>
            <p className="text-lg text-blue-100">
              {getLocalizedTrustText(trustPageCopy.description, language)}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {trustHighlights.map((item) => (
              <article
                key={getLocalizedTrustText(item.title, language)}
                className="hover-card rounded-3xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-600/10"
              >
                <h2 className="text-2xl font-semibold text-slate-900">
                  {getLocalizedTrustText(item.title, language)}
                </h2>
                <p className="mt-3 text-sm text-slate-600">
                  {getLocalizedTrustText(item.description, language)}
                </p>
                <ul className="mt-5 space-y-2 text-sm text-slate-700">
                  {item.bullets.map((bullet) => (
                    <li
                      key={getLocalizedTrustText(bullet, language)}
                      className="flex gap-2"
                    >
                      <span className="mt-1 h-2.5 w-2.5 flex-none rounded-full bg-blue-500" />
                      <span>{getLocalizedTrustText(bullet, language)}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">
              {getLocalizedTrustText(trustPageCopy.tiersTitle, language)}
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {trustPageCopy.tiers.map((tier) => (
                <div
                  key={getLocalizedTrustText(tier.name, language)}
                  className="rounded-2xl border border-blue-100 bg-blue-50/60 p-5"
                >
                  <p className="text-base font-semibold text-slate-900">
                    {getLocalizedTrustText(tier.name, language)}
                  </p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-blue-700">
                    {getLocalizedTrustText(tier.response, language)}
                  </p>
                  <p className="mt-3 text-sm text-slate-600">
                    {getLocalizedTrustText(tier.fit, language)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
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
