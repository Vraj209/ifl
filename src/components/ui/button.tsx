import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-medium transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-forest-black text-warm-white hover:bg-moss hover:shadow-soft",
        secondary:
          "border border-forest-black/12 bg-warm-white text-forest-black hover:border-moss/30 hover:bg-sand",
        ghost:
          "bg-transparent text-forest-black hover:bg-forest-black/5",
        inverse:
          "border border-warm-white/18 bg-warm-white text-forest-black hover:bg-sand",
        darkGhost:
          "bg-warm-white/8 text-warm-white hover:bg-warm-white/14",
      },
      size: {
        sm: "min-h-10 px-4 py-2 text-xs",
        md: "min-h-11 px-5 py-3 text-sm",
        lg: "min-h-12 px-6 py-3.5 text-base",
        icon: "size-11 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
