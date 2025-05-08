import { Book } from "@/types/book";
import { CreateBookRequest } from "@/types/create-book-request";
import { createExchangeRequest } from "@/types/create-exchange-request";
import { Dispatch, SetStateAction } from "react";

type BookContextType = {
  books: Book[];
  unfilteredBooks: Book[];
  isLoading: boolean;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  totalPages: number;
  orderBy: string;
  setOrderBy: Dispatch<SetStateAction<string>>;
  statusFilter: string;
  setStatusFilter: Dispatch<SetStateAction<string>>;
  titleFilter: string;
  setTitleFilter: Dispatch<SetStateAction<string>>;
  toggleBookReadness: (bookId: string, readed: boolean) => Promise<void>;
  createBook: (req: CreateBookRequest) => Promise<void>;
  createExchange: (req: createExchangeRequest) => Promise<void>;
};

export type { BookContextType };
