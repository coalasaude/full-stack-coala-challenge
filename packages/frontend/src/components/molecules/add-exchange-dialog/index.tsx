import { Input } from "@/components/atoms/input";
import { Select } from "../select";
import { Button } from "@/components/atoms/button";
import { Dialog } from "@radix-ui/themes";

const AddExchangeDialog = () => {
  return (
    <form className="m-2">
      <div className="mb-10">
        <Dialog.Title>
          <span className="text-lg font-semibold leading-none tracking-tight mb-2">
            Create Book Exchange
          </span>
        </Dialog.Title>
        <Dialog.Description>
          <span className="text-sm font-light text-muted-foreground">
            Offer one of your read books in exchange for a desired book.
          </span>
        </Dialog.Description>
      </div>
      <div className="mb-10">
        <fieldset className="grid gap-2 mb-6">
          <label
            className="block w-full text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="phone"
          >
            Phone number for contact
          </label>
          <Input id="phone" required />
        </fieldset>

        <fieldset className="grid gap-2 mb-6">
          <label className="block w-full text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Book to Offer (Read Book)
          </label>
          <Select
            options={[
              { value: "read", label: "Readed Book" },
              { value: "desired", label: "Desired Book" },
            ]}
            placeholder="Select a book to offer"
          />
        </fieldset>

        <fieldset className="grid gap-2">
          <label className="block w-full text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Book You Want (Desired Book)
          </label>
          <Select
            options={[
              { value: "read", label: "Readed Book" },
              { value: "desired", label: "Desired Book" },
            ]}
            placeholder="Select a book you want"
          />
        </fieldset>
      </div>
      <div className="flex justify-end">
        <Button type="submit" variant="outline">
          Create Exchange
        </Button>
      </div>
    </form>
  );
};

export { AddExchangeDialog };
