"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-transparent">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 text-white gradient-motion">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="parallax-soft absolute -top-32 right-0 h-80 w-80 rounded-full bg-blue-700/40 blur-3xl" />
          <div className="parallax-deep absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue-500/30 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-16 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
              {t.aboutPage.hero.eyebrow}
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {t.aboutPage.hero.title}
            </h1>
            <p className="text-lg text-blue-100">
              {t.aboutPage.hero.description}
            </p>
            <Link
              href="/contact"
              className="hover-card inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:-translate-y-0.5 hover:from-blue-500 hover:to-blue-300"
            >
              {t.aboutPage.hero.cta}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
              {t.aboutPage.story.eyebrow}
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {t.aboutPage.story.title}
            </h2>
            {t.aboutPage.story.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base text-slate-600">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {t.aboutPage.stats.map((stat) => (
              <div
                key={stat.label}
                className="hover-card rounded-3xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-600/10"
              >
                <p className="text-3xl font-semibold text-slate-900">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-blue-50 via-white to-blue-100 py-24 gradient-motion">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
              {t.aboutPage.values.eyebrow}
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {t.aboutPage.values.title}
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {t.aboutPage.values.items.map((value) => (
              <div
                key={value.title}
                className="group hover-card rounded-3xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-600/10"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600">
                  {value.description}
                </p>
                <div className="mt-6 h-1 w-8 rounded-full bg-blue-500 transition group-hover:w-14" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="hover-card rounded-[32px] border border-blue-100 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 px-8 py-14 text-white shadow-[0_30px_80px_rgba(27,66,66,0.35)] gradient-motion">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-100">
                  {t.aboutPage.final.eyebrow}
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  {t.aboutPage.final.title}
                </h2>
                <p className="mt-4 max-w-2xl text-base text-blue-100">
                  {t.aboutPage.final.description}
                </p>
              </div>
              <Link
                href="/contact"
                className="hover-card inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:-translate-y-0.5 hover:bg-blue-50"
              >
                {t.aboutPage.final.cta}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
