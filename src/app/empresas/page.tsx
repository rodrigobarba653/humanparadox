"use client";

import { Navigation, Footer } from "@/components/layout";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { empresasData } from "@/data";

export default function Empresas() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-primary">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-4">
        <div className="px-4 sm:px-6 lg:px-8 md:py-40 py-20  bg-almost-black md:rounded-[4rem] rounded-[3rem] overflow-hidden max-w-[95vw] mx-auto relative">
          {/* Background Image */}
          <img
            src={empresasData.hero.image.src}
            alt={empresasData.hero.image.alt}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-almost-black/90 to-almost-black/40 w-full h-full"></div>
          <div className="relative z-10 text-center">
            <h1 className="heading-hero text-primary">
              {empresasData.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-primary mb-4">
              {empresasData.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-32 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="heading-section text-almost-black">
                {empresasData.mainServices.title}
              </h2>
              <p className="text-lg text-almost-black mb-6">
                {empresasData.mainServices.description}
              </p>
              <p className="text-lg text-almost-black mb-8">
                {empresasData.mainServices.additionalDescription}
              </p>
              <Link
                href={empresasData.mainServices.link.href}
                className="bg-almost-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors duration-200 font-medium"
              >
                {empresasData.mainServices.link.text}
              </Link>
            </div>
            <div className="md:h-[600px] h-[320px] overflow-hidden rounded-4xl">
              <img
                src={empresasData.mainServices.image.src}
                alt={empresasData.mainServices.image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="md:pb-32 pb-16 mt-8 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="heading-section text-almost-black mb-4">
              {empresasData.services.title}
            </h2>
            <p className="text-lg text-almost-black max-w-3xl mx-auto">
              {empresasData.services.description}
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {empresasData.services.items.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border-2 border-almost-black"
              >
                <div className="w-16 h-16 bg-almost-black rounded-full flex items-center justify-center mb-6">
                  <Icon icon={service.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="heading-subsection text-almost-black">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="space-y-2">
                  <h4 className="heading-tiny text-almost-black">
                    Beneficios:
                  </h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-gray-600 text-sm">
                        • {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Industries Section */}
      <section className="py-20 bg-almost-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-section text-primary mb-4">
              {empresasData.industries.title}
            </h2>
            <p className="text-lg text-primary max-w-3xl mx-auto">
              {empresasData.industries.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {empresasData.industries.items.map((industry, index) => (
              <div
                key={index}
                className="relative lg:h-[400px] h-[300px] rounded-2xl  overflow-hidden group cursor-pointer transition-transform duration-300 md:hover:scale-[1.02]"
              >
                {/* Background Image */}
                <img
                  src={industry.image.src}
                  alt={industry.image.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-almost-black/70 to-transparent"></div>
                {/* Content */}
                <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                  <h3 className="heading-card-large text-primary">
                    {industry.title}
                  </h3>
                  <p className="text-primary lg:mb-2 mb-2 opacity-90">
                    {industry.description}
                  </p>
                  <p className="text-sm text-primary font-medium opacity-80">
                    Enfoque: {industry.focus}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="heading-section text-almost-black mb-4">
                {empresasData.benefits.title}
              </h2>
              <p className="text-lg text-almost-black mb-8">
                {empresasData.benefits.description}
              </p>

              {/* Accordion */}
              <div className="-space-y-0.5">
                {empresasData.benefits.items.map((benefit, index) => (
                  <div
                    key={index}
                    className={`bg-white border-2 border-almost-black overflow-hidden ${
                      index === 0 ? "rounded-t-2xl" : ""
                    } ${
                      index === empresasData.benefits.items.length - 1
                        ? "rounded-b-2xl"
                        : ""
                    }`}
                  >
                    <button
                      onClick={() =>
                        setOpenAccordion(openAccordion === index ? null : index)
                      }
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    >
                      <h3 className="heading-subsection text-almost-black">
                        {benefit.title}
                      </h3>
                      <Icon
                        icon={
                          openAccordion === index
                            ? "mdi:chevron-up"
                            : "mdi:chevron-down"
                        }
                        className="w-6 h-6 text-almost-black transition-transform duration-200"
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openAccordion === index
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-6 pb-6">
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="md:h-full h-[320px] overflow-hidden rounded-4xl">
              <img
                src={empresasData.benefits.image.src}
                alt={empresasData.benefits.image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-almost-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-section text-primary mb-4">
              {empresasData.process.title}
            </h2>
            <p className="text-lg text-primary max-w-3xl mx-auto">
              {empresasData.process.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {empresasData.process.steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-almost-black rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="heading-subsection text-primary">
                  {step.title}
                </h3>
                <p className="text-primary">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
