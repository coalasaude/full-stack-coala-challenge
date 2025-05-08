interface GetBooksDto {
  page: number;
  pageSize: number;
  readed: boolean | null;
  title: string | null;
  orderBy: { field: string; direction: "asc" | "desc" };
}

export type { GetBooksDto };
