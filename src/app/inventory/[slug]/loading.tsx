import { Container } from "@/components/ui/container";
import { Skeleton } from "@/components/ui/skeleton";

export default function CategoryLoading() {
  return (
    <main className="bg-warm-white pt-32">
      <Container className="py-12">
        <Skeleton className="h-11 w-36" />
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div>
            <Skeleton className="h-8 w-40" />
            <Skeleton className="mt-6 h-28 w-full" />
            <Skeleton className="mt-6 h-24 w-full" />
          </div>
          <Skeleton className="h-[520px]" />
        </div>
      </Container>
    </main>
  );
}
