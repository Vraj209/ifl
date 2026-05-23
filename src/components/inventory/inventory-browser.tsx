"use client";

import { ArrowRight, Search, SlidersHorizontal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import { AvailabilityPill } from "@/components/inventory/availability-pill";
import { buttonVariants } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import { Input } from "@/components/ui/input";
import { inventoryCategories } from "@/lib/site";
import { cn } from "@/lib/utils";
import type { AvailabilityStatus, InventoryCategory } from "@/types/content";

const statuses: Array<AvailabilityStatus | "All"> = [
  "All",
  "High",
  "Moderate",
  "Seasonal",
  "Limited",
];

function InventoryCard({ category }: { category: InventoryCategory }) {
  return (
    <article className="overflow-hidden rounded-lg border border-forest-black/10 bg-warm-white shadow-soft">
      <div className="relative aspect-[4/3] bg-forest-black">
        <Image
          src={category.image}
          alt={`${category.title} inventory`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 90vw"
          className="object-cover"
        />
        <div className="absolute left-4 top-4">
          <AvailabilityPill status={category.availability} />
        </div>
      </div>
      <div className="p-5">
        <p className="text-xs font-semibold uppercase text-moss">
          {category.eyebrow}
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-forest-black">
          {category.title}
        </h2>
        <p className="mt-3 text-sm leading-6 text-forest-black/62">
          {category.description}
        </p>
        <div className="mt-5 rounded-md bg-sand p-4">
          <p className="text-xs font-semibold uppercase text-forest-black/52">
            Lead time
          </p>
          <p className="mt-1 text-sm font-medium text-forest-black">
            {category.leadTime}
          </p>
        </div>
        <details className="mt-4 rounded-md border border-forest-black/10 p-4">
          <summary className="cursor-pointer text-sm font-semibold text-forest-black">
            Procurement notes
          </summary>
          <ul className="mt-3 grid gap-2 text-sm leading-6 text-forest-black/62">
            {category.procurementNotes.map((note) => (
              <li key={note}>• {note}</li>
            ))}
          </ul>
        </details>
        <Link
          href={`/inventory/${category.slug}`}
          className={cn(buttonVariants({ variant: "primary" }), "mt-5 w-full")}
        >
          {category.cta}
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

export function InventoryBrowser() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<AvailabilityStatus | "All">("All");

  const filtered = useMemo(() => {
    return inventoryCategories.filter((category) => {
      const haystack = [
        category.title,
        category.description,
        category.eyebrow,
        ...category.specimens,
      ]
        .join(" ")
        .toLowerCase();
      const matchesQuery = haystack.includes(query.toLowerCase());
      const matchesStatus = status === "All" || category.availability === status;
      return matchesQuery && matchesStatus;
    });
  }, [query, status]);

  return (
    <div>
      <div className="rounded-lg border border-forest-black/10 bg-sand p-4 md:p-5">
        <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
          <label className="relative block" htmlFor="inventory-search">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-forest-black/42"
              aria-hidden="true"
            />
            <Input
              id="inventory-search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search maples, spruce, shrubs, soil..."
              className="pl-11"
            />
          </label>
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar" aria-label="Availability filter">
            <SlidersHorizontal className="size-4 shrink-0 text-forest-black/52" aria-hidden="true" />
            {statuses.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setStatus(item)}
                className={cn(
                  "min-h-10 shrink-0 rounded-full px-4 text-xs font-semibold transition",
                  status === item
                    ? "bg-forest-black text-warm-white"
                    : "bg-warm-white text-forest-black/62 hover:text-forest-black",
                )}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-8">
          <EmptyState
            title="No matching stock group"
            description="Try a broader species, remove the availability filter, or send the plant list directly for substitution support."
            action="Reset search"
            onAction={() => {
              setQuery("");
              setStatus("All");
            }}
          />
        </div>
      ) : (
        <>
          <div className="mt-8 flex snap-x gap-4 overflow-x-auto pb-4 no-scrollbar md:hidden">
            {filtered.map((category) => (
              <div key={category.slug} className="w-[86vw] max-w-sm shrink-0 snap-start">
                <InventoryCard category={category} />
              </div>
            ))}
          </div>
          <div className="mt-8 hidden gap-5 md:grid md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((category) => (
              <InventoryCard key={category.slug} category={category} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
