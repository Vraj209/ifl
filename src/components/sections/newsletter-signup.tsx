"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.includes("@")) return;
    setSubmitted(true);
  };

  return (
    <div className="rounded-lg border border-forest-black/10 bg-warm-white p-5">
      <h2 className="font-display text-2xl font-semibold text-forest-black">
        Tree Farm Updates
      </h2>
      <p className="mt-2 text-sm leading-6 text-forest-black/62">
        Stock timing, planting windows, and wholesale updates for professional
        buyers.
      </p>
      {submitted ? (
        <p className="mt-5 rounded-md bg-sage/30 p-4 text-sm font-medium text-forest-black">
          You’re on the list.
        </p>
      ) : (
        <form className="mt-5 flex flex-col gap-3 sm:flex-row" onSubmit={onSubmit}>
          <Input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="your@email.com"
            aria-label="Email address"
            required
          />
          <Button type="submit" className="shrink-0">
            <Send className="size-4" aria-hidden="true" />
            Subscribe
          </Button>
        </form>
      )}
    </div>
  );
}
