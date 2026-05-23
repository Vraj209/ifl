import type * as React from "react";

import { cn } from "@/lib/utils";

export function Badge({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex min-h-8 items-center rounded-full border border-forest-black/10 bg-warm-white/72 px-3 text-xs font-medium text-forest-black/76",
        className,
      )}
      {...props}
    />
  );
}
