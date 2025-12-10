import { Navigation, Footer } from "@/components/layout";
import { ScrollReveal } from "@/components/UI";
import { contactData } from "@/data";

export const metadata = {
  title: "Aviso de Privacidad - Human Paradox",
  description: "Aviso de privacidad de Human Paradox SAPI de CV",
};

export default function Privacidad() {
  return (
    <div className="min-h-screen bg-primary">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-4">
        <div className="px-4 sm:px-6 lg:px-8 md:py-20 py-16 bg-almost-black md:rounded-[4rem] rounded-[3rem] overflow-hidden max-w-[95vw] mx-auto relative">
          <div className="relative z-10 text-center">
            <ScrollReveal delay={100}>
              <h1 className="heading-hero text-primary">
                Aviso de Privacidad
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-xl md:text-2xl text-primary mt-4">
                Human Paradox SAPI de CV
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="md:py-32 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <ScrollReveal delay={100}>
              <div className="bg-white p-8 rounded-2xl border-2 border-almost-black space-y-6">
                <div>
                  <h2 className="heading-section text-almost-black mb-4">
                    Política de Privacidad y Trata de Datos Personales
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    En cumplimiento con lo establecido por la Ley Federal de Protección de Datos Personales en Posesión de Particulares en sus artículos 2 fracción II, 8, 12, 15 y 16, la empresa <strong>Human Paradox SAPI de CV</strong>, con domicilio en Av. Stim 1286, colonia Bosques de las Lomas, 05120, Cuajimalpa de Morelos, Ciudad de México, es responsable de recabar sus datos personales, del uso que se le dé a los mismos, así como su protección, le informa su política de privacidad y trata de datos personales, a través del presente aviso.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    "La Empresa" hace de su conocimiento que sus datos personales serán tratados y resguardados con base en los principios de licitud, calidad, consentimiento, información, finalidad, lealtad, proporcionalidad y responsabilidad, establecidos en la Ley.
                  </p>
                </div>

                <div>
                  <h2 className="heading-section text-almost-black mb-4">
                    Información que Recopilamos
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Recibimos, recopilamos y almacenamos cualquier información que ingrese en nuestro sitio web o nos proporciones de otra manera. Además, recogemos la dirección de protocolo de Internet (IP) utilizada para conectar tu computadora a Internet; datos de inicio de sesión, dirección de correo electrónico, contraseña, información de la computadora y la conexión y el historial de compras. Podemos usar herramientas de software para medir y recopilar información de la sesión, incluidos los tiempos de respuesta de la página, la duración de las visitas a determinadas páginas, la información de interacción de la página y los métodos utilizados para navegar fuera de la página. También recopilamos información de identificación personal (incluido nombres, correo electrónico, contraseña, comunicaciones), detalles de pago (incluida la información de la tarjeta de crédito), comentarios, sugerencias, reseñas de productos, recomendaciones y perfil personal.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    Cuando realizas una transacción en nuestra página web, como parte del proceso, recopilamos información personal que nos proporcionas, como tu nombre, dirección física y dirección de correo electrónico. Tu información personal será utilizada solo para los motivos específicos indicados anteriormente.
                  </p>
                </div>

                <div>
                  <h2 className="heading-section text-almost-black mb-4">
                    Propósitos del Tratamiento
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Recopilamos dicha información personal y no personal para los siguientes propósitos:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Para proporcionar y operar los servicios;</li>
                    <li>Para proporcionar a nuestros usuarios asistencia continua al cliente y soporte técnico;</li>
                    <li>Para poder contactar a nuestros visitantes y usuarios con avisos generales y personalizados relacionados con el servicio y mensajes promocionales;</li>
                    <li>Para crear datos estadísticos agregados y otra información no personal agregada o deducida, que nosotros o nuestros socios comerciales podamos utilizar para proporcionar y mejorar nuestros servicios respectivos;</li>
                    <li>Para cumplir con las leyes y regulaciones aplicables.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="heading-section text-almost-black mb-4">
                    Almacenamiento y Seguridad de Datos
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Nuestro sitio web está alojado en la plataforma Wix.com. Wix.com nos proporciona la plataforma en línea que nos permite venderte nuestros productos y servicios. Tus datos pueden almacenarse a través del almacenamiento de datos de Wix.com, las bases de datos y las aplicaciones generales de Wix.com. Ellos almacenan tus datos en servidores seguros detrás de un firewall.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    Todas las pasarelas de pago directo ofrecidas por Wix.com y utilizadas por nuestra compañía se adhieren a los estándares establecidos por PCI-DSS administrados por el PCI Security Standards Council, que es un esfuerzo conjunto de marcas como Visa, MasterCard, American Express y Discover. Los requisitos de PCI-DSS ayudan a garantizar el manejo seguro de la información de la tarjeta de crédito por parte de nuestra tienda y sus proveedores de servicios.
                  </p>
                </div>

                <div>
                  <h2 className="heading-section text-almost-black mb-4">
                    Comunicaciones
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Podemos comunicarnos contigo para notificarte sobre tu cuenta, para solucionar problemas con tu cuenta, resolver una disputa, cobrar tarifas o dinero adeudado, para sondear tus opiniones a través de encuestas o cuestionarios, para enviar actualizaciones sobre nuestra empresa, o cuando sea necesario para contactarte para hacer cumplir nuestro Acuerdo de usuario, las leyes nacionales aplicables y cualquier acuerdo que podamos tener contigo. A estos efectos, podemos comunicarnos contigo por correo electrónico, teléfono, mensajes de texto, redes sociales y correo postal.
                  </p>
                </div>

                <div>
                  <h2 className="heading-section text-almost-black mb-4">
                    Nuestro Compromiso
                  </h2>
                  <ol className="list-decimal list-inside space-y-4 text-gray-700 ml-4">
                    <li className="pl-2">
                      Los datos solicitados en el formulario de contacto no son obligatorios, la finalidad al obtenerlos es utilizarlos para poder establecer acercamiento (contacto) con el usuario en relación a su petición y/o comentario.
                    </li>
                    <li className="pl-2">
                      El sitio web www.hparadox.com sólo podrá hacer uso de los datos proporcionados para hacer llegar comunicados relacionados con nuestro objeto, fines y propuestas.
                    </li>
                    <li className="pl-2">
                      Los datos ingresados y proporcionados en el formulario o directamente en nuestras clínicas no serán difundidos, distribuidos o comercializados con ninguna instancia ajena a nuestra empresa o grupo empresarial asociado.
                    </li>
                    <li className="pl-2">
                      En caso de que desee acceder, rectificar o cancelar sus datos personales, ser removido de nuestra base de datos u oponerse al tratamiento de los mismos, podrá, en cualquier momento, solicitarlo vía correo electrónico a{" "}
                      <a
                        href="mailto:info@hparadox.com"
                        className="text-almost-black hover:underline font-semibold"
                      >
                        info@hparadox.com
                      </a>{" "}
                      o vía mensaje en la propia aplicación y sólo deberá proporcionar nombre y correo electrónico; obtendrá respuesta favorable en un plazo máximo de 48 horas.
                    </li>
                    <li className="pl-2">
                      Sus observaciones y/o peticiones pueden ser incluidas como parte de los informes estadísticos institucionales; sin embargo, nunca será incluida información que permitan identificarle en lo individual.
                    </li>
                    <li className="pl-2">
                      Cualquier modificación a este aviso de privacidad podrá consultarla en nuestro portal web. Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento, por lo tanto, revísala con frecuencia. Los cambios y aclaraciones tendrán efecto inmediatamente después de su publicación en la página web. Si realizamos cambios sustanciales a esta política, te notificaremos que se ha actualizado, para que sepas qué información recopilamos, cómo la usamos y en qué circunstancias, si corresponde, usamos o divulgamos la información.
                    </li>
                  </ol>
                </div>

                <div>
                  <h2 className="heading-section text-almost-black mb-4">
                    Configuración de Cookies
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Los siguientes enlaces explican cómo acceder a la configuración de cookies en varios navegadores:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>
                      <a
                        href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-almost-black hover:underline"
                      >
                        Configuraciones de cookies en Firefox
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-almost-black hover:underline"
                      >
                        Configuraciones de cookies en Internet Explorer
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://support.google.com/chrome/answer/95647?hl=es"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-almost-black hover:underline"
                      >
                        Configuraciones de cookies en Google Chrome
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-almost-black hover:underline"
                      >
                        Configuraciones de cookies en Safari (OS X)
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://support.apple.com/es-es/HT201265"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-almost-black hover:underline"
                      >
                        Configuraciones de cookies en Safari (iOS)
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://support.google.com/chrome/answer/95647?hl=es&co=GENIE.Platform%3DAndroid"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-almost-black hover:underline"
                      >
                        Configuraciones de cookies en Android
                      </a>
                    </li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    Para inhabilitar el seguimiento de Google Analytics en todos los sitios web, visita este enlace:{" "}
                    <a
                      href="http://tools.google.com/dlpage/gaoptout"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-almost-black hover:underline"
                    >
                      http://tools.google.com/dlpage/gaoptout
                    </a>{" "}
                    (enlace en inglés)
                  </p>
                </div>

                <div>
                  <h2 className="heading-section text-almost-black mb-4">
                    Contacto
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Si requiere mayor información respecto a nuestra <strong>POLÍTICA DE PRIVACIDAD Y TRATA DE DATOS PERSONALES</strong> podrá escribir a{" "}
                    <a
                      href="mailto:info@hparadox.com"
                      className="text-almost-black hover:underline font-semibold"
                    >
                      info@hparadox.com
                    </a>{" "}
                    o bien, puede dirigirse a nuestras instalaciones en Av. Stim 1286, colonia Bosques de las Lomas, 05120, Cuajimalpa de Morelos, Ciudad de México o comunicarse al teléfono:{" "}
                    <a
                      href="tel:+525554531398"
                      className="text-almost-black hover:underline font-semibold"
                    >
                      (55) 5453 1398
                    </a>{" "}
                    con nuestro responsable de trata y compilación de los datos.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

