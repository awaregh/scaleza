import FadeIn from "@/components/animations/FadeIn";
import Container from "@/components/layout/Container";

const clients = ["TechCorp", "DataFlow", "CloudSync", "NeuralNet", "ScaleUp", "VelocityAI"];

export default function ClientLogos() {
  return (
    <section className="border-y border-white/5 bg-white/[0.01] py-12">
      <Container>
        <FadeIn>
          <p className="mb-8 text-center text-sm text-slate-500">
            Trusted by leading startups
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {clients.map((client) => (
              <span key={client} className="text-lg font-semibold text-slate-600">
                {client}
              </span>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
