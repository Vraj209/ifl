import { AnimatedCounter } from "@/components/animations/animated-counter";
import { Reveal } from "@/components/animations/reveal";
import { Container } from "@/components/ui/container";
import { trustMetrics } from "@/lib/site";

export function TrustMetrics() {
  return (
    <section className="bg-forest-black py-10 text-warm-white" aria-label="INL Tree Farm operating metrics">
      <Container>
        <div className="grid gap-px overflow-hidden rounded-lg border border-warm-white/10 bg-warm-white/10 md:grid-cols-4">
          {trustMetrics.map((metric, index) => (
            <Reveal key={metric.label} delay={index * 0.06}>
              <div className="min-h-40 bg-forest-black/92 p-6">
                <p className="font-display text-5xl font-semibold text-warm-white">
                  <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                </p>
                <h2 className="mt-4 text-sm font-semibold uppercase text-sage">
                  {metric.label}
                </h2>
                <p className="mt-2 text-sm leading-6 text-warm-white/56">
                  {metric.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
