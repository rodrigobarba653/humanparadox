import { contactData } from "./contact";

export const empresasData = {
  hero: {
    title: "Empresas y Convenios",
    subtitle: "Soluciones de fisioterapia y bienestar para organizaciones",
    image: {
      src: "/images/hero-18.jpg",
      alt: "Servicios corporativos de fisioterapia",
    },
  },
  mainServices: {
    title: "Bienestar Corporativo",
    description:
      "En Human Paradox entendemos que el bienestar de tus empleados es fundamental para el éxito de tu organización. Ofrecemos soluciones integrales de fisioterapia y bienestar diseñadas específicamente para el entorno corporativo.",
    additionalDescription:
      "Nuestros programas están enfocados en prevenir lesiones laborales, mejorar el rendimiento y promover un ambiente de trabajo saludable y productivo.",
    image: {
      src: "/images/hero-14.jpg",
      alt: "Servicios corporativos de fisioterapia",
    },
    link: { href: contactData.contact.whatsapp.href, text: "Solicitar información" },
  },
  services: {
    title: "Nuestros Servicios Corporativos",
    description: "Soluciones integrales para el bienestar de tu equipo",
    items: [
      {
        title: "Evaluaciones Ergonómicas",
        description:
          "Análisis del puesto de trabajo y recomendaciones para prevenir lesiones por movimientos repetitivos.",
        benefits: [
          "Reducción de lesiones",
          "Mejora de productividad",
          "Cumplimiento normativo",
        ],
        icon: "mdi:clipboard-check",
      },
      {
        title: "Programas de Prevención",
        description:
          "Talleres y capacitaciones para prevenir lesiones laborales y promover hábitos saludables.",
        benefits: [
          "Educación del personal",
          "Prevención proactiva",
          "Reducción de ausentismo",
        ],
        icon: "mdi:book-education",
      },
      {
        title: "Tratamiento In-Situ",
        description:
          "Servicios de fisioterapia directamente en las instalaciones de tu empresa.",
        benefits: ["Conveniencia", "Menos tiempo perdido", "Acceso inmediato"],
        icon: "mdi:office-building",
      },
      {
        title: "Rehabilitación Laboral",
        description:
          "Programas especializados para la reintegración laboral después de lesiones.",
        benefits: [
          "Retorno seguro al trabajo",
          "Reducción de costos",
          "Mejor recuperación",
        ],
        icon: "mdi:heart-pulse",
      },
      {
        title: "Bienestar Integral",
        description:
          "Programas de ejercicio, relajación y manejo del estrés para el bienestar general.",
        benefits: [
          "Mejor salud mental",
          "Reducción del estrés",
          "Mayor satisfacción",
        ],
        icon: "mdi:meditation",
      },
      {
        title: "Consultoría Especializada",
        description:
          "Asesoría en políticas de bienestar y programas de salud ocupacional.",
        benefits: [
          "Estrategias personalizadas",
          "Cumplimiento legal",
          "ROI mejorado",
        ],
        icon: "mdi:file-document-edit",
      },
    ],
  },
  industries: {
    title: "Industrias que Atendemos",
    description:
      "Experiencia en diversos sectores con necesidades específicas de bienestar",
    items: [
      {
        title: "Oficinas Corporativas",
        description:
          "Servicios para empresas de servicios, consultorías y corporativos.",
        focus: "Ergonomía, estrés, sedentarismo",
        image: {
          src: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
          alt: "Oficinas corporativas",
        },
      },
      {
        title: "Manufactura",
        description:
          "Programas para la industria manufacturera y de producción.",
        focus: "Lesiones por movimientos repetitivos, fatiga",
        image: {
          src: "/images/hero-20.jpg",
          alt: "Industria manufacturera",
        },
      },
      {
        title: "Salud",
        description:
          "Servicios especializados para el sector salud y hospitalario.",
        focus: "Fatiga física, estrés laboral, lesiones por levantamiento",
        image: {
          src: "/images/hero-19.jpg",
          alt: "Sector salud",
        },
      },
    ],
  },
  benefits: {
    title: "Beneficios para tu Empresa",
    description:
      "Inversión en el bienestar de tus empleados que se traduce en resultados tangibles",
    items: [
      {
        title: "Reducción de Costos",
        description:
          "Menor ausentismo, reducción de costos médicos y de seguros a través de programas preventivos.",
      },
      {
        title: "Mayor Productividad",
        description:
          "Empleados más saludables y motivados trabajan con mayor eficiencia y compromiso.",
      },
      {
        title: "Mejor Retención",
        description:
          "Programas de bienestar mejoran la satisfacción y retención del personal.",
      },
      {
        title: "Cumplimiento Legal",
        description:
          "Cumplimiento de normativas de seguridad y salud ocupacional vigentes.",
      },
      {
        title: "Mejor Imagen Corporativa",
        description:
          "Empresa reconocida por cuidar el bienestar y desarrollo de sus empleados.",
      },
      {
        title: "ROI Positivo",
        description:
          "Retorno de inversión medible a través de métricas de salud y productividad.",
      },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Beneficios corporativos de bienestar",
    },
  },
  process: {
    title: "Nuestro Proceso",
    description: "Cómo implementamos programas de bienestar corporativo",
    steps: [
      {
        step: "01",
        title: "Evaluación Inicial",
        description:
          "Análisis de necesidades, riesgos y oportunidades de mejora en tu organización.",
      },
      {
        step: "02",
        title: "Diseño del Programa",
        description:
          "Desarrollo de un programa personalizado basado en tus necesidades específicas.",
      },
      {
        step: "03",
        title: "Implementación",
        description:
          "Puesta en marcha del programa con capacitación y seguimiento continuo.",
      },
      {
        step: "04",
        title: "Evaluación y Mejora",
        description:
          "Monitoreo de resultados y ajustes del programa para optimizar beneficios.",
      },
    ],
  },
};
