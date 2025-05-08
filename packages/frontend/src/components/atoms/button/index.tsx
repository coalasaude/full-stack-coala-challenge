import * as React from "react";
import clsx from "clsx";
import { ButtonProps } from "./props";
import { buttonVariants } from "./variants";

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "default",
  size = "default",
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };
