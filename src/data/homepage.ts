import { contactData } from "./contact";

export const heroData = {
  subheading: "Transformando vidas desde 2015",
  heading: "Fisioterapia basada en rendimiento.",
  description:
    "Desde 2015 transformamos la forma de hacer fisioterapia en México.",
  ctaButtons: [
    { href: "/contacto", variant: "fill-white", text: "Agenda tu cita" },
    { href: "/nosotros", variant: "outline-white", text: "Conoce más" },
  ],
};

export const aboutUsData = {
  heading: "Quiénes Somos",
  description:
    "Desde 2015 transformamos la forma de hacer fisioterapia en México. Combinamos conocimiento especializado, ciencia del ejercicio y programas personalizados para que tu rehabilitación no sea solo un regreso, sino una evolución. Una clínica de alta especialidad con programas personalizados para cada necesidad",
};

export const empathyData = {
  subheading: "Nuestro enfoque",
  heading: "Empatía y conexión con el paciente",
  description:
    "En Human Paradox no tratamos lesiones de manera genérica: trabajamos contigo. Escuchamos tu historia, entendemos tus metas y diseñamos un programa específico que responde a tu cuerpo y a tu vida real.",
  ctaButtons: [
    {
      href: `tel:${contactData.contact.phone}`,
      variant: "fill-white",
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
    src: "/images/hero-10.jpg",
    alt: "Fisioterapeuta trabajando con paciente",
  },
};

export const servicesData = {
  subheading: "Nuestros servicios",
  heading: "Lo Que Ofrecemos",
  description:
    "Una clínica de alta especialidad con programas personalizados para cada necesidad",
  cards: [
    {
      title: "Rehabilitación y desempeño",
      description:
        "Reduce el dolor, recupera tu seguridad y optimiza tu movimiento con programas personalizados basados en ciencia y ejercicio.",
      image: {
        src: "/images/hero-2.jpg",
        alt: "Rehabilitación y desempeño",
      },
      link: { href: "/rehabilitacion", text: "Ver más →" },
    },
    {
      title: "Programas especiales",
      description:
        "Planes diseñados para etapas y poblaciones específicas: embarazo y postparto, adulto mayor y deportistas de alto rendimiento.",
      image: {
        src: "/images/hero-5.jpg",
      },
      link: { href: "/programas", text: "Ver más →" },
    },
    {
      title: "Empresas y convenios",
      description:
        "Soluciones de fisioterapia y bienestar para organizaciones, estudios o equipos deportivos, enfocadas en prevenir lesiones y mejorar el desempeño.",
      image: {
        src: "/images/hero-13.jpg",
        alt: "Empresas y convenios",
      },
      link: { href: "/empresas", text: "Ver más →" },
    },
  ],
};

export const specializationsData = {
  subheading: "Nuestro equipo",
  heading: "Una clínica de alta especialidad",
  description:
    "Nuestros terapeutas cuentan con especialidades que nos permiten acompañar cada proceso de rehabilitación, sin importar lo simple o complejo que sea.",
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
