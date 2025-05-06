import { DomainError } from "src/shared/domain/error/domain.error";

export class OfferedBookMustBeReadedError extends DomainError {
  constructor(bookId: string) {
    super(`The offered book with ID ${bookId} must be marked as read.`);
    this.name = "OfferedBookMustBeReadedError";
  }
}
