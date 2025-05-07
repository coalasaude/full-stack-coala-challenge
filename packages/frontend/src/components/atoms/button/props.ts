import { ButtonHTMLAttributes } from "react";
import { VariantProps } from "class-variance-authority";
import { buttonVariant } from "./variants";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariant> {}

export type { ButtonProps };
