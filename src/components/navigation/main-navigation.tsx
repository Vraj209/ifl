"use client";

import {
  ArrowRight,
  ChevronDown,
  Menu,
  Phone,
  Sprout,
  TreePine,
  Truck,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { buttonVariants } from "@/components/ui/button";
import { inventoryCategories, navItems, site } from "@/lib/site";
import { cn } from "@/lib/utils";

const megaHighlights = [
  {
    icon: TreePine,
    title: "Ontario-grown stock",
    copy: "Field-grown selections for regional climate performance.",
  },
  {
    icon: Truck,
    title: "Delivery coordination",
    copy: "Staged logistics for contractors and municipal projects.",
  },
  {
    icon: Sprout,
    title: "Plant-list support",
    copy: "Send quantities and substitutions for fast quoting.",
  },
];

export function MainNavigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6">
      <nav
        className="glass-surface mx-auto flex h-16 max-w-[1400px] items-center justify-between rounded-lg px-3 md:h-[72px] md:px-5"
        aria-label="Primary navigation"
      >
        <Link
          href="/"
          className="group flex min-h-11 items-center gap-3 rounded-md px-2"
          aria-label="INL Tree Farm home"
        >
          <span className="relative flex size-10 overflow-hidden rounded-md bg-forest-black">
            <Image
              src="https://inltreefarm.com/wp-content/uploads/2024/11/INL-LOGO.png"
              alt=""
              fill
              sizes="40px"
              className="object-contain p-1.5"
              priority
            />
          </span>
          <span className="hidden leading-none sm:block">
            <span className="block font-display text-sm font-semibold text-forest-black">
              INL Tree Farm
            </span>
            <span className="mt-1 block text-xs text-forest-black/56">
              Cambridge, Ontario
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
            onFocus={() => setMegaOpen(true)}
          >
            <Link
              href="/inventory"
              className={cn(
                "flex min-h-11 items-center gap-1 rounded-md px-4 text-sm font-medium text-forest-black/72 transition hover:bg-forest-black/5 hover:text-forest-black",
                pathname.startsWith("/inventory") && "text-forest-black",
              )}
              aria-expanded={megaOpen}
            >
              Inventory
              <ChevronDown
                className={cn("size-4 transition", megaOpen && "rotate-180")}
                aria-hidden="true"
              />
            </Link>
            <div
              className={cn(
                "invisible absolute left-1/2 top-14 w-[760px] -translate-x-1/2 opacity-0 transition duration-200",
                megaOpen && "visible translate-y-1 opacity-100",
              )}
            >
              <div className="glass-surface grid gap-5 rounded-lg p-5 shadow-glass md:grid-cols-[1.1fr_0.9fr]">
                <div className="grid grid-cols-2 gap-2">
                  {inventoryCategories.map((category) => (
                    <Link
                      key={category.slug}
                      href={`/inventory/${category.slug}`}
                      className="group rounded-md p-3 transition hover:bg-forest-black/5"
                    >
                      <span className="block text-sm font-semibold text-forest-black">
                        {category.title}
                      </span>
                      <span className="mt-1 line-clamp-2 block text-xs leading-5 text-forest-black/58">
                        {category.eyebrow}
                      </span>
                    </Link>
                  ))}
                </div>
                <div className="rounded-md bg-forest-black p-4 text-warm-white">
                  {megaHighlights.map((item) => (
                    <div key={item.title} className="flex gap-3 py-3 first:pt-0 last:pb-0">
                      <item.icon className="mt-0.5 size-5 text-sage" aria-hidden="true" />
                      <div>
                        <p className="text-sm font-semibold">{item.title}</p>
                        <p className="mt-1 text-xs leading-5 text-warm-white/62">
                          {item.copy}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {navItems.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="min-h-11 rounded-md px-4 py-3 text-sm font-medium text-forest-black/72 transition hover:bg-forest-black/5 hover:text-forest-black"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={`tel:${site.phone.replaceAll("-", "")}`}
            className="hidden min-h-11 items-center gap-2 rounded-md px-3 text-sm font-medium text-forest-black/72 transition hover:bg-forest-black/5 xl:flex"
          >
            <Phone className="size-4" aria-hidden="true" />
            {site.phone}
          </a>
          <Link
            href="/#quote"
            className={buttonVariants({ variant: "primary", size: "sm" })}
          >
            Request Availability
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <button
          className="flex size-11 items-center justify-center rounded-md text-forest-black transition hover:bg-forest-black/5 lg:hidden"
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <div
        className={cn(
          "glass-surface mx-auto mt-2 max-w-[1400px] overflow-hidden rounded-lg transition lg:hidden",
          mobileOpen ? "max-h-[720px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="grid gap-1 p-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="flex min-h-12 items-center justify-between rounded-md px-4 text-sm font-medium text-forest-black transition hover:bg-forest-black/5"
            >
              {item.label}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          ))}
          <div className="my-2 h-px bg-forest-black/10" />
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {inventoryCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/inventory/${category.slug}`}
                onClick={() => setMobileOpen(false)}
                className="rounded-md border border-forest-black/8 bg-warm-white/64 p-3"
              >
                <span className="text-sm font-semibold text-forest-black">
                  {category.title}
                </span>
                <span className="mt-1 block text-xs text-forest-black/56">
                  {category.availability} availability
                </span>
              </Link>
            ))}
          </div>
          <Link
            href="/#quote"
            onClick={() => setMobileOpen(false)}
            className={cn(buttonVariants({ variant: "primary" }), "mt-2 w-full")}
          >
            Send Plant List
          </Link>
        </div>
      </div>
    </header>
  );
}
