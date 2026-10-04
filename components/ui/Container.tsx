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
        "mx-auto w-full px-5 sm:px-10 xl:px-16",
        narrow ? "max-w-[58rem]" : "max-w-[88rem]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
