import { Provider } from "@nestjs/common";
import { BookRepository } from "../../domain/repository/book.repository";
import { BookRepositoryPrisma } from "../persistence/prisma/book.repository.prisma";
import { CreateBookService } from "../../application/create-book.service";
import { GetBooksService } from "../../application/get-books.service";
import { BookExchangeRepository } from "../../domain/repository/book-exchange.repository";
import { BookExchangeRepositoryPrisma } from "../persistence/prisma/book-exchange.repository.prisma";
import { CreateBookExchangeService } from "../../application/create-book-exchange.service";
import { PatchBookService } from "../../application/patch-book.service";

const provider: Provider[] = [
  {
    provide: BookRepository,
    useClass: BookRepositoryPrisma,
  },
  {
    provide: BookExchangeRepository,
    useClass: BookExchangeRepositoryPrisma,
  },
  CreateBookService,
  GetBooksService,
  CreateBookExchangeService,
  PatchBookService,
];

export { provider };
