"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function FormField({
  label,
  htmlFor,
  error,
  children,
  optional,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
  optional?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-grafite">
        {label}
        {optional ? (
          <span className="ml-1 font-normal text-cinza-pedra">(opcional)</span>
        ) : null}
      </label>
      {children}
      {error ? (
        <p role="alert" className="text-sm text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}

const controlBase =
  "w-full rounded-[var(--radius-card-sm)] border bg-white px-4 py-3 text-base text-grafite placeholder:text-cinza-pedra/70 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-cobre/50 min-h-11";

export function inputClasses(hasError?: boolean) {
  return cn(controlBase, hasError ? "border-red-500" : "border-[var(--color-border)] focus:border-cobre");
}
