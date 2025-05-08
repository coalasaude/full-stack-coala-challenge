interface CreateBookDto {
  title: string;
  author: string;
  summary: string;
  cover: string | null;
  readed: boolean | null;
}

export type { CreateBookDto };
