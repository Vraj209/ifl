"use client";

import { FileText, Phone } from "lucide-react";
import Link from "next/link";

import { site } from "@/lib/site";

export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-warm-white/12 bg-forest-black/92 p-3 backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={`tel:${site.phone.replaceAll("-", "")}`}
          className="flex min-h-12 items-center justify-center gap-2 rounded-md bg-warm-white/10 text-sm font-semibold text-warm-white"
        >
          <Phone className="size-4" aria-hidden="true" />
          Call
        </a>
        <Link
          href="/#quote"
          className="flex min-h-12 items-center justify-center gap-2 rounded-md bg-sage text-sm font-semibold text-forest-black"
        >
          <FileText className="size-4" aria-hidden="true" />
          Quote
        </Link>
      </div>
    </div>
  );
}
