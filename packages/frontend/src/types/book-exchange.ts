import { Book } from "./book";

interface BookExchange {
  id: string;
  offeredBook: Book | null;
  offeredBookId: string;
  desiredBook: Book | null;
  desiredBookId: string;
  exchangeOwnerPhone: string;
  exchangedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export type { BookExchange };
