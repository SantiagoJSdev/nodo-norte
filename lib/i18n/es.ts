import type { Dictionary } from "./dictionaries";

/**
 * Spanish dictionary — mirrors the exact shape of lib/i18n/en.ts.
 */
export const es: Dictionary = {
  meta: {
    title:
      "Vector Wave Studio — Sitios web y sistemas digitales con dirección clara",
    description:
      "Vector Wave Studio diseña y desarrolla sitios web de alto rendimiento, aplicaciones web a medida, APIs backend, automatización e IA aplicada para empresas modernas.",
  },

  header: {
    nav: [
      { label: "Servicios", href: "#services" },
      { label: "Proceso", href: "#process" },
      { label: "Equipo", href: "#team" },
      { label: "Contacto", href: "#contact" },
    ],
    cta: "Solicitar cotización",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    switchTo: "Cambiar idioma",
    languages: { en: "English", es: "Español" },
  },

  hero: {
    kicker: "Sistemas digitales con dirección clara",
    headlinePrefix: "Sitios web y sistemas digitales construidos con",
    headlineHighlight: "dirección clara",
    headlineSuffix: ".",
    subtitle:
      "Vector Wave Studio diseña y desarrolla sitios web de alto rendimiento, software a medida, automatización y soluciones de IA para empresas listas para avanzar.",
    primaryCta: "Crear mi sitio web",
    secondaryCta: "Ver servicios",
    trustNote: "Acceso directo a ingeniería · Alcance a medida · Alto rendimiento",
    terminal: {
      title: "sys.mesh // producción",
      region: "NODE.JS · POSTGRES · NEXT.JS",
      lines: [
        "POST /api/orders → 200 OK",
        "Esquema de PostgreSQL sincronizado",
        "Pipeline de CI activo",
      ],
    },
  },

  principles: {
    label: "Principio",
    items: [
      {
        icon: "search",
        title: "Diseño enfocado en conversión",
        body: "Estructura diseñada para convertir visitantes en leads calificados con jerarquía e intención deliberadas.",
      },
      {
        icon: "terminal",
        title: "Desarrollo a medida",
        body: "Sin constructores de páginas inflados ni plantillas. Código artesanal de alta velocidad optimizado para rendimiento.",
      },
      {
        icon: "schema",
        title: "Sistemas listos para escalar",
        body: "Arquitectura modular robusta que evoluciona sin fricciones junto con tus operaciones, sin reescrituras.",
      },
      {
        icon: "headset",
        title: "Acceso directo al equipo",
        body: "Sin intermediarios ni ejecutivos de cuenta. Habla directamente con los ingenieros que construyen tu software.",
      },
    ],
  },

  flagship: {
    kicker: "Servicio principal · Estrella",
    title: "Tu sitio web debería hacer más que verse bien.",
    subtitle:
      "Vector Wave Studio construye páginas de aterrizaje y sitios corporativos a medida, mobile-first, diseñados para explicar tu oferta con claridad y convertir visitas en consultas calificadas.",
    specsLabel: "Capacidad // Especificaciones",
    checklist: [
      {
        strong: "Diseño a medida",
        text: ", construido mobile-first desde cero para máxima resonancia visual.",
      },
      {
        strong: "Mensaje claro",
        text: " y jerarquía de página enfocada en conversión, adaptada a tu audiencia exacta.",
      },
      {
        strong: "Alto rendimiento",
        text: ", bases de SEO técnico, tiempos de carga inferiores al segundo y despliegue sólido.",
      },
      {
        strong: "Integraciones directas",
        text: " con formularios, API de WhatsApp, calendarios de agenda y sistemas CRM a medida.",
      },
    ],
    scopeNote: "Alcance a medida. Cotización ajustada exactamente a tus objetivos.",
    cta: "Hablemos de mi sitio web",
    mockup: {
      specLabel: "SPEC: LANDING_SYSTEM // PROD",
      desktop: "Escritorio",
      mobile: "Móvil",
      badge: "Listo para convertir · Responsive",
    },
  },

  capabilities: {
    kicker: "Ingeniería y tecnología aplicada",
    title: "Más allá del sitio web: bases digitales completas.",
    subtitle:
      "Los sitios web son solo la superficie. Ingeniería de bases digitales completas de punta a punta: arquitecturas backend escalables, aplicaciones web operativas a medida, utilidades nativas y agentes de IA aplicada.",
    okLabel: "SYS.OK",
    panels: [
      {
        tag: "SYS_01 // APIS CORE",
        icon: "server",
        title: "Desarrollo backend",
        body: "Manejo de datos confiable y seguro, con arquitectura de servidor de alto rendimiento pensada para durar.",
        items: [
          "APIs REST / GraphQL a medida con NestJS, TypeScript y Node.js",
          "Microservicios, arquitectura contenedorizada escalable y workers distribuidos",
          "Pipelines de webhooks y orquestación de automatización con n8n",
          "Autenticación robusta, permisos RBAC y estructuras multi-tenant",
        ],
        stack: "STACK: NODE · NEST · POSTGRES",
      },
      {
        tag: "SYS_02 // DASHBOARDS Y HERRAMIENTAS",
        icon: "layout",
        title: "Aplicaciones web",
        body: "Plataformas internas de negocio, portales de autoservicio para clientes y herramientas operativas a medida.",
        items: [
          "Aplicaciones web full-stack reactivas sobre bases modernas de Next.js",
          "Herramientas internas, bases de datos, dashboards y portales de gestión de servicios",
          "Acceso por roles y subsistemas de permisos granulares",
          "Integraciones con CRM, ERP y pasarelas de pago de terceros",
        ],
        stack: "STACK: NEXT.JS · TAILWIND · TYPESCRIPT",
      },
      {
        tag: "SYS_03 // HERRAMIENTAS NATIVAS",
        icon: "smartphone",
        title: "Desarrollo móvil",
        body: "Aplicaciones iOS y Android multiplataforma con rendimiento nativo.",
        items: [
          "Diagnóstico en campo, seguimiento logístico e integraciones POS",
          "Arquitecturas offline-first con sincronización automática robusta",
          "Puente con hardware nativo (cámara, GPS, periféricos Bluetooth)",
        ],
        stack: "STACK: REACT NATIVE · EXPO · OFFLINE-SYNC",
      },
      {
        tag: "SYS_04 // INTELIGENCIA Y AUTOMATIZACIÓN",
        icon: "sparkles",
        title: "IA aplicada",
        body: "Inteligencia artificial pragmática integrada en los puntos de contacto del negocio, eliminando tareas repetitivas.",
        items: [
          "Sistemas de chat con IA de alta precisión para calificación de leads",
          "Agentes de IA en WhatsApp Business conscientes del contexto, con conocimiento propietario",
          "Parseo inteligente de documentos, extracción de facturas y carga automática en el CRM",
          "Arquitecturas RAG (generación aumentada por recuperación) adaptadas a datos corporativos",
        ],
        stack: "STACK: APIS DE LLM · VECTOR STORE · AGENTES",
      },
    ],
  },

  process: {
    kicker: "Cómo trabajamos · El proceso",
    title: "Un proceso estructurado pensado para velocidad y claridad.",
    subtitle:
      "Eliminamos el exceso administrativo. Cada sprint tiene entregables explícitos, comunicación directa y resultados de ingeniería medibles.",
    phaseLabel: "Fase",
    steps: [
      {
        number: "01",
        title: "Descubrimiento",
        body: "Entendemos tu modelo de negocio, mercado objetivo, cuellos de botella funcionales y alcance explícito antes de escribir una línea de código.",
      },
      {
        number: "02",
        title: "Estrategia y diseño",
        body: "Mapeamos wireframes, jerarquía de mensaje, rutas de conversión e identidad estética para crear una interfaz visual con autoridad.",
      },
      {
        number: "03",
        title: "Desarrollo",
        body: "Construimos, integramos APIs de terceros y probamos rigurosamente el software sin sobrepeso, asegurando velocidad, seguridad y precisión responsive.",
      },
      {
        number: "04",
        title: "Lanzamiento y evolución",
        body: "Desplegamos en infraestructura de producción, monitoreamos la telemetría inicial y establecemos una base firme para la expansión continua de tu negocio.",
      },
    ],
  },

  team: {
    kicker: "El estudio · Equipo central",
    title: "Colaboración directa de ingeniería, desde el primer día.",
    subtitle:
      "Un estudio compacto de tres especialistas dedicados. Sin gerentes de cuenta, sin capas y sin traspasos a contratistas junior.",
    members: [
      {
        initials: "SR",
        role: "Fundador · Líder técnico",
        name: "Santiago Reyes",
        body: "Lidera arquitectura de software, sistemas backend, APIs, automatización e integraciones de IA aplicada. Convierte requisitos complejos en productos digitales escalables, mantenibles y de alto rendimiento.",
        tag: "SYSTEMS // INFRA CORE",
      },
      {
        initials: "MG",
        role: "Desarrolladora de software · QA",
        name: "Margorys Gomez",
        body: "Ejecuta interfaces frontend, conexiones con servicios de terceros y pruebas rigurosas entre navegadores. Garantiza que cada aplicación web y página sea resiliente, rápida, accesible y lista para escalar.",
        tag: "CLIENT-SIDE · TESTING",
      },
      {
        initials: "CJ",
        role: "Diseñadora UI · Estratega de contenido",
        name: "Carmen Jimenez",
        body: "Diseña interfaces claras, sistemas de diseño cohesivos y mensajes editoriales con autoridad. Une la complejidad técnica con experiencias de conversión atractivas.",
        tag: "EXPERIENCE · COPY",
      },
    ],
  },

  contact: {
    kicker: "Inicia un proyecto",
    title: "Construyamos algo con dirección clara.",
    subtitle:
      "Cuéntanos qué estás construyendo, qué problema quieres resolver y hacia dónde quieres ir. Te responderemos con el siguiente paso correcto.",
    groupContact: "01 // Información de contacto",
    groupServices: "02 // Capacidades requeridas",
    groupBudget: "03 // Presupuesto estimado",
    groupDetails: "04 // Detalles del proyecto",
    fields: {
      name: "Nombre completo",
      namePlaceholder: "Alex Rivera",
      email: "Email laboral",
      emailPlaceholder: "alex@empresa.com",
      business: "Nombre de la empresa",
      businessPlaceholder: "Apex Logistics",
      phone: "Teléfono / número de WhatsApp",
      phonePlaceholder: "+1 (555) 000-0000",
      capabilitiesHelp:
        "¿Qué tipo de solución necesitas? (selecciona todas las que apliquen)",
      message: "Cuéntanos sobre tu proyecto, plazos y cuellos de botella actuales",
      messagePlaceholder: "Describe qué quieres construir u optimizar...",
    },
    capabilities: [
      "Diseño y desarrollo web",
      "Aplicación web a medida",
      "Backend, API y microservicios",
      "Automatización de procesos (n8n, APIs)",
      "IA aplicada / agentes de WhatsApp",
      "Desarrollo móvil (iOS / Android)",
    ],
    budgets: [
      "< $1,000",
      "$1K - $2.5K",
      "$2.5K - $5K",
      "$5,000+",
      "No estoy seguro",
    ],
    submit: "Solicitar cotización",
    notice:
      "Respetamos tu bandeja de entrada. Normalmente respondemos en 1 día hábil.",
    form: {
      submitting: "Enviando...",
      success: {
        title: "Mensaje recibido",
        body: "Gracias. Revisaremos los requisitos de tu proyecto y responderemos en 1 día hábil.",
      },
      error:
        "Algo salió mal. Inténtalo de nuevo o contáctanos directamente por email o WhatsApp.",
    },
    reassurance: {
      title: "Colaboración directa",
      body: "Hablarás directamente con el equipo que construye tu proyecto. Sin intermediarios, sin agentes de ventas y sin traspasos.",
    },
    channelsLabel: "Canales inmediatos",
    emailLabel: "Email del estudio",
    phoneLabel: "Teléfono y WhatsApp directo",
    availabilityLabel: "Disponibilidad",
    availabilityValue: "Lunes – Viernes, EST",
    online: "EN LÍNEA",
    whatsapp: "WhatsApp",
    call: "Llamar directo",
  },

  finalCta: {
    kicker: "Impulso hacia adelante",
    title: "¿Necesitas una base digital más sólida para tu negocio?",
    subtitle:
      "Ya sea lanzar un sitio web insignia, diseñar una API o automatizar operaciones, te damos la claridad técnica para avanzar.",
    cta: "Solicitar cotización",
  },

  footer: {
    description:
      "Sistemas digitales con dirección clara. Ingeniería de sitios web, software, APIs, automatización e IA para plataformas modernas.",
    navigation: "Navegación",
    inquiries: "Consultas del estudio",
    rights: "© 2025 Vector Wave Studio. Todos los derechos reservados.",
    privacy: "Política de privacidad",
    terms: "Términos de servicio",
  },
};
