import { clsx } from "clsx";
import type React from "react";
import { SkeletonProps } from "./props";

function CardSkeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={clsx(
        "animate-pulse rounded-md bg-muted-foreground/10",
        className,
      )}
      {...props}
    />
  );
}

export { CardSkeleton };
