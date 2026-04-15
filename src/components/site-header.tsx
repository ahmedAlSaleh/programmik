"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { BOOKING_URL } from "@/lib/lead-config";

export default function SiteHeader() {
  const { language, setLanguage, t } = useLanguage();
  const logoSrc = "/programmik/logo_web.jpg";
  const solutionsLabel = language === "ar" ? "الحلول" : "Solutions";
  const insightsLabel = language === "ar" ? "المقالات" : "Insights";
  const trustLabel = language === "ar" ? "الثقة" : "Trust";
  const rfpLabel = language === "ar" ? "طلب عرض" : "Request RFP";
  const bookCallLabel = language === "ar" ? "حجز موعد" : "Book a Call";

  return (
    <header className="sticky top-0 z-50 border-b border-blue-700/50 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 text-white shadow-lg shadow-blue-900/35 backdrop-blur gradient-motion">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-3 transition hover:-translate-y-0.5"
        >
          <img
            src={logoSrc}
            alt="Programmik logo"
            width={44}
            height={44}
            className="h-11 w-11 rounded-2xl bg-white/90 p-1 object-contain shadow-lg shadow-blue-900/30"
            loading="eager"
            decoding="async"
          />
          <span>
            <span className="block text-base font-semibold tracking-tight">
              {t.site.name}
            </span>
            <span className="block text-xs text-blue-200">{t.site.tagline}</span>
          </span>
        </Link>

        <div className="flex min-w-0 flex-1 flex-col gap-3 lg:items-end">
          <nav
            aria-label="Primary"
            className="flex w-full flex-wrap items-center justify-start gap-x-1 gap-y-2 text-[13px] font-semibold text-blue-100 lg:justify-end"
          >
            {t.nav.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative rounded-full px-3 py-1.5 transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
              >
                <span className="relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-blue-200 after:transition after:duration-300 hover:after:scale-x-100">
                  {item.label}
                </span>
              </Link>
            ))}
            <Link
              href="/solutions"
              className="relative rounded-full px-3 py-1.5 transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
            >
              <span className="relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-blue-200 after:transition after:duration-300 hover:after:scale-x-100">
                {solutionsLabel}
              </span>
            </Link>
            <Link
              href="/insights"
              className="relative rounded-full px-3 py-1.5 transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
            >
              <span className="relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-blue-200 after:transition after:duration-300 hover:after:scale-x-100">
                {insightsLabel}
              </span>
            </Link>
            <Link
              href="/trust"
              className="relative rounded-full px-3 py-1.5 transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
            >
              <span className="relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-blue-200 after:transition after:duration-300 hover:after:scale-x-100">
                {trustLabel}
              </span>
            </Link>
          </nav>

          <div className="flex flex-wrap items-center gap-3 lg:justify-end">
            <div className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.2em] text-blue-100">
              <span className="text-blue-200">{t.nav.language}</span>
              <div className="flex items-center rounded-full border border-blue-300/40 bg-blue-900/40 p-1">
                <button
                  type="button"
                  onClick={() => setLanguage("en")}
                  className={`rounded-full px-3 py-1 text-[10px] font-semibold transition ${
                    language === "en"
                      ? "bg-white text-blue-800 shadow shadow-blue-900/40"
                      : "text-blue-100 hover:bg-white/10"
                  }`}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage("ar")}
                  className={`rounded-full px-3 py-1 text-[10px] font-semibold transition ${
                    language === "ar"
                      ? "bg-white text-blue-800 shadow shadow-blue-900/40"
                      : "text-blue-100 hover:bg-white/10"
                  }`}
                >
                  AR
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Link
                href="/rfp"
                className="hover-card inline-flex items-center justify-center rounded-full bg-blue-500 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-lg shadow-blue-900/30 transition hover:-translate-y-0.5 hover:bg-blue-400"
              >
                {rfpLabel}
              </Link>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noreferrer"
                className="hover-card inline-flex items-center justify-center rounded-full border border-white/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-100 transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
              >
                {bookCallLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
