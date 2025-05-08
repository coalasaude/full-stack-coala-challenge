import { BookExchange } from "src/module/book/domain/entity/book-exchange";
import { BookExchange as BookExchangeEntity } from "generated/prisma";
import { BookExchangeRepository } from "src/module/book/domain/repository/book-exchange.repository";
import { PrismaService } from "src/shared/infrasctructure/persistence/prisma/service/prisma.service";
import { Injectable } from "@nestjs/common";

@Injectable()
class BookExchangeRepositoryPrisma implements BookExchangeRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: string): Promise<BookExchange | null> {
    const entity = await this.prisma.bookExchange.findUnique({
      where: { id },
    });

    if (!entity) {
      return null;
    }

    return new BookExchange(entity);
  }

  async findByOfferedBookIdAndDesiredBookId(
    offeredBookId: string,
    desiredBookId: string,
  ): Promise<BookExchange | null> {
    const entity = await this.prisma.bookExchange.findFirst({
      where: {
        offeredBookId,
        desiredBookId,
      },
    });

    if (!entity) {
      return null;
    }

    return new BookExchange(entity);
  }

  async save(bookExchange: BookExchange): Promise<BookExchange> {
    const entity = await this.prisma.bookExchange.upsert({
      where: { id: bookExchange.id },
      create: bookExchange.toPersistence<BookExchangeEntity>(),
      update: bookExchange.toPersistence<BookExchangeEntity>(),
    });

    return new BookExchange(entity);
  }
}

export { BookExchangeRepositoryPrisma };
