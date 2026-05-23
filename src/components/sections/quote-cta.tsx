import { ArrowRight, Mail, Phone } from "lucide-react";

import { Reveal } from "@/components/animations/reveal";
import { QuoteRequestFlow } from "@/components/sections/quote-request-flow";
import { NewsletterSignup } from "@/components/sections/newsletter-signup";
import { Container } from "@/components/ui/container";
import { site } from "@/lib/site";

export function QuoteCta() {
  return (
    <section id="quote" className="section-y bg-forest-black text-warm-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <Reveal>
            <p className="mb-5 inline-flex min-h-9 items-center rounded-full border border-warm-white/14 bg-warm-white/8 px-4 text-xs font-medium uppercase text-sage">
              Request availability
            </p>
            <h2 className="text-balance font-display text-4xl font-semibold leading-[1.04] md:text-6xl">
              Send us your plant list and we’ll build your quote.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-warm-white/64">
              Share species, sizes, quantities, substitutions, and timing. INL
              can confirm availability and coordinate the next step for your
              project.
            </p>
            <div className="mt-8 grid gap-3 text-sm text-warm-white/70 sm:grid-cols-2">
              <a
                href={`tel:${site.phone.replaceAll("-", "")}`}
                className="flex min-h-14 items-center gap-3 rounded-lg border border-warm-white/10 bg-warm-white/6 px-4 transition hover:bg-warm-white/10"
              >
                <Phone className="size-4 text-sage" aria-hidden="true" />
                {site.phone}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex min-h-14 items-center gap-3 rounded-lg border border-warm-white/10 bg-warm-white/6 px-4 transition hover:bg-warm-white/10"
              >
                <Mail className="size-4 text-sage" aria-hidden="true" />
                {site.email}
              </a>
            </div>
            <div className="mt-8 rounded-lg border border-warm-white/10 bg-warm-white/6 p-5">
              <div className="flex items-center gap-3">
                <ArrowRight className="size-4 text-sage" aria-hidden="true" />
                <p className="text-sm font-semibold">Fastest quote format</p>
              </div>
              <p className="mt-3 text-sm leading-6 text-warm-white/58">
                Include plant names, sizes, quantities, site location, desired
                delivery or pickup window, and acceptable substitutions.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid gap-4">
              <QuoteRequestFlow />
              <NewsletterSignup />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
