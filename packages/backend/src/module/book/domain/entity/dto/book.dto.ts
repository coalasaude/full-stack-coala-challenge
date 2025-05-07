import { BookExchange } from "../book-exchange";

interface BookDTO {
  id: string;
  title: string;
  author: string;
  summary: string;
  cover: string | null;
  readed: boolean | null;
  desiredExchanges?: BookExchange[];
  offeredExchanges?: BookExchange[];
  createdAt: Date;
  updatedAt: Date;
}

export type { BookDTO };
