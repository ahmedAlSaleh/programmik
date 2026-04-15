"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/language-provider";

export default function SiteFooter() {
  const { t, language } = useLanguage();
  const logoSrc = "/programmik/logo_web.jpg";
  const year = new Date().getFullYear();
  const [visitorCount] = useState<number>(() => {
    if (typeof window === "undefined") {
      return 0;
    }

    const stored = window.localStorage.getItem("visitorCount");
    const parsed = stored ? Number(stored) : 0;
    return Number.isFinite(parsed) ? parsed : 0;
  });
  const solutionsLabel = language === "ar" ? "الحلول" : "Solutions";
  const rfpLabel = language === "ar" ? "طلب عرض" : "Request RFP";
  const insightsLabel = language === "ar" ? "المقالات" : "Insights";
  const trustLabel = language === "ar" ? "الثقة" : "Trust";
  const socialLinks = [
    {
      label: t.site.socialLinks.whatsapp,
      href: "https://wa.me/message/MSMUOD77GMDXK1",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
          <path
            d="M12.04 2.015c-5.514 0-9.992 4.477-9.992 9.99 0 1.76.46 3.44 1.335 4.93L2 22l5.196-1.363a9.95 9.95 0 0 0 4.843 1.24h.001c5.514 0 9.99-4.477 9.99-9.99 0-5.514-4.477-9.992-9.99-9.992zm0 18.33a8.33 8.33 0 0 1-4.247-1.17l-.305-.18-3.08.807.824-2.998-.2-.309a8.322 8.322 0 1 1 7.008 3.85zm4.57-6.237c-.25-.125-1.477-.73-1.705-.814-.227-.083-.393-.125-.56.125-.166.25-.64.814-.785.98-.145.166-.29.187-.54.062-.25-.125-1.055-.39-2.01-1.243-.744-.663-1.246-1.48-1.39-1.73-.145-.25-.015-.385.11-.51.112-.11.25-.29.375-.435.125-.146.166-.25.25-.416.083-.166.042-.312-.02-.437-.063-.125-.56-1.35-.77-1.85-.202-.487-.408-.42-.56-.428l-.48-.01c-.166 0-.437.062-.665.312-.23.25-.874.854-.874 2.083 0 1.228.894 2.416 1.02 2.583.125.166 1.76 2.69 4.27 3.77.596.257 1.06.41 1.42.526.596.19 1.137.163 1.566.1.478-.07 1.477-.6 1.686-1.18.207-.58.207-1.077.145-1.18-.062-.104-.227-.166-.476-.29z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      label: t.site.socialLinks.facebook,
      href: "https://www.facebook.com/profile.php?id=61586559117555",
      icon: (
        <svg viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4">
          <path
            d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.792C0 19.506.494 20 1.104 20h9.583v-7.745H8.077V9.237h2.61V7.012c0-2.583 1.578-3.99 3.88-3.99 1.103 0 2.05.082 2.327.118v2.697h-1.596c-1.253 0-1.495.596-1.495 1.47v1.93h2.99l-.39 3.018h-2.6V20h5.096c.61 0 1.104-.494 1.104-1.104V1.104C20 .494 19.506 0 18.896 0z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      label: t.site.socialLinks.instagram,
      href: "https://www.instagram.com/programmik98/",
      icon: (
        <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4">
          <path
            d="M7.667 0C4.078 0 2.686.008 2.053.038 1.378.07.854.216.392.678-.07 1.14.07 1.664.038 2.053.008 2.686 0 4.078 0 7.667s.008 4.98.038 5.614c.032.389.178.913.64 1.375.462.462.987.608 1.375.64.633.03 2.026.038 5.614.038s4.98-.008 5.614-.038c.389-.032.913-.178 1.375-.64.462-.462.608-.987.64-1.375.03-.633.038-2.026.038-5.614s-.008-4.98-.038-5.614c-.032-.389-.178-.913-.64-1.375-.462-.462-.987-.608-1.375-.64C12.647.008 11.255 0 7.667 0zm0 1.4c3.55 0 4.73.008 5.36.037.327.015.503.07.62.116.155.06.265.13.38.246.116.115.186.226.246.38.046.117.1.293.116.62.03.63.037 1.81.037 5.36s-.008 4.73-.037 5.36c-.015.327-.07.503-.116.62-.06.155-.13.265-.246.38-.115.116-.226.186-.38.246-.117.046-.293.1-.62.116-.63.03-1.81.037-5.36.037s-4.73-.008-5.36-.037c-.327-.015-.503-.07-.62-.116-.155-.06-.265-.13-.38-.246-.116-.115-.186-.226-.246-.38-.046-.117-.1-.293-.116-.62C1.408 12.397 1.4 11.218 1.4 7.667s.008-4.73.037-5.36c.015-.327.07-.503.116-.62.06-.155.13-.265.246-.38.115-.116.226-.186.38-.246.117-.046.293-.1.62-.116.63-.03 1.81-.037 5.36-.037zm0 2.3a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 1.4a2.6 2.6 0 1 1 0 5.2 2.6 2.6 0 0 1 0-5.2zm4.167-.8a.933.933 0 1 0 0 1.866.933.933 0 0 0 0-1.866z"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    const handlePageHide = () => {
      const currentStored = window.localStorage.getItem("visitorCount");
      const current = currentStored ? Number(currentStored) : 0;
      const safeCurrent = Number.isFinite(current) ? current : 0;
      window.localStorage.setItem("visitorCount", String(safeCurrent + 1));
    };

    window.addEventListener("pagehide", handlePageHide);
    return () => window.removeEventListener("pagehide", handlePageHide);
  }, []);

  return (
    <footer className="border-t border-blue-700/50 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 text-blue-100 gradient-motion">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <img
            src={logoSrc}
            alt="Programmik logo"
            width={40}
            height={40}
            className="h-10 w-10 rounded-2xl bg-white/90 p-1 object-contain shadow-lg shadow-blue-900/30"
            loading="lazy"
            decoding="async"
          />
          <div>
            <p className="text-sm font-semibold text-white">{t.site.name}</p>
            <p className="text-xs text-blue-200">{t.site.footerTagline}</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-200">
          {t.nav.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/solutions"
            className="rounded-full px-3 py-2 transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
          >
            {solutionsLabel}
          </Link>
          <Link
            href="/rfp"
            className="rounded-full px-3 py-2 transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
          >
            {rfpLabel}
          </Link>
          <Link
            href="/insights"
            className="rounded-full px-3 py-2 transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
          >
            {insightsLabel}
          </Link>
          <Link
            href="/trust"
            className="rounded-full px-3 py-2 transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
          >
            {trustLabel}
          </Link>
        </div>

        <div className="flex flex-col gap-4 text-xs text-blue-200 lg:items-end">
          <div className="space-y-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-300">
              {t.site.addressLabel}
            </p>
            <p className="text-sm font-semibold text-white">{t.site.address}</p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-300">
              {t.site.socialLabel}
            </span>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  title={link.label}
                  className="hover-card flex h-10 w-10 items-center justify-center rounded-full border border-blue-500/40 bg-blue-900/50 text-blue-100 transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-white"
                >
                  <span className="h-4 w-4">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 rounded-2xl border border-blue-500/40 bg-blue-900/50 px-4 py-2">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-300">
              {t.site.visitorsLabel}
            </span>
            <span className="dir-ltr text-sm font-semibold text-white">{visitorCount}</span>
          </div>

          <div className="text-xs text-blue-300">
            {year} {t.site.name}. {t.site.rights}
          </div>
        </div>
      </div>
    </footer>
  );
}

