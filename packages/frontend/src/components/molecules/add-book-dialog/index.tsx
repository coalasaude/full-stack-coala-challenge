import { Input } from "@/components/atoms/input";
import { Select } from "../select";
import { Button } from "@/components/atoms/button";
import { Dialog } from "@radix-ui/themes";

const AddBookDialog = () => {
  return (
    <form className="m-2">
      <div className="mb-10">
        <Dialog.Title>
          <span className="text-lg font-semibold leading-none tracking-tight mb-2">
            Add New Book
          </span>
        </Dialog.Title>
        <Dialog.Description>
          <span className="text-sm font-light text-muted-foreground">
            Add a book to your collection. Fill out the details below.
          </span>
        </Dialog.Description>
      </div>
      <div className="mb-10">
        <fieldset className="grid gap-2 mb-6">
          <label
            className="block w-full text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="title"
          >
            Title
          </label>
          <Input id="title" required />
        </fieldset>

        <fieldset className="grid gap-2 mb-6">
          <label
            className="block w-full text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="Author"
          >
            Author
          </label>
          <Input id="Author" required />
        </fieldset>

        <fieldset className="grid gap-2 mb-6">
          <label
            className="block w-full text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="coverImage"
          >
            Cover Image URL (optional)
          </label>
          <Input
            id="coverImage"
            placeholder="https://example.com/book-cover.jpg"
          />
        </fieldset>

        <fieldset className="grid gap-2">
          <label className="block w-full text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Book Type
          </label>
          <Select
            options={[
              { value: "read", label: "Readed Book" },
              { value: "desired", label: "Desired Book" },
            ]}
            defaultValue="read"
          />
        </fieldset>
      </div>
      <div className="flex justify-end">
        <Button type="submit">Add Book</Button>
      </div>
    </form>
  );
};

export { AddBookDialog };
