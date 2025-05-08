import clsx from "clsx";
import { FC } from "react";
import { CardProps } from "./props";

const Card: FC<CardProps> = ({ className, children, ...props }) => (
  <div
    className={clsx(
      "rounded-lg border border-secondary bg-card shadow-sm overflow-hidden",
      className,
    )}
    {...props}
  >
    {children}
  </div>
);

export { Card };
