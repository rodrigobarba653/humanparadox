import { Navigation, Footer } from "@/components/layout";
import { programasData } from "@/data";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Programas() {
  return (
    <div className="min-h-screen bg-primary">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-4">
        <div className="px-4 sm:px-6 lg:px-8 md:py-40 py-20  bg-almost-black md:rounded-[4rem] rounded-[3rem] overflow-hidden max-w-[95vw] mx-auto relative">
          {/* Background Image */}
          <img
            src={programasData.hero.image.src}
            alt={programasData.hero.image.alt}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-almost-black/90 to-almost-black/40 w-full h-full"></div>
          <div className="relative z-10 text-center">
            <h1 className="heading-hero text-primary">
              {programasData.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-primary mb-4">
              {programasData.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Programs Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {programasData.mainPrograms.map((program, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border-2 border-almost-black"
              >
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
                  <Icon icon={program.icon} className="w-8 h-8 text-white" />
                </div>
                <h2 className="heading-section-small text-almost-black">
                  {program.title}
                </h2>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <ul className="space-y-2">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-600">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Programs Section */}
      <section className="md:pt-32 pt-16 pb-16 md:bg-almost-black! bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:text-center text-left">
            <h2 className="heading-section-large text-almost-black md:text-primary!">
              {programasData.detailedPrograms.title}
            </h2>
            <p className="text-lg text-almost-black md:text-primary! max-w-3xl mx-auto">
              {programasData.detailedPrograms.description}
            </p>
          </div>
        </div>
      </section>

      {/* Embarazo y Postparto Detailed */}
      <section className="md:pb-32 pb-16 bg-almost-black md:pt-0 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <h3 className="heading-subsection-xl text-primary">
                {programasData.detailedPrograms.programs[0].title}
              </h3>
              <div className="space-y-6">
                {programasData.detailedPrograms.programs[0].sections.map(
                  (section, index) => (
                    <div key={index}>
                      <h4 className="heading-small text-primary">
                        {section.title}
                      </h4>
                      <ul className="space-y-2 text-primary">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="md:h-[600px] h-[320px] overflow-hidden rounded-4xl">
              <img
                src={programasData.detailedPrograms.programs[0].image.src}
                alt={programasData.detailedPrograms.programs[0].image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Adulto Mayor Detailed */}
      <section className="bg-almost-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div className="order-2 lg:order-1">
              <div className="md:h-[600px] h-[320px] overflow-hidden rounded-4xl">
                <img
                  src={programasData.detailedPrograms.programs[1].image.src}
                  alt={programasData.detailedPrograms.programs[1].image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="heading-subsection-xl text-primary">
                {programasData.detailedPrograms.programs[1].title}
              </h3>
              <div className="space-y-6">
                {programasData.detailedPrograms.programs[1].sections.map(
                  (section, index) => (
                    <div key={index}>
                      <h4 className="heading-small text-primary">
                        {section.title}
                      </h4>
                      <ul className="space-y-2 text-primary">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deportistas Detailed */}
      <section className="md:pb-32 py-16 bg-almost-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="heading-subsection-xl text-primary">
                {programasData.detailedPrograms.programs[2].title}
              </h3>
              <div className="space-y-6">
                {programasData.detailedPrograms.programs[2].sections.map(
                  (section, index) => (
                    <div key={index}>
                      <h4 className="heading-small text-primary">
                        {section.title}
                      </h4>
                      <ul className="space-y-2 text-primary">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="md:h-[600px] h-[320px] overflow-hidden rounded-4xl">
              <img
                src={programasData.detailedPrograms.programs[2].image.src}
                alt={programasData.detailedPrograms.programs[2].image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="md:py-24 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-section text-almost-black mb-4">
              {programasData.benefits.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {programasData.benefits.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programasData.benefits.items.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon icon={benefit.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="heading-subsection text-almost-black">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
