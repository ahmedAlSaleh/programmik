"use client";

import Link from "next/link";
import RfpWizard from "@/components/rfp-wizard";
import { useLanguage } from "@/components/language-provider";
import { BOOKING_URL } from "@/lib/lead-config";

const copy = {
  en: {
    eyebrow: "Request for Proposal",
    title: "Plan your project with a structured multi-step RFP.",
    description:
      "Share your business goals, scope, and timeline. We will return with a practical delivery model, team setup, and pricing direction.",
    quickBook: "Need a faster path? Book a call now.",
    bookCall: "Book Appointment",
    solutions: "Solutions",
  },
  ar: {
    eyebrow: "طلب عرض سعر",
    title: "خطط مشروعك عبر نموذج RFP متعدد الخطوات.",
    description:
      "شارك أهدافك ونطاق المشروع والجدول الزمني، وسنعود لك بنموذج تنفيذ عملي وتشكيل فريق واتجاه تسعير مناسب.",
    quickBook: "تريد مسارًا أسرع؟ احجز مكالمة مباشرة.",
    bookCall: "حجز موعد",
    solutions: "الحلول",
  },
} as const;

export default function RfpPage() {
  const { language } = useLanguage();
  const text = copy[language];

  return (
    <div className="bg-transparent">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 text-white gradient-motion">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="parallax-soft absolute -top-28 right-0 h-80 w-80 rounded-full bg-blue-700/40 blur-3xl" />
          <div className="parallax-deep absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-500/30 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-16 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
              {text.eyebrow}
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {text.title}
            </h1>
            <p className="text-lg text-blue-100">{text.description}</p>
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-sm text-blue-100">{text.quickBook}</p>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noreferrer"
                className="hover-card inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-700 transition hover:-translate-y-0.5 hover:bg-blue-50"
              >
                {text.bookCall}
              </a>
              <Link
                href="/solutions"
                className="hover-card inline-flex items-center justify-center rounded-full border border-blue-200/60 px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-100 transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                {text.solutions}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <RfpWizard />
        </div>
      </section>
    </div>
  );
}
