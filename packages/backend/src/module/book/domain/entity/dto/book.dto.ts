interface BookDTO {
  id: string | null;
  title: string;
  author: string;
  summary: string;
  genre: string;
  cover: string | null;
  readed: boolean | null;
  readedAt: Date | null;
  publisher: string;
  publishedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

export type { BookDTO };
