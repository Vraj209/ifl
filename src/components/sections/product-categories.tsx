import { Reveal } from "@/components/animations/reveal";
import { CategoryCard } from "@/components/cards/category-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { inventoryCategories } from "@/lib/site";

export function ProductCategories() {
  return (
    <section id="inventory" className="section-y bg-warm-white">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Wholesale inventory"
            title="Procurement-ready categories for professional landscapes."
            description="Browse the core product groups and send project quantities when you need a confirmed availability list."
          />
          <p className="max-w-sm text-sm leading-6 text-forest-black/58">
            Availability changes by dig window, hold status, and delivery timing.
            Lists are confirmed against current field and yard stock.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {inventoryCategories.map((category, index) => (
            <Reveal
              key={category.slug}
              delay={index * 0.06}
              className={index === 0 ? "md:col-span-2" : undefined}
            >
              <CategoryCard category={category} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
