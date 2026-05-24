"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import type { InventoryCategory } from "@/types/content";

type CategoryCardProps = {
  category: InventoryCategory;
  featured?: boolean;
};

export function CategoryCard({ category, featured = false }: CategoryCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={featured ? "md:col-span-2" : undefined}
    >
      <Link
        href={`/inventory/${category.slug}`}
        className="group relative block min-h-[420px] overflow-hidden rounded-lg bg-forest-black text-warm-white"
      >
        <Image
          src={category.image}
          alt={`${category.title} at INL Tree Farm`}
          fill
          sizes={featured ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
          className="object-cover transition duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,13,12,0.16)_0%,rgba(11,13,12,0.24)_40%,rgba(11,13,12,0.88)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
          <Badge className="border-warm-white/16 bg-warm-white/12 text-warm-white">
            {category.availability} availability
          </Badge>
          <h3 className="mt-5 font-display text-3xl font-semibold leading-tight md:text-4xl">
            {category.title}
          </h3>
          <p className="mt-3 max-w-xl text-sm leading-6 text-warm-white/68">
            {category.description}
          </p>
          <span className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-md bg-warm-white px-4 text-sm font-semibold text-forest-black transition group-hover:bg-sage">
            {category.cta}
            <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden="true" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
