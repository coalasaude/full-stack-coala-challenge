import { Select as RadixSelect } from "radix-ui";
import { FC } from "react";
import { SelectProps } from "./props";
import clsx from "clsx";

const Select: FC<SelectProps> = ({
  options,
  defaultValue,
  onValueChange,
  className,
  placeholder = "Select an option",
}) => {
  return (
    <RadixSelect.Root defaultValue={defaultValue} onValueChange={onValueChange}>
      <RadixSelect.Trigger
        className={clsx(
          `SelectTrigger inline-flex items-center justify-between rounded-md border border-input bg-background outline-none px-3 py-2 text-sm shadow-sm disabled:cursor-not-allowed disabled:opacity-50 w-full`,
          className,
        )}
      >
        <RadixSelect.Value placeholder={placeholder} />
        <RadixSelect.Icon />
      </RadixSelect.Trigger>

      <RadixSelect.Portal>
        <RadixSelect.Content
          position="popper"
          className="z-50 mt-1 w-full rounded-md border border-gray-300 bg-white shadow-lg focus:outline-none"
        >
          <RadixSelect.Viewport className="p-1">
            {options.map((option) => (
              <RadixSelect.Item
                key={option.value}
                value={option.value}
                className="flex items-center px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
              >
                <RadixSelect.ItemText
                  className="block truncate"
                  title={option.label}
                >
                  {option.label}
                </RadixSelect.ItemText>
              </RadixSelect.Item>
            ))}
          </RadixSelect.Viewport>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
};

export { Select };
