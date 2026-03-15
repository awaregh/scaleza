import { Metadata } from "next";
import Hero from "@/components/hero/Hero";
import Container from "@/components/layout/Container";
import FadeIn from "@/components/animations/FadeIn";
import SlideIn from "@/components/animations/SlideIn";
import FeatureCard from "@/components/cards/FeatureCard";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import TestimonialSection from "@/components/sections/TestimonialSection";
import CTASection from "@/components/sections/CTASection";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services | Scaleza",
  description: "Growth engineering, product development, and AI integration for startups. We combine engineering and growth to help you scale faster.",
};

const whyScaleza = [
  { title: "Full-Stack Thinking", description: "Engineering + Growth + AI in one team. No silos, no miscommunication.", icon: "🔗" },
  { title: "Startup DNA", description: "We understand your constraints, your urgency, and your opportunities.", icon: "🧬" },
  { title: "Speed & Execution", description: "Weekly deliverables, not quarterly roadmaps. We ship fast.", icon: "⚡" },
  { title: "Data-Driven", description: "Every decision backed by data. Every experiment measured.", icon: "📊" },
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        badge="Services"
        title="Everything You Need to Scale"
        description="We combine growth engineering, product development, and AI integration into one team—so you can move faster without hiring three separate agencies."
      />

      {/* Service Details */}
      {services.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className="border-t border-white/5 py-20 lg:py-28"
        >
          <Container>
            <div className={`grid items-center gap-12 lg:grid-cols-2 ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
              <SlideIn direction={i % 2 === 0 ? "left" : "right"}>
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <Badge variant={i === 2 ? "purple" : "blue"}>{service.title}</Badge>
                  <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                    {service.headline}
                  </h2>
                  <p className="mt-4 text-slate-400">{service.description}</p>
                  <ul className="mt-6 space-y-3">
                    {service.capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-3 text-slate-300">
                        <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                        {cap}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-sm font-medium text-blue-400">
                    Example outcome: {service.outcome}
                  </p>
                  <div className="mt-6">
                    <Button href="/contact">{service.cta}</Button>
                  </div>
                </div>
              </SlideIn>
              <SlideIn direction={i % 2 === 0 ? "right" : "left"}>
                <div className={`rounded-2xl border border-white/5 bg-white/[0.02] p-8 lg:p-12 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <span className="text-6xl">{service.icon}</span>
                  <div className="mt-6 space-y-4">
                    {service.capabilities.map((cap, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-blue-500/50" />
                        <span className="text-sm text-slate-400">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </SlideIn>
            </div>
          </Container>
        </section>
      ))}

      {/* Why Scaleza */}
      <section className="border-t border-white/5 py-20 lg:py-28">
        <Container>
          <FadeIn>
            <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
              Why Scaleza?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-slate-400">
              We&apos;re not a generic dev shop. We&apos;re growth engineers who build products that scale.
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyScaleza.map((item, i) => (
              <FeatureCard key={item.title} {...item} index={i} />
            ))}
          </div>
        </Container>
      </section>

      <div className="border-t border-white/5">
        <ProcessTimeline />
      </div>

      <div className="border-t border-white/5">
        <TestimonialSection />
      </div>

      <div className="border-t border-white/5">
        <CTASection
          headline="Let's discuss your project"
          description="Tell us about your startup and we'll show you how we can help."
          ctaText="Get in Touch"
        />
      </div>
    </>
  );
}
