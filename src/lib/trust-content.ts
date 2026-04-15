import type { Language } from "@/lib/translations";

type LocalizedText = Record<Language, string>;

export type TrustItem = {
  title: LocalizedText;
  description: LocalizedText;
  bullets: LocalizedText[];
};

export const trustHighlights: TrustItem[] = [
  {
    title: { en: "Service Level Agreement (SLA)", ar: "اتفاقية مستوى الخدمة (SLA)" },
    description: {
      en: "Clear uptime objectives, escalation paths, and accountability across support levels.",
      ar: "أهداف جاهزية واضحة ومسارات تصعيد ومحاسبة دقيقة عبر مستويات الدعم.",
    },
    bullets: [
      { en: "Target uptime commitment: 99.9%", ar: "التزام جاهزية مستهدف: 99.9%" },
      { en: "P1 incident escalation within 30 minutes", ar: "تصعيد حوادث P1 خلال 30 دقيقة" },
      { en: "Monthly SLA report and trend review", ar: "تقرير SLA شهري ومراجعة الاتجاهات" },
    ],
  },
  {
    title: { en: "Security Practices", ar: "ممارسات الأمان" },
    description: {
      en: "Security-by-design controls embedded in architecture, deployment, and operations.",
      ar: "ضوابط أمنية مدمجة في المعمارية والنشر والتشغيل من البداية.",
    },
    bullets: [
      { en: "Role-based access and least-privilege model", ar: "صلاحيات حسب الدور ومبدأ الحد الأدنى" },
      { en: "Secrets management and key rotation", ar: "إدارة الأسرار وتدوير المفاتيح" },
      { en: "Audit logs for critical system actions", ar: "سجلات تدقيق للإجراءات الحساسة" },
    ],
  },
  {
    title: { en: "Maintenance Plans", ar: "خطط الصيانة" },
    description: {
      en: "Structured maintenance cycles to keep systems healthy, updated, and resilient.",
      ar: "دورات صيانة منظمة للحفاظ على صحة النظام وتحديثه واستقراره.",
    },
    bullets: [
      { en: "Weekly patching and dependency updates", ar: "تحديثات أسبوعية للترقيعات والاعتماديات" },
      { en: "Quarterly architecture and performance audit", ar: "تدقيق معماري وأداء كل ربع سنة" },
      { en: "Preventive checks with rollback readiness", ar: "فحوصات استباقية مع جاهزية التراجع" },
    ],
  },
  {
    title: { en: "Support Response Times", ar: "أزمنة الاستجابة للدعم" },
    description: {
      en: "Response windows aligned with incident severity and operational impact.",
      ar: "نوافذ استجابة مرتبطة بشدة الحادث وتأثيره التشغيلي.",
    },
    bullets: [
      { en: "P1 (critical): 30-60 minutes", ar: "P1 (حرج): من 30 إلى 60 دقيقة" },
      { en: "P2 (high): within 4 business hours", ar: "P2 (عالٍ): خلال 4 ساعات عمل" },
      { en: "P3/P4: same day or next business day", ar: "P3/P4: في نفس اليوم أو يوم العمل التالي" },
    ],
  },
];

export const trustPageCopy = {
  eyebrow: { en: "Trust and Reliability", ar: "الثقة والاعتمادية" },
  title: {
    en: "Operational trust built into every delivery model.",
    ar: "ثقة تشغيلية مدمجة في كل نموذج تنفيذ.",
  },
  description: {
    en: "Our trust framework combines SLA commitments, security controls, maintenance discipline, and clear response policies.",
    ar: "إطار الثقة لدينا يجمع التزامات SLA وضوابط الأمان وانضباط الصيانة وسياسات استجابة واضحة.",
  },
  tiersTitle: { en: "Support Tiers", ar: "مستويات الدعم" },
  tiers: [
    {
      name: { en: "Essential", ar: "أساسي" },
      response: { en: "Business hours", ar: "ساعات العمل" },
      fit: {
        en: "For stable products needing routine maintenance.",
        ar: "للمنتجات المستقرة التي تحتاج صيانة دورية.",
      },
    },
    {
      name: { en: "Growth", ar: "نمو" },
      response: { en: "Extended coverage", ar: "تغطية موسعة" },
      fit: {
        en: "For products with regular releases and active roadmaps.",
        ar: "للمنتجات ذات الإصدارات المنتظمة وخارطة طريق نشطة.",
      },
    },
    {
      name: { en: "Mission Critical", ar: "حرج تشغيليًا" },
      response: { en: "24/7 critical response", ar: "استجابة حرجة 24/7" },
      fit: {
        en: "For high-impact platforms requiring strict uptime governance.",
        ar: "للمنصات عالية التأثير التي تحتاج حوكمة جاهزية صارمة.",
      },
    },
  ],
};

export function getLocalizedTrustText(
  text: LocalizedText,
  language: Language
): string {
  return text[language];
}
