"use client";

import { Leaf } from "lucide-react";

import { Button } from "@/components/ui/button";

type EmptyStateProps = {
  title: string;
  description: string;
  action?: string;
  onAction?: () => void;
};

export function EmptyState({
  title,
  description,
  action,
  onAction,
}: EmptyStateProps) {
  return (
    <div className="rounded-lg border border-forest-black/10 bg-warm-white p-8 text-center">
      <Leaf className="mx-auto size-10 text-moss" aria-hidden="true" />
      <h2 className="mt-4 font-display text-2xl font-semibold text-forest-black">
        {title}
      </h2>
      <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-forest-black/64">
        {description}
      </p>
      {action ? (
        <Button className="mt-6" type="button" onClick={onAction}>
          {action}
        </Button>
      ) : null}
    </div>
  );
}
