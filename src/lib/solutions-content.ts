import type { Language } from "@/lib/translations";

type LocalizedText = Record<Language, string>;

export type SolutionDetail = {
  slug: string;
  title: LocalizedText;
  subtitle: LocalizedText;
  overview: LocalizedText;
  challenges: LocalizedText[];
  solutionBlueprint: LocalizedText[];
  architectureHighlights: LocalizedText[];
  complianceAndSecurity: LocalizedText[];
  businessOutcomes: LocalizedText[];
  engagementModel: LocalizedText;
};

export const solutionsCatalog: SolutionDetail[] = [
  {
    slug: "healthcare",
    title: { en: "Healthcare Solutions", ar: "حلول الرعاية الصحية" },
    subtitle: {
      en: "Digital products for clinics, hospitals, and patient-facing services.",
      ar: "منتجات رقمية للعيادات والمشافي والخدمات الموجهة للمرضى.",
    },
    overview: {
      en: "We build secure healthcare platforms that improve patient journeys, reduce operational overhead, and keep clinical data protected.",
      ar: "نبني منصات صحية آمنة تحسن رحلة المريض وتقلل العبء التشغيلي وتحافظ على سرية البيانات الطبية.",
    },
    challenges: [
      {
        en: "Fragmented patient records across multiple systems.",
        ar: "تشتت سجلات المرضى عبر أنظمة متعددة.",
      },
      {
        en: "Slow appointment and triage workflows.",
        ar: "بطء سير العمل في المواعيد والفرز الطبي.",
      },
      {
        en: "Strict privacy and compliance requirements.",
        ar: "متطلبات صارمة للخصوصية والامتثال.",
      },
    ],
    solutionBlueprint: [
      {
        en: "Patient portal with appointment booking and care plan visibility.",
        ar: "بوابة مرضى مع حجز المواعيد وإظهار خطة الرعاية.",
      },
      {
        en: "Operational dashboard for staff, triage, and queue management.",
        ar: "لوحة تشغيل للطاقم الطبي وإدارة الفرز والطوابير.",
      },
      {
        en: "Secure API integrations with labs, insurance, and EHR systems.",
        ar: "تكاملات API آمنة مع المختبرات والتأمين وأنظمة السجل الصحي.",
      },
    ],
    architectureHighlights: [
      {
        en: "Next.js frontend with role-based access and secure session handling.",
        ar: "واجهة Next.js مع صلاحيات حسب الدور وإدارة جلسات آمنة.",
      },
      {
        en: "API layer with audit logging and validation controls.",
        ar: "طبقة API مع سجلات تدقيق وضوابط تحقق.",
      },
      {
        en: "Encrypted data storage and backup policy with recovery drills.",
        ar: "تخزين مشفر للبيانات وسياسة نسخ احتياطي مع اختبارات استعادة.",
      },
    ],
    complianceAndSecurity: [
      { en: "Least-privilege access model", ar: "نموذج صلاحيات الحد الأدنى" },
      { en: "Audit trail for clinical actions", ar: "سجل تدقيق للإجراءات السريرية" },
      { en: "Encryption in transit and at rest", ar: "تشفير أثناء النقل وفي التخزين" },
    ],
    businessOutcomes: [
      { en: "Faster appointment handling", ar: "تسريع إدارة المواعيد" },
      { en: "Lower administrative workload", ar: "تقليل العبء الإداري" },
      { en: "Higher patient satisfaction and retention", ar: "رفع رضا المرضى والاحتفاظ بهم" },
    ],
    engagementModel: {
      en: "Best delivered as phased rollout: pilot clinic, operational tuning, then organization-wide expansion.",
      ar: "يفضل تنفيذه على مراحل: عيادة تجريبية، ثم ضبط التشغيل، ثم تعميم على كامل المؤسسة.",
    },
  },
  {
    slug: "ecommerce",
    title: { en: "E-commerce Solutions", ar: "حلول التجارة الإلكترونية" },
    subtitle: {
      en: "Commerce platforms optimized for conversion, retention, and scale.",
      ar: "منصات تجارة إلكترونية محسنة للتحويل والاحتفاظ وقابلية التوسع.",
    },
    overview: {
      en: "We build storefronts and commerce backoffices that move fast during campaigns while keeping checkout reliable.",
      ar: "نبني واجهات متاجر وأنظمة تشغيل تجارة قادرة على الأداء السريع خلال الحملات مع ثبات في الدفع.",
    },
    challenges: [
      {
        en: "Low conversion due to slow storefront experience.",
        ar: "انخفاض التحويل بسبب بطء تجربة المتجر.",
      },
      {
        en: "Inventory and order data inconsistency across channels.",
        ar: "عدم اتساق بيانات المخزون والطلبات بين القنوات.",
      },
      {
        en: "High cart abandonment during checkout.",
        ar: "ارتفاع التخلي عن السلة أثناء الدفع.",
      },
    ],
    solutionBlueprint: [
      {
        en: "High-performance storefront with personalized product feeds.",
        ar: "واجهة متجر عالية الأداء مع تخصيص عرض المنتجات.",
      },
      {
        en: "Unified order orchestration and inventory sync.",
        ar: "تنسيق موحد للطلبات ومزامنة للمخزون.",
      },
      {
        en: "Checkout optimization with payment and fraud controls.",
        ar: "تحسين مسار الدفع مع ضوابط المدفوعات ومنع الاحتيال.",
      },
    ],
    architectureHighlights: [
      {
        en: "Next.js rendering strategy for catalog speed and SEO.",
        ar: "استراتيجية عرض بـ Next.js لسرعة الكتالوج ونتائج SEO.",
      },
      {
        en: "API integrations with ERP, payment gateways, and shipping providers.",
        ar: "تكاملات API مع ERP وبوابات الدفع وشركات الشحن.",
      },
      {
        en: "Event-driven workflows for order status updates.",
        ar: "تدفقات عمل قائمة على الأحداث لتحديثات حالة الطلب.",
      },
    ],
    complianceAndSecurity: [
      { en: "Secure payment tokenization", ar: "ترميز آمن لبيانات الدفع" },
      { en: "Fraud monitoring signals", ar: "إشارات مراقبة الاحتيال" },
      { en: "Access and change audit logs", ar: "سجلات تدقيق للوصول والتغييرات" },
    ],
    businessOutcomes: [
      { en: "Higher checkout completion", ar: "رفع معدل إتمام الدفع" },
      { en: "Better campaign resilience", ar: "تحمل أفضل لأحمال الحملات" },
      { en: "Improved repeat purchase rate", ar: "زيادة معدل الشراء المتكرر" },
    ],
    engagementModel: {
      en: "Best delivered with a growth roadmap: conversion baseline, sprint experiments, and retention loops.",
      ar: "يفضل تنفيذه بخارطة نمو: خط أساس للتحويل، تجارب سبرنت، وحلقات احتفاظ.",
    },
  },
  {
    slug: "saas",
    title: { en: "SaaS Solutions", ar: "حلول SaaS" },
    subtitle: {
      en: "Multi-tenant SaaS architecture for product-led growth teams.",
      ar: "معمارية SaaS متعددة المستأجرين لفرق النمو المعتمدة على المنتج.",
    },
    overview: {
      en: "We build SaaS products with scalable tenant isolation, subscription billing, and analytics-ready event tracking.",
      ar: "نبني منتجات SaaS مع عزل مستأجرين قابل للتوسع وفوترة اشتراكات وتتبع أحداث جاهز للتحليلات.",
    },
    challenges: [
      {
        en: "Onboarding friction and poor activation metrics.",
        ar: "صعوبة الإعداد الأولي وضعف مؤشرات التفعيل.",
      },
      {
        en: "Tenant data isolation and permission complexity.",
        ar: "تعقيد عزل بيانات المستأجرين والصلاحيات.",
      },
      {
        en: "Billing and plan transitions causing churn.",
        ar: "مشاكل الفوترة والتنقل بين الخطط مما يسبب فقدان العملاء.",
      },
    ],
    solutionBlueprint: [
      {
        en: "Guided onboarding flows with usage milestones.",
        ar: "تدفقات إعداد موجهة مع مراحل استخدام واضحة.",
      },
      {
        en: "Tenant-aware authorization and role policies.",
        ar: "نظام صلاحيات واعٍ بالمستأجر وسياسات أدوار دقيقة.",
      },
      {
        en: "Subscription lifecycle engine with upgrade/downgrade safety.",
        ar: "محرك دورة اشتراك يدعم الترقية والتخفيض بأمان.",
      },
    ],
    architectureHighlights: [
      {
        en: "Multi-tenant data model with clear boundary policies.",
        ar: "نموذج بيانات متعدد المستأجرين بحدود واضحة.",
      },
      {
        en: "API contracts for product modules and third-party integrations.",
        ar: "عقود API لوحدات المنتج والتكاملات الخارجية.",
      },
      {
        en: "Observability stack for activation, retention, and reliability.",
        ar: "منظومة مراقبة لمؤشرات التفعيل والاحتفاظ والاعتمادية.",
      },
    ],
    complianceAndSecurity: [
      { en: "Tenant-level RBAC", ar: "صلاحيات RBAC على مستوى المستأجر" },
      { en: "Secrets and key rotation practices", ar: "ممارسات إدارة الأسرار وتدوير المفاتيح" },
      { en: "Centralized audit and anomaly alerts", ar: "تدقيق مركزي وتنبيهات للأنماط غير الطبيعية" },
    ],
    businessOutcomes: [
      { en: "Faster time-to-value for new accounts", ar: "تسريع الوصول للقيمة للحسابات الجديدة" },
      { en: "Lower churn through better lifecycle flows", ar: "خفض معدل التسرب بتحسين دورة حياة العميل" },
      { en: "Stronger expansion revenue from plan upgrades", ar: "تعزيز إيرادات التوسع عبر ترقية الخطط" },
    ],
    engagementModel: {
      en: "Best delivered as an iterative product cycle with monthly release and KPI review.",
      ar: "يفضل تنفيذه كدورة منتج تكرارية مع إصدار شهري ومراجعة مؤشرات الأداء.",
    },
  },
];

export function getLocalizedSolutionText(
  text: LocalizedText,
  language: Language
): string {
  return text[language];
}

export function getSolutionBySlug(slug: string): SolutionDetail | undefined {
  return solutionsCatalog.find((solution) => solution.slug === slug);
}
