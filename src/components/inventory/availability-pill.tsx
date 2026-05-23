import { cn } from "@/lib/utils";
import type { AvailabilityStatus } from "@/types/content";

const availabilityStyles: Record<AvailabilityStatus, string> = {
  High: "bg-moss text-warm-white",
  Moderate: "bg-sage text-forest-black",
  Seasonal: "bg-sand text-forest-black",
  Limited: "bg-forest-black text-warm-white",
};

export function AvailabilityPill({ status }: { status: AvailabilityStatus }) {
  return (
    <span
      className={cn(
        "inline-flex min-h-8 items-center rounded-full px-3 text-xs font-semibold",
        availabilityStyles[status],
      )}
    >
      {status} availability
    </span>
  );
}
