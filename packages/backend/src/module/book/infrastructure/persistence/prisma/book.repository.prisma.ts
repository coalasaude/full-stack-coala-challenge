import { Injectable } from "@nestjs/common";
import { BookRepository } from "../../../domain/repository/book.repository";
import { Book as BookEntity } from "generated/prisma";
import { PrismaService } from "src/shared/infrasctructure/persistence/prisma/service/prisma.service";
import { Book } from "../../../domain/entity/book";

@Injectable()
class BookRepositoryPrisma implements BookRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: string): Promise<Book | null> {
    const entity = await this.prisma.book.findUnique({
      where: { id },
    });

    if (!entity) {
      return null;
    }

    return new Book(entity);
  }

  async findByTitleAndAuthor(
    title: string,
    author: string
  ): Promise<Book | null> {
    const entity = await this.prisma.book.findFirst({
      where: {
        title,
        author,
      },
    });

    if (!entity) {
      return null;
    }

    return new Book(entity);
  }

  async save(book: Book): Promise<Book> {
    const entity = await this.prisma.book.upsert({
      where: { id: book.id! },
      create: book.toPersistence<BookEntity>(),
      update: book.toPersistence<BookEntity>(),
    });

    return new Book(entity);
  }
}

export { BookRepositoryPrisma };
