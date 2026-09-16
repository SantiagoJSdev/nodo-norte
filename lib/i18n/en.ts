/**
 * English dictionary — single source of truth for all UI copy.
 * The `es` module mirrors this exact shape (see lib/i18n/es.ts).
 */
export const en = {
  meta: {
    title:
      "Vector Wave Studio — Websites and Digital Systems with Clear Direction",
    description:
      "Vector Wave Studio designs and develops high-performing websites, custom web applications, backend APIs, automation, and applied AI for modern businesses.",
  },

  header: {
    nav: [
      { label: "Services", href: "#services" },
      { label: "Process", href: "#process" },
      { label: "Team", href: "#team" },
      { label: "Contact", href: "#contact" },
    ],
    cta: "Request a Quote",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchTo: "Switch language",
    languages: { en: "English", es: "Español" },
  },

  hero: {
    kicker: "Digital systems with clear direction",
    headlinePrefix: "Websites and digital systems built with",
    headlineHighlight: "clear direction",
    headlineSuffix: ".",
    subtitle:
      "Vector Wave Studio designs and develops high-performing websites, custom software, automation, and AI solutions for businesses ready to move forward.",
    primaryCta: "Build My Website",
    secondaryCta: "Explore Services",
    trustNote: "Direct engineer access · Custom scope · High performance",
    terminal: {
      title: "sys.mesh // production",
      region: "NODE.JS · POSTGRES · NEXT.JS",
      lines: [
        "POST /api/orders → 200 OK",
        "PostgreSQL schema synchronized",
        "CI pipeline active",
      ],
    },
  },

  principles: {
    label: "Principle",
    items: [
      {
        icon: "search" as const,
        title: "Conversion-focused design",
        body: "Structure engineered to turn visitors into qualified leads with deliberate hierarchy and intent.",
      },
      {
        icon: "terminal" as const,
        title: "Custom development",
        body: "Zero bloated page builders or templates. Handcrafted, high-velocity code optimized for speed.",
      },
      {
        icon: "schema" as const,
        title: "Systems built to scale",
        body: "Robust modular architecture that evolves smoothly alongside your operations without rewrites.",
      },
      {
        icon: "headset" as const,
        title: "Direct access to the team",
        body: "No intermediaries or account directors. Talk directly with the engineers building your software.",
      },
    ],
  },

  flagship: {
    kicker: "Primary Service · Flagship",
    title: "Your website should do more than look good.",
    subtitle:
      "Vector Wave Studio builds custom, mobile-first landing pages and corporate websites designed to explain your offer clearly and turn visits into qualified inquiries.",
    specsLabel: "Capability // Specs",
    checklist: [
      {
        strong: "Custom design",
        text: ", built mobile-first from the ground up for maximum visual resonance.",
      },
      {
        strong: "Clear messaging",
        text: " and conversion-focused page hierarchy tailored to your exact target audience.",
      },
      {
        strong: "High performance",
        text: ", technical SEO foundations, sub-second load times, and rock-solid deployment.",
      },
      {
        strong: "Direct integrations",
        text: " with forms, WhatsApp API, scheduling calendars, and custom CRM systems.",
      },
    ],
    scopeNote: "Custom scope. Quote tailored precisely to your goals.",
    cta: "Talk About My Website",
    mockup: {
      specLabel: "SPEC: LANDING_SYSTEM // PROD",
      desktop: "Desktop",
      mobile: "Mobile",
      badge: "Conversion-ready · Responsive",
    },
  },

  capabilities: {
    kicker: "Engineering & Applied Technology",
    title: "Beyond the website: complete digital foundations.",
    subtitle:
      "Websites are just the surface. We engineer complete end-to-end digital foundations with scalable backend architectures, bespoke operational web apps, native utilities, and custom applied AI agents.",
    okLabel: "SYS.OK",
    panels: [
      {
        tag: "SYS_01 // CORE APIS",
        icon: "server" as const,
        title: "Backend Development",
        body: "Reliable, secure data handling and high-throughput server architecture crafted for endurance.",
        items: [
          "Custom NestJS, TypeScript, and Node.js REST / GraphQL APIs",
          "Microservices, scalable containerized architecture, and distributed workers",
          "Webhook pipelines and process automation orchestration with n8n",
          "Robust authentication, RBAC permissions, and multi-tenant structures",
        ],
        stack: "STACK: NODE · NEST · POSTGRES",
      },
      {
        tag: "SYS_02 // DASHBOARDS & TOOLS",
        icon: "layout" as const,
        title: "Web Applications",
        body: "Internal business platforms, customer self-service portals, and customized operational tooling.",
        items: [
          "Full-stack reactive web applications built on modern Next.js foundations",
          "Custom internal tools, databases, dashboards, and service management portals",
          "Role-based access and granular permission subsystems",
          "Third-party CRM, ERP, and payment gateway integrations",
        ],
        stack: "STACK: NEXT.JS · TAILWIND · TYPESCRIPT",
      },
      {
        tag: "SYS_03 // NATIVE TOOLS",
        icon: "smartphone" as const,
        title: "Mobile Development",
        body: "Cross-platform iOS and Android applications with native performance.",
        items: [
          "Field diagnostics, logistics tracking, and POS utility integrations",
          "Offline-first architectures with robust auto-sync when connection restores",
          "Native hardware bridging (Camera, GPS, Bluetooth peripherals)",
        ],
        stack: "STACK: REACT NATIVE · EXPO · OFFLINE-SYNC",
      },
      {
        tag: "SYS_04 // INTELLIGENCE & AUTOMATION",
        icon: "sparkles" as const,
        title: "Applied AI",
        body: "Pragmatic artificial intelligence integrated into business touchpoints, eliminating repetitive tasks.",
        items: [
          "AI chat systems calibrated for lead qualification on client websites",
          "Context-aware WhatsApp Business AI agents running on proprietary knowledge",
          "Intelligent document parsing, invoice extraction, and automatic CRM population",
          "RAG (Retrieval-Augmented Generation) architectures tailored to corporate data",
        ],
        stack: "STACK: LLM APIS · VECTOR STORE · AGENTS",
      },
    ],
  },

  process: {
    kicker: "How We Work · The Process",
    title: "A structured process built for velocity and clarity.",
    subtitle:
      "We strip out administrative excess. Every sprint has explicit deliverables, direct communication, and measurable engineering outcomes.",
    phaseLabel: "Phase",
    steps: [
      {
        number: "01",
        title: "Discovery",
        body: "We understand your business model, target market, functional bottlenecks, and explicit project scope before writing a line of code.",
      },
      {
        number: "02",
        title: "Strategy & Design",
        body: "We map wireframes, message hierarchy, conversion paths, and aesthetic identity to create an authoritative visual interface.",
      },
      {
        number: "03",
        title: "Development",
        body: "We build, integrate third-party APIs, and rigorously test the software with zero bloat, ensuring speed, security, and responsive precision.",
      },
      {
        number: "04",
        title: "Launch & Evolution",
        body: "We deploy to production infrastructure, monitor initial telemetry, and establish a firm foundation for your continuous business expansion.",
      },
    ],
  },

  team: {
    kicker: "The Studio · Core Team",
    title: "Direct engineering collaboration, from day one.",
    subtitle:
      "A compact studio of three dedicated specialists. No account managers, no layers, and no handoffs to junior contractors.",
    members: [
      {
        initials: "SR",
        role: "Founder · Technical Lead",
        name: "Santiago Reyes",
        body: "Leads software architecture, backend systems, APIs, automation, and applied AI integrations. Turns complex business requirements into high-performing, scalable, and maintainable digital products.",
        tag: "SYSTEMS // CORE INFRA",
      },
      {
        initials: "MG",
        role: "Software Developer · QA",
        name: "Margorys Gomez",
        body: "Executes frontend interfaces, third-party service connections, and rigorous cross-browser testing. Ensures every web application and landing page is resilient, fast, accessible, and ready to scale.",
        tag: "CLIENT-SIDE · TESTING",
      },
      {
        initials: "CJ",
        role: "UI Designer · Content Strategist",
        name: "Carmen Jimenez",
        body: "Designs clear user interfaces, cohesive design systems, and authoritative editorial messaging. Bridges the gap between technical complexity and compelling conversion experiences.",
        tag: "EXPERIENCE · COPY",
      },
    ],
  },

  contact: {
    kicker: "Start a Project",
    title: "Let's build something with clear direction.",
    subtitle:
      "Tell us what you're building, what problem you want to solve, and where you want to go next. We'll get back to you with the right next step.",
    groupContact: "01 // Contact Information",
    groupServices: "02 // Required Capabilities",
    groupBudget: "03 // Estimated Budget",
    groupDetails: "04 // Project Details",
    fields: {
      name: "Full Name",
      namePlaceholder: "Alex Rivera",
      email: "Work Email",
      emailPlaceholder: "alex@company.com",
      business: "Business Name",
      businessPlaceholder: "Apex Logistics",
      phone: "Phone / WhatsApp Number",
      phonePlaceholder: "+1 (555) 000-0000",
      capabilitiesHelp:
        "What type of solution do you need? (Select all that apply)",
      message:
        "Tell us about your project, timeline, and current bottlenecks",
      messagePlaceholder: "Describe what you are looking to build or optimize...",
    },
    capabilities: [
      "Website Design & Development",
      "Custom Web Application",
      "Backend, API & Microservices",
      "Process Automation (n8n, APIs)",
      "Applied AI / WhatsApp AI Agents",
      "Mobile Development (iOS / Android)",
    ],
    budgets: ["< $1,000", "$1K - $2.5K", "$2.5K - $5K", "$5,000+", "Not Sure"],
    submit: "Request a Quote",
    notice:
      "We respect your inbox. Typically responded to within 1 business day.",
    form: {
      submitting: "Sending...",
      success: {
        title: "Message received",
        body: "Thank you. We'll review your project requirements and respond within 1 business day.",
      },
      error:
        "Something went wrong. Please try again or reach out directly by email or WhatsApp.",
    },
    reassurance: {
      title: "Direct Collaboration",
      body: "You will speak directly with the team building your project. No intermediaries, no sales agents, and no handoffs.",
    },
    channelsLabel: "Instant Channels",
    emailLabel: "Studio Email",
    phoneLabel: "Phone & WhatsApp Direct",
    availabilityLabel: "Availability",
    availabilityValue: "Monday – Friday, EST",
    online: "ONLINE",
    whatsapp: "WhatsApp",
    call: "Call Direct",
  },

  finalCta: {
    kicker: "Forward Momentum",
    title: "Need a stronger digital foundation for your business?",
    subtitle:
      "Whether launching a flagship website, architecting an API, or automating operations, we provide the technical clarity to move forward.",
    cta: "Request a Quote",
  },

  footer: {
    description:
      "Digital systems with clear direction. Engineering websites, software, APIs, automation, and AI for modern platforms.",
    navigation: "Navigation",
    inquiries: "Studio Inquiries",
    rights: "© 2025 Vector Wave Studio. All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
  },
};
