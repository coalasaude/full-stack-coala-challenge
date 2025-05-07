import { DomainEntity } from "src/shared/domain/entity/domain.entity";
import { BookDTO } from "./dto/book.dto";
import { BookExchange } from "./book-exchange";

class Book implements DomainEntity<Book> {
  private _id: string;
  private _title: string;
  private _author: string;
  private _summary: string;
  private _cover: string | null;
  private _readed: Boolean;
  private _desiredExchanges: BookExchange[];
  private _offeredExchanges: BookExchange[];
  private _createdAt: Date;
  private _updatedAt: Date;

  constructor({
    id,
    title,
    author,
    summary,
    cover,
    readed,
    desiredExchanges,
    offeredExchanges,
    createdAt,
    updatedAt,
  }: BookDTO) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.summary = summary;
    this.cover = cover;
    this.readed = readed;
    this.desiredExchanges = desiredExchanges || [];
    this.offeredExchanges = offeredExchanges || [];
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get author(): string {
    return this._author;
  }

  set author(value: string) {
    this._author = value;
  }

  get summary(): string {
    return this._summary;
  }

  set summary(value: string) {
    this._summary = value;
  }

  get cover(): string | null {
    return this._cover;
  }

  set cover(value: string | null) {
    this._cover = value;
  }

  get readed(): Boolean {
    return this._readed;
  }

  set readed(value: Boolean | null) {
    if (value === null) {
      this._readed = false;
      return;
    }

    this._readed = value;
  }

  get desiredExchanges(): BookExchange[] {
    return this._desiredExchanges;
  }

  set desiredExchanges(value: BookExchange[]) {
    this._desiredExchanges = value;
  }

  get offeredExchanges(): BookExchange[] {
    return this._offeredExchanges;
  }

  set offeredExchanges(value: BookExchange[]) {
    this._offeredExchanges = value;
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
      title: this.title,
      author: this.author,
      summary: this.summary,
      cover: this.cover,
      readed: this.readed,
      desiredExchanges: this.desiredExchanges.map((exchange) =>
        exchange.toLiteral(),
      ),
      offeredExchanges: this.offeredExchanges.map((exchange) =>
        exchange.toLiteral(),
      ),
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }

  toPersistence<T>(): T {
    return <T>{
      id: this.id,
      title: this.title,
      author: this.author,
      summary: this.summary,
      cover: this.cover,
      readed: this.readed,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}

export { Book };
