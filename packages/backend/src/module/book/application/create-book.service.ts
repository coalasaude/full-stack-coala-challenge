import { Injectable } from "@nestjs/common";
import { BookRepository } from "../domain/repository/book.repository";
import { Book } from "../domain/entity/book";
import { CreateBookDto } from "./dto/create-book.dto";
import { randomUUID } from "node:crypto";

@Injectable()
class CreateBookService {
  constructor(private readonly _bookRepository: BookRepository) {}

  async execute(dto: CreateBookDto): Promise<string> {
    const bookExists = await this._bookRepository.findByTitleAndAuthor(
      dto.title,
      dto.author
    );

    if (bookExists && bookExists.id) {
      throw new Error("Book already exists!");
    }

    const id = randomUUID();

    const book = new Book({
      id,
      title: dto.title,
      author: dto.author,
      summary: dto.summary,
      genre: dto.genre,
      cover: dto.cover,
      readed: dto.readed,
      readedAt: dto.readedAt ? new Date(dto.readedAt) : null,
      publisher: dto.publisher,
      publishedAt: new Date(dto.publishedAt),
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await this._bookRepository.save(book);

    return id;
  }
}

export { CreateBookService };
