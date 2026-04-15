import type { Language } from "@/lib/translations";

type LocalizedText = Record<Language, string>;

type TimelinePhase = {
  phase: LocalizedText;
  duration: LocalizedText;
  description: LocalizedText;
};

type PricingModel = {
  model: LocalizedText;
  description: LocalizedText;
  fit: LocalizedText;
};

export type ServiceDetail = {
  slug: string;
  title: LocalizedText;
  subtitle: LocalizedText;
  overview: LocalizedText;
  scope: LocalizedText[];
  timeline: TimelinePhase[];
  deliverables: LocalizedText[];
  pricingModels: PricingModel[];
};

export type ArchitecturePillar = {
  title: LocalizedText;
  description: LocalizedText;
  stack: string[];
};

export const servicesCatalog: ServiceDetail[] = [
  {
    slug: "product-strategy",
    title: { en: "Product Strategy", ar: "استراتيجية المنتج" },
    subtitle: {
      en: "Turn business goals into a clear and buildable roadmap.",
      ar: "نحوّل أهداف العمل إلى خارطة طريق واضحة وقابلة للتنفيذ.",
    },
    overview: {
      en: "This track aligns founders, product owners, and engineering teams around the right priorities before code starts.",
      ar: "هذا المسار يوحّد المؤسسين وفريق المنتج والهندسة حول الأولويات الصحيحة قبل بدء التنفيذ.",
    },
    scope: [
      {
        en: "Product discovery workshops with stakeholders and target users.",
        ar: "ورش اكتشاف المنتج مع أصحاب المصلحة والمستخدمين المستهدفين.",
      },
      {
        en: "Prioritized feature map with business impact scoring.",
        ar: "خريطة ميزات مرتبة حسب الأولوية مع تقييم أثر الأعمال.",
      },
      {
        en: "Technical feasibility review and implementation risks.",
        ar: "مراجعة الجدوى التقنية ومخاطر التنفيذ.",
      },
      {
        en: "MVP definition with release milestones.",
        ar: "تحديد MVP مع مراحل إطلاق واضحة.",
      },
    ],
    timeline: [
      {
        phase: { en: "Discovery", ar: "الاكتشاف" },
        duration: { en: "Week 1", ar: "الأسبوع 1" },
        description: {
          en: "Interviews, goals alignment, and problem framing.",
          ar: "مقابلات ومواءمة الأهداف وصياغة المشكلة.",
        },
      },
      {
        phase: { en: "Mapping", ar: "رسم الخطة" },
        duration: { en: "Week 2", ar: "الأسبوع 2" },
        description: {
          en: "Define user journeys, feature clusters, and dependencies.",
          ar: "تحديد رحلات المستخدم وتجميع الميزات والاعتماديات.",
        },
      },
      {
        phase: { en: "Prioritization", ar: "تحديد الأولويات" },
        duration: { en: "Week 3", ar: "الأسبوع 3" },
        description: {
          en: "Impact/effort scoring with release planning.",
          ar: "تقييم الأثر مقابل الجهد مع تخطيط الإصدارات.",
        },
      },
      {
        phase: { en: "Planning", ar: "التخطيط" },
        duration: { en: "Week 4", ar: "الأسبوع 4" },
        description: {
          en: "Finalize roadmap, architecture direction, and KPIs.",
          ar: "اعتماد خارطة الطريق واتجاه المعمارية ومؤشرات الأداء.",
        },
      },
    ],
    deliverables: [
      { en: "Product brief and success metrics", ar: "ملف المنتج ومؤشرات النجاح" },
      { en: "Prioritized feature backlog", ar: "قائمة ميزات مرتبة بالأولوية" },
      { en: "Quarterly roadmap", ar: "خارطة طريق ربع سنوية" },
      {
        en: "Implementation plan with engineering estimate",
        ar: "خطة تنفيذ مع تقدير هندسي",
      },
    ],
    pricingModels: [
      {
        model: {
          en: "Fixed Strategy Sprint",
          ar: "سباق استراتيجية بنطاق ثابت",
        },
        description: {
          en: "A defined 3-4 week package with fixed scope and clear outputs.",
          ar: "حزمة محددة من 3-4 أسابيع بنطاق ثابت ومخرجات واضحة.",
        },
        fit: {
          en: "Best for startups preparing their first build cycle.",
          ar: "مناسب للشركات الناشئة قبل أول دورة تطوير.",
        },
      },
      {
        model: {
          en: "Advisory Retainer",
          ar: "اشتراك استشاري شهري",
        },
        description: {
          en: "Ongoing strategic support with weekly product review sessions.",
          ar: "دعم استراتيجي مستمر مع جلسات مراجعة أسبوعية.",
        },
        fit: {
          en: "Best for teams already shipping and optimizing roadmap quality.",
          ar: "مناسب للفرق التي تطلق منتجات وتريد تحسين جودة خارطة الطريق.",
        },
      },
    ],
  },
  {
    slug: "ui-ux-design",
    title: { en: "UI and UX Design", ar: "تصميم واجهة وتجربة المستخدم" },
    subtitle: {
      en: "Design flows and interfaces that are clear, modern, and conversion-ready.",
      ar: "نصمم تدفقات وواجهات واضحة وعصرية وجاهزة للتحويل.",
    },
    overview: {
      en: "We design product experiences that balance visual quality, usability, and business goals.",
      ar: "نصمم تجربة منتج توازن بين الجودة البصرية وسهولة الاستخدام وأهداف العمل.",
    },
    scope: [
      {
        en: "Information architecture and user flow optimization.",
        ar: "هيكلة المعلومات وتحسين تدفقات المستخدم.",
      },
      {
        en: "Wireframes, high-fidelity UI, and interaction states.",
        ar: "نماذج أولية وواجهات عالية الدقة وحالات التفاعل.",
      },
      {
        en: "Responsive design system for web and mobile breakpoints.",
        ar: "نظام تصميم متجاوب للويب والموبايل.",
      },
      {
        en: "Accessibility and readability checks for critical screens.",
        ar: "مراجعات الوصول وسهولة القراءة للشاشات الأساسية.",
      },
    ],
    timeline: [
      {
        phase: { en: "UX Research", ar: "بحث تجربة المستخدم" },
        duration: { en: "Week 1", ar: "الأسبوع 1" },
        description: {
          en: "Audience review, user journeys, and interaction priorities.",
          ar: "تحليل الجمهور ورحلات المستخدم وأولويات التفاعل.",
        },
      },
      {
        phase: { en: "Wireframes", ar: "الوايرفريم" },
        duration: { en: "Week 2", ar: "الأسبوع 2" },
        description: {
          en: "Low-to-mid fidelity screens with flow validation.",
          ar: "شاشات أولية مع التحقق من مسارات الاستخدام.",
        },
      },
      {
        phase: { en: "Visual Design", ar: "التصميم البصري" },
        duration: { en: "Week 3", ar: "الأسبوع 3" },
        description: {
          en: "High-fidelity UI, components, and brand application.",
          ar: "واجهات عالية الدقة ومكونات وتطبيق الهوية البصرية.",
        },
      },
      {
        phase: { en: "Handoff", ar: "التسليم للتطوير" },
        duration: { en: "Week 4", ar: "الأسبوع 4" },
        description: {
          en: "Developer-ready specs, states, and behavior notes.",
          ar: "تسليم مواصفات جاهزة للمطورين مع تفاصيل السلوك.",
        },
      },
    ],
    deliverables: [
      { en: "User flow maps", ar: "خرائط تدفقات المستخدم" },
      { en: "UI kit and reusable components", ar: "مكتبة واجهات ومكونات قابلة لإعادة الاستخدام" },
      { en: "Interactive prototype", ar: "نموذج تفاعلي" },
      { en: "Developer handoff package", ar: "حزمة تسليم كاملة للتطوير" },
    ],
    pricingModels: [
      {
        model: { en: "Design Sprint", ar: "سباق تصميم" },
        description: {
          en: "A fixed package for defined screens and user flows.",
          ar: "حزمة ثابتة لعدد محدد من الشاشات وتدفقات الاستخدام.",
        },
        fit: {
          en: "Best for launching MVP interfaces quickly.",
          ar: "مناسب لإطلاق واجهات MVP بسرعة.",
        },
      },
      {
        model: { en: "Monthly Design Partner", ar: "شراكة تصميم شهرية" },
        description: {
          en: "Continuous product design for teams with active roadmaps.",
          ar: "تصميم مستمر للمنتج للفرق ذات خارطة طريق نشطة.",
        },
        fit: {
          en: "Best for SaaS products with frequent iterations.",
          ar: "مناسب لمنتجات SaaS التي تتطور باستمرار.",
        },
      },
    ],
  },
  {
    slug: "full-stack-development",
    title: { en: "Full-stack Development", ar: "تطوير برمجي شامل" },
    subtitle: {
      en: "Build scalable web apps, APIs, and integrations with clean architecture.",
      ar: "نبني تطبيقات ويب وواجهات API وتكاملات بمعمارية نظيفة قابلة للتوسع.",
    },
    overview: {
      en: "From frontend to backend and infrastructure, we deliver robust systems with maintainable code.",
      ar: "من الواجهة إلى الخلفية والبنية التحتية، نقدم أنظمة قوية وكود قابل للصيانة.",
    },
    scope: [
      {
        en: "Frontend implementation with React and Next.js.",
        ar: "تنفيذ الواجهة باستخدام React وNext.js.",
      },
      {
        en: "Backend services, API design, and integrations.",
        ar: "خدمات الخلفية وتصميم API والتكاملات.",
      },
      {
        en: "Database modeling, caching, and performance optimization.",
        ar: "نمذجة قواعد البيانات والتخزين المؤقت وتحسين الأداء.",
      },
      {
        en: "CI/CD setup, monitoring, and production readiness.",
        ar: "إعداد CI/CD والمراقبة والجاهزية للإنتاج.",
      },
    ],
    timeline: [
      {
        phase: { en: "Architecture", ar: "المعمارية" },
        duration: { en: "Week 1-2", ar: "الأسبوع 1-2" },
        description: {
          en: "Define system boundaries, stack, and delivery milestones.",
          ar: "تحديد حدود النظام والتقنيات ومراحل التسليم.",
        },
      },
      {
        phase: { en: "Core Build", ar: "البناء الأساسي" },
        duration: { en: "Week 3-6", ar: "الأسبوع 3-6" },
        description: {
          en: "Implement core features, API contracts, and data layer.",
          ar: "تنفيذ الميزات الأساسية وعقود API وطبقة البيانات.",
        },
      },
      {
        phase: { en: "Integration", ar: "التكامل" },
        duration: { en: "Week 7-8", ar: "الأسبوع 7-8" },
        description: {
          en: "External integrations, observability, and hardening.",
          ar: "دمج الأنظمة الخارجية وتفعيل المراقبة وتقوية المنظومة.",
        },
      },
      {
        phase: { en: "Release", ar: "الإطلاق" },
        duration: { en: "Week 9+", ar: "الأسبوع 9+" },
        description: {
          en: "Production deployment with support and stabilization.",
          ar: "إطلاق الإنتاج مع دعم وتثبيت واستقرار.",
        },
      },
    ],
    deliverables: [
      { en: "Production-ready frontend and backend", ar: "واجهة وخلفية جاهزتان للإنتاج" },
      { en: "API documentation and integration contracts", ar: "توثيق API وعقود التكامل" },
      { en: "CI/CD pipeline with deployment automation", ar: "خط CI/CD مع نشر آلي" },
      { en: "Monitoring and alerting baseline", ar: "أساسيات المراقبة والتنبيهات" },
    ],
    pricingModels: [
      {
        model: { en: "Milestone-based Project", ar: "مشروع بمراحل تسليم" },
        description: {
          en: "Budget distributed across milestones with acceptance gates.",
          ar: "ميزانية موزعة على مراحل مع نقاط اعتماد واضحة.",
        },
        fit: {
          en: "Best for clearly scoped platforms and portals.",
          ar: "مناسب للمنصات والبوابات ذات نطاق واضح.",
        },
      },
      {
        model: { en: "Dedicated Squad", ar: "فريق مخصص" },
        description: {
          en: "Cross-functional team allocated monthly for evolving products.",
          ar: "فريق متعدد التخصصات مخصص شهريًا للمنتجات المتطورة.",
        },
        fit: {
          en: "Best for long-term product growth and frequent releases.",
          ar: "مناسب لنمو المنتج طويل المدى والإصدارات المتكررة.",
        },
      },
    ],
  },
  {
    slug: "qa-launch-growth",
    title: { en: "QA, Launch, and Growth", ar: "الاختبار والإطلاق والنمو" },
    subtitle: {
      en: "Ship with confidence, monitor quality, and keep improving after launch.",
      ar: "أطلق بثقة وراقب الجودة وواصل التحسين بعد الإطلاق.",
    },
    overview: {
      en: "We handle testing depth, release coordination, and growth analytics to protect product quality.",
      ar: "ندير عمق الاختبارات وتنسيق الإصدارات وتحليلات النمو لحماية جودة المنتج.",
    },
    scope: [
      {
        en: "Manual and automated QA scenarios for critical journeys.",
        ar: "سيناريوهات اختبار يدوي وآلي للمسارات الحساسة.",
      },
      {
        en: "Release checklist, rollback plan, and launch playbook.",
        ar: "قائمة تحقق للإطلاق وخطة تراجع ودليل تشغيل.",
      },
      {
        en: "Performance, SEO, and reliability benchmarking.",
        ar: "قياس الأداء وSEO والاعتمادية.",
      },
      {
        en: "Post-launch analytics review and experiment planning.",
        ar: "مراجعة تحليلات ما بعد الإطلاق وتخطيط التجارب.",
      },
    ],
    timeline: [
      {
        phase: { en: "QA Planning", ar: "تخطيط الاختبار" },
        duration: { en: "Week 1", ar: "الأسبوع 1" },
        description: {
          en: "Define test strategy and risk matrix.",
          ar: "تحديد استراتيجية الاختبار ومصفوفة المخاطر.",
        },
      },
      {
        phase: { en: "Execution", ar: "تنفيذ الاختبار" },
        duration: { en: "Week 2-3", ar: "الأسبوع 2-3" },
        description: {
          en: "Run scenarios, track defects, and validate fixes.",
          ar: "تنفيذ السيناريوهات وتتبع العيوب والتحقق من الإصلاحات.",
        },
      },
      {
        phase: { en: "Launch", ar: "الإطلاق" },
        duration: { en: "Week 4", ar: "الأسبوع 4" },
        description: {
          en: "Coordinate release window and monitor production health.",
          ar: "تنسيق نافذة الإطلاق ومراقبة صحة النظام في الإنتاج.",
        },
      },
      {
        phase: { en: "Growth Loop", ar: "حلقة النمو" },
        duration: { en: "Monthly", ar: "شهريًا" },
        description: {
          en: "Measure user behavior and prioritize improvement experiments.",
          ar: "قياس سلوك المستخدم وتحديد تجارب التحسين بالأولوية.",
        },
      },
    ],
    deliverables: [
      { en: "QA report with issue priority matrix", ar: "تقرير اختبار مع مصفوفة أولويات العيوب" },
      { en: "Launch checklist and rollback plan", ar: "قائمة إطلاق وخطة تراجع" },
      { en: "Performance and reliability baseline", ar: "خط أساس للأداء والاعتمادية" },
      { en: "Post-launch growth dashboard", ar: "لوحة نمو بعد الإطلاق" },
    ],
    pricingModels: [
      {
        model: { en: "Release Package", ar: "حزمة إطلاق" },
        description: {
          en: "Fixed scope release support for major product launches.",
          ar: "دعم إطلاق بنطاق ثابت للإصدارات الرئيسية.",
        },
        fit: {
          en: "Best for teams shipping a major version update.",
          ar: "مناسب للفرق التي تطلق نسخة رئيسية جديدة.",
        },
      },
      {
        model: { en: "Growth Retainer", ar: "اشتراك نمو" },
        description: {
          en: "Monthly optimization cycle covering QA, analytics, and A/B ideas.",
          ar: "دورة تحسين شهرية تشمل الاختبار والتحليلات وأفكار التجارب.",
        },
        fit: {
          en: "Best for products focused on ongoing conversion and retention gains.",
          ar: "مناسب للمنتجات التي تركز على رفع التحويل والاحتفاظ بشكل مستمر.",
        },
      },
    ],
  },
];

