import Container from "@/components/layout/Container";
import FadeIn from "@/components/animations/FadeIn";

const steps = [
  {
    step: "01",
    title: "Discovery",
    description: "We learn your product, market, and goals. No cookie-cutter approach—every engagement starts with deep understanding.",
  },
  {
    step: "02",
    title: "Strategy",
    description: "We map out the fastest path from where you are to where you need to be. Clear milestones, realistic timelines.",
  },
  {
    step: "03",
    title: "Build & Ship",
    description: "Rapid sprints with weekly deliverables. You see progress in days, not months. We iterate based on real data.",
  },
  {
    step: "04",
    title: "Measure & Scale",
    description: "Everything is instrumented. We measure impact, optimize what works, and build systems that compound over time.",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <FadeIn>
          <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
            How We Work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-400">
            A proven process refined across dozens of startup engagements.
          </p>
        </FadeIn>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <FadeIn key={step.step} delay={i * 0.1}>
              <div className="relative">
                <span className="text-4xl font-bold text-white/5">{step.step}</span>
                <h3 className="mt-2 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{step.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
