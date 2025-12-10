import { Navigation, Footer } from "@/components/layout";
import { CTAButton, ScrollReveal } from "@/components/UI";
import { Icon } from "@iconify/react";
import Link from "next/link";
import {
  heroData,
  aboutUsData,
  empathyData,
  servicesData,
  specializationsData,
  breakImageData,
} from "@/data";

export default function Home() {
  return (
    <div className="min-h-screen mt-4">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-16 lg:min-h-screen md:h-[80vh] h-[90vh] flex md:items-center items-end overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 md:rounded-[4rem] rounded-[3rem] overflow-hidden max-w-[95vw] mx-auto">
          {/* Desktop Image */}
          <img
            src="/images/hero-11.jpg"
            alt="Fisioterapia y rehabilitación"
            className="hidden md:block w-full h-full object-cover"
          />
          {/* Mobile Image */}
          <img
            src="/images/hero-11-mobile.jpg"
            alt="Fisioterapia y rehabilitación"
            className="md:hidden w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#282828]/90 to-[#282828]/40 w-full h-full"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl px-4 sm:px-8 lg:px-40 md:py-20 py-8">
          <div className="text-left max-w-3xl">
            <ScrollReveal delay={300}>
              <h1
                className="heading-hero-large text-primary"
                style={{
                  fontFamily:
                    "var(--font-open-sans), Arial, Helvetica, sans-serif",
                }}
              >
                {heroData.heading}
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={600}>
              <p className="text-lg sm:text-xl md:text-2xl text-primary mb-8 max-w-xl">
                {heroData.description}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={900}>
              <div className="flex md:flex-row flex-col gap-4">
                {heroData.ctaButtons.map((button, index) => (
                  <CTAButton
                    className="lg:w-fit w-full"
                    key={index}
                    href={button.href}
                    variant={button.variant as any}
                  >
                    {button.text}
                  </CTAButton>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* About us Section */}
      <section className="md:py-32 py-16 ">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="heading-section-large text-black">
              {aboutUsData.heading}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg text-gray-600 leading-relaxed">
              {aboutUsData.description}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Empathy Section */}
      <section className="md:py-32 py-16 bg-almost-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <ScrollReveal delay={100}>
                <p className="text-lg text-primary mb-4 uppercase tracking-wider">
                  {empathyData.subheading}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <h2 className="heading-section-large text-primary lg:pr-4">
                  {empathyData.heading}
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <p className="text-lg text-primary mb-8">
                  {empathyData.description}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <div className="flex flex-col sm:flex-row gap-4">
                  {empathyData.ctaButtons.map((button, index) => (
                    <CTAButton
                      key={index}
                      href={button.href}
                      variant={button.variant as any}
                      target={button.target}
                      rel={button.rel}
                    >
                      <Icon icon={button.icon} className="w-5 h-5" />
                      {button.text}
                    </CTAButton>
                  ))}
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={300}>
              <div className="bg-gray-100 md:h-[600px] h-[400px] overflow-hidden rounded-[2rem]">
                <img
                  src={empathyData.image.src}
                  alt={empathyData.image.alt}
                  className="w-full h-full object-cover object-left"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="md:pt-16 pt-8 md:pb-32 pb-20 bg-almost-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal delay={100}>
              <p className="text-lg text-primary mb-4 uppercase tracking-wider">
                {servicesData.subheading}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <h2 className="heading-section-large text-primary mb-4">
                {servicesData.heading}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <p className="text-lg text-primary max-w-2xl mx-auto">
                {servicesData.description}
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesData.cards.map((card, index) => (
              <ScrollReveal key={index} delay={400 + index * 100}>
                <Link
                  href={card.link.href}
                  className="relative lg:h-[500px] h-[300px] rounded-2xl border-2 border-almost-black overflow-hidden block group cursor-pointer transition-transform duration-300 md:hover:scale-[1.02]"
                >
                  {/* Background Image */}
                  <img
                    src={card.image.src}
                    alt={card.image.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent"></div>
                  {/* Content */}
                  <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                    {/* Text content that moves up on hover */}
                    <div className="transform translate-y-0 md:group-hover:-translate-y-4 transition-transform duration-300 ease-out">
                      <h3 className="heading-card-large text-white">
                        {card.title}
                      </h3>
                      <p className="text-white lg:mb-0 mb-2 opacity-90">
                        {card.description}
                      </p>
                    </div>
                    {/* Button that slides up on hover */}
                    <div className="transform md:translate-y-full md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-300 ease-out">
                      <div className="text-white transition-colors duration-300 py-3 rounded-xl font-medium inline-block">
                        {card.link.text}
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations Section */}
      <section className="md:py-32 py-16 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:text-right text-left mb-16">
            <ScrollReveal delay={100}>
              <p className="text-lg text-almost-black mb-4 uppercase tracking-wider">
                {specializationsData.subheading}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <h2 className="heading-section-large text-black mb-4">
                {specializationsData.heading}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <p className="text-lg text-gray-600 max-w-3xl ml-auto">
                {specializationsData.description}
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializationsData.specialties.map((specialty, index) => (
              <ScrollReveal key={index} delay={400 + index * 100}>
                <div className="bg-white p-6 rounded-2xl border-2 border-almost-black h-full flex flex-col">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-almost-black rounded-full flex items-center justify-center">
                        <Icon
                          icon={specialty.icon}
                          className="text-4xl text-primary"
                        />
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col">
                      <h3 className="heading-small text-black mb-4">
                        {specialty.title}
                      </h3>
                      <ul className="space-y-2 flex-1">
                        {specialty.conditions.map((condition, idx) => (
                          <li key={idx} className="text-gray-600 text-sm">
                            • {condition}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Break Image Section */}
      <section className="py-0 md:pb-32 pb-20 max-w-7xl mx-auto">
        <ScrollReveal delay={100}>
          <div className="relative h-[500px] overflow-hidden rounded-[4rem]">
            <img
              src={breakImageData.src}
              alt={breakImageData.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-end justify-end p-8">
              <ScrollReveal delay={300}>
                <h2 className="heading-hero text-primary text-right max-w-4xl w-full">
                  Ciencia, movimiento y humanidad en cada paso.
                </h2>
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  );
}
