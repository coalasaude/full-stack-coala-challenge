import { DomainEntity } from "src/shared/domain/entity/domain.entity";
import { BookDTO } from "./dto/book.dto";

class Book implements DomainEntity<Book> {
  private _id: string;
  private _title: string;
  private _author: string;
  private _summary: string;
  private _genre: string;
  private _cover: string | null;
  private _readed: Boolean;
  private _readedAt: Date | null;
  private _publisher: string;
  private _publishedAt: Date;
  private _createdAt: Date;
  private _updatedAt: Date;

  constructor({
    id,
    title,
    author,
    summary,
    genre,
    cover,
    readed,
    readedAt,
    publisher,
    publishedAt,
    createdAt,
    updatedAt,
  }: BookDTO) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.summary = summary;
    this.genre = genre;
    this.cover = cover;
    this.readed = readed;
    this.readedAt = readedAt;
    this.publisher = publisher;
    this.publishedAt = publishedAt;
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

  get publishedAt(): Date {
    return this._publishedAt;
  }

  set publishedAt(value: Date) {
    this._publishedAt = value;
  }

  get genre(): string {
    return this._genre;
  }

  set genre(value: string) {
    this._genre = value;
  }

  get summary(): string {
    return this._summary;
  }

  set summary(value: string) {
    this._summary = value;
  }

  get publisher(): string {
    return this._publisher;
  }

  set publisher(value: string) {
    this._publisher = value;
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

  get readedAt(): Date | null {
    return this._readedAt;
  }

  set readedAt(value: Date | null) {
    this._readedAt = value;
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
      genre: this.genre,
      cover: this.cover,
      readed: this.readed,
      readedAt: this.readedAt,
      publisher: this.publisher,
      publishedAt: this.publishedAt,
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
      genre: this.genre,
      cover: this.cover,
      readed: this.readed,
      readedAt: this.readedAt,
      publisher: this.publisher,
      publishedAt: this.publishedAt,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}

export { Book };
