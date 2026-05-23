import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { inventoryCategories, navItems, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-forest-black pb-24 pt-16 text-warm-white md:pb-10 md:pt-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Link href="/" className="relative block h-14 w-72 max-w-full">
              <Image
                src="https://inltreefarm.com/wp-content/uploads/2024/11/INL-TREEFARM-LOGO-WT.png"
                alt="INL Tree Farm"
                fill
                sizes="288px"
                className="object-contain object-left"
              />
            </Link>
            <p className="mt-6 max-w-xl text-lg leading-8 text-warm-white/68">
              Premium Ontario wholesale nursery stock cultivated near Cambridge
              for contractors, municipalities, landscapers, and garden centers.
            </p>
            <div className="mt-8 grid gap-4 text-sm text-warm-white/72 sm:grid-cols-3">
              <a href={`tel:${site.phone.replaceAll("-", "")}`} className="flex gap-3">
                <Phone className="mt-0.5 size-4 text-sage" aria-hidden="true" />
                <span>{site.phone}</span>
              </a>
              <a href={`mailto:${site.email}`} className="flex gap-3">
                <Mail className="mt-0.5 size-4 text-sage" aria-hidden="true" />
                <span>{site.email}</span>
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=1682%208th%20Concession%20Rd%20W%2C%20Cambridge%2C%20ON%20N1R%205S2"
                target="_blank"
                rel="noreferrer"
                className="flex gap-3"
              >
                <MapPin className="mt-0.5 size-4 text-sage" aria-hidden="true" />
                <span>{site.address}</span>
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h2 className="text-sm font-semibold uppercase text-sage">
                Platform
              </h2>
              <div className="mt-4 grid gap-3">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm text-warm-white/64 transition hover:text-warm-white"
                  >
                    {item.label}
                    <ArrowUpRight
                      className="size-3 opacity-0 transition group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase text-sage">
                Inventory
              </h2>
              <div className="mt-4 grid gap-3">
                {inventoryCategories.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/inventory/${category.slug}`}
                    className="text-sm text-warm-white/64 transition hover:text-warm-white"
                  >
                    {category.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-warm-white/10 pt-6 text-xs text-warm-white/48 md:flex-row md:items-center md:justify-between">
          <p>© 2026 INL Tree Farm. All rights reserved.</p>
          <p>Ontario-grown nursery stock for professional landscapes.</p>
        </div>
      </Container>
    </footer>
  );
}