export const architectureContent = {
  eyebrow: { en: "Technologies and Architecture", ar: "التقنيات والمعمارية" },
  title: {
    en: "A modern stack built for speed, reliability, and growth.",
    ar: "حزمة تقنية حديثة مبنية للسرعة والاعتمادية والنمو.",
  },
  description: {
    en: "We design systems around clear boundaries: frontend experience, platform performance, API reliability, DevOps automation, and security hardening.",
    ar: "نصمم الأنظمة حول حدود واضحة: تجربة الواجهة، أداء المنصة، اعتمادية الـ API، أتمتة DevOps، وتعزيز الأمان.",
  },
  pillars: [
    {
      title: { en: "React Experience Layer", ar: "طبقة الواجهة بـ React" },
      description: {
        en: "Composable UI architecture with reusable components and predictable state patterns.",
        ar: "معمارية واجهات قابلة للتركيب بمكونات قابلة لإعادة الاستخدام وأنماط حالة واضحة.",
      },
      stack: ["React 19", "TypeScript", "Tailwind CSS"],
    },
    {
      title: { en: "Next.js Application Core", ar: "قلب التطبيق بـ Next.js" },
      description: {
        en: "Server-first rendering, routing strategy, and performance-focused delivery.",
        ar: "رسم من جهة الخادم، وتنظيم مسارات، وتسليم موجه للأداء.",
      },
      stack: ["Next.js App Router", "RSC", "Edge-ready caching"],
    },
    {
      title: { en: "API and Data Contracts", ar: "عقود API والبيانات" },
      description: {
        en: "Stable API contracts, validation, and integration pipelines for external systems.",
        ar: "عقود API مستقرة، وتحقق من البيانات، وتكامل موثوق مع الأنظمة الخارجية.",
      },
      stack: ["REST / GraphQL", "Schema validation", "Webhooks"],
    },
    {
      title: { en: "DevOps and Delivery", ar: "DevOps والتسليم" },
      description: {
        en: "Automated CI/CD with observability and rollback-safe deployment workflows.",
        ar: "CI/CD آلي مع مراقبة شاملة وتدفقات نشر آمنة مع إمكانية التراجع.",
      },
      stack: ["GitHub Actions", "Docker", "Monitoring alerts"],
    },
    {
      title: { en: "Security and Compliance", ar: "الأمن والامتثال" },
      description: {
        en: "Security-by-design practices from access control to secrets management.",
        ar: "ممارسات أمنية مدمجة من التحكم بالوصول إلى إدارة الأسرار.",
      },
      stack: ["OWASP controls", "RBAC", "Audit logging"],
    },
  ] as ArchitecturePillar[],
  flowTitle: { en: "Reference Architecture Flow", ar: "تدفق معمارية مرجعية" },
  flowSteps: [
    {
      en: "React UI captures interactions and validates user input.",
      ar: "واجهة React تلتقط التفاعلات وتتحقق من إدخالات المستخدم.",
    },
    {
      en: "Next.js routes requests and optimizes rendering strategy.",
      ar: "Next.js يوجّه الطلبات ويحسن استراتيجية العرض.",
    },
    {
      en: "APIs process business logic and integrate with external services.",
      ar: "واجهات API تعالج منطق الأعمال وتتكامل مع الخدمات الخارجية.",
    },
    {
      en: "DevOps pipelines run tests, deploy builds, and monitor health.",
      ar: "خطوط DevOps تنفذ الاختبارات وتنشر الإصدارات وتراقب الصحة التشغيلية.",
    },
    {
      en: "Security controls enforce permissions, encryption, and auditing.",
      ar: "ضوابط الأمان تطبق الصلاحيات والتشفير والتدقيق.",
    },
  ] as LocalizedText[],
};

export function getLocalizedText(
  text: LocalizedText,
  language: Language
): string {
  return text[language];
}

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return servicesCatalog.find((service) => service.slug === slug);
}
