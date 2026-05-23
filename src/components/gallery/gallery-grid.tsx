"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Maximize2, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import type { GalleryImage } from "@/types/content";
import { cn } from "@/lib/utils";

type GalleryGridProps = {
  images: GalleryImage[];
};

const aspectClass = {
  portrait: "aspect-[4/5]",
  landscape: "aspect-[5/3]",
  square: "aspect-square",
};

export function GalleryGrid({ images }: GalleryGridProps) {
  const [active, setActive] = useState<GalleryImage | null>(null);

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {images.map((image, index) => (
          <motion.button
            key={image.src}
            type="button"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.62, delay: index * 0.04 }}
            onClick={() => setActive(image)}
            className={cn(
              "group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-lg bg-forest-black text-left text-warm-white",
              aspectClass[image.orientation],
            )}
            aria-label={`Open ${image.title} image`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition duration-700 group-hover:scale-[1.04]"
              loading={index < 2 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,13,12,0)_25%,rgba(11,13,12,0.72)_100%)] opacity-86" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4">
              <div>
                <p className="text-sm font-semibold">{image.title}</p>
                <p className="mt-1 text-xs text-warm-white/58">INL Tree Farm</p>
              </div>
              <span className="flex size-10 items-center justify-center rounded-md bg-warm-white/12 backdrop-blur">
                <Maximize2 className="size-4" aria-hidden="true" />
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active ? (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-forest-black/92 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
            onClick={() => setActive(null)}
          >
            <button
              type="button"
              className="absolute right-4 top-4 z-10 flex size-11 items-center justify-center rounded-md bg-warm-white text-forest-black"
              onClick={() => setActive(null)}
              aria-label="Close gallery image"
            >
              <X className="size-5" />
            </button>
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative h-[78vh] w-full max-w-6xl overflow-hidden rounded-lg"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={active.src}
                alt={active.alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
