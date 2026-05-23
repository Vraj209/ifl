import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <main className="bg-warm-white pt-32">
      <Container className="py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase text-moss">404</p>
          <h1 className="mt-4 font-display text-5xl font-semibold leading-tight text-forest-black">
            This field row is not on the map.
          </h1>
          <p className="mt-5 text-lg leading-8 text-forest-black/64">
            The page may have moved. Return to inventory or send a plant list
            directly for availability support.
          </p>
          <Link href="/inventory" className={buttonVariants({ className: "mt-8" })}>
            Browse inventory
          </Link>
        </div>
      </Container>
    </main>
  );
}
