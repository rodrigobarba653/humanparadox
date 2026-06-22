import Link from "next/link";
import { contactData } from "@/data";
import { CTAButton } from "@/components/UI";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-almost-black mb-4">404</h1>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Error Message */}
        <div className="mb-12">
          <h2 className="heading-section text-almost-black mb-4">
            Página no encontrada
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>
          <p className="text-gray-500">
            Pero no te preocupes, podemos ayudarte a encontrar lo que necesitas.
          </p>
        </div>

        {/* Navigation Options */}
        <div className="space-y-4 mb-12">
          <h3 className="heading-subsection text-almost-black mb-6">
            ¿Qué te gustaría hacer?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/"
              className="block p-6 bg-primary rounded-2xl border-2 border-almost-black hover:bg-almost-black hover:text-primary transition-all duration-300 group"
            >
              <div className="text-2xl mb-2">🏠</div>
              <h4 className="heading-card text-almost-black group-hover:text-primary">
                Ir al Inicio
              </h4>
              <p className="text-sm text-gray-600 group-hover:text-gray-300">
                Regresa a nuestra página principal
              </p>
            </Link>

            <Link
              href="/rehabilitacion"
              className="block p-6 bg-primary rounded-2xl border-2 border-almost-black hover:bg-almost-black hover:text-primary transition-all duration-300 group"
            >
              <div className="text-2xl mb-2">🏥</div>
              <h4 className="heading-card text-almost-black group-hover:text-primary">
                Rehabilitación
              </h4>
              <p className="text-sm text-gray-600 group-hover:text-gray-300">
                Conoce nuestros servicios
              </p>
            </Link>

            <Link
              href="/programas"
              className="block p-6 bg-primary rounded-2xl border-2 border-almost-black hover:bg-almost-black hover:text-primary transition-all duration-300 group"
            >
              <div className="text-2xl mb-2">📋</div>
              <h4 className="heading-card text-almost-black group-hover:text-primary">
                Programas
              </h4>
              <p className="text-sm text-gray-600 group-hover:text-gray-300">
                Explora nuestros programas especiales
              </p>
            </Link>

            <Link
              href="/empresas"
              className="block p-6 bg-primary rounded-2xl border-2 border-almost-black hover:bg-almost-black hover:text-primary transition-all duration-300 group"
            >
              <div className="text-2xl mb-2">🏢</div>
              <h4 className="heading-card text-almost-black group-hover:text-primary">
                Empresas
              </h4>
              <p className="text-sm text-gray-600 group-hover:text-gray-300">
                Servicios corporativos
              </p>
            </Link>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-almost-black rounded-2xl p-8 text-white">
          <h3 className="heading-subsection text-primary mb-4">
            ¿Necesitas ayuda?
          </h3>
          <p className="text-gray-300 mb-6">
            Nuestro equipo está aquí para ayudarte. Contáctanos directamente.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton
              href={contactData.contact.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>💬</span>
              WhatsApp
            </CTAButton>

            <CTAButton
              href={`tel:${contactData.contact.phone}`}
              variant="outline-white"
            >
              <span>📞</span>
              Llamar
            </CTAButton>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-sm text-gray-500">
          <p>Human Paradox - Fisioterapia basada en rendimiento</p>
          <p>Desde 2015 transformando vidas</p>
        </div>
      </div>
    </div>
  );
}
