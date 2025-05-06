import { DomainEntity } from "src/shared/domain/entity/domain.entity";
import { BookExchangeDTO } from "./dto/book-exchange.dto";
import { Book } from "./book";
import { MissingExchangeDesiredBookError } from "../error/missing-exchange-desired-book.error";
import { MissingExchangeOfferedBookError } from "../error/missing-exchange-offered-book.error";
import { PhoneVO } from "src/shared/domain/value-object/phone.vo";
import { OfferedBookMustBeReadedError } from "../error/offered-book-must-be-readed.error";
import { DesiredBookMustBeUnreadError } from "../error/desired-book-must-be-unread.error";

class BookExchange implements DomainEntity<BookExchange> {
  private _id: string;
  private _offeredBook: Book | null;
  private _offeredBookId: string;
  private _desiredBook: Book | null;
  private _desiredBookId: string;
  private _exchangeOwnerPhone: string;
  private _exchangedAt: Date | null;
  private _createdAt: Date;
  private _updatedAt: Date;

  constructor({
    id,
    offeredBook,
    offeredBookId,
    desiredBook,
    desiredBookId,
    exchangeOwnerPhone,
    exchangedAt,
    createdAt,
    updatedAt,
  }: BookExchangeDTO) {
    this.id = id;
    this.offeredBook = offeredBook;
    this.offeredBookId = offeredBookId;
    this.desiredBook = desiredBook;
    this.desiredBookId = desiredBookId;
    this.exchangeOwnerPhone = exchangeOwnerPhone;
    this.exchangedAt = exchangedAt;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get offeredBook(): Book | null {
    return this._offeredBook;
  }

  set offeredBook(value: Book | null | undefined) {
    if (value && value.readed === false) {
      throw new OfferedBookMustBeReadedError(value.id);
    }

    this._offeredBook = value || null;
  }

  get offeredBookId(): string {
    return this._offeredBookId;
  }

  set offeredBookId(value: string | null) {
    if (value === null) {
      if (this.offeredBook !== null && this.offeredBook.id !== null) {
        this._offeredBookId = this.offeredBook?.id;
        return;
      }

      throw new MissingExchangeOfferedBookError();
    }

    this._offeredBookId = value;
  }

  get desiredBook(): Book | null {
    return this._desiredBook;
  }

  set desiredBook(value: Book | null | undefined) {
    if (value && value.readed === true) {
      throw new DesiredBookMustBeUnreadError(value.id);
    }

    this._desiredBook = value || null;
  }

  get desiredBookId(): string {
    return this._desiredBookId;
  }

  set desiredBookId(value: string | null) {
    if (value === null) {
      if (this.desiredBook !== null && this.desiredBook.id !== null) {
        this._desiredBookId = this.desiredBook?.id;
        return;
      }

      throw new MissingExchangeDesiredBookError();
    }

    this._desiredBookId = value;
  }

  get exchangeOwnerPhone(): string {
    return this._exchangeOwnerPhone;
  }

  set exchangeOwnerPhone(value: PhoneVO | string) {
    this._exchangeOwnerPhone =
      value instanceof PhoneVO ? value.value : new PhoneVO(value).value;
  }

  get exchangedAt(): Date | null {
    return this._exchangedAt;
  }

  set exchangedAt(value: Date | null) {
    this._exchangedAt = value;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  set createdAt(value: Date) {
    this._createdAt = value;
  }

  get updatedAt(): Date {
    return this._updatedAt;
  }

  set updatedAt(value: Date) {
    this._updatedAt = value;
  }

  toLiteral(): this {
    return <this>{
      id: this.id,
      offeredBook: this.offeredBook?.toLiteral(),
      offeredBookId: this.offeredBookId,
      desiredBook: this.desiredBook?.toLiteral(),
      desiredBookId: this.desiredBookId,
      exchangeOwnerPhone: this.exchangeOwnerPhone,
      exchangedAt: this.exchangedAt,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }

  toPersistence<T>(): T {
    return <T>{
      id: this.id,
      offeredBookId: this.offeredBookId,
      desiredBookId: this.desiredBookId,
      exchangeOwnerPhone: this.exchangeOwnerPhone,
      exchangedAt: this.exchangedAt,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}

export { BookExchange };
