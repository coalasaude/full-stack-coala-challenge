import { DomainError } from "../../../../shared/domain/error/domain.error";

class MissingExchangeOfferedBookError extends DomainError {
  constructor(bookId?: string) {
    const message = bookId
      ? `The offered book with ID ${bookId} for exchange is missing.`
      : `The offered book for exchange is missing.`;
    super(message);
    this.name = "MissingExchangeOfferedBookError";
  }
}

export { MissingExchangeOfferedBookError };
