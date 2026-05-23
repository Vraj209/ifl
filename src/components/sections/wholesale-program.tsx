import { ArrowRight, Building2, HardHat, Landmark, Store } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/animations/reveal";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { wholesaleSegments } from "@/lib/site";
import { cn } from "@/lib/utils";

const buyerIcons = [HardHat, Landmark, Store, Building2];

export function WholesaleProgram() {
  return (
    <section id="wholesale" className="section-y bg-warm-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Wholesale program"
              title="Priority support for buyers responsible for real landscapes."
              description="Contractors, municipalities, garden centers, and landscape teams get quote support, availability updates, logistics coordination, and Ontario-grown material selected for durability."
            />
            <div className="mt-9 grid grid-cols-2 gap-3">
              {wholesaleSegments.map((segment, index) => {
                const Icon = buyerIcons[index % buyerIcons.length];
                return (
                  <div
                    key={segment}
                    className="rounded-lg border border-forest-black/10 bg-sand p-4"
                  >
                    <Icon className="size-5 text-moss" aria-hidden="true" />
                    <p className="mt-4 text-sm font-semibold text-forest-black">
                      {segment}
                    </p>
                  </div>
                );
              })}
            </div>
            <Link
              href="/#quote"
              className={cn(buttonVariants({ size: "lg" }), "mt-8")}
            >
              Start a wholesale quote
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative min-h-[620px] overflow-hidden rounded-lg bg-forest-black">
              <Image
                src="https://inltreefarm.com/wp-content/uploads/2025/01/inl-wholesale.jpg"
                alt="Wholesale partners at INL Tree Farm"
                fill
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,13,12,0.02),rgba(11,13,12,0.78))]" />
              <div className="absolute bottom-6 left-6 right-6 rounded-lg border border-warm-white/12 bg-warm-white/10 p-5 text-warm-white backdrop-blur-xl md:left-auto md:w-80">
                <p className="text-xs uppercase text-sage">Wholesale ready</p>
                <p className="mt-3 text-2xl font-semibold leading-tight">
                  Plant lists, substitutions, holds, and delivery timing in one
                  procurement conversation.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
