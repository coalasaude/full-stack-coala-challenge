import { HttpStatus } from "@nestjs/common";
import { DomainError } from "../../../../shared/domain/error/domain.error";

class BookNotFoundError extends DomainError {
  constructor(bookId: string) {
    super(`Book with ID ${bookId} not found`, HttpStatus.NOT_FOUND);
    this.name = "BookNotFoundError";
  }
}

export { BookNotFoundError };
