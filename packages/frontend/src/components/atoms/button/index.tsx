import * as React from "react";
import clsx from "clsx";
import { buttonVariant } from "./variants";
import { ButtonProps } from "./props";

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className,
  ...props
}) => {
  return (
    <button className={clsx(buttonVariant({ variant, className }))} {...props}>
      {children}
    </button>
  );
};

export default Button;
