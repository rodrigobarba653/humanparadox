import { contactData } from "./contact";

export const footerData = {
  logo: {
    text: "Human Paradox",
    abbreviation: "HP",
  },
  description:
    "Clínica de fisioterapia especializada en rehabilitación y rendimiento. Desde 2015 transformamos la forma de hacer fisioterapia en México.",
  socialMedia: contactData.socialMedia,
  siteMap: {
    title: "Mapa del Sitio",
    links: [
      { href: "/", text: "Inicio" },
      { href: "/rehabilitacion", text: "Rehabilitación" },
      { href: "/programas", text: "Programas" },
      { href: "/empresas", text: "Empresas" },
      { href: "/contacto", text: "Contacto" },
    ],
  },
  copyright: {
    text: `© 2018-2024 by ${contactData.business.name}`,
    additionalText: "Todos los derechos reservados.",
  },
};
