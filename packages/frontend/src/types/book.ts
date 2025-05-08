import { BookExchange } from "./book-exchange";

interface Book {
  id: string;
  title: string;
  author: string;
  summary: string;
  cover: string | null;
  readed: Boolean;
  desiredExchanges: BookExchange[];
  offeredExchanges: BookExchange[];
  createdAt: Date;
  updatedAt: Date;
}

export type { Book };
