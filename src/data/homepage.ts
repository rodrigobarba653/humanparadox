import { contactData } from "./contact";

export const heroData = {
  subheading: "Transformando vidas desde 2015",
  heading: "Fisioterapia basada en rendimiento.",
  description:
    "Desde 2015, transformamos la rehabilitación en evolución. Bienvenido  a la metodología Paradox: Rehabilitación Basada en Performance.",
  ctaButtons: [
    {
      href: contactData.contact.whatsapp.href,
      variant: "fill-primary",
      text: "Agenda tu cita",
    },
  ],
};

export const aboutUsData = {
  heading: "Quiénes somos",
  description:
    "En Human Paradox creemos que el cuerpo no es una máquina que se repara, sino un sistema vivo que se entrena. Combinamos ciencia del ejercicio, tecnología clínica y un enfoque especializado para que no solo regreses a tu vida convencional, sino que lo hagas con un rendimiento superior al que tenías antes de lesionarte.",
};

export const empathyData = {
  subheading: "Nuestro enfoque",
  heading: "Consiste en 3 Fases. Un sistema diseñado para resultados reales:",
  phases: [
    {
      title: "Fase 1 (Origen)",
      description:
        "Diagnóstico biomecánico profundo para encontrar la causa, no el síntoma.",
    },
    {
      title: "Fase 2 (Resolución)",
      description:
        "Eliminación del dolor mediante terapia manual y diversas técnicas específicas según tu caso.",
    },
    {
      title: "Fase 3 (Evolución)",
      description:
        "Plan de performance personalizado para alcanzar tus nuevos objetivos físicos.",
    },
  ],
  ctaButtons: [
    {
      href: `tel:${contactData.contact.phone}`,
      variant: "fill-primary",
      text: "Agendar",
      icon: "mdi:phone",
    },
    {
      href: contactData.contact.whatsapp.href,
      variant: "outline-white",
      text: "WhatsApp",
      icon: "mdi:whatsapp",
      target: "_blank",
      rel: "noopener noreferrer",
    },
  ],
  image: {
    src: "/images/enfoque.jpg",
    alt: "Fisioterapeuta trabajando con paciente",
  },
};

export const servicesData = {
  subheading: "Nuestros servicios",
  heading: "Soluciones para cada perfil",
  description:
    "No importa tu punto de partida, tenemos un plan de evolución para ti.",
  cards: [
    {
      title: "HPx Performance",
      description:
        "Optimización de gesto deportivo, rendimiento y prevención de lesiones.",
      image: {
        src: "/images/performance.jpg",
        alt: "HPx Performance",
      },
      link: { href: "/rehabilitacion", text: "Ver más →" },
    },
    {
      title: "HPx Life Stages",
      description:
        "Embarazo, post-parto, piso pélvico y geriatría activa (Parkinson, movilidad).",
      image: {
        src: "/images/hero-5.jpg",
        alt: "HPx Life Stages",
      },
      link: { href: "/programas", text: "Ver más →" },
    },
    {
      title: "HPx Recovery",
      description:
        "Rehabilitación ortopédica (post-quirúrgico, fracturas) y neurológica compleja.",
      image: {
        src: "/images/recovery.jpg",
        alt: "HPx Recovery",
      },
      link: { href: "/rehabilitacion", text: "Ver más →" },
    },
  ],
};

export const specializationsData = {
  subheading: "Nuestro equipo",
  heading: "Expertos en tu evolución",
  description:
    "Más que fisioterapeutas, somos arquitectos del movimiento. Un equipo multidisciplinario con especialidades clínicas y visión de performance, listos para guiarte en cada fase de tu proceso.",
  specialties: [
    {
      title: "Neurológica",
      conditions: [
        "Esclerosis múltiple",
        "Lesiones medulares",
        "ACV o ECV",
        "Neuropatías periférica",
      ],
      icon: "mdi:brain",
    },
    {
      title: "Cardiopulmonar",
      conditions: [
        "EPOC",
        "Secuelas de infarto",
        "Insuficiencia cardíaca",
        "Fibrosis pulmonar",
      ],
      icon: "mdi:heart",
    },
    {
      title: "Ortopédica",
      conditions: [
        "Post quirúrgico",
        "Fracturas y Esguinces",
        "Tendinopatías",
        "Padecimientos de columna",
      ],
      icon: "mdi:bone",
    },
    {
      title: "Ginecológica",
      conditions: [
        "Todas las etapas de embarazo",
        "Post parto y secuelas",
        "Piso pélvico",
      ],
      icon: "mdi:human-pregnant",
    },
    {
      title: "Geriátrica",
      conditions: [
        "Parkinson's, Alzheimer's",
        "Osteoporosis, sarcopenia",
        "Prevención de caídas",
        "Fortalecimiento",
      ],
      icon: "mdi:elderly",
    },
    {
      title: "Rendimiento deportivo",
      conditions: [
        "Optimización de gesto deportivo",
        "Mejora de rendimiento",
        "Periodización del entrenamiento",
      ],
      icon: "mdi:basketball",
    },
  ],
};

export const breakImageData = {
  src: "/images/hero-9.jpg",
  alt: "Fisioterapia y rehabilitación - Human Paradox",
};
