import { BookExchange } from "../book-exchange";

interface BookDTO {
  id: string;
  title: string;
  author: string;
  summary: string;
  genre: string;
  cover: string | null;
  readed: boolean | null;
  readedAt: Date | null;
  publisher: string;
  publishedAt: Date;
  desiredExchanges?: BookExchange[];
  offeredExchanges?: BookExchange[];
  createdAt: Date;
  updatedAt: Date;
}

export type { BookDTO };
