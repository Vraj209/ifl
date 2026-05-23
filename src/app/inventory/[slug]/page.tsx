import { ArrowLeft, Check, Clock, FileText } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { AvailabilityPill } from "@/components/inventory/availability-pill";
import { QuoteCta } from "@/components/sections/quote-cta";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { inventoryCategories, site } from "@/lib/site";
import { cn } from "@/lib/utils";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return inventoryCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = inventoryCategories.find((item) => item.slug === slug);

  if (!category) {
    return {
      title: "Inventory Category | INL Tree Farm",
    };
  }

  return {
    title: `${category.title} | Wholesale Inventory | INL Tree Farm`,
    description: category.description,
    alternates: {
      canonical: `${site.url}/inventory/${category.slug}`,
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = inventoryCategories.find((item) => item.slug === slug);

  if (!category) notFound();

  return (
    <main className="bg-warm-white pt-32">
      <section className="pb-16 pt-8 md:pb-24">
        <Container>
          <Link
            href="/inventory"
            className="mb-8 inline-flex min-h-11 items-center gap-2 rounded-md px-2 text-sm font-medium text-forest-black/64 transition hover:text-forest-black"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Inventory
          </Link>

          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <AvailabilityPill status={category.availability} />
              <h1 className="mt-6 text-balance font-display text-5xl font-semibold leading-[1.02] text-forest-black md:text-7xl">
                {category.title}
              </h1>
              <p className="mt-5 text-lg leading-8 text-forest-black/66">
                {category.description}
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-forest-black/10 bg-sand p-5">
                  <Clock className="size-5 text-moss" aria-hidden="true" />
                  <p className="mt-4 text-sm font-semibold uppercase text-forest-black/52">
                    Lead time
                  </p>
                  <p className="mt-2 text-base font-semibold text-forest-black">
                    {category.leadTime}
                  </p>
                </div>
                <div className="rounded-lg border border-forest-black/10 bg-sand p-5">
                  <FileText className="size-5 text-moss" aria-hidden="true" />
                  <p className="mt-4 text-sm font-semibold uppercase text-forest-black/52">
                    Best next step
                  </p>
                  <p className="mt-2 text-base font-semibold text-forest-black">
                    Send quantities and target timing.
                  </p>
                </div>
              </div>
              <Link
                href="/#quote"
                className={cn(buttonVariants({ size: "lg" }), "mt-8")}
              >
                {category.cta}
              </Link>
            </div>

            <div className="relative min-h-[520px] overflow-hidden rounded-lg bg-forest-black">
              <Image
                src={category.image}
                alt={`${category.title} at INL Tree Farm`}
                fill
                priority
                sizes="(min-width: 1024px) 56vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <section className="rounded-lg border border-forest-black/10 bg-sand p-6">
              <h2 className="font-display text-3xl font-semibold text-forest-black">
                Typical specimens
              </h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {category.specimens.map((specimen) => (
                  <div
                    key={specimen}
                    className="flex min-h-12 items-center gap-3 rounded-md bg-warm-white px-4 text-sm font-medium text-forest-black"
                  >
                    <Check className="size-4 text-moss" aria-hidden="true" />
                    {specimen}
                  </div>
                ))}
              </div>
            </section>
            <section className="rounded-lg border border-forest-black/10 bg-forest-black p-6 text-warm-white">
              <h2 className="font-display text-3xl font-semibold">
                Procurement notes
              </h2>
              <div className="mt-6 grid gap-3">
                {category.procurementNotes.map((note) => (
                  <div
                    key={note}
                    className="flex min-h-12 items-center gap-3 rounded-md bg-warm-white/8 px-4 text-sm font-medium text-warm-white/78"
                  >
                    <Check className="size-4 text-sage" aria-hidden="true" />
                    {note}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </Container>
      </section>
      <QuoteCta />
    </main>
  );
}
