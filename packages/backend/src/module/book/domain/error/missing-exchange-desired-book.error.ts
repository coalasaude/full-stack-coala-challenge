import { DomainError } from "../../../../shared/domain/error/domain.error";

class MissingExchangeDesiredBookError extends DomainError {
  constructor(bookId?: string) {
    const message = bookId
      ? `The desired book with ID ${bookId} for exchange is missing.`
      : `The desired book for exchange is missing.`;
    super(message);
    this.name = "MissingExchangeDesiredBookError";
  }
}

export { MissingExchangeDesiredBookError };
