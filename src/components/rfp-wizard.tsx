"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { BOOKING_URL, CONTACT_EMAIL, WHATSAPP_PHONE } from "@/lib/lead-config";

type FormState = {
  fullName: string;
  workEmail: string;
  company: string;
  website: string;
  projectType: string;
  sector: string;
  budget: string;
  timeline: string;
  projectSummary: string;
  mustHaveFeatures: string;
  integrations: string;
  compliance: string;
  teamSize: string;
  services: string[];
  preferredDate: string;
  preferredTime: string;
};

const INITIAL_FORM: FormState = {
  fullName: "",
  workEmail: "",
  company: "",
  website: "",
  projectType: "",
  sector: "",
  budget: "",
  timeline: "",
  projectSummary: "",
  mustHaveFeatures: "",
  integrations: "",
  compliance: "",
  teamSize: "",
  services: [],
  preferredDate: "",
  preferredTime: "",
};

const copy = {
  en: {
    steps: ["Company", "Project", "Requirements", "Review"],
    stepLabels: {
      company: "Company Information",
      project: "Project Context",
      requirements: "Requirements and Scope",
      review: "Review and Submit",
    },
    fields: {
      fullName: "Full Name",
      workEmail: "Work Email",
      company: "Company",
      website: "Website",
      projectType: "Project Type",
      sector: "Sector",
      budget: "Estimated Budget",
      timeline: "Target Timeline",
      projectSummary: "Project Summary",
      mustHaveFeatures: "Must-have Features",
      integrations: "Integrations Needed",
      compliance: "Compliance / Security Notes",
      teamSize: "Internal Team Size",
      preferredDate: "Preferred Meeting Date",
      preferredTime: "Preferred Meeting Time",
      services: "Services Needed",
    },
    placeholders: {
      projectSummary: "What are you building and why now?",
      mustHaveFeatures: "List key workflows or modules.",
      integrations: "Payment, ERP, CRM, EHR, analytics, etc.",
      compliance: "Data privacy, audit, access controls, certifications.",
    },
    options: {
      projectType: [
        "New Product Build",
        "Platform Redesign",
        "Modernization",
        "Growth and Optimization",
      ],
      sector: ["Healthcare", "E-commerce", "SaaS", "Fintech", "Other"],
      budget: [
        "Below $15,000",
        "$15,000 - $40,000",
        "$40,000 - $80,000",
        "$80,000+",
      ],
      timeline: [
        "ASAP (0-1 month)",
        "1-3 months",
        "3-6 months",
        "Flexible / Discovery first",
      ],
      teamSize: ["1-5", "6-15", "16-40", "40+"],
      services: [
        "Product Strategy",
        "UI/UX Design",
        "Full-stack Development",
        "QA and Launch",
        "Support and Growth",
      ],
    },
    actions: {
      back: "Back",
      next: "Next Step",
      sendEmail: "Send via Email",
      sendWhatsApp: "Send via WhatsApp",
      bookCall: "Book Discovery Call",
      copySummary: "Copy Summary",
    },
    notes: {
      sectionHint:
        "This form helps us estimate scope, timeline, and the right delivery model.",
      summaryTitle: "Proposal Summary",
      qualification: "Lead Qualification",
      high: "High Priority",
      medium: "Good Fit",
      low: "Needs Discovery",
      success: "Summary copied to clipboard.",
      privacy:
        "By submitting, you agree that we can contact you regarding this proposal request.",
      required: "Please complete required fields before continuing.",
    },
    required: ["Full name", "work email", "company"],
  },
  ar: {
    steps: ["الشركة", "المشروع", "المتطلبات", "المراجعة"],
    stepLabels: {
      company: "بيانات الشركة",
      project: "سياق المشروع",
      requirements: "المتطلبات والنطاق",
      review: "مراجعة وإرسال",
    },
    fields: {
      fullName: "الاسم الكامل",
      workEmail: "البريد الإلكتروني للعمل",
      company: "الشركة",
      website: "الموقع الإلكتروني",
      projectType: "نوع المشروع",
      sector: "القطاع",
      budget: "الميزانية المتوقعة",
      timeline: "الإطار الزمني المستهدف",
      projectSummary: "ملخص المشروع",
      mustHaveFeatures: "الميزات الأساسية المطلوبة",
      integrations: "التكاملات المطلوبة",
      compliance: "ملاحظات الامتثال والأمان",
      teamSize: "حجم الفريق الداخلي",
      preferredDate: "التاريخ المفضل للاجتماع",
      preferredTime: "الوقت المفضل للاجتماع",
      services: "الخدمات المطلوبة",
    },
    placeholders: {
      projectSummary: "ماذا تريد أن تبني ولماذا الآن؟",
      mustHaveFeatures: "اذكر أهم التدفقات أو الوحدات.",
      integrations: "دفع، ERP، CRM، EHR، تحليلات، وغيرها.",
      compliance: "خصوصية البيانات، التدقيق، الصلاحيات، الشهادات.",
    },
    options: {
      projectType: [
        "بناء منتج جديد",
        "إعادة تصميم منصة",
        "تحديث المنظومة الحالية",
        "نمو وتحسين مستمر",
      ],
      sector: [
        "الرعاية الصحية",
        "التجارة الإلكترونية",
        "SaaS",
        "التقنية المالية",
        "قطاع آخر",
      ],
      budget: [
        "أقل من 15,000 دولار",
        "15,000 - 40,000 دولار",
        "40,000 - 80,000 دولار",
        "أكثر من 80,000 دولار",
      ],
      timeline: [
        "بأسرع وقت (0-1 شهر)",
        "1-3 أشهر",
        "3-6 أشهر",
        "مرن / اكتشاف أولًا",
      ],
      teamSize: ["1-5", "6-15", "16-40", "40+"],
      services: [
        "استراتيجية المنتج",
        "تصميم UI/UX",
        "تطوير شامل",
        "الاختبار والإطلاق",
        "الدعم والنمو",
      ],
    },
    actions: {
      back: "السابق",
      next: "الخطوة التالية",
      sendEmail: "إرسال عبر البريد",
      sendWhatsApp: "إرسال عبر واتساب",
      bookCall: "حجز مكالمة اكتشاف",
      copySummary: "نسخ الملخص",
    },
    notes: {
      sectionHint:
        "هذا النموذج يساعدنا في تقدير النطاق والزمن ونموذج التنفيذ المناسب.",
      summaryTitle: "ملخص الطلب",
      qualification: "تقييم الجاهزية",
      high: "أولوية عالية",
      medium: "ملاءمة جيدة",
      low: "يحتاج جلسة اكتشاف",
      success: "تم نسخ الملخص.",
      privacy:
        "بإرسال الطلب، أنت توافق على تواصلنا معك بخصوص هذا العرض.",
      required: "يرجى إكمال الحقول المطلوبة قبل المتابعة.",
    },
    required: ["الاسم الكامل", "البريد الإلكتروني للعمل", "الشركة"],
  },
} as const;

