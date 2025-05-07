import { cva } from "class-variance-authority";

const buttonVariant = cva(
  "px-4 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      variant: {
        primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
        secondary:
          "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",
        outline: "border border-gray-300",
      },
      size: {
        small: "px-2 py-1 text-xs",
        medium: "px-4 py-2 text-sm",
        large: "px-6 py-3 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  },
);

export { buttonVariant };
