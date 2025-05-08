import { HttpException, HttpStatus } from "@nestjs/common";

class DomainError extends HttpException {
  constructor(message: string, statusCode: number = HttpStatus.BAD_REQUEST) {
    super(message, statusCode);
    this.name = "DomainError";
  }
}

export { DomainError };
