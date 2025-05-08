import { Input } from "@/components/atoms/input";
import { Select } from "../select";
import { Button } from "@/components/atoms/button";
import { Dialog } from "@radix-ui/themes";
import { useBook } from "@/context/book/hook";
import { FormEvent, useState } from "react";
import { AddBookDialogProps } from "./props";

const AddBookDialog = ({ close }: AddBookDialogProps) => {
  const { createBook } = useBook();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [summary, setSummary] = useState("");
  const [cover, setCover] = useState("");
  const [status, setStatus] = useState("read");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    await createBook({
      title,
      author,
      summary,
      cover,
      readed: status === "read",
    });

    close();
  };

  return (
    <form className="m-2" onSubmit={onSubmit}>
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
          <Input
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
            id="title"
            required
          />
        </fieldset>

        <fieldset className="grid gap-2 mb-6">
          <label
            className="block w-full text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="author"
          >
            Author
          </label>
          <Input
            value={author}
            onChange={(e) => setAuthor(e.currentTarget.value)}
            id="author"
            required
          />
        </fieldset>

        <fieldset className="grid gap-2 mb-6">
          <label
            className="block w-full text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="summary"
          >
            Summary
          </label>
          <Input
            value={summary}
            onChange={(e) => setSummary(e.currentTarget.value)}
            id="summary"
            required
          />
        </fieldset>

        <fieldset className="grid gap-2 mb-6">
          <label
            className="block w-full text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="cover"
          >
            Cover Image URL (optional)
          </label>
          <Input
            value={cover}
            onChange={(e) => setCover(e.currentTarget.value)}
            id="cover"
            placeholder="https://example.com/book-cover.jpg"
          />
        </fieldset>

        <fieldset className="grid gap-2">
          <label className="block w-full text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Book Type
          </label>
          <Select
            value={status}
            onValueChange={setStatus}
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
