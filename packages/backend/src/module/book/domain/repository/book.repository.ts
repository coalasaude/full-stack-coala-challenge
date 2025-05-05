import { Book } from "../entity/book";

abstract class BookRepository {
  abstract findById(id: string): Promise<Book | null>;
  abstract findByTitleAndAuthor(
    title: string,
    author: string
  ): Promise<Book | null>;
  abstract save(book: Book): Promise<Book>;
}

export { BookRepository };
