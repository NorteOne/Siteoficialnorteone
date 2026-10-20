"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function FormField({
  label,
  htmlFor,
  error,
  children,
  optional,
  errorId,
  description,
  descriptionId,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
  optional?: boolean;
  errorId?: string;
  description?: string;
  descriptionId?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-[0.8125rem] font-medium text-grafite/80">
        {label}
        {optional ? (
          <span className="ml-1 font-normal text-cinza-pedra">(opcional)</span>
        ) : null}
      </label>
      {description ? (
        <p id={descriptionId} className="text-sm leading-6 text-cinza-pedra">
          {description}
        </p>
      ) : null}
      {children}
      {error ? (
        <p id={errorId} role="alert" className="text-sm text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}

const controlBase =
  "min-h-12 w-full rounded-[4px] border bg-white px-4 py-3 text-base leading-6 text-grafite placeholder:text-cinza-pedra transition-[border-color,outline-color] duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobre-ink";

export function inputClasses(hasError?: boolean) {
  return cn(
    controlBase,
    hasError
      ? "border-red-700 hover:border-red-800 focus:border-red-700"
      : "border-cinza-pedra hover:border-grafite focus:border-cobre-ink"
  );
}
