import { Metadata } from "next";
import Hero from "@/components/hero/Hero";
import Container from "@/components/layout/Container";
import FadeIn from "@/components/animations/FadeIn";
import FeatureCard from "@/components/cards/FeatureCard";
import CTASection from "@/components/sections/CTASection";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "About | Scaleza",
  description: "Learn about Scaleza's philosophy, team, and approach to growth engineering for startups.",
};

const beliefs = [
  { title: "Technical Excellence", description: "Code quality, architecture, and performance are non-negotiable. We build things right the first time.", icon: "🎯" },
  { title: "Data-Driven Decisions", description: "Every experiment is measured. Every decision is backed by data. Opinions are cheap—metrics aren't.", icon: "📊" },
  { title: "Founder Partnership", description: "We win when you win. We think like co-founders, not contractors. Your success is our success.", icon: "🤝" },
  { title: "Modern Stack", description: "We use the best tools available today. No legacy tech, no vendor lock-in, no compromises.", icon: "⚡" },
  { title: "Speed", description: "Get to market faster. Validate quicker. Iterate based on real user feedback, not assumptions.", icon: "🚀" },
];

const philosophy = [
  "We don't do generic solutions. Every startup is different.",
  "We think like founders. We've been in your shoes.",
  "We believe in building, not bullshitting. Results speak.",
  "Growth without product is unsustainable. Product without growth doesn't matter.",
];

const whyChoose = [
  { title: "Deep Expertise", description: "Years of experience in SaaS, AI, and growth. We've seen what works and what doesn't." },
  { title: "Startup DNA", description: "We understand your constraints and opportunities. We've built startups ourselves." },
  { title: "Full-Stack Thinking", description: "Engineering + Growth + AI, not siloed. One team, one mission." },
  { title: "Proven Track Record", description: "Real results for real startups. Measurable impact, not vague promises." },
  { title: "Speed & Execution", description: "We move fast and ship. Weekly deliverables, not quarterly check-ins." },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        title="Why Scaleza Exists"
        description="Startups shouldn't have to hire separate teams for engineering and growth. We combine both."
      />

      {/* Philosophy */}
      <section className="border-t border-white/5 py-20 lg:py-28">
        <Container>
          <div className="mx-auto max-w-3xl">
            <FadeIn>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Our Approach</h2>
            </FadeIn>
            <div className="mt-8 space-y-6">
              {philosophy.map((statement, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <p className="text-lg text-slate-300 border-l-2 border-blue-500/30 pl-4">
                    {statement}
                  </p>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* What We Believe In */}
      <section className="border-t border-white/5 py-20 lg:py-28">
        <Container>
          <FadeIn>
            <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
              What We Believe In
            </h2>
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {beliefs.map((belief, i) => (
              <FeatureCard key={belief.title} {...belief} index={i} />
            ))}
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="border-t border-white/5 py-20 lg:py-28">
        <Container>
          <FadeIn>
            <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
              The Team
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-slate-400">
              Small team, big impact. We combine decades of experience across engineering, growth, and AI.
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {team.map((member, i) => (
              <FadeIn key={member.id} delay={i * 0.1}>
                <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-xl font-bold text-white">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">{member.name}</h3>
                  <p className="text-sm text-blue-400">{member.title}</p>
                  <p className="mt-3 text-sm text-slate-400">{member.bio}</p>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block text-sm text-slate-500 hover:text-white transition-colors"
                    >
                      LinkedIn →
                    </a>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Scaleza */}
      <section className="border-t border-white/5 py-20 lg:py-28">
        <Container>
          <FadeIn>
            <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
              Why Choose Scaleza
            </h2>
          </FadeIn>
          <div className="mx-auto mt-12 max-w-3xl space-y-6">
            {whyChoose.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <div className="border-t border-white/5">
        <CTASection
          headline="Let's build something great together"
          description="We partner with ambitious startups ready to scale. Is that you?"
          ctaText="Get in Touch"
        />
      </div>
    </>
  );
}
