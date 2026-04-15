import type { Language } from "@/lib/translations";

type LocalizedText = Record<Language, string>;

export type InsightCategory = "engineering" | "product" | "launch";

export type InsightPost = {
  slug: string;
  category: InsightCategory;
  title: LocalizedText;
  excerpt: LocalizedText;
  summary: LocalizedText;
  seoTitle: string;
  seoDescription: string;
  tags: string[];
  readTime: number;
  publishedAt: string;
  author: LocalizedText;
  sections: {
    heading: LocalizedText;
    body: LocalizedText;
    bullets?: LocalizedText[];
  }[];
};

export const insightCategoryLabels: Record<InsightCategory, LocalizedText> = {
  engineering: { en: "Engineering", ar: "الهندسة البرمجية" },
  product: { en: "Product Strategy", ar: "استراتيجية المنتج" },
  launch: { en: "Launch Guides", ar: "أدلة الإطلاق" },
};

export const insightPosts: InsightPost[] = [
  {
    slug: "nextjs-performance-playbook",
    category: "engineering",
    title: {
      en: "Next.js Performance Playbook for Fast-Growing Products",
      ar: "دليل أداء Next.js للمنتجات سريعة النمو",
    },
    excerpt: {
      en: "Practical decisions on rendering, caching, and data boundaries to keep user experience consistently fast.",
      ar: "قرارات عملية في العرض والتخزين المؤقت وحدود البيانات للحفاظ على تجربة استخدام سريعة باستمرار.",
    },
    summary: {
      en: "How to choose rendering and caching patterns in Next.js based on product behavior and release velocity.",
      ar: "كيف تختار أنماط العرض والتخزين المؤقت في Next.js بناءً على سلوك المنتج وسرعة الإطلاق.",
    },
    seoTitle: "Next.js Performance Playbook | Programmik Insights",
    seoDescription:
      "Learn a practical Next.js performance strategy for rendering, caching, and API boundaries in modern software products.",
    tags: ["Next.js", "Performance", "Architecture", "Caching"],
    readTime: 7,
    publishedAt: "2026-04-10",
    author: { en: "Programmik Engineering", ar: "فريق الهندسة في Programmik" },
    sections: [
      {
        heading: {
          en: "Map rendering strategy to content volatility",
          ar: "اربط استراتيجية العرض بتغير المحتوى",
        },
        body: {
          en: "Treat route segments differently based on update frequency. Stable pages benefit from static generation, while volatile dashboards should rely on server rendering with predictable cache keys.",
          ar: "تعامل مع مسارات التطبيق حسب معدل تغير المحتوى. الصفحات الثابتة تناسبها التوليد المسبق، بينما لوحات المتابعة المتغيرة تحتاج عرضًا من الخادم مع مفاتيح تخزين مؤقت واضحة.",
        },
      },
      {
        heading: {
          en: "Define API boundaries before optimization",
          ar: "حدد حدود الـ API قبل تحسين الأداء",
        },
        body: {
          en: "Most performance regressions are architecture issues, not framework issues. Set clear contracts for data ownership and payload shape to avoid over-fetching.",
          ar: "أغلب تراجعات الأداء سببها المعمارية وليس الإطار نفسه. ضع عقودًا واضحة لملكية البيانات وشكل الحمولة لتجنب الجلب الزائد.",
        },
        bullets: [
          {
            en: "Separate read-heavy and write-heavy endpoints",
            ar: "افصل بين نقاط القراءة الكثيفة ونقاط الكتابة الكثيفة",
          },
          {
            en: "Use schema validation at API edges",
            ar: "استخدم التحقق البنيوي عند حدود الـ API",
          },
          {
            en: "Measure payload size per critical journey",
            ar: "قِس حجم البيانات في كل مسار استخدام أساسي",
          },
        ],
      },
      {
        heading: {
          en: "Create a performance budget for each release",
          ar: "ضع ميزانية أداء لكل إصدار",
        },
        body: {
          en: "A release gate with Lighthouse and real-user metrics protects speed under delivery pressure. Teams ship faster when performance thresholds are explicit.",
          ar: "وجود معيار إصدار يعتمد على Lighthouse وقياسات المستخدمين الفعلية يحافظ على السرعة تحت ضغط التسليم. الفرق تطلق أسرع عندما تكون حدود الأداء واضحة.",
        },
      },
    ],
  },
  {
    slug: "product-roadmap-that-ships",
    category: "product",
    title: {
      en: "Building a Product Roadmap That Actually Ships",
      ar: "بناء خارطة طريق منتج قابلة للتنفيذ فعليًا",
    },
    excerpt: {
      en: "A roadmap model that aligns stakeholders, de-risks execution, and keeps focus on measurable outcomes.",
      ar: "نموذج خارطة طريق ينسق أصحاب المصلحة ويقلل مخاطر التنفيذ ويحافظ على التركيز على نتائج قابلة للقياس.",
    },
    summary: {
      en: "Convert high-level product goals into delivery-ready milestones with clear acceptance and impact metrics.",
      ar: "حوّل أهداف المنتج العامة إلى مراحل تسليم جاهزة مع معايير قبول ومؤشرات أثر واضحة.",
    },
    seoTitle: "Product Roadmap Strategy | Programmik Insights",
    seoDescription:
      "A practical framework for building a software product roadmap that teams can execute with confidence.",
    tags: ["Product Strategy", "Roadmap", "Delivery", "Prioritization"],
    readTime: 6,
    publishedAt: "2026-03-26",
    author: { en: "Programmik Product Team", ar: "فريق المنتج في Programmik" },
    sections: [
      {
        heading: {
          en: "Start with business outcomes, not feature lists",
          ar: "ابدأ بنتائج الأعمال لا بقائمة ميزات",
        },
        body: {
          en: "Roadmaps fail when features are added without impact framing. Tie each initiative to a target KPI and define what success looks like before planning implementation.",
          ar: "تفشل خارطة الطريق عندما تضاف الميزات دون ربطها بالأثر. اربط كل مبادرة بمؤشر أداء محدد وحدد شكل النجاح قبل بدء التنفيذ.",
        },
      },
      {
        heading: {
          en: "Design milestones as risk-reduction checkpoints",
          ar: "صمم المراحل كنقاط تخفيض للمخاطر",
        },
        body: {
          en: "Milestones should answer critical uncertainties early: technical feasibility, user adoption, and operational readiness.",
          ar: "يجب أن تجيب المراحل مبكرًا عن أهم نقاط عدم اليقين: الجدوى التقنية، تبني المستخدمين، والجاهزية التشغيلية.",
        },
      },
      {
        heading: {
          en: "Use a decision log to keep alignment",
          ar: "استخدم سجل قرارات للحفاظ على التوافق",
        },
        body: {
          en: "A lightweight decision log prevents recurring debates and preserves context across leadership, product, and engineering conversations.",
          ar: "سجل قرارات بسيط يمنع تكرار النقاشات ويحفظ السياق بين القيادة والمنتج والهندسة.",
        },
      },
    ],
  },
  {
    slug: "release-readiness-checklist",
    category: "launch",
    title: {
      en: "Release Readiness Checklist for Reliable Launches",
      ar: "قائمة جاهزية الإطلاق لإصدارات موثوقة",
    },
    excerpt: {
      en: "A practical launch guide covering QA, rollback planning, observability, and communication handoffs.",
      ar: "دليل إطلاق عملي يغطي الاختبارات وخطط التراجع والمراقبة وتسليمات التواصل.",
    },
    summary: {
      en: "Ship confidently with a release protocol that reduces incidents and accelerates post-launch stabilization.",
      ar: "أطلق بثقة عبر بروتوكول إطلاق يقلل الأعطال ويسرّع الاستقرار بعد الإطلاق.",
    },
    seoTitle: "Software Launch Checklist | Programmik Insights",
    seoDescription:
      "A software launch checklist for QA, deployment safety, monitoring, and incident response.",
    tags: ["Launch", "QA", "DevOps", "Reliability"],
    readTime: 5,
    publishedAt: "2026-03-12",
    author: { en: "Programmik Delivery Team", ar: "فريق التسليم في Programmik" },
    sections: [
      {
        heading: {
          en: "Define release gates before code freeze",
          ar: "حدد بوابات الإصدار قبل تجميد الكود",
        },
        body: {
          en: "Set objective go/no-go criteria around test coverage, defect severity, and system health metrics to avoid subjective launch decisions.",
          ar: "ضع معايير إطلاق موضوعية حول تغطية الاختبارات وشدة العيوب ومؤشرات صحة النظام لتجنب قرارات إطلاق عشوائية.",
        },
      },
      {
        heading: {
          en: "Prepare rollback and fallback paths",
          ar: "جهز مسارات التراجع والحلول البديلة",
        },
        body: {
          en: "Every release needs a rollback owner, estimated rollback time, and fallback user experience for critical journeys.",
          ar: "كل إصدار يحتاج مسؤول تراجع وزمنًا مقدرًا للتراجع وتجربة بديلة للمسارات الأساسية.",
        },
      },
      {
        heading: {
          en: "Run post-launch monitoring as an active phase",
          ar: "اجعل مراقبة ما بعد الإطلاق مرحلة نشطة",
        },
        body: {
          en: "The first 48 hours are operationally critical. Track error rate, latency, and user drop-off in real time with an assigned response owner.",
          ar: "أول 48 ساعة حاسمة تشغيليًا. راقب معدل الأخطاء وزمن الاستجابة وتراجع المستخدمين لحظيًا مع مسؤول استجابة محدد.",
        },
      },
    ],
  },
  {
    slug: "api-contract-first-systems",
    category: "engineering",
    title: {
      en: "API Contract-First Systems for Faster Integrations",
      ar: "بناء أنظمة Contract-First API لتكامل أسرع",
    },
    excerpt: {
      en: "How contract-first API design reduces integration failures and accelerates parallel development.",
      ar: "كيف يقلل تصميم API بنهج Contract-First من فشل التكامل ويسرّع التطوير المتوازي.",
    },
    summary: {
      en: "Define schemas and behavioral contracts before implementation to protect reliability and developer velocity.",
      ar: "حدد المخططات وعقود السلوك قبل التنفيذ لحماية الاعتمادية وسرعة التطوير.",
    },
    seoTitle: "Contract-First API Design | Programmik Insights",
    seoDescription:
      "Learn how contract-first API architecture improves integration reliability and software delivery speed.",
    tags: ["API", "System Design", "Integration", "Reliability"],
    readTime: 6,
    publishedAt: "2026-02-24",
    author: { en: "Programmik Engineering", ar: "فريق الهندسة في Programmik" },
    sections: [
      {
        heading: {
          en: "Contracts enable independent team velocity",
          ar: "العقود تتيح سرعة مستقلة للفرق",
        },
        body: {
          en: "When schemas are stable and versioned, frontend and backend teams can build in parallel without blocking each other.",
          ar: "عندما تكون المخططات ثابتة ومُصدّرة بإصدارات، تستطيع فرق الواجهة والخلفية العمل بالتوازي دون تعطيل متبادل.",
        },
      },
      {
        heading: {
          en: "Validation must exist at every boundary",
          ar: "التحقق يجب أن يوجد في كل حد للنظام",
        },
        body: {
          en: "Runtime validation and typed contracts protect systems from malformed payloads and silent data drift.",
          ar: "التحقق وقت التشغيل والعقود المعرّفة بالأنواع يحميان الأنظمة من الحمولات غير الصحيحة وانحراف البيانات الصامت.",
        },
      },
    ],
  },
  {
    slug: "mvp-scope-control-framework",
    category: "product",
    title: {
      en: "MVP Scope Control Framework for Startup Teams",
      ar: "إطار ضبط نطاق MVP لفرق الشركات الناشئة",
    },
    excerpt: {
      en: "A scope control system to preserve launch speed without sacrificing product quality.",
      ar: "نظام لضبط النطاق يحافظ على سرعة الإطلاق دون التضحية بجودة المنتج.",
    },
    summary: {
      en: "Use must-have filters, impact scoring, and change governance to prevent roadmap sprawl.",
      ar: "استخدم معايير الضرورة وتقييم الأثر وحوكمة التغيير لمنع تضخم خارطة الطريق.",
    },
    seoTitle: "MVP Scope Strategy | Programmik Insights",
    seoDescription:
      "A practical MVP scope framework to launch faster with clear product decisions.",
    tags: ["MVP", "Scope", "Startup", "Product Management"],
    readTime: 5,
    publishedAt: "2026-02-05",
    author: { en: "Programmik Product Team", ar: "فريق المنتج في Programmik" },
    sections: [
      {
        heading: {
          en: "Define non-negotiable outcomes first",
          ar: "حدد النتائج غير القابلة للتفاوض أولًا",
        },
        body: {
          en: "MVP scope should be built around outcomes that prove demand and unlock the next funding or growth decision.",
          ar: "يجب أن يُبنى نطاق MVP حول نتائج تثبت الطلب وتدعم قرار التمويل أو النمو التالي.",
        },
      },
      {
        heading: {
          en: "Introduce change control with effort caps",
          ar: "طبق ضبط التغيير مع سقف جهد",
        },
        body: {
          en: "Any mid-sprint scope addition should require trade-off decisions, not silent schedule expansion.",
          ar: "أي إضافة للنطاق أثناء السبرنت يجب أن تقابلها قرارات مقايضة واضحة، لا تمديدًا صامتًا للجدول.",
        },
      },
    ],
  },
  {
    slug: "post-launch-growth-operations",
    category: "launch",
    title: {
      en: "Post-Launch Growth Operations for B2B Products",
      ar: "عمليات النمو بعد الإطلاق لمنتجات B2B",
    },
    excerpt: {
      en: "Build a post-launch operating rhythm for analytics, iteration priorities, and customer feedback loops.",
      ar: "ابنِ إيقاع تشغيل بعد الإطلاق للتحليلات وأولويات التحسين وحلقات تغذية العملاء.",
    },
    summary: {
      en: "A lightweight growth operations model that transforms launch momentum into sustained product gains.",
      ar: "نموذج عمليات نمو خفيف يحول زخم الإطلاق إلى مكاسب مستمرة في المنتج.",
    },
    seoTitle: "Post-Launch Growth Operations | Programmik Insights",
    seoDescription:
      "A practical post-launch growth model for B2B software teams focused on retention and expansion.",
    tags: ["Growth", "Post Launch", "Analytics", "B2B"],
    readTime: 7,
    publishedAt: "2026-01-28",
    author: { en: "Programmik Growth Team", ar: "فريق النمو في Programmik" },
    sections: [
      {
        heading: {
          en: "Track leading indicators, not only revenue",
          ar: "تابع المؤشرات المبكرة لا الإيراد فقط",
        },
        body: {
          en: "Activation, feature adoption, and support signal quality often predict retention shifts before revenue data reacts.",
          ar: "التفعيل وتبني الميزات وجودة إشارات الدعم غالبًا تتنبأ بتغيرات الاحتفاظ قبل أن تنعكس في الإيراد.",
        },
      },
      {
        heading: {
          en: "Run a weekly experimentation loop",
          ar: "شغّل حلقة تجارب أسبوعية",
        },
        body: {
          en: "Prioritize small, measurable experiments across onboarding, pricing communication, and in-product guidance.",
          ar: "أعط الأولوية لتجارب صغيرة قابلة للقياس عبر الإعداد الأولي وتوضيح التسعير والإرشاد داخل المنتج.",
        },
      },
    ],
  },
];

export function getInsightBySlug(slug: string): InsightPost | undefined {
  return insightPosts.find((post) => post.slug === slug);
}

export function getLocalizedInsightText(
  text: LocalizedText,
  language: Language
): string {
  return text[language];
}

export function formatInsightDate(isoDate: string, language: Language): string {
  const date = new Date(`${isoDate}T00:00:00`);
  return new Intl.DateTimeFormat(language === "ar" ? "ar" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}
