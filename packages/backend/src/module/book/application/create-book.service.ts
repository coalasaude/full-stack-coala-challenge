import { Injectable } from "@nestjs/common";
import { BookRepository } from "../domain/repository/book.repository";
import { Book } from "../domain/entity/book";
import { CreateBookDto } from "./dto/create-book.dto";
import { randomUUID } from "node:crypto";
import { BookAlreadyExistsError } from "../domain/error/book-already-exists.error";

@Injectable()
class CreateBookService {
  constructor(private readonly _bookRepository: BookRepository) {}

  async execute({
    title,
    author,
    summary,
    cover,
    readed,
  }: CreateBookDto): Promise<string> {
    const bookExists = await this._bookRepository.findByTitleAndAuthor(
      title,
      author,
    );

    if (bookExists) {
      throw new BookAlreadyExistsError(title, author);
    }

    const id = randomUUID();

    const book = new Book({
      id,
      title: title,
      author: author,
      summary: summary,
      cover: cover,
      readed: readed,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await this._bookRepository.save(book);

    return id;
  }
}

export { CreateBookService };
