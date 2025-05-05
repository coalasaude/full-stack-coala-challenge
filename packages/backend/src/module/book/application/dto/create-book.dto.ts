interface CreateBookDto {
  title: string;
  author: string;
  summary: string;
  genre: string;
  cover: string | null;
  readed: boolean | null;
  readedAt: string | null;
  publisher: string;
  publishedAt: string;
}

export type { CreateBookDto };
