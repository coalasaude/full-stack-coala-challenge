import { Injectable } from "@nestjs/common";
import { BookRepository } from "../../../domain/repository/book.repository";
import { Book as BookEntity, Prisma } from "generated/prisma";
import { PrismaService } from "src/shared/infrasctructure/persistence/prisma/service/prisma.service";
import { Book } from "../../../domain/entity/book";
import { Paginated } from "src/shared/application/entity/paginated.entity";

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
    author: string | null,
    genre: string | null,
    orderBy: { field: string; direction: "asc" | "desc" },
  ): Promise<Paginated<Book>> {
    const skip = (page - 1) * pageSize;

    const where: Prisma.BookWhereInput = {};
    if (readed !== null) where.readed = readed;
    if (author) where.author = { contains: author, mode: "insensitive" };
    if (genre) where.genre = { contains: genre, mode: "insensitive" };

    const orderByClause: Prisma.BookOrderByWithRelationInput = orderBy
      ? { [orderBy.field]: orderBy.direction }
      : { createdAt: "desc" };

    const [entities, totalItems] = await Promise.all([
      this.prisma.book.findMany({
        where,
        skip,
        take: pageSize,
        orderBy: orderByClause,
      }),
      this.prisma.book.count({
        where,
      }),
    ]);

    return new Paginated(
      entities.map((entity) => new Book(entity)),
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
}

export { BookRepositoryPrisma };
