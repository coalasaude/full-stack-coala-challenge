import clsx from "clsx";
import * as React from "react";
import { CardProps } from "./props";

const Card: React.FC<CardProps> = ({ className, children, ...props }) => (
  <div
    className={clsx(
      "rounded-lg border bg-white shadow-sm overflow-hidden",
      className,
    )}
    {...props}
  >
    {children}
  </div>
);

export { Card };
