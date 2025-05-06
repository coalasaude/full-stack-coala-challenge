import { Injectable } from "@nestjs/common";
import { BookRepository } from "../domain/repository/book.repository";
import { Book } from "../domain/entity/book";
import { Paginated } from "src/shared/application/entity/paginated.entity";
import { GetBooksDto } from "./dto/get-books.dto";

@Injectable()
class GetBooksService {
  constructor(private readonly _bookRepository: BookRepository) {}

  async execute({
    page,
    pageSize,
    author,
    genre,
    readed,
    orderBy,
  }: GetBooksDto): Promise<Paginated<Book>> {
    return this._bookRepository.findAllPaginated(
      page,
      pageSize,
      readed,
      author,
      genre,
      orderBy,
    );
  }
}

export { GetBooksService };
