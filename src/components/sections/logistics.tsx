import { ArrowRight, ClipboardCheck, Map, PackageCheck, Truck } from "lucide-react";
import Image from "next/image";

import { Reveal } from "@/components/animations/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const workflow = [
  {
    icon: ClipboardCheck,
    title: "Plant list intake",
    copy: "Send species, sizes, quantities, timing, and substitution notes.",
  },
  {
    icon: PackageCheck,
    title: "Availability hold",
    copy: "Stock is checked against field, yard, and seasonal dig timing.",
  },
  {
    icon: Truck,
    title: "Delivery staging",
    copy: "Loads are coordinated around site readiness and contractor sequencing.",
  },
  {
    icon: Map,
    title: "Regional routing",
    copy: "Cambridge-based logistics support projects across Southern Ontario.",
  },
];

export function Logistics() {
  return (
    <section id="logistics" className="section-y bg-forest-black text-warm-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <div className="relative min-h-[560px] overflow-hidden rounded-lg">
              <Image
                src="https://inltreefarm.com/wp-content/uploads/2025/01/inl-wholesale.jpg"
                alt="Wholesale nursery stock prepared for contractor logistics"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,13,12,0.04),rgba(11,13,12,0.78))]" />
              <div className="absolute bottom-5 left-5 right-5 rounded-lg border border-warm-white/12 bg-forest-black/70 p-5 backdrop-blur-xl md:left-auto md:w-80">
                <p className="text-xs uppercase text-sage">Route coverage</p>
                <p className="mt-2 font-display text-3xl font-semibold">
                  Southern Ontario supply coordination
                </p>
                <p className="mt-3 text-sm leading-6 text-warm-white/62">
                  Built for contractors who need stock, timing, and transport to
                  line up cleanly.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <SectionHeading
              eyebrow="Delivery and logistics"
              title="A wholesale workflow built around the realities of install day."
              description="From plant-list intake to staged delivery, INL supports professional buyers who need dependable material, clear timing, and operational follow-through."
              className="text-warm-white [&_h2]:text-warm-white [&_p]:text-warm-white/66"
            />

            <div className="mt-10 grid gap-3">
              {workflow.map((item, index) => (
                <div
                  key={item.title}
                  className="group grid gap-4 rounded-lg border border-warm-white/10 bg-warm-white/6 p-4 transition hover:bg-warm-white/10 md:grid-cols-[auto_1fr_auto] md:items-center"
                >
                  <div className="flex size-12 items-center justify-center rounded-md bg-sage text-forest-black">
                    <item.icon className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-warm-white/42">0{index + 1}</p>
                    <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-warm-white/58">
                      {item.copy}
                    </p>
                  </div>
                  <ArrowRight
                    className="hidden size-5 text-sage transition group-hover:translate-x-1 md:block"
                    aria-hidden="true"
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
