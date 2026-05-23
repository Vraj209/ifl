import { Container } from "@/components/ui/container";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="bg-warm-white pt-32">
      <Container className="py-16">
        <Skeleton className="h-10 w-48" />
        <Skeleton className="mt-6 h-32 max-w-4xl" />
        <Skeleton className="mt-10 h-[520px] w-full" />
      </Container>
    </main>
  );
}
