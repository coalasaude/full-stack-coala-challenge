import clsx from "clsx";
import { FC } from "react";
import { CardContentProps } from "./props";

const CardContent: FC<CardContentProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={clsx("py-4 px-6 overflow-hidden", className)} {...props}>
      {children}
    </div>
  );
};

export { CardContent };
