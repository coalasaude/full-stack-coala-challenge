import { HttpStatus } from "@nestjs/common";
import { DomainError } from "../../../../shared/domain/error/domain.error";

class BookAlreadyExistsError extends DomainError {
  constructor(title: string, author: string) {
    super(
      `A book with the title "${title}" by "${author}" already exists.`,
      HttpStatus.CONFLICT,
    );
    this.name = "BookAlreadyExistsError";
  }
}

export { BookAlreadyExistsError };
