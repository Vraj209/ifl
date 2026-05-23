"use client";

import { ErrorState } from "@/components/ui/error-state";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="bg-warm-white pt-32">
      <div className="container max-w-3xl py-20">
        <ErrorState
          title="Something interrupted the nursery experience."
          description="The page failed to render. Retry the request, or use the quote contact details in the footer."
          onAction={reset}
        />
      </div>
    </main>
  );
}
