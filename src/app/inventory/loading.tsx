import { Container } from "@/components/ui/container";
import { Skeleton } from "@/components/ui/skeleton";

export default function InventoryLoading() {
  return (
    <main className="bg-warm-white pt-32">
      <Container className="py-12">
        <Skeleton className="h-9 w-48" />
        <Skeleton className="mt-6 h-24 max-w-3xl" />
        <Skeleton className="mt-12 h-20 w-full" />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <Skeleton className="h-[520px]" />
          <Skeleton className="h-[520px]" />
          <Skeleton className="h-[520px]" />
        </div>
      </Container>
    </main>
  );
}
