import { Injectable } from "@nestjs/common";
import { BookRepository } from "../domain/repository/book.repository";
import { BookNotFoundError } from "../domain/error/book-not-found.error";

@Injectable()
export class PatchBookService {
  constructor(private readonly _bookRepository: BookRepository) {}

  async execute({ bookId, ...dto }: patchBookDto): Promise<void> {
    const book = await this._bookRepository.findById(bookId);

    if (!book) {
      throw new BookNotFoundError(bookId);
    }

    Object.assign(book, dto);

    await this._bookRepository.save(book);
  }
}
