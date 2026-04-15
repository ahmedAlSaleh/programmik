"use client";

import { useLanguage } from "@/components/language-provider";

const WHATSAPP_URL = "https://wa.me/message/MSMUOD77GMDXK1";

export default function FloatingWhatsApp() {
  const { t } = useLanguage();
  const isRtl = t.dir === "rtl";
  const isDev = process.env.NODE_ENV === "development";
  const fabClass = [
    "whatsapp-fab",
    isRtl ? "whatsapp-fab-rtl" : "",
    isDev ? "whatsapp-fab-dev-offset" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label={t.site.socialLinks.whatsapp}
      title={t.site.socialLinks.whatsapp}
      className={fabClass}
    >
      <span className="whatsapp-fab__ring" aria-hidden="true" />
      <span className="whatsapp-fab__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" className="h-5 w-5">
          <path
            d="M12.04 2.015c-5.514 0-9.992 4.477-9.992 9.99 0 1.76.46 3.44 1.335 4.93L2 22l5.196-1.363a9.95 9.95 0 0 0 4.843 1.24h.001c5.514 0 9.99-4.477 9.99-9.99 0-5.514-4.477-9.992-9.99-9.992zm0 18.33a8.33 8.33 0 0 1-4.247-1.17l-.305-.18-3.08.807.824-2.998-.2-.309a8.322 8.322 0 1 1 7.008 3.85zm4.57-6.237c-.25-.125-1.477-.73-1.705-.814-.227-.083-.393-.125-.56.125-.166.25-.64.814-.785.98-.145.166-.29.187-.54.062-.25-.125-1.055-.39-2.01-1.243-.744-.663-1.246-1.48-1.39-1.73-.145-.25-.015-.385.11-.51.112-.11.25-.29.375-.435.125-.146.166-.25.25-.416.083-.166.042-.312-.02-.437-.063-.125-.56-1.35-.77-1.85-.202-.487-.408-.42-.56-.428l-.48-.01c-.166 0-.437.062-.665.312-.23.25-.874.854-.874 2.083 0 1.228.894 2.416 1.02 2.583.125.166 1.76 2.69 4.27 3.77.596.257 1.06.41 1.42.526.596.19 1.137.163 1.566.1.478-.07 1.477-.6 1.686-1.18.207-.58.207-1.077.145-1.18-.062-.104-.227-.166-.476-.29z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span className="whatsapp-fab__text">{t.site.socialLinks.whatsapp}</span>
    </a>
  );
}
