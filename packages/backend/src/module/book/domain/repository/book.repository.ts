import { Paginated } from "src/shared/application/entity/paginated.entity";
import { Book } from "../entity/book";

abstract class BookRepository {
  abstract findById(id: string): Promise<Book | null>;
  abstract findByTitleAndAuthor(
    title: string,
    author: string,
  ): Promise<Book | null>;
  abstract findAllPaginated(
    page: number,
    pageSize: number,
    readed: boolean | null,
    title: string | null,
    orderBy: { field: string; direction: "asc" | "desc" },
  ): Promise<Paginated<Book>>;
  abstract save(book: Book): Promise<Book>;
}

export { BookRepository };
