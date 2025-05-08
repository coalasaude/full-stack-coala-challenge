import { Dialog } from "radix-ui";
import { AddBookDialogProps } from "./props";

const DialogBox = ({
  button,
  children,
  ...props
}: AddBookDialogProps) => (
  <Dialog.Root {...props}>
    <Dialog.Trigger asChild>{button}</Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm data-[state=open]:animate-overlayShow" />
      <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[100vh] w-[85vw] max-w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-card p-[25px] shadow-[var(--shadow-6)] focus:outline-none data-[state=open]:animate-contentShow">
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export { DialogBox };
