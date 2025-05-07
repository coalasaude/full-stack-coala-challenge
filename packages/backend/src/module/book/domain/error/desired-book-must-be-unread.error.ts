import { DomainError } from "../../../../shared/domain/error/domain.error";

class DesiredBookMustBeUnreadError extends DomainError {
  constructor(bookId: string) {
    super(`The desired book with ID ${bookId} must be unread.`);
    this.name = "DesiredBookMustBeUnreadError";
  }
}

export { DesiredBookMustBeUnreadError };
