import clsx from "clsx";
import { FC } from "react";
import { CardContentProps } from "./props";

const CardFooter: FC<CardContentProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={clsx("flex items-center p-6 pt-0 justify-between", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export { CardFooter };
