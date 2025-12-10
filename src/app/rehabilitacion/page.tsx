import { Navigation, Footer } from "@/components/layout";
import { rehabilitacionData } from "@/data";
import { ScrollReveal } from "@/components/UI";
import { Icon } from "@iconify/react";

export default function Rehabilitacion() {
  return (
    <div className="min-h-screen bg-primary">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-4">
        <div className="px-4 sm:px-6 lg:px-8 md:py-40 py-20  bg-almost-black md:rounded-[4rem] rounded-[3rem] overflow-hidden max-w-[95vw] mx-auto relative">
          {/* Background Image */}
          <img
            src={rehabilitacionData.hero.image.src}
            alt={rehabilitacionData.hero.image.alt}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-almost-black/90 to-almost-black/40 w-full h-full"></div>
          <div className="relative z-10 text-center">
            <ScrollReveal delay={300}>
              <h1 className="heading-hero text-primary">
                {rehabilitacionData.hero.title}
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={600}>
              <p className="text-xl md:text-2xl text-primary mb-4">
                {rehabilitacionData.hero.subtitle}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Objective Section */}
      <section className="md:py-32 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pr-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <ScrollReveal delay={100}>
                <h2 className="heading-section text-almost-black">
                  {rehabilitacionData.objective.title}
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-lg text-gray-600 mb-8">
                  {rehabilitacionData.objective.description}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <div className="space-y-3">
                  {rehabilitacionData.objective.goals.map((goal, index) => (
                    <div key={index} className="flex items-start">
                      <svg
                        className="w-6 h-6 text-almost-black mr-3 mt-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{goal}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={400}>
              <div className="md:h-[600px] h-[320px] overflow-hidden rounded-4xl">
                <img
                  src={rehabilitacionData.objective.image.src}
                  alt={rehabilitacionData.objective.image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* How We Do It Section */}
      <section className="md:py-32 py-16 bg-almost-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pl-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <ScrollReveal delay={100}>
              <div className="md:h-[600px] h-[320px] overflow-hidden md:order-1 order-2">
                <img
                  src={rehabilitacionData.howWeDoIt.image.src}
                  alt={rehabilitacionData.howWeDoIt.image.alt}
                  className="w-full h-full object-cover rounded-4xl"
                />
              </div>
            </ScrollReveal>
            <div className="md:order-2 order-1">
              <ScrollReveal delay={200}>
                <h2 className="heading-section text-primary">
                  {rehabilitacionData.howWeDoIt.title}
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <p className="text-lg text-primary mb-6">
                  {rehabilitacionData.howWeDoIt.description}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <ul className="space-y-4 text-primary">
                  {rehabilitacionData.howWeDoIt.steps.map((step, index) => (
                    <li key={index} className="flex items-start text-primary">
                      <svg
                        className="w-6 h-6 mr-3 mt-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="">{step.title}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* What We Apply Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal delay={100}>
              <h2 className="heading-section text-almost-black">
                {rehabilitacionData.whatWeApply.title}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto md:mb-8 mb-4">
                {rehabilitacionData.whatWeApply.description}
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-4">
            {rehabilitacionData.whatWeApply.techniques.map(
              (technique, index) => (
                <ScrollReveal key={index} delay={300 + index * 100}>
                  <div className="bg-white p-6 rounded-2xl border-2 border-almost-black flex gap-4">
                    <div className="w-16 h-16 bg-almost-black rounded-full flex items-center justify-center">
                      <Icon
                        icon={technique.icon}
                        className="w-8 h-8 text-white"
                      />
                    </div>
                    <div>
                      <h3 className="heading-subsection text-almost-black mb-0!">
                        {technique.title}
                      </h3>
                      <p className="text-gray-600 mb-0">
                        {technique.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              )
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
