import { cn } from "@/lib/utils";

export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "animate-shimmer rounded-md bg-[linear-gradient(90deg,rgba(168,181,162,0.18)_25%,rgba(248,247,244,0.72)_37%,rgba(168,181,162,0.18)_63%)] bg-[length:400%_100%]",
        className,
      )}
    />
  );
}
