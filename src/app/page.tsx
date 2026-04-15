"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { BOOKING_URL } from "@/lib/lead-config";
import {
  architectureContent,
  getLocalizedText,
  servicesCatalog,
} from "@/lib/services-content";
import {
  getLocalizedSolutionText,
  solutionsCatalog,
} from "@/lib/solutions-content";
import {
  getLocalizedInsightText,
  insightCategoryLabels,
  insightPosts,
} from "@/lib/insights-content";
import { getLocalizedTrustText, trustHighlights } from "@/lib/trust-content";

export default function Home() {
  const { t, language } = useLanguage();
  const allServicesLabel =
    language === "ar" ? "عرض كل الخدمات" : "Explore all services";
  const solutionsTitle =
    language === "ar" ? "حلول موجهة لكل قطاع" : "Sector and Solution Paths";
  const allSolutionsLabel =
    language === "ar" ? "عرض كل الحلول" : "Explore all solutions";
  const rfpTitle =
    language === "ar"
      ? "ابدأ نموذج طلب عرض متعدد الخطوات"
      : "Start a multi-step proposal request";
  const rfpDescription =
    language === "ar"
      ? "شارك نطاقك وميزانيتك وزمن التنفيذ في نموذج RFP، ثم احجز مكالمة مباشرة مع الفريق."
      : "Share scope, budget, and timeline in our RFP wizard, then instantly book a discovery call.";
  const rfpCta = language === "ar" ? "ابدأ نموذج RFP" : "Start RFP";
  const bookCta = language === "ar" ? "حجز موعد" : "Book a call";
  const insightsTitle =
    language === "ar" ? "رؤى تقنية واستراتيجية للإطلاق" : "SEO Insights and Playbooks";
  const allInsightsLabel =
    language === "ar" ? "عرض كل المقالات" : "Explore all insights";
  const trustTitle =
    language === "ar" ? "الثقة والجاهزية التشغيلية" : "Trust and Operational Reliability";
  const trustLabel = language === "ar" ? "عرض إطار الثقة" : "View trust framework";
  return (
    <div className="bg-transparent">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-blue-600 text-white gradient-motion">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="parallax-soft absolute -top-40 right-0 h-96 w-96 rounded-full bg-blue-500/35 blur-3xl" />
          <div className="parallax-deep absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue-400/25 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-800/40 blur-3xl" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col gap-14 px-6 pb-24 pt-16 lg:px-8">
          <div className="max-w-2xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-800/45 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-100 ring-1 ring-blue-400/40 hover-card">
              {t.home.hero.badge}
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                {t.home.hero.title}
              </h1>
              <p className="text-lg text-blue-100">
                {t.home.hero.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/message/MSMUOD77GMDXK1"
                className="hover-card inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-950/40 transition hover:-translate-y-0.5 hover:bg-blue-500"
              >
                {t.home.hero.primaryCta}
              </a>
              <Link
                href="/about"
                className="hover-card inline-flex items-center justify-center rounded-full border border-blue-200/50 px-7 py-3 text-sm font-semibold text-blue-100 transition hover:-translate-y-0.5 hover:bg-blue-600/20"
              >
                {t.home.hero.secondaryCta}
              </Link>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {t.home.stats.map((stat) => (
              <div
                key={stat.label}
                className="group hover-card rounded-3xl border border-blue-600/60 bg-blue-800/55 p-6 shadow-lg shadow-blue-900/30 transition hover:-translate-y-1 hover:bg-blue-800/70"
              >
                <p className="text-3xl font-semibold text-white">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-blue-200">{stat.label}</p>
                <div className="mt-6 h-1 w-10 rounded-full bg-blue-400 transition group-hover:w-16" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-blue-100/80 bg-gradient-to-r from-blue-50 via-white to-blue-100 py-8 gradient-motion">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
              <span className="text-blue-800">{t.home.evidence.label}</span>
              <div className="flex flex-wrap items-center gap-3 text-blue-600/90">
                {t.home.evidence.logos.map((logo) => (
                  <span
                    key={logo}
                    className="hover-card rounded-full bg-white/80 px-3 py-2 text-[11px] shadow-sm"
                  >
                    {logo}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {t.home.evidence.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="hover-card rounded-2xl border border-blue-100 bg-white/80 px-4 py-2 text-sm text-blue-700 shadow-sm"
                >
                  <p className="text-lg font-semibold text-blue-800">
                    {stat.value}
                  </p>
                  <p className="text-xs text-blue-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white/80 via-blue-50/70 to-blue-100/70 py-28 gradient-motion">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                {t.home.services.eyebrow}
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                {t.home.services.title}
              </h2>
            </div>
            <p className="max-w-md text-base text-slate-600">
              {t.home.services.description}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {t.home.services.items.map((service, index) => {
              const details = servicesCatalog[index];
              const detailsHref = details
                ? `/services/${details.slug}`
                : "/services";

              return (
                <div
                  key={service.title}
                  className="group hover-card relative overflow-hidden rounded-3xl border border-blue-100/80 bg-gradient-to-br from-white via-white to-blue-50/80 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-600/10"
                >
                  <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                    <div className="absolute -left-1/3 top-0 h-full w-2/3 bg-gradient-to-r from-blue-50 via-white to-transparent opacity-80" />
                    <div className="absolute -left-1/4 top-0 h-full w-1/2 bg-blue-50/80 blur-2xl transition-transform duration-700 group-hover:translate-x-10" />
                  </div>
                  <div className="relative space-y-4">
                    <h3 className="text-lg font-semibold text-slate-900">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {service.description}
                    </p>
                    <Link
                      href={detailsHref}
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 transition group-hover:translate-x-1"
                    >
                      {t.home.services.cta}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10">
            <Link
              href="/services"
              className="hover-card inline-flex items-center justify-center rounded-full border border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:-translate-y-0.5 hover:bg-blue-50"
            >
              {allServicesLabel}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-100/80 via-white/80 to-blue-50/90 py-24 gradient-motion">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {solutionsTitle}
            </h2>
            <Link
              href="/solutions"
              className="hover-card inline-flex items-center justify-center rounded-full border border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:-translate-y-0.5 hover:bg-blue-50"
            >
              {allSolutionsLabel}
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {solutionsCatalog.map((solution) => (
              <article
                key={solution.slug}
                className="hover-card rounded-3xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-600/10"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {getLocalizedSolutionText(solution.title, language)}
                </h3>
                <p className="mt-3 text-sm text-slate-600">
                  {getLocalizedSolutionText(solution.subtitle, language)}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {solution.businessOutcomes.slice(0, 2).map((item) => (
                    <li
                      key={getLocalizedSolutionText(item, language)}
                      className="flex gap-2"
                    >
                      <span className="mt-1 h-2 w-2 flex-none rounded-full bg-blue-500" />
                      <span>{getLocalizedSolutionText(item, language)}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href={`/solutions/${solution.slug}`}
                    className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700 transition hover:translate-x-1"
                  >
                    {language === "ar" ? "عرض الحل" : "View solution"}
                  </Link>
                  <Link
                    href="/rfp"
                    className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700 transition hover:translate-x-1"
                  >
                    {language === "ar" ? "طلب عرض" : "Request proposal"}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="hover-card rounded-[32px] border border-blue-100 bg-white p-8 shadow-lg shadow-blue-600/10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl space-y-3">
                <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  {rfpTitle}
                </h2>
                <p className="text-base text-slate-600">{rfpDescription}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/rfp"
                  className="hover-card inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-500"
                >
                  {rfpCta}
                </Link>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="hover-card inline-flex items-center justify-center rounded-full border border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:-translate-y-0.5 hover:bg-blue-50"
                >
                  {bookCta}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white via-blue-50/60 to-blue-100/70 py-24 gradient-motion">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {insightsTitle}
            </h2>
            <Link
              href="/insights"
              className="hover-card inline-flex items-center justify-center rounded-full border border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:-translate-y-0.5 hover:bg-blue-50"
            >
              {allInsightsLabel}
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {insightPosts.slice(0, 3).map((post) => (
              <article
                key={post.slug}
                className="hover-card rounded-3xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-600/10"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-700">
                  {getLocalizedInsightText(insightCategoryLabels[post.category], language)}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">
                  {getLocalizedInsightText(post.title, language)}
                </h3>
                <p className="mt-3 text-sm text-slate-600">
                  {getLocalizedInsightText(post.excerpt, language)}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-blue-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/insights/${post.slug}`}
                  className="mt-6 inline-flex text-xs font-semibold uppercase tracking-[0.18em] text-blue-700 transition hover:translate-x-1"
                >
                  {language === "ar" ? "قراءة المقال" : "Read article"}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {trustTitle}
            </h2>
            <Link
              href="/trust"
              className="hover-card inline-flex items-center justify-center rounded-full border border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:-translate-y-0.5 hover:bg-blue-50"
            >
              {trustLabel}
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {trustHighlights.map((item) => (
              <article
                key={getLocalizedTrustText(item.title, language)}
                className="hover-card rounded-3xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-600/10"
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  {getLocalizedTrustText(item.title, language)}
                </h3>
                <p className="mt-3 text-sm text-slate-600">
                  {getLocalizedTrustText(item.description, language)}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {item.bullets.slice(0, 2).map((bullet) => (
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
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-100/80 via-white/80 to-blue-50/90 py-28 gradient-motion">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                {t.home.process.eyebrow}
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                {t.home.process.title}
              </h2>
            </div>
            <p className="max-w-md text-base text-slate-600">
              {t.home.process.description}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {t.home.process.steps.map((step) => (
              <div
                key={step.step}
                className="hover-card rounded-3xl border border-blue-100 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-600/10"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-sm font-semibold text-white shadow-lg shadow-blue-600/30">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white via-blue-50/60 to-blue-100/70 py-28 gradient-motion">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
              {getLocalizedText(architectureContent.eyebrow, language)}
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {getLocalizedText(architectureContent.title, language)}
            </h2>
            <p className="max-w-3xl text-base text-slate-600">
              {getLocalizedText(architectureContent.description, language)}
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-5">
            {architectureContent.pillars.map((pillar) => (
              <article
                key={getLocalizedText(pillar.title, language)}
                className="hover-card rounded-3xl border border-blue-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-600/10"
              >
                <h3 className="text-base font-semibold text-slate-900">
                  {getLocalizedText(pillar.title, language)}
                </h3>
                <p className="mt-3 text-sm text-slate-600">
                  {getLocalizedText(pillar.description, language)}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {pillar.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-blue-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-blue-100 bg-white/90 p-7 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
              {getLocalizedText(architectureContent.flowTitle, language)}
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-5">
              {architectureContent.flowSteps.map((step, index) => (
                <div
                  key={getLocalizedText(step, language)}
                  className="rounded-2xl border border-blue-100 bg-blue-50/70 p-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 text-sm text-slate-700">
                    {getLocalizedText(step, language)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-100/80 via-white/80 to-blue-200/80 py-28 gradient-motion">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
              {t.home.about.eyebrow}
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {t.home.about.title}
            </h2>
            <p className="text-base text-slate-600">
              {t.home.about.description}
            </p>
            <ul className="grid gap-3 text-sm text-slate-700 sm:grid-cols-3">
              {t.home.about.bullets.map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <span className="h-2 w-2 rounded-full bg-blue-600" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="hover-card inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:from-blue-500 hover:to-blue-300"
            >
              {t.home.about.cta}
            </Link>
          </div>

          <div className="group hover-card relative overflow-hidden rounded-3xl border border-blue-100/80 bg-gradient-to-br from-white via-blue-50/70 to-blue-100/70 p-8 shadow-lg shadow-blue-600/10 transition hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-blue-100/70 opacity-80" />
            <div className="relative space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                {t.home.about.snapshotEyebrow}
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {t.home.about.snapshotItems.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-blue-100 bg-white/90 p-4"
                  >
                    <p className="text-2xl font-semibold text-slate-900">
                      {item.value}
                    </p>
                    <p className="text-xs text-slate-500">{item.label}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-600">
                {t.home.about.snapshotNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 py-28 text-white gradient-motion">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
                {t.home.support.eyebrow}
              </p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {t.home.support.title}
              </h2>
            </div>
            <Link
              href="/support"
              className="inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/20"
            >
              {t.home.support.cta}
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {t.home.support.items.map((item) => (
              <div
                key={item.title}
                className="group hover-card rounded-3xl border border-blue-600/60 bg-blue-800/50 p-6 transition hover:-translate-y-1 hover:border-blue-400/70 hover:bg-blue-800/70"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm text-blue-200">
                  {item.description}
                </p>
                <div className="mt-6 h-1 w-8 rounded-full bg-blue-400 transition group-hover:w-14" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[32px] border border-blue-600/40 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 px-8 py-14 text-white shadow-[0_30px_80px_rgba(27,66,66,0.35)] gradient-motion hover-card">
            <div aria-hidden="true" className="absolute inset-0 opacity-30">
              <div className="parallax-soft absolute -right-16 top-6 h-48 w-48 rounded-full bg-white/40 blur-2xl" />
              <div className="parallax-deep absolute -left-12 bottom-0 h-56 w-56 rounded-full bg-white/30 blur-2xl" />
            </div>

            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-100">
                  {t.home.final.eyebrow}
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  {t.home.final.title}
                </h2>
                <p className="mt-4 max-w-2xl text-base text-blue-100">
                  {t.home.final.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="hover-card inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:-translate-y-0.5 hover:bg-blue-50"
                >
                  {t.home.final.primaryCta}
                </Link>
                <Link
                  href="/contact"
                  className="hover-card inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  {t.home.final.secondaryCta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

