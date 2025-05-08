import { Select } from "../select";
import { Button } from "@/components/atoms/button";
import { Dialog } from "@radix-ui/themes";
import { useBook } from "@/context/book/hook";
import { Book } from "@/types/book";
import { FormEvent, useMemo, useState } from "react";
import { AddExchangeDialogProps } from "./props";
import { InputMask } from "@react-input/mask";
import { PhoneInput } from "@/components/atoms/phone-input";

const AddExchangeDialog = ({ close }: AddExchangeDialogProps) => {
  const { books, createExchange } = useBook();
  const [phone, setPhone] = useState("");
  const [desiredBookId, setDesiredBookId] = useState("");
  const [offeredBookId, setOfferedBookId] = useState("");

  const selectMapBook = (book: Book) => ({
    label: `${book.title} by ${book.author}`,
    value: book.id,
  });

  const readedBooks = useMemo(() => {
    return books
      .filter(
        (book) =>
          book.readed &&
          book.desiredExchanges.length < 1 &&
          book.offeredExchanges.length < 1,
      )
      .map(selectMapBook);
  }, [books]);
  const desiredBooks = useMemo(() => {
    return books
      .filter(
        (book) =>
          !book.readed &&
          book.desiredExchanges.length < 1 &&
          book.offeredExchanges.length < 1,
      )
      .map(selectMapBook);
  }, [books]);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    await createExchange({
      exchangeOwnerPhone: phone,
      desiredBookId,
      offeredBookId,
    });

    close();
  };

  return (
    <form className="m-2" onSubmit={onSubmit}>
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
          <PhoneInput
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.currentTarget.value)}
            required
          />
        </fieldset>

        <fieldset className="grid gap-2 mb-6">
          <label className="block w-full text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Book to Offer (Read Book)
          </label>
          <Select
            value={offeredBookId}
            onValueChange={setOfferedBookId}
            options={readedBooks}
            placeholder="Select a book to offer"
          />
        </fieldset>

        <fieldset className="grid gap-2">
          <label className="block w-full text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Book You Want (Desired Book)
          </label>
          <Select
            value={desiredBookId}
            onValueChange={setDesiredBookId}
            options={desiredBooks}
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
