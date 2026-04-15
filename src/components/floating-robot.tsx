"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";

export default function FloatingRobot() {
  const { t } = useLanguage();
  const isRtl = t.dir === "rtl";
  const isDev = process.env.NODE_ENV === "development";
  const label = isRtl ? "مساعد رقمي" : "Digital assistant";
  const cta = isRtl ? "ابدأ محادثة سريعة" : "Start a quick chat";

  const className = [
    "robot-guide",
    isRtl ? "robot-guide-rtl" : "",
    isDev ? "robot-guide-dev-offset" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Link href="/contact" aria-label={cta} className={className}>
      <span className="robot-guide__halo" aria-hidden="true" />
      <span className="robot-guide__body" aria-hidden="true">
        <svg viewBox="0 0 64 64" className="h-9 w-9">
          <defs>
            <linearGradient id="robotShell" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e6f6f2" />
              <stop offset="100%" stopColor="#9ec8b9" />
            </linearGradient>
          </defs>
          <line
            x1="32"
            y1="8"
            x2="32"
            y2="16"
            stroke="#0b3b4c"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="32" cy="7" r="4" fill="#5c8374" />
          <rect
            x="12"
            y="16"
            width="40"
            height="32"
            rx="12"
            fill="url(#robotShell)"
            stroke="#0b3b4c"
            strokeWidth="2.5"
          />
          <circle
            className="robot-guide__eye"
            cx="24"
            cy="30"
            r="3.5"
            fill="#0b3b4c"
          />
          <circle
            className="robot-guide__eye"
            cx="40"
            cy="30"
            r="3.5"
            fill="#0b3b4c"
          />
          <rect x="24" y="38" width="16" height="4" rx="2" fill="#0b3b4c" />
          <rect
            x="20"
            y="49"
            width="24"
            height="7"
            rx="3.5"
            fill="#5c8374"
            opacity="0.95"
          />
        </svg>
      </span>
      <span className="robot-guide__bubble">{label}</span>
    </Link>
  );
}

