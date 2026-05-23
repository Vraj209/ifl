"use client";

import { ArrowRight, CheckCircle2, FileText, Loader2 } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { inventoryCategories } from "@/lib/site";
import { cn } from "@/lib/utils";

const steps = ["Project", "Plant list", "Contact"];

export function QuoteRequestFlow() {
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    projectType: "Landscape contractor",
    timing: "",
    category: inventoryCategories[0].title,
    plantList: "",
    name: "",
    email: "",
    phone: "",
  });

  const canAdvance = useMemo(() => {
    if (step === 0) return form.projectType.length > 1 && form.timing.length > 1;
    if (step === 1) return form.plantList.length > 8;
    return form.name.length > 1 && form.email.includes("@");
  }, [form, step]);

  const update = (key: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (step < steps.length - 1) {
      if (canAdvance) setStep((current) => current + 1);
      return;
    }

    if (!canAdvance) return;
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 650);
  };

  if (submitted) {
    return (
      <div className="rounded-lg border border-sage/40 bg-warm-white p-8 text-forest-black">
        <CheckCircle2 className="size-11 text-moss" aria-hidden="true" />
        <h2 className="mt-5 font-display text-3xl font-semibold">
          Quote request staged.
        </h2>
        <p className="mt-3 text-sm leading-6 text-forest-black/62">
          This prototype captured the request locally. In production, this flow
          can post to a CRM, email routing, or availability system.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-lg border border-warm-white/12 bg-warm-white p-5 text-forest-black shadow-glass md:p-6"
    >
      <div className="flex flex-wrap gap-2" aria-label="Quote request progress">
        {steps.map((label, index) => (
          <button
            key={label}
            type="button"
            onClick={() => index <= step && setStep(index)}
            className={cn(
              "min-h-10 rounded-full px-4 text-xs font-semibold transition",
              index === step
                ? "bg-forest-black text-warm-white"
                : index < step
                  ? "bg-sage/50 text-forest-black"
                  : "bg-sand text-forest-black/52",
            )}
          >
            {index + 1}. {label}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {step === 0 ? (
          <div className="grid gap-4">
            <div>
              <label className="text-sm font-medium" htmlFor="projectType">
                Buyer type
              </label>
              <select
                id="projectType"
                value={form.projectType}
                onChange={(event) => update("projectType", event.target.value)}
                className="mt-2 flex min-h-12 w-full rounded-md border border-forest-black/12 bg-warm-white px-4 py-3 text-sm focus:border-moss focus:outline-none focus:ring-2 focus:ring-sage/50"
              >
                <option>Landscape contractor</option>
                <option>Municipality</option>
                <option>Garden center</option>
                <option>Commercial property team</option>
                <option>Residential estate project</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium" htmlFor="timing">
                Install timing
              </label>
              <Input
                id="timing"
                value={form.timing}
                onChange={(event) => update("timing", event.target.value)}
                placeholder="Spring 2026, fall dig, urgent hold..."
                required
              />
            </div>
          </div>
        ) : null}

        {step === 1 ? (
          <div className="grid gap-4">
            <div>
              <label className="text-sm font-medium" htmlFor="category">
                Primary category
              </label>
              <select
                id="category"
                value={form.category}
                onChange={(event) => update("category", event.target.value)}
                className="mt-2 flex min-h-12 w-full rounded-md border border-forest-black/12 bg-warm-white px-4 py-3 text-sm focus:border-moss focus:outline-none focus:ring-2 focus:ring-sage/50"
              >
                {inventoryCategories.map((category) => (
                  <option key={category.slug}>{category.title}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-medium" htmlFor="plantList">
                Plant list
              </label>
              <Textarea
                id="plantList"
                value={form.plantList}
                onChange={(event) => update("plantList", event.target.value)}
                placeholder="Example: 24 Autumn Blaze Maple 60mm, 18 White Spruce 6ft, substitutions acceptable..."
                required
              />
            </div>
          </div>
        ) : null}

        {step === 2 ? (
          <div className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium" htmlFor="name">
                  Name
                </label>
                <Input
                  id="name"
                  value={form.name}
                  onChange={(event) => update("name", event.target.value)}
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium" htmlFor="email">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(event) => update("email", event.target.value)}
                  placeholder="you@company.com"
                  required
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium" htmlFor="phone">
                Phone
              </label>
              <Input
                id="phone"
                value={form.phone}
                onChange={(event) => update("phone", event.target.value)}
                placeholder="Optional"
              />
            </div>
          </div>
        ) : null}
      </div>

      <Button type="submit" className="mt-6 w-full" disabled={!canAdvance || submitting}>
        {submitting ? (
          <Loader2 className="size-4 animate-spin" aria-hidden="true" />
        ) : step === steps.length - 1 ? (
          <FileText className="size-4" aria-hidden="true" />
        ) : null}
        {step === steps.length - 1 ? "Request availability" : "Continue"}
        {!submitting && step < steps.length - 1 ? (
          <ArrowRight className="size-4" aria-hidden="true" />
        ) : null}
      </Button>
    </form>
  );
}
