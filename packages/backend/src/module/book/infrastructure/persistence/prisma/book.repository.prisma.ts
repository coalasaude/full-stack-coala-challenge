import { Injectable } from "@nestjs/common";
import { BookRepository } from "../../../domain/repository/book.repository";
import { Book as BookEntity, Prisma } from "generated/prisma";
import { PrismaService } from "src/shared/infrasctructure/persistence/prisma/service/prisma.service";
import { Book } from "../../../domain/entity/book";
import { Paginated } from "src/shared/application/entity/paginated.entity";
import { BookExchange } from "src/module/book/domain/entity/book-exchange";
import { BookWithExchangesType } from "./type/book-with-exchanges.type";

@Injectable()
class BookRepositoryPrisma implements BookRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: string): Promise<Book | null> {
    const entity = await this.prisma.book.findUnique({
      where: { id },
      include: {
        desiredExchanges: {
          include: {
            desiredBook: true,
            offeredBook: true,
          },
        },
        offeredExchanges: {
          include: {
            desiredBook: true,
            offeredBook: true,
          },
        },
      },
    });

    if (!entity) {
      return null;
    }

    return new Book({
      id: entity.id,
      title: entity.title,
      author: entity.author,
      summary: entity.summary,
      cover: entity.cover,
      readed: entity.readed,
      desiredExchanges: this.mapExchangesToEntity(entity.desiredExchanges),
      offeredExchanges: this.mapExchangesToEntity(entity.offeredExchanges),
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    });
  }

  async findByTitleAndAuthor(
    title: string,
    author: string,
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

  async findAllPaginated(
    page: number,
    pageSize: number,
    readed: boolean | null,
    title: string | null,
    orderBy: { field: string; direction: "asc" | "desc" },
  ): Promise<Paginated<Book>> {
    const skip = (page - 1) * pageSize;

    const where: Prisma.BookWhereInput = {};
    if (readed !== null) where.readed = readed;
    if (title) where.title = { contains: title, mode: "insensitive" };

    const orderByClause: Prisma.BookOrderByWithRelationInput = orderBy
      ? { [orderBy.field]: orderBy.direction }
      : { createdAt: "desc" };

    const [entities, totalItems] = await Promise.all([
      this.prisma.book.findMany({
        where,
        skip,
        take: pageSize,
        orderBy: orderByClause,
        include: {
          desiredExchanges: {
            include: {
              desiredBook: true,
              offeredBook: true,
            },
          },
          offeredExchanges: {
            include: {
              desiredBook: true,
              offeredBook: true,
            },
          },
        },
      }),
      this.prisma.book.count({
        where,
      }),
    ]);

    return new Paginated(
      this.mapBooksExchangesToEntity(entities),
      totalItems,
      page,
      Math.ceil(totalItems / pageSize),
      pageSize,
    );
  }

  async save(book: Book): Promise<Book> {
    const entity = await this.prisma.book.upsert({
      where: { id: book.id },
      create: book.toPersistence<BookEntity>(),
      update: book.toPersistence<BookEntity>(),
    });

    return new Book(entity);
  }

  private mapBooksExchangesToEntity(books: BookWithExchangesType[]): Book[] {
    return books.map(
      (book) =>
        new Book({
          id: book.id,
          title: book.title,
          author: book.author,
          summary: book.summary,
          cover: book.cover,
          readed: book.readed,
          desiredExchanges: this.mapExchangesToEntity(book.desiredExchanges),
          offeredExchanges: this.mapExchangesToEntity(book.offeredExchanges),
          createdAt: book.createdAt,
          updatedAt: book.updatedAt,
        }),
    );
  }

  private mapExchangesToEntity(
    exchanges:
      | BookWithExchangesType["desiredExchanges"]
      | BookWithExchangesType["offeredExchanges"],
  ): BookExchange[] {
    return exchanges.map(
      (exchange) =>
        new BookExchange({
          ...exchange,
          desiredBook: exchange.desiredBook
            ? new Book(exchange.desiredBook)
            : null,
          offeredBook: exchange.offeredBook
            ? new Book(exchange.offeredBook)
            : null,
        }),
    );
  }
}

export { BookRepositoryPrisma };
