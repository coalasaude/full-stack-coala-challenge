import clsx from "clsx";
import { badgeVariants } from "./variants";
import { BadgeProps } from "./props";

function Badge({ className, children, variant, ...props }: BadgeProps) {
  return (
    <div className={clsx(badgeVariants({ variant }), className)} {...props}>
      {children}
    </div>
  );
}

export { Badge };
