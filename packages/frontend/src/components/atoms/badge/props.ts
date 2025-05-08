import type { VariantProps } from "class-variance-authority";
import type { badgeVariants } from "./variants";
import { HTMLAttributes } from "react";

interface BadgeProps
  extends HTMLAttributes<HTMLDivElement | HTMLAnchorElement>,
    VariantProps<typeof badgeVariants> {}

export type { BadgeProps };
