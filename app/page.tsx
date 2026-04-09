import HeroWithGradient from "@/components/hero/HeroWithGradient";
import ClientLogos from "@/components/sections/ClientLogos";
import Container from "@/components/layout/Container";
import ServiceCard from "@/components/cards/ServiceCard";
import CaseStudyCard from "@/components/cards/CaseStudyCard";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import CTASection from "@/components/sections/CTASection";
import FadeIn from "@/components/animations/FadeIn";
import { services } from "@/data/services";
import { caseStudies } from "@/data/caseStudies";

const techStack = [
  "Next.js", "React", "TypeScript", "Node.js", "Python",
  "PostgreSQL", "Redis", "AWS", "Vercel", "OpenAI",
  "Anthropic Claude", "Segment", "Mixpanel", "Grafana",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroWithGradient />

      {/* Client Logos */}
      <ClientLogos />

      {/* Services Overview */}
      <section className="py-20 lg:py-28">
        <Container>
          <FadeIn>
            <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
              What We Build
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-slate-400">
              Product engineering, growth systems, and AI delivery designed for
              founders who want premium execution.
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </Container>
      </section>

      {/* Process Timeline */}
      <div className="border-t border-white/5">
        <ProcessTimeline />
      </div>

      {/* Featured Case Study */}
      <section className="border-t border-white/5 py-20 lg:py-28">
        <Container>
          <FadeIn>
            <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
              Proven Results
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-slate-400">
              Focused work, measurable outcomes, and systems built to scale.
            </p>
          </FadeIn>
          <div className="mt-12 mx-auto max-w-4xl">
            <CaseStudyCard study={caseStudies[0]} featured />
          </div>
        </Container>
      </section>

      {/* Tech Stack */}
      <section className="border-t border-white/5 py-20 lg:py-28">
        <Container>
          <FadeIn>
            <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
              Built With Modern Tools
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-slate-400">
              We pair modern architecture with practical tooling to move quickly
              without sacrificing quality.
            </p>
          </FadeIn>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            {techStack.map((tech, i) => (
              <FadeIn key={tech} delay={i * 0.05}>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300">
                  {tech}
                </span>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <div className="border-t border-white/5">
        <CTASection />
      </div>
    </>
  );
}
