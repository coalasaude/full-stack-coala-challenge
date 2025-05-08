import { Injectable } from "@nestjs/common";
import { BookRepository } from "../domain/repository/book.repository";
import { randomUUID } from "node:crypto";
import { BookExchange } from "../domain/entity/book-exchange";
import { BookExchangeRepository } from "../domain/repository/book-exchange.repository";
import { MissingExchangeDesiredBookError } from "../domain/error/missing-exchange-desired-book.error";
import { MissingExchangeOfferedBookError } from "../domain/error/missing-exchange-offered-book.error";
import { Book } from "../domain/entity/book";
import { PhoneVO } from "../../../shared/domain/value-object/phone.vo";

@Injectable()
class CreateBookExchangeService {
  constructor(
    private readonly _bookExchangeRepository: BookExchangeRepository,
    private readonly _bookRepository: BookRepository,
  ) {}

  async execute({
    desiredBookId,
    offeredBookId,
    exchangeOwnerPhone,
  }: CreateBookExchangeDto): Promise<string> {
    const [desiredBook, offeredBook] = await this.validateBooks(
      desiredBookId,
      offeredBookId,
    );

    await this.ensureExchangeDoesNotExist(offeredBookId, desiredBookId);

    return this.createExchange(desiredBook, offeredBook, exchangeOwnerPhone);
  }

  private async validateBooks(
    desiredBookId: string,
    offeredBookId: string,
  ): Promise<[Book, Book]> {
    const desiredBook = await this._bookRepository.findById(desiredBookId);

    if (!desiredBook) {
      throw new MissingExchangeDesiredBookError(desiredBookId);
    }

    const offeredBook = await this._bookRepository.findById(offeredBookId);

    if (!offeredBook) {
      throw new MissingExchangeOfferedBookError(offeredBookId);
    }

    return [desiredBook, offeredBook];
  }

  private async ensureExchangeDoesNotExist(
    offeredBookId: string,
    desiredBookId: string,
  ): Promise<void> {
    const existingExchange =
      await this._bookExchangeRepository.findByOfferedBookIdAndDesiredBookId(
        offeredBookId,
        desiredBookId,
      );

    if (existingExchange) {
      throw new Error(
        `Exchange already exists for offered book ID: ${offeredBookId} and desired book ID: ${desiredBookId}`,
      );
    }
  }

  private async createExchange(
    desiredBook: any,
    offeredBook: any,
    exchangeOwnerPhone: string,
  ): Promise<string> {
    const id = randomUUID();

    const exchange = new BookExchange({
      id,
      offeredBook,
      offeredBookId: null,
      desiredBook,
      desiredBookId: null,
      exchangeOwnerPhone: new PhoneVO(exchangeOwnerPhone),
      exchangedAt: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await this._bookExchangeRepository.save(exchange);

    return id;
  }
}

export { CreateBookExchangeService };
