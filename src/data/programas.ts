export const programasData = {
  hero: {
    title: "Programas Especiales",
    subtitle: "Planes diseñados para etapas y poblaciones específicas",
    image: {
      src: "/images/hero-16.jpg",
      alt: "Programas especiales de fisioterapia",
    },
  },
  mainPrograms: [
    {
      title: "Embarazo y Postparto",
      description:
        "Programas especializados para todas las etapas del embarazo, postparto y recuperación del piso pélvico.",
      features: [
        "Preparación física para el parto",
        "Manejo del dolor durante el embarazo",
        "Recuperación postparto",
        "Rehabilitación del piso pélvico",
      ],
      icon: "mdi:human-pregnant",
      link: { href: "/contacto", text: "Más información" },
    },
    {
      title: "Adulto Mayor",
      description:
        "Programas de mantenimiento, prevención de caídas y manejo de condiciones crónicas.",
      features: [
        "Prevención de caídas",
        "Fortalecimiento y equilibrio",
        "Manejo de osteoporosis",
        "Rehabilitación neurológica",
      ],
      icon: "mdi:elderly",
      link: { href: "/contacto", text: "Más información" },
    },
    {
      title: "Deportistas de Alto Rendimiento",
      description:
        "Optimización del rendimiento, prevención de lesiones y recuperación acelerada.",
      features: [
        "Optimización del gesto deportivo",
        "Prevención de lesiones",
        "Recuperación acelerada",
        "Periodización del entrenamiento",
      ],
      icon: "ic:round-sports-gymnastics",
      link: { href: "/contacto", text: "Más información" },
    },
  ],
  detailedPrograms: {
    title: "Programas Detallados",
    description:
      "Cada programa está diseñado específicamente para las necesidades únicas de cada población",
    programs: [
      {
        title: "Programa de Embarazo y Postparto",
        image: {
          src: "/images/hero-17.jpg",
          alt: "Programa de fisioterapia para embarazo y postparto",
        },
        sections: [
          {
            title: "Durante el Embarazo",
            items: [
              "Ejercicios seguros para cada trimestre",
              "Manejo del dolor lumbar y pélvico",
              "Preparación física para el parto",
              "Educación sobre cambios corporales",
            ],
          },
          {
            title: "Postparto",
            items: [
              "Recuperación del piso pélvico",
              "Fortalecimiento del core",
              "Corrección de diástasis abdominal",
              "Retorno gradual a la actividad física",
            ],
          },
        ],
      },
      {
        title: "Programa para Adulto Mayor",
        image: {
          src: "/images/hero-4.jpg",
          alt: "Programa de fisioterapia para adulto mayor",
        },
        imagePosition: "left",
        sections: [
          {
            title: "Prevención de Caídas",
            items: [
              "Evaluación del riesgo de caídas",
              "Ejercicios de equilibrio y coordinación",
              "Fortalecimiento de extremidades inferiores",
              "Educación sobre seguridad en el hogar",
            ],
          },
          {
            title: "Manejo de Condiciones Crónicas",
            items: [
              "Osteoporosis y sarcopenia",
              "Artritis y dolor articular",
              "Enfermedades neurológicas",
              "Mantenimiento de la independencia",
            ],
          },
        ],
      },
      {
        title: "Programa para Deportistas",
        image: {
          src: "/images/hero-7.jpg",
          alt: "Programa de fisioterapia deportiva",
        },
        sections: [
          {
            title: "Optimización del Rendimiento",
            items: [
              "Análisis biomecánico del gesto deportivo",
              "Corrección de patrones de movimiento",
              "Fortalecimiento específico del deporte",
              "Mejora de la eficiencia energética",
            ],
          },
          {
            title: "Prevención y Recuperación",
            items: [
              "Programas de prevención de lesiones",
              "Recuperación acelerada post-entrenamiento",
              "Manejo de sobrecarga y fatiga",
              "Periodización del entrenamiento",
            ],
          },
        ],
      },
    ],
  },
  benefits: {
    title: "Beneficios de Nuestros Programas",
    description: "Resultados medibles y mejoras en la calidad de vida",
    items: [
      {
        title: "Personalizado",
        description:
          "Cada programa se adapta a tus necesidades específicas y objetivos personales.",
        icon: "mdi:account-cog",
      },
      {
        title: "Basado en Evidencia",
        description:
          "Utilizamos técnicas y métodos respaldados por la investigación científica.",
        icon: "mdi:chart-line",
      },
      {
        title: "Resultados Medibles",
        description:
          "Seguimiento continuo del progreso con evaluaciones objetivas.",
        icon: "mdi:chart-bar",
      },
      {
        title: "Enfoque Integral",
        description:
          "Abordamos todos los aspectos de tu bienestar físico y funcional.",
        icon: "mdi:heart-pulse",
      },
    ],
  },
};
