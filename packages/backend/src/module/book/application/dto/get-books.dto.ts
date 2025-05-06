interface GetBooksDto {
  page: number;
  pageSize: number;
  readed: boolean | null;
  genre: string | null;
  author: string | null;
  orderBy: { field: string; direction: "asc" | "desc" };
}

export type { GetBooksDto };
