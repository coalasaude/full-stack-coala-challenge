import { BookExchange } from "../entity/book-exchange";

abstract class BookExchangeRepository {
  abstract findById(id: string): Promise<BookExchange | null>;
  abstract findByOfferedBookIdAndDesiredBookId(
    offeredBookId: string,
    desiredBookId: string,
  ): Promise<BookExchange | null>;
  abstract save(bookExchange: BookExchange): Promise<BookExchange>;
}

export { BookExchangeRepository };