function calculateLeadScore(form: FormState): number {
  let score = 0;

  if (form.budget.includes("80") || form.budget.includes("80,000")) {
    score += 3;
  } else if (form.budget.includes("40")) {
    score += 2;
  } else if (form.budget) {
    score += 1;
  }

  if (form.timeline.includes("0-1") || form.timeline.includes("ASAP")) {
    score += 3;
  } else if (form.timeline.includes("1-3")) {
    score += 2;
  } else if (form.timeline) {
    score += 1;
  }

  if (form.services.length >= 3) {
    score += 2;
  } else if (form.services.length > 0) {
    score += 1;
  }

  if (form.projectSummary.trim().length >= 40) {
    score += 1;
  }

  return score;
}

function fieldValueLabel(
  label: string,
  value: string | string[] | undefined
): string {
  if (!value || (Array.isArray(value) && value.length === 0)) {
    return `${label}: -`;
  }

  if (Array.isArray(value)) {
    return `${label}: ${value.join(", ")}`;
  }

  return `${label}: ${value}`;
}

export default function RfpWizard() {
  const { language } = useLanguage();
  const text = copy[language];
  const [step, setStep] = useState(0);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState<FormState>(INITIAL_FORM);

  const leadScore = useMemo(() => calculateLeadScore(form), [form]);

  const qualification =
    leadScore >= 7
      ? text.notes.high
      : leadScore >= 4
      ? text.notes.medium
      : text.notes.low;

  const summary = useMemo(() => {
    const lines = [
      "RFP Request",
      "-----------",
      fieldValueLabel(text.fields.fullName, form.fullName),
      fieldValueLabel(text.fields.workEmail, form.workEmail),
      fieldValueLabel(text.fields.company, form.company),
      fieldValueLabel(text.fields.website, form.website),
      fieldValueLabel(text.fields.projectType, form.projectType),
      fieldValueLabel(text.fields.sector, form.sector),
      fieldValueLabel(text.fields.budget, form.budget),
      fieldValueLabel(text.fields.timeline, form.timeline),
      fieldValueLabel(text.fields.teamSize, form.teamSize),
      fieldValueLabel(text.fields.services, form.services),
      fieldValueLabel(text.fields.projectSummary, form.projectSummary),
      fieldValueLabel(text.fields.mustHaveFeatures, form.mustHaveFeatures),
      fieldValueLabel(text.fields.integrations, form.integrations),
      fieldValueLabel(text.fields.compliance, form.compliance),
      fieldValueLabel(text.fields.preferredDate, form.preferredDate),
      fieldValueLabel(text.fields.preferredTime, form.preferredTime),
      `${text.notes.qualification}: ${qualification}`,
    ];

    return lines.join("\n");
  }, [form, qualification, text]);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function toggleService(value: string) {
    setForm((prev) => {
      const exists = prev.services.includes(value);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((item) => item !== value)
          : [...prev.services, value],
      };
    });
  }

  function validateCurrentStep() {
    if (step === 0) {
      if (!form.fullName.trim() || !form.workEmail.trim() || !form.company.trim()) {
        setError(text.notes.required);
        return false;
      }
    }

    if (step === 1) {
      if (
        !form.projectType ||
        !form.sector ||
        !form.budget ||
        !form.timeline ||
        !form.projectSummary.trim()
      ) {
        setError(text.notes.required);
        return false;
      }
    }

    if (step === 2) {
      if (form.services.length === 0 || !form.mustHaveFeatures.trim()) {
        setError(text.notes.required);
        return false;
      }
    }

    setError("");
    return true;
  }

  function goNext() {
    if (!validateCurrentStep()) {
      return;
    }
    setStep((prev) => Math.min(prev + 1, 3));
  }

  function goBack() {
    setError("");
    setStep((prev) => Math.max(prev - 1, 0));
  }

  function sendByEmail() {
    const subject = language === "ar" ? "طلب عرض سعر (RFP)" : "RFP Request";
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(summary)}`;
  }

  function sendByWhatsApp() {
    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
      summary
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  async function copySummary() {
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap gap-2">
          {text.steps.map((stepLabel, index) => {
            const isActive = index === step;
            const isDone = index < step;

            return (
              <div
                key={stepLabel}
                className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : isDone
                    ? "bg-blue-100 text-blue-700"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                {String(index + 1).padStart(2, "0")} {stepLabel}
              </div>
            );
          })}
        </div>
      </div>

      <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
          {step === 0
            ? text.stepLabels.company
            : step === 1
            ? text.stepLabels.project
            : step === 2
            ? text.stepLabels.requirements
            : text.stepLabels.review}
        </p>
        <p className="mt-2 text-sm text-slate-600">{text.notes.sectionHint}</p>

        {step === 0 && (
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                {text.fields.fullName}
              </label>
              <input
                value={form.fullName}
                onChange={(event) => updateField("fullName", event.target.value)}
                className="w-full rounded-2xl border border-blue-100 bg-blue-50/40 px-4 py-3 text-sm text-slate-900 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                {text.fields.workEmail}
              </label>
              <input
                value={form.workEmail}
                onChange={(event) => updateField("workEmail", event.target.value)}
                dir="ltr"
                className="dir-ltr w-full rounded-2xl border border-blue-100 bg-blue-50/40 px-4 py-3 text-sm text-slate-900 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                {text.fields.company}
              </label>
              <input
                value={form.company}
                onChange={(event) => updateField("company", event.target.value)}
                className="w-full rounded-2xl border border-blue-100 bg-blue-50/40 px-4 py-3 text-sm text-slate-900 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                {text.fields.website}
              </label>
              <input
                value={form.website}
                onChange={(event) => updateField("website", event.target.value)}
                dir="ltr"
                className="dir-ltr w-full rounded-2xl border border-blue-100 bg-blue-50/40 px-4 py-3 text-sm text-slate-900 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                {text.fields.projectType}
              </label>
              <select
                value={form.projectType}
                onChange={(event) => updateField("projectType", event.target.value)}
                className="w-full rounded-2xl border border-blue-100 bg-blue-50/40 px-4 py-3 text-sm text-slate-900 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
              >
                <option value="" />
                {text.options.projectType.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                {text.fields.sector}
              </label>
              <select
                value={form.sector}
                onChange={(event) => updateField("sector", event.target.value)}
                className="w-full rounded-2xl border border-blue-100 bg-blue-50/40 px-4 py-3 text-sm text-slate-900 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
              >
                <option value="" />
                {text.options.sector.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                {text.fields.budget}
              </label>
              <select
                value={form.budget}
                onChange={(event) => updateField("budget", event.target.value)}
                className="w-full rounded-2xl border border-blue-100 bg-blue-50/40 px-4 py-3 text-sm text-slate-900 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
              >
                <option value="" />
                {text.options.budget.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                {text.fields.timeline}
              </label>
              <select
                value={form.timeline}
                onChange={(event) => updateField("timeline", event.target.value)}
                className="w-full rounded-2xl border border-blue-100 bg-blue-50/40 px-4 py-3 text-sm text-slate-900 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
              >
                <option value="" />
                {text.options.timeline.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                {text.fields.projectSummary}
              </label>
              <textarea
                value={form.projectSummary}
                onChange={(event) =>
                  updateField("projectSummary", event.target.value)
                }
                rows={4}
                placeholder={text.placeholders.projectSummary}
                className="w-full rounded-2xl border border-blue-100 bg-blue-50/40 px-4 py-3 text-sm text-slate-900 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="mt-6 space-y-5">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                {text.fields.services}
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {text.options.services.map((service) => {
                  const active = form.services.includes(service);

                  return (
                    <button
                      key={service}
                      type="button"
                      onClick={() => toggleService(service)}
                      className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition ${
                        active
                          ? "border-blue-500 bg-blue-50 text-blue-800"
                          : "border-blue-100 bg-white text-slate-600 hover:border-blue-300"
                      }`}
                    >
                      {service}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                  {text.fields.mustHaveFeatures}
                </label>
                <textarea
                  rows={3}
                  value={form.mustHaveFeatures}
                  onChange={(event) =>
                    updateField("mustHaveFeatures", event.target.value)
                  }
                  placeholder={text.placeholders.mustHaveFeatures}
                  className="w-full rounded-2xl border border-blue-100 bg-blue-50/40 px-4 py-3 text-sm text-slate-900 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                  {text.fields.integrations}
                </label>
                <textarea
                  rows={3}
                  value={form.integrations}
                  onChange={(event) => updateField("integrations", event.target.value)}
                  placeholder={text.placeholders.integrations}
                  className="w-full rounded-2xl border border-blue-100 bg-blue-50/40 px-4 py-3 text-sm text-slate-900 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                  {text.fields.compliance}
                </label>
                <textarea
                  rows={3}
                  value={form.compliance}
                  onChange={(event) => updateField("compliance", event.target.value)}
                  placeholder={text.placeholders.compliance}
                  className="w-full rounded-2xl border border-blue-100 bg-blue-50/40 px-4 py-3 text-sm text-slate-900 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                  {text.fields.teamSize}
                </label>
                <select
                  value={form.teamSize}
                  onChange={(event) => updateField("teamSize", event.target.value)}
                  className="w-full rounded-2xl border border-blue-100 bg-blue-50/40 px-4 py-3 text-sm text-slate-900 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
                >
                  <option value="" />
                  {text.options.teamSize.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                  {text.fields.preferredDate}
                </label>
                <input
                  type="date"
                  value={form.preferredDate}
                  onChange={(event) => updateField("preferredDate", event.target.value)}
                  className="w-full rounded-2xl border border-blue-100 bg-blue-50/40 px-4 py-3 text-sm text-slate-900 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                  {text.fields.preferredTime}
                </label>
                <input
                  type="time"
                  value={form.preferredTime}
                  onChange={(event) => updateField("preferredTime", event.target.value)}
                  className="w-full rounded-2xl border border-blue-100 bg-blue-50/40 px-4 py-3 text-sm text-slate-900 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="mt-6 space-y-5">
            <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
                {text.notes.qualification}
              </p>
              <p className="mt-2 text-base font-semibold text-slate-900">
                {qualification}
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
                {text.notes.summaryTitle}
              </p>
              <pre className="mt-3 whitespace-pre-wrap text-sm text-slate-700">
                {summary}
              </pre>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={sendByEmail}
                className="hover-card inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-500"
              >
                {text.actions.sendEmail}
              </button>
              <button
                type="button"
                onClick={sendByWhatsApp}
                className="hover-card inline-flex items-center justify-center rounded-full border border-blue-300 bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:-translate-y-0.5 hover:bg-blue-50"
              >
                {text.actions.sendWhatsApp}
              </button>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noreferrer"
                className="hover-card inline-flex items-center justify-center rounded-full border border-blue-300 bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:-translate-y-0.5 hover:bg-blue-50"
              >
                {text.actions.bookCall}
              </a>
              <button
                type="button"
                onClick={copySummary}
                className="hover-card inline-flex items-center justify-center rounded-full border border-blue-300 bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:-translate-y-0.5 hover:bg-blue-50"
              >
                {text.actions.copySummary}
              </button>
            </div>

            {copied && <p className="text-sm text-emerald-700">{text.notes.success}</p>}
          </div>
        )}

        {error && <p className="mt-5 text-sm font-semibold text-red-600">{error}</p>}
        <p className="mt-4 text-xs text-slate-500">{text.notes.privacy}</p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={goBack}
            disabled={step === 0}
            className="hover-card inline-flex items-center justify-center rounded-full border border-blue-200 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-700 transition hover:-translate-y-0.5 hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {text.actions.back}
          </button>
          {step < 3 && (
            <button
              type="button"
              onClick={goNext}
              className="hover-card inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:-translate-y-0.5 hover:bg-blue-500"
            >
              {text.actions.next}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
