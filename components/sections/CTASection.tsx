import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/animations/FadeIn";

interface CTASectionProps {
  headline?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function CTASection({
  headline = "Ready to scale?",
  description = "Let's discuss how Scaleza can accelerate your startup's growth.",
  ctaText = "Start a Project",
  ctaHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">{headline}</h2>
            <p className="mt-4 text-slate-400">{description}</p>
            <div className="mt-8">
              <Button href={ctaHref} size="lg">{ctaText}</Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
