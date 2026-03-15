import { Metadata } from "next";
import Hero from "@/components/hero/Hero";
import Container from "@/components/layout/Container";
import CaseStudyCard from "@/components/cards/CaseStudyCard";
import FadeIn from "@/components/animations/FadeIn";
import FeatureCard from "@/components/cards/FeatureCard";
import CTASection from "@/components/sections/CTASection";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "Case Studies | Scaleza",
  description: "Real results for real startups. See how Scaleza helped companies scale their growth, launch AI products, and optimize infrastructure.",
};

const capabilities = [
  { title: "SaaS Growth", description: "Conversion optimization, referral systems, and analytics pipelines.", icon: "📈" },
  { title: "AI Products", description: "LLM integration, conversational UX, and inference optimization.", icon: "🤖" },
  { title: "Infrastructure", description: "Architecture redesign, caching, and performance optimization.", icon: "🏗️" },
  { title: "Full-Stack Development", description: "Web and mobile apps, APIs, and database design.", icon: "💻" },
  { title: "Data Engineering", description: "Analytics pipelines, dashboards, and real-time monitoring.", icon: "📊" },
  { title: "DevOps", description: "CI/CD, cloud infrastructure, and deployment automation.", icon: "⚙️" },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Hero
        badge="Case Studies"
        title="Real Impact, Real Startups"
        description="We don't just talk about results—we deliver them. Here's how we've helped startups like yours scale faster."
      />

      {/* Case Studies */}
      <section className="border-t border-white/5 py-20 lg:py-28">
        <Container>
          <div className="space-y-8">
            {caseStudies.map((study, i) => (
              <CaseStudyCard key={study.id} study={study} index={i} featured />
            ))}
          </div>
        </Container>
      </section>

      {/* What's Possible */}
      <section className="border-t border-white/5 py-20 lg:py-28">
        <Container>
          <FadeIn>
            <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
              What&apos;s Possible
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-slate-400">
              From growth engineering to AI products, we help startups across the full stack.
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap, i) => (
              <FeatureCard key={cap.title} {...cap} index={i} />
            ))}
          </div>
        </Container>
      </section>

      <div className="border-t border-white/5">
        <CTASection
          headline="Start your success story"
          description="Every case study started with a conversation. Let's start yours."
          ctaText="Start a Project"
        />
      </div>
    </>
  );
}
