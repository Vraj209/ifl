import type { Metadata } from "next";

import { InventoryBrowser } from "@/components/inventory/inventory-browser";
import { QuoteCta } from "@/components/sections/quote-cta";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Wholesale Inventory",
  description:
    "Browse wholesale Ontario-grown trees, evergreens, shrubs, perennials, and soil blends from INL Tree Farm near Cambridge.",
};

export default function InventoryPage() {
  return (
    <main className="bg-warm-white pt-32">
      <section className="pb-16 pt-8 md:pb-24">
        <Container>
          <div className="max-w-4xl">
            <p className="mb-5 inline-flex min-h-9 items-center rounded-full border border-forest-black/10 bg-sand px-4 text-xs font-medium uppercase text-moss">
              Wholesale inventory
            </p>
            <h1 className="text-balance font-display text-5xl font-semibold leading-[1.02] text-forest-black md:text-7xl">
              Browse stock groups built for contractor procurement.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-forest-black/64">
              Search core product categories, review availability signals, and
              move from broad groups into a plant-list quote.
            </p>
          </div>
          <div className="mt-12">
            <InventoryBrowser />
          </div>
        </Container>
      </section>
      <QuoteCta />
    </main>
  );
}
