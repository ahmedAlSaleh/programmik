"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { BOOKING_URL } from "@/lib/lead-config";

export default function ContactPage() {
  const { t, language } = useLanguage();
  const rfpLabel = language === "ar" ? "طلب عرض مفصل" : "Detailed RFP";
  const bookingLabel = language === "ar" ? "حجز موعد" : "Book appointment";

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
              {t.contactPage.hero.eyebrow}
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {t.contactPage.hero.title}
            </h1>
            <p className="text-lg text-blue-100">
              {t.contactPage.hero.description}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/rfp"
                className="hover-card inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-700 transition hover:-translate-y-0.5 hover:bg-blue-50"
              >
                {rfpLabel}
              </Link>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noreferrer"
                className="hover-card inline-flex items-center justify-center rounded-full border border-blue-200/60 px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-100 transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                {bookingLabel}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <form className="hover-card space-y-6 rounded-3xl border border-blue-100 bg-white p-8 shadow-sm">
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                {t.contactPage.form.nameLabel}
              </label>
              <input
                type="text"
                placeholder={t.contactPage.form.namePlaceholder}
                className="w-full rounded-2xl border border-blue-100 bg-blue-50/40 px-4 py-3 text-sm text-slate-900 transition focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                {t.contactPage.form.emailLabel}
              </label>
              <input
                type="email"
                dir="ltr"
                placeholder={t.contactPage.form.emailPlaceholder}
                className="w-full rounded-2xl border border-blue-100 bg-blue-50/40 px-4 py-3 text-sm text-slate-900 transition focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200 dir-ltr"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                {t.contactPage.form.companyLabel}
              </label>
              <input
                type="text"
                placeholder={t.contactPage.form.companyPlaceholder}
                className="w-full rounded-2xl border border-blue-100 bg-blue-50/40 px-4 py-3 text-sm text-slate-900 transition focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                {t.contactPage.form.messageLabel}
              </label>
              <textarea
                rows={5}
                placeholder={t.contactPage.form.messagePlaceholder}
                className="w-full rounded-2xl border border-blue-100 bg-blue-50/40 px-4 py-3 text-sm text-slate-900 transition focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <button
              type="submit"
              className="hover-card inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:-translate-y-0.5 hover:from-blue-500 hover:to-blue-300"
            >
              {t.contactPage.form.submit}
            </button>
          </form>

          <div className="space-y-6">
            <div className="hover-card rounded-3xl border border-blue-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-600/10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                {t.contactPage.details.eyebrow}
              </p>
              <div className="mt-6 space-y-4">
                {t.contactPage.details.items.map((detail) => {
                  const useLtr =
                    detail.value.includes("@") ||
                    detail.value.includes("+") ||
                    /[0-9]/.test(detail.value);

                  return (
                    <div key={detail.title}>
                      <p className="text-xs font-semibold text-slate-500">
                        {detail.title}
                      </p>
                      <p
                        className={`text-base font-semibold text-slate-900 ${
                          useLtr ? "dir-ltr" : ""
                        }`}
                      >
                        {detail.value}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="hover-card rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 p-8 text-white shadow-lg shadow-blue-600/30 gradient-motion">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-100">
                {t.contactPage.office.eyebrow}
              </p>
              <p className="mt-3 text-base text-blue-100">
                {t.contactPage.office.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="hover-card inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 transition hover:-translate-y-0.5 hover:bg-blue-50"
                >
                  {bookingLabel}
                </a>
                <Link
                  href="/rfp"
                  className="hover-card inline-flex items-center justify-center rounded-full border border-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  {rfpLabel}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
