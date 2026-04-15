export type Language = "en" | "ar";

export const translations = {
  en: {
    dir: "ltr",
    site: {
      name: "Programmik",
      tagline: "Software Studio",
      footerTagline: "Built for ambitious teams.",
      addressLabel: "Company Address",
      address: "Syria - Damascus",
      socialLabel: "Social",
      socialLinks: {
        whatsapp: "WhatsApp",
        facebook: "Facebook",
        instagram: "Instagram",
      },
      visitorsLabel: "Visitors",
      rights: "All rights reserved.",
    },
    nav: {
      items: [
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "About Us", href: "/about" },
        { label: "Technical Support", href: "/support" },
        { label: "Contact Us", href: "/contact" },
      ],
      cta: "Contact Us",
      language: "Language",
    },
    home: {
      hero: {
        badge: "Software that feels effortless",
        title: "Build software that looks great, works flawlessly, and scales.",
        description:
          "Programmik partners with growing teams to design and develop digital products with clean code, fast delivery, and measurable results.",
        primaryCta: "Start your project now",
        secondaryCta: "About Programmik",
      },
      stats: [
        { value: "150+", label: "Products shipped" },
        { value: "10+", label: "Years in development" },
        { value: "4.9/5", label: "Client happiness" },
      ],
      evidence: {
        label: "Trusted by teams",
        logos: ["Northwind", "Atlas", "Vertex", "Harbor", "Linea"],
        stats: [
          { value: "99.9%", label: "Uptime" },
          { value: "6-8 wks", label: "Typical MVP launch" },
          { value: "24/7", label: "Support coverage" },
        ],
      },
      services: {
        eyebrow: "Services",
        title: "End-to-end software development.",
        description:
          "From strategy to launch, we build the right product and keep it moving.",
        cta: "View details",
        items: [
          {
            title: "Product Strategy",
            description:
              "Roadmaps, requirements, and scoping that focus on real outcomes.",
          },
          {
            title: "UI and UX Design",
            description:
              "Premium interfaces with intuitive flows and clear hierarchy.",
          },
          {
            title: "Full-stack Development",
            description:
              "Modern web apps, APIs, and systems built to scale safely.",
          },
          {
            title: "QA, Launch, and Growth",
            description:
              "Testing, performance, and analytics that keep improving after release.",
          },
        ],
      },
      process: {
        eyebrow: "Process",
        title: "A clear path from idea to launch.",
        description:
          "Four simple steps keep delivery fast, transparent, and focused.",
        steps: [
          {
            step: "01",
            title: "Discover",
            description:
              "Align on goals, users, and success metrics before any build starts.",
          },
          {
            step: "02",
            title: "Design",
            description:
              "Craft a product experience that feels clear, modern, and premium.",
          },
          {
            step: "03",
            title: "Build",
            description:
              "Develop the product with clean architecture and reliable components.",
          },
          {
            step: "04",
            title: "Launch",
            description:
              "QA, ship confidently, and keep iterating as you grow.",
          },
        ],
      },
      about: {
        eyebrow: "About Us",
        title: "A team that ships with care and clarity.",
        description:
          "We blend engineering, design, and product thinking to deliver software that looks sharp and stays easy to manage.",
        bullets: [
          "Clear communication",
          "Senior-led delivery",
          "Maintainable code",
        ],
        cta: "Meet the team",
        snapshotEyebrow: "Delivery snapshot",
        snapshotItems: [
          { value: "6", label: "Weeks to launch" },
          { value: "98", label: "Lighthouse score" },
          { value: "24/7", label: "Support coverage" },
          { value: "4.9", label: "Average rating" },
        ],
        snapshotNote: "We obsess over the details so your team can move fast.",
      },
      support: {
        eyebrow: "Technical Support",
        title: "Support that keeps your product reliable.",
        cta: "Explore support",
        items: [
          {
            title: "Fast Response",
            description:
              "Same-day replies for critical issues and clear follow-ups.",
          },
          {
            title: "Proactive Monitoring",
            description: "We watch uptime, performance, and security signals.",
          },
          {
            title: "Performance Care",
            description: "Ongoing optimization to keep speed and SEO strong.",
          },
        ],
      },
      final: {
        eyebrow: "Ready to build",
        title: "Let's create software your customers love.",
        description:
          "Tell us about your vision and we will map the fastest path to launch.",
        primaryCta: "Book a call",
        secondaryCta: "Get a proposal",
      },
    },
    aboutPage: {
      hero: {
        eyebrow: "About Us",
        title: "We build software that is beautiful, scalable, and easy to run.",
        description:
          "Programmik is a software studio focused on clean systems, clear messaging, and measurable outcomes.",
        cta: "Start a project",
      },
      story: {
        eyebrow: "Our Story",
        title: "Built for teams that move fast.",
        paragraphs: [
          "We started Programmik to help ambitious brands ship software that feels intentional, performs quickly, and stays easy to evolve.",
          "Our approach combines product thinking, premium design, and disciplined engineering so every launch is confident.",
        ],
      },
      stats: [
        { value: "12", label: "Specialists" },
        { value: "6", label: "Weeks to MVP" },
        { value: "98", label: "Quality score" },
        { value: "24/7", label: "Monitoring" },
      ],
      values: {
        eyebrow: "Values",
        title: "The principles behind every build.",
        items: [
          {
            title: "Clarity",
            description:
              "We turn complex requirements into simple, confident product stories.",
          },
          {
            title: "Craft",
            description:
              "Every detail is deliberate, from UX flows to code quality.",
          },
          {
            title: "Accountability",
            description:
              "We communicate often, deliver on time, and own the outcome.",
          },
        ],
      },
      final: {
        eyebrow: "Ready to connect",
        title: "Let's build something great together.",
        description: "Share your goals and we will guide the next steps.",
        cta: "Contact Us",
      },
    },
    supportPage: {
      hero: {
        eyebrow: "Technical Support",
        title: "Always-on support that keeps your software fast and secure.",
        description:
          "We monitor, maintain, and improve your product so your team can focus on growth.",
        cta: "Request support",
      },
      channels: {
        eyebrow: "Support Channels",
        title: "Clear communication with fast resolution.",
        items: [
          {
            title: "Priority Email",
            description: "Direct access to our support desk with fast triage.",
          },
          {
            title: "Live Monitoring",
            description: "We watch uptime, performance, and security signals.",
          },
          {
            title: "Release Assistance",
            description: "We help ship updates safely with testing and rollbacks.",
          },
        ],
      },
      services: {
        eyebrow: "Services",
        title: "Support services we provide.",
        description:
          "A practical set of services to keep your product stable and improving.",
        items: [
          {
            title: "Monitoring and Alerts",
            description:
              "24/7 uptime, performance, and security monitoring with instant alerts.",
          },
          {
            title: "Bug Fixes and Maintenance",
            description:
              "Fast fixes, dependency updates, and routine maintenance.",
          },
          {
            title: "Performance Optimization",
            description: "Speed improvements, database tuning, and caching.",
          },
          {
            title: "Feature Enhancements",
            description:
              "Scoped improvements and new features as your roadmap evolves.",
          },
        ],
      },
      faq: {
        eyebrow: "FAQ",
        title: "Common questions, clear answers.",
        items: [
          {
            question: "Do you support products built by another team?",
            answer:
              "Yes. We start with an audit, identify quick wins, and create a plan.",
          },
          {
            question: "How fast can you respond?",
            answer:
              "Response times depend on the plan, ranging from same-day to 48 hours.",
          },
          {
            question: "Can you help with new features?",
            answer:
              "Absolutely. We can scope, design, and build new components or pages.",
          },
        ],
      },
      final: {
        eyebrow: "Need help now",
        title: "We are ready to support your team.",
        description:
          "Tell us what you need and we will get support started quickly.",
        cta: "Contact Support",
      },
    },
    contactPage: {
      hero: {
        eyebrow: "Contact Us",
        title: "Tell us about your project.",
        description:
          "Share your goals and we will respond with a clear proposal and timeline.",
      },
      form: {
        nameLabel: "Full Name",
        namePlaceholder: "Your name",
        emailLabel: "Work Email",
        emailPlaceholder: "name@company.com",
        companyLabel: "Company",
        companyPlaceholder: "Company name",
        messageLabel: "Project Brief",
        messagePlaceholder: "Tell us what you want to build",
        submit: "Send message",
      },
      details: {
        eyebrow: "Contact Details",
        items: [
          { title: "Email", value: "hello@company.com" },
          { title: "Phone", value: "+963 951 407 689" },
          { title: "Company Address", value: "Syria - Damascus" },
        ],
      },
      office: {
        eyebrow: "Office Hours",
        description: "Sunday - Thursday, 9:00 AM to 6:00 PM",
        cta: "Need Support",
      },
    },
  },
  ar: {
    dir: "rtl",
    site: {
      name: "Programmik",
      tagline: "استوديو برمجي",
      footerTagline: "نبني منتجات رقمية لفرق طموحة.",
      addressLabel: "عنوان الشركة",
      address: "سوريا - دمشق",
      socialLabel: "التواصل",
      socialLinks: {
        whatsapp: "واتساب",
        facebook: "فيسبوك",
        instagram: "إنستغرام",
      },
      visitorsLabel: "عدد الزوار",
      rights: "جميع الحقوق محفوظة.",
    },
    nav: {
      items: [
        { label: "الرئيسية", href: "/" },
        { label: "الخدمات", href: "/services" },
        { label: "من نحن", href: "/about" },
        { label: "الدعم الفني", href: "/support" },
        { label: "تواصل معنا", href: "/contact" },
      ],
      cta: "تواصل معنا",
      language: "اللغة",
    },
    home: {
      hero: {
        badge: "برمجيات سهلة وواضحة",
        title: "نبني برمجيات أنيقة وسريعة وقابلة للتوسع.",
        description:
          "Programmik شريكك لتصميم وتطوير المنتجات الرقمية ببرمجة نظيفة وتسليم سريع ونتائج قابلة للقياس.",
        primaryCta: "ابدأ مشروعك الآن",
        secondaryCta: "تعرّف علينا",
      },
      stats: [
        { value: "150+", label: "منتج تم إطلاقه" },
        { value: "10+", label: "سنوات خبرة" },
        { value: "4.9/5", label: "رضا العملاء" },
      ],
      evidence: {
        label: "موثوق من فرق رائعة",
        logos: ["Northwind", "Atlas", "Vertex", "Harbor", "Linea"],
        stats: [
          { value: "99.9%", label: "جاهزية التشغيل" },
          { value: "6-8 أسابيع", label: "إطلاق MVP متوسط" },
          { value: "24/7", label: "دعم مستمر" },
        ],
      },
      services: {
        eyebrow: "الخدمات",
        title: "تطوير برمجي متكامل من الفكرة إلى الإطلاق.",
        description:
          "من الاستراتيجية إلى النمو، نبني المنتج الصحيح ونحافظ على تطوره.",
        cta: "عرض التفاصيل",
        items: [
          {
            title: "استراتيجية المنتج",
            description:
              "خارطة طريق ومتطلبات واضحة تركز على النتائج الفعلية.",
          },
          {
            title: "تصميم واجهة وتجربة المستخدم",
            description: "واجهات أنيقة وتدفق استخدام بسيط وواضح.",
          },
          {
            title: "تطوير شامل",
            description:
              "تطبيقات ويب وواجهات برمجية قابلة للتوسع بأمان.",
          },
          {
            title: "الاختبار والإطلاق والنمو",
            description:
              "اختبارات دقيقة وأداء قوي وتحسين مستمر بعد الإطلاق.",
          },
        ],
      },
      process: {
        eyebrow: "آلية العمل",
        title: "مسار واضح من الفكرة إلى الإطلاق.",
        description: "أربع خطوات بسيطة تبقي التنفيذ سريعًا وشفافًا ومركّزًا.",
        steps: [
          {
            step: "01",
            title: "اكتشاف",
            description:
              "نحدد الأهداف والجمهور ومعايير النجاح قبل بدء التنفيذ.",
          },
          {
            step: "02",
            title: "تصميم",
            description:
              "نصمم تجربة استخدام واضحة بمظهر حديث يعكس الثقة.",
          },
          {
            step: "03",
            title: "تطوير",
            description:
              "نبني المنتج بهيكل نظيف ومكونات قابلة للتطوير.",
          },
          {
            step: "04",
            title: "إطلاق",
            description: "اختبار شامل ثم إطلاق وقياس وتحسين مستمر.",
          },
        ],
      },
      about: {
        eyebrow: "من نحن",
        title: "فريق ينجز بعناية ووضوح.",
        description:
          "نمزج بين الهندسة والتصميم وفكر المنتج لتقديم برمجيات أنيقة وسهلة الإدارة.",
        bullets: ["تواصل واضح", "تنفيذ بخبرة", "كود سهل الصيانة"],
        cta: "تعرّف على الفريق",
        snapshotEyebrow: "لمحة سريعة",
        snapshotItems: [
          { value: "6", label: "أسابيع للإطلاق" },
          { value: "98", label: "درجة Lighthouse" },
          { value: "24/7", label: "تغطية دعم" },
          { value: "4.9", label: "متوسط التقييم" },
        ],
        snapshotNote: "نهتم بالتفاصيل لتبقى أنت مركزًا على النمو.",
      },
      support: {
        eyebrow: "الدعم الفني",
        title: "دعم يحافظ على استقرار منتجك.",
        cta: "خطط الدعم",
        items: [
          {
            title: "استجابة سريعة",
            description: "ردود في نفس اليوم للحالات الحرجة وتحديثات واضحة.",
          },
          {
            title: "مراقبة استباقية",
            description: "نراقب الجاهزية والأداء وإشارات الأمان باستمرار.",
          },
          {
            title: "رعاية الأداء",
            description: "تحسينات دورية للحفاظ على السرعة ونتائج البحث.",
          },
        ],
      },
      final: {
        eyebrow: "جاهز للبدء",
        title: "لنصنع برنامجًا يحبه عملاؤك.",
        description: "شاركنا رؤيتك وسنقترح أسرع طريق للإطلاق.",
        primaryCta: "احجز مكالمة",
        secondaryCta: "احصل على عرض",
      },
    },
    aboutPage: {
      hero: {
        eyebrow: "من نحن",
        title: "نبني برمجيات جميلة وقابلة للتوسع وسهلة الإدارة.",
        description:
          "Programmik استوديو برمجي يركز على الأنظمة النظيفة والرسائل الواضحة والنتائج القابلة للقياس.",
        cta: "ابدأ مشروعًا",
      },
      story: {
        eyebrow: "قصتنا",
        title: "مصممون لفرق تتحرك بسرعة.",
        paragraphs: [
          "بدأنا Programmik لمساعدة العلامات الطموحة على إطلاق برمجيات متقنة وسريعة وسهلة التطوير.",
          "نمزج بين فكر المنتج والتصميم الممتاز والهندسة المنضبطة لضمان إطلاق واثق.",
        ],
      },
      stats: [
        { value: "12", label: "مختصًا" },
        { value: "6", label: "أسابيع لـ MVP" },
        { value: "98", label: "درجة الجودة" },
        { value: "24/7", label: "مراقبة" },
      ],
      values: {
        eyebrow: "القيم",
        title: "مبادئنا في كل مشروع.",
        items: [
          {
            title: "الوضوح",
            description:
              "نحوّل المتطلبات المعقدة إلى قصة منتج بسيطة ومقنعة.",
          },
          {
            title: "الإتقان",
            description:
              "نهتم بكل تفصيلة من تجربة المستخدم إلى جودة الكود.",
          },
          {
            title: "الالتزام",
            description:
              "نتواصل باستمرار ونلتزم بالمواعيد ونتحمل النتيجة.",
          },
        ],
      },
      final: {
        eyebrow: "جاهزون للتعاون",
        title: "لنبنِ شيئًا رائعًا معًا.",
        description: "شاركنا أهدافك وسنقود الخطوات التالية بثقة.",
        cta: "تواصل معنا",
      },
    },
    supportPage: {
      hero: {
        eyebrow: "الدعم الفني",
        title: "دعم دائم يحافظ على سرعة وأمان برنامجك.",
        description:
          "نراقب ونصون ونحسن منتجك حتى يركز فريقك على النمو.",
        cta: "اطلب الدعم",
      },
      channels: {
        eyebrow: "قنوات الدعم",
        title: "تواصل واضح واستجابة سريعة.",
        items: [
          {
            title: "بريد أولوية",
            description: "وصول مباشر لفريق الدعم مع فرز سريع للحالات.",
          },
          {
            title: "مراقبة مباشرة",
            description: "نراقب الجاهزية والأداء وإشارات الأمان باستمرار.",
          },
          {
            title: "مساعدة الإصدارات",
            description: "نساعد على إطلاق التحديثات بأمان مع اختبارات دقيقة.",
          },
        ],
      },
      services: {
        eyebrow: "الخدمات",
        title: "خدمات الدعم التي نقدمها.",
        description:
          "مجموعة خدمات عملية تحافظ على استقرار منتجك وتطوره.",
        items: [
          {
            title: "المراقبة والتنبيهات",
            description:
              "مراقبة مستمرة للأداء والجاهزية والأمان مع تنبيهات فورية.",
          },
          {
            title: "إصلاحات وصيانة",
            description:
              "إصلاح سريع للأخطاء وتحديثات دورية للمكتبات.",
          },
          {
            title: "تحسين الأداء",
            description:
              "تحسين السرعة والتخزين المؤقت وضبط قاعدة البيانات.",
          },
          {
            title: "تطوير ميزات",
            description:
              "إضافات محسوبة وميزات جديدة حسب خارطة الطريق.",
          },
        ],
      },
      faq: {
        eyebrow: "الأسئلة الشائعة",
        title: "إجابات واضحة للأسئلة المتكررة.",
        items: [
          {
            question: "هل تدعمون منتجات تم بناؤها بواسطة فريق آخر؟",
            answer:
              "نعم. نبدأ بتدقيق شامل، نحدد الفرص السريعة، ثم نضع خطة دعم.",
          },
          {
            question: "ما سرعة الاستجابة؟",
            answer: "تعتمد على الخطة، من نفس اليوم حتى 48 ساعة.",
          },
          {
            question: "هل يمكنكم تطوير ميزات جديدة؟",
            answer:
              "بالطبع. يمكننا تحديد النطاق وتصميم وبناء مكونات أو صفحات جديدة.",
          },
        ],
      },
      final: {
        eyebrow: "تحتاج دعمًا الآن",
        title: "نحن جاهزون لمساندة فريقك.",
        description: "أخبرنا بما تحتاجه وسنبدأ بسرعة.",
        cta: "تواصل مع الدعم",
      },
    },
    contactPage: {
      hero: {
        eyebrow: "تواصل معنا",
        title: "حدثنا عن مشروعك.",
        description:
          "شاركنا أهدافك وسنرد بعرض واضح وجدول زمني محدد.",
      },
      form: {
        nameLabel: "الاسم الكامل",
        namePlaceholder: "اكتب اسمك",
        emailLabel: "البريد الإلكتروني للعمل",
        emailPlaceholder: "name@company.com",
        companyLabel: "الشركة",
        companyPlaceholder: "اسم الشركة",
        messageLabel: "تفاصيل المشروع",
        messagePlaceholder: "صف ما تريد بناءه",
        submit: "أرسل الرسالة",
      },
      details: {
        eyebrow: "بيانات التواصل",
        items: [
          { title: "البريد الإلكتروني", value: "hello@company.com" },
          { title: "الهاتف", value: "+963 951 407 689" },
          { title: "عنوان الشركة", value: "سوريا - دمشق" },
        ],
      },
      office: {
        eyebrow: "ساعات العمل",
        description: "الأحد - الخميس، 9:00 ص إلى 6:00 م",
        cta: "تحتاج دعمًا؟",
      },
    },
  },
};
