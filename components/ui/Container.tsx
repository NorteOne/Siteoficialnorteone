import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  as?: "div" | "section";
  narrow?: boolean;
};

export function Container({
  className,
  narrow = false,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-6 lg:px-8",
        narrow ? "max-w-3xl" : "max-w-[78rem]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
