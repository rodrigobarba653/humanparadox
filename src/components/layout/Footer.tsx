import Link from "next/link";
import { Icon } from "@iconify/react";
import { CTAButton } from "../UI";
import { footerData, contactData } from "@/data";

export default function Footer() {
  return (
    <footer className="bg-almost-black md:pt-32 pt-16">
      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:pb-20 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map and Contact Info */}
          <div className="rounded-xl bg-[#f8f6e3] p-6 h-fit">
            <h3 className="text-2xl font-semibold text-black mb-6">
              Ubicación
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-black mb-2">Dirección</h4>
                <p className="text-black">
                  {contactData.address.street}
                  <br />
                  {contactData.address.neighborhood}
                  <br />
                  {contactData.address.city}
                  <br />
                  {contactData.address.state}
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-2">Teléfono</h4>
                <a
                  href={`tel:${contactData.contact.phone}`}
                  className="text-black hover:text-gray-600 transition-colors"
                >
                  {contactData.contact.phone}
                </a>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-2">Email</h4>
                <a
                  href={`mailto:${contactData.contact.email}`}
                  className="text-black hover:text-gray-600 transition-colors"
                >
                  {contactData.contact.email}
                </a>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-2">Horarios</h4>
                <div className="text-black space-y-1">
                  <p>Lunes a jueves: 8:00 am a 9:00 pm</p>
                  <p>Viernes: 8:00 am a 1:00 pm</p>
                  <p>Sábado y domingo: Cerrado</p>
                </div>
              </div>
              <div className="mb-6">
                <CTAButton
                  href="https://maps.google.com/?q=Av.+Stim+1286,+Bosques+de+las+Lomas,+Cuajimalpa+de+Morelos,+05120+Ciudad+de+México,+CDMX,+México"
                  variant="outline-dark"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit"
                >
                  <Icon icon="mdi:map-marker" className="text-xl" />
                  Ver en Google Maps
                </CTAButton>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-lg text-primary mb-4 uppercase tracking-wider">
              CONTACTO
            </p>
            <h2 className="text-4xl md:text-5xl text-primary font-bold mb-6 tracking-[-1px]">
              ¿Listo para comenzar tu rehabilitación?
            </h2>
            <p className="text-xl text-primary mb-8">
              En Human Paradox no tratamos lesiones de manera genérica:
              trabajamos contigo. Escuchamos tu historia, entendemos tus metas y
              diseñamos un programa específico.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton href="tel:+525554531398" variant="fill-white">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Agendar
              </CTAButton>
              <CTAButton
                href="https://wa.me/525554531398"
                variant="outline-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                WhatsApp
              </CTAButton>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-primary pt-12">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="/images/logo-white.svg"
                alt="Human Paradox"
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              {footerData.description}
            </p>
            <div className="flex space-x-4">
              {footerData.socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <span className="sr-only">{social.name}</span>
                  <Icon icon={social.icon} className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Site Map */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">
              {footerData.siteMap.title}
            </h3>
            <div className="space-y-2 text-gray-300">
              {footerData.siteMap.links.map((link, index) => (
                <p key={index}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.text}
                  </a>
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary text-primary mt-8 pt-8 text-center">
          <p>&copy; 2018-2025 by Human Paradox SAPI de CV</p>
          <p className="mt-2">
            <Link
              href="/privacidad"
              className="hover:text-white transition-colors"
            >
              Consulta aquí nuestro aviso de privacidad
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
