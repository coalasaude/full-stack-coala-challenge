import { Dispatch, HTMLAttributes, ReactNode, SetStateAction } from "react";

interface AddBookDialogProps extends HTMLAttributes<HTMLDivElement> {
  button: ReactNode;
  isOpen?: boolean;
  onOpenChange?: Dispatch<SetStateAction<boolean>>;
}

export type { AddBookDialogProps };
