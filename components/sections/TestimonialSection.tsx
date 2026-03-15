import { testimonials } from "@/data/testimonials";
import TestimonialCard from "@/components/cards/TestimonialCard";
import Container from "@/components/layout/Container";
import FadeIn from "@/components/animations/FadeIn";

export default function TestimonialSection() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <FadeIn>
          <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
            What Founders Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-400">
            We partner with ambitious startups and earn their trust through results.
          </p>
        </FadeIn>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
