"use client";

import { motion } from "framer-motion";
import { Check, Leaf, ShieldCheck, Sprout } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Reveal } from "@/components/animations/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const comparisons = [
  {
    key: "climate",
    label: "Climate adaptation",
    icon: ShieldCheck,
    ontario: "Grown through Ontario temperature swings, wind exposure, and freeze-thaw cycles before installation.",
    imported: "Often arrives from softer growing regions and adjusts after the client has already paid for the install.",
  },
  {
    key: "roots",
    label: "Root strength",
    icon: Sprout,
    ontario: "Developed in local soil profiles with nursery practices focused on transplant resilience.",
    imported: "Long haul times and extra handling can increase stress before planting day.",
  },
  {
    key: "impact",
    label: "Lower impact",
    icon: Leaf,
    ontario: "Shorter regional supply lines support cleaner procurement and fresher project staging.",
    imported: "Extended transport adds emissions, handling risk, and inventory uncertainty.",
  },
];

export function OntarioGrown() {
  const [active, setActive] = useState(comparisons[0]);

  return (
    <section id="ontario-grown" className="section-y bg-sand">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Why Ontario-grown"
              title="Trees arrive already fluent in the climate they are planted into."
              description="Local cultivation gives contractors and municipalities a more reliable starting point: stronger establishment, better seasonal timing, and fewer surprises after installation."
            />
            <div className="mt-8 grid gap-3">
              {comparisons.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setActive(item)}
                  className={cn(
                    "flex min-h-16 items-center justify-between rounded-md border px-4 text-left transition",
                    active.key === item.key
                      ? "border-moss bg-warm-white shadow-soft"
                      : "border-forest-black/10 bg-transparent hover:bg-warm-white/52",
                  )}
                >
                  <span className="flex items-center gap-3">
                    <item.icon className="size-5 text-moss" aria-hidden="true" />
                    <span className="font-medium text-forest-black">{item.label}</span>
                  </span>
                  {active.key === item.key ? (
                    <Check className="size-5 text-moss" aria-hidden="true" />
                  ) : null}
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative min-h-[620px] overflow-hidden rounded-lg bg-forest-black text-warm-white">
              <Image
                src="https://inltreefarm.com/wp-content/uploads/2025/09/Untitled-design.png"
                alt="Sustainable Ontario nursery cultivation"
                fill
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover opacity-72"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,13,12,0.08),rgba(11,13,12,0.92))]" />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-8">
                <div className="grid gap-4 md:grid-cols-2">
                  <motion.div
                    key={`ontario-${active.key}`}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45 }}
                    className="rounded-lg border border-sage/24 bg-warm-white p-5 text-forest-black"
                  >
                    <p className="text-xs font-semibold uppercase text-moss">
                      Ontario-grown trees
                    </p>
                    <p className="mt-4 text-lg leading-7">{active.ontario}</p>
                  </motion.div>
                  <motion.div
                    key={`imported-${active.key}`}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.05 }}
                    className="rounded-lg border border-warm-white/12 bg-forest-black/70 p-5"
                  >
                    <p className="text-xs font-semibold uppercase text-sage">
                      Imported alternatives
                    </p>
                    <p className="mt-4 text-lg leading-7 text-warm-white/72">
                      {active.imported}
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
