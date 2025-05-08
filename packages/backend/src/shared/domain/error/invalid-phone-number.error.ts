import { DomainError } from "./domain.error";

class InvalidPhoneNumberError extends DomainError {
  constructor(phone: string) {
    super(
      `The provided phone number "${phone}" is invalid. Expected format: +<country code> (<area code>) <number>, e.g., +55 (84) 98162-3432.`,
    );
    this.name = "InvalidPhoneNumberError";
  }
}

export { InvalidPhoneNumberError };
