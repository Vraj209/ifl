"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ClipboardList } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CinematicHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      ref={ref}
      className="relative min-h-[94svh] overflow-hidden bg-forest-black text-warm-white"
      aria-labelledby="hero-heading"
    >
      <motion.div className="absolute inset-0" style={{ scale: imageScale }}>
        <Image
          src="https://inltreefarm.com/wp-content/uploads/2024/11/inl-hero-002.jpg"
          alt="Rows of Ontario-grown trees at INL Tree Farm near Cambridge"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,13,12,0.92)_0%,rgba(11,13,12,0.72)_42%,rgba(11,13,12,0.22)_76%,rgba(11,13,12,0.48)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-forest-black to-transparent" />

      <Container className="relative flex min-h-[94svh] items-center pb-12 pt-28 md:pb-14 md:pt-32">
        <motion.div
          className="grid w-full gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.55fr)] lg:items-end"
          style={{ y: contentY }}
        >
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="mb-5 inline-flex min-h-9 items-center rounded-full border border-warm-white/18 bg-warm-white/10 px-4 text-xs font-medium uppercase text-sage backdrop-blur-xl"
            >
              Premium wholesale nursery stock
            </motion.p>
            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
              className="text-balance font-display text-5xl font-semibold leading-[0.98] md:text-6xl lg:text-7xl 2xl:text-8xl"
            >
              Ontario-grown trees engineered for landscapes that last
              generations.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
              className="mt-5 max-w-2xl text-lg leading-8 text-warm-white/74 md:text-xl"
            >
              Premium wholesale nursery stock cultivated across 160 acres near
              Cambridge, Ontario.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.24 }}
              className="mt-7 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/inventory"
                className={cn(buttonVariants({ variant: "inverse", size: "lg" }), "group")}
              >
                Explore Inventory
                <ArrowRight
                  className="size-4 transition group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/#quote"
                className={buttonVariants({ variant: "darkGhost", size: "lg" })}
              >
                <ClipboardList className="size-4" aria-hidden="true" />
                Request Availability
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.32 }}
            className="dark-glass-surface hidden rounded-lg p-5 lg:block"
          >
            <div className="grid gap-5">
              <div className="border-b border-warm-white/10 pb-5">
                <p className="text-xs uppercase text-sage">Operational scale</p>
                <p className="mt-2 font-display text-3xl font-semibold">
                  160 acres near Cambridge
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-md bg-warm-white/8 p-3">
                  <p className="text-warm-white/50">Buyers</p>
                  <p className="mt-1 font-semibold">Contractors</p>
                </div>
                <div className="rounded-md bg-warm-white/8 p-3">
                  <p className="text-warm-white/50">Supply</p>
                  <p className="mt-1 font-semibold">Wholesale</p>
                </div>
                <div className="rounded-md bg-warm-white/8 p-3">
                  <p className="text-warm-white/50">Origin</p>
                  <p className="mt-1 font-semibold">Ontario-grown</p>
                </div>
                <div className="rounded-md bg-warm-white/8 p-3">
                  <p className="text-warm-white/50">Support</p>
                  <p className="mt-1 font-semibold">Delivery</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
