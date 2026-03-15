import Container from "@/components/layout/Container";
import FadeIn from "@/components/animations/FadeIn";
import Badge from "@/components/ui/Badge";

interface HeroProps {
  badge?: string;
  title: string;
  description?: string;
}

export default function Hero({ badge, title, description }: HeroProps) {
  return (
    <section className="bg-slate-950 pt-32 pb-16 lg:pt-40 lg:pb-20">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            {badge && <Badge variant="blue" className="mb-4">{badge}</Badge>}
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            {description && (
              <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
                {description}
              </p>
            )}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
