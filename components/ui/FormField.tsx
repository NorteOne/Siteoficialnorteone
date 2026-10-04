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
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
  optional?: boolean;
  errorId?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-[0.8125rem] font-medium text-grafite/80">
        {label}
        {optional ? (
          <span className="ml-1 font-normal text-cinza-pedra">(opcional)</span>
        ) : null}
      </label>
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
  "min-h-12 w-full rounded-none border-0 border-b border-[var(--color-border)] bg-transparent px-0 py-3 text-base text-grafite outline-none placeholder:text-cinza-pedra/65 transition-[border-color,background-color] duration-300 focus:border-cobre focus:bg-white/35";

export function inputClasses(hasError?: boolean) {
  return cn(controlBase, hasError ? "border-red-600" : "focus:border-cobre");
}
