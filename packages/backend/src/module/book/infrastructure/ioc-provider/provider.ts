import { Provider } from "@nestjs/common";
import { BookRepository } from "../../domain/repository/book.repository";
import { BookRepositoryPrisma } from "../persistence/prisma/book.repository.prisma";
import { CreateBookService } from "../../application/create-book.service";

const provider: Provider[] = [
  {
    provide: BookRepository,
    useClass: BookRepositoryPrisma,
  },
  CreateBookService,
];

export { provider };
