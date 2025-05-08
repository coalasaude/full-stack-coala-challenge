import { Test, TestingModule } from "@nestjs/testing";
import { CreateBookExchangeService } from "../../../../../../src/module/book/application/create-book-exchange.service";
import { Book } from "../../../../../../src/module/book/domain/entity/book";
import { BookExchange } from "../../../../../../src/module/book/domain/entity/book-exchange";
import { MissingExchangeDesiredBookError } from "../../../../../../src/module/book/domain/error/missing-exchange-desired-book.error";
import { MissingExchangeOfferedBookError } from "../../../../../../src/module/book/domain/error/missing-exchange-offered-book.error";
import { BookExchangeRepository } from "../../../../../../src/module/book/domain/repository/book-exchange.repository";
import { BookRepository } from "../../../../../../src/module/book/domain/repository/book.repository";
import { InvalidPhoneNumberError } from "../../../../../../src/shared/domain/error/invalid-phone-number.error";

describe("CreateBookExchangeService", () => {
  let service: CreateBookExchangeService;
  let bookRepository: jest.Mocked<BookRepository>;
  let bookExchangeRepository: jest.Mocked<BookExchangeRepository>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateBookExchangeService,
        {
          provide: BookRepository,
          useValue: {
            findById: jest.fn(),
          },
        },
        {
          provide: BookExchangeRepository,
          useValue: {
            findByOfferedBookIdAndDesiredBookId: jest.fn(),
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<CreateBookExchangeService>(CreateBookExchangeService);
    bookRepository = module.get(BookRepository);
    bookExchangeRepository = module.get(BookExchangeRepository);
  });

  it("should create a book exchange", async () => {
    const desiredBook = { id: "1" } as unknown as Book;
    const offeredBook = { id: "2" } as unknown as Book;

    bookRepository.findById.mockResolvedValueOnce(desiredBook);
    bookRepository.findById.mockResolvedValueOnce(offeredBook);
    bookExchangeRepository.findByOfferedBookIdAndDesiredBookId.mockResolvedValue(
      null,
    );

    const result = await service.execute({
      desiredBookId: "1",
      offeredBookId: "2",
      exchangeOwnerPhone: "+55 (68) 99399-5464",
    });

    expect(bookRepository.findById).toHaveBeenCalledWith("1");
    expect(bookRepository.findById).toHaveBeenCalledWith("2");
    expect(bookExchangeRepository.save).toHaveBeenCalled();
    expect(result).toBeDefined();
  });

  it("should throw an error if the desired book is not found", async () => {
    bookRepository.findById.mockResolvedValueOnce(null);

    await expect(
      service.execute({
        desiredBookId: "1",
        offeredBookId: "2",
        exchangeOwnerPhone: "+55 (68) 99399-5464",
      }),
    ).rejects.toThrow(MissingExchangeDesiredBookError);
  });

  it("should throw an error if the offered book is not found", async () => {
    bookRepository.findById.mockResolvedValueOnce({
      id: "1",
    } as unknown as Book);
    bookRepository.findById.mockResolvedValueOnce(null);

    await expect(
      service.execute({
        desiredBookId: "1",
        offeredBookId: "2",
        exchangeOwnerPhone: "+55 (68) 99399-5464",
      }),
    ).rejects.toThrow(MissingExchangeOfferedBookError);
  });

  it("should throw an error if the exchange already exists", async () => {
    const desiredBook = { id: "1" } as unknown as Book;
    const offeredBook = { id: "2" } as unknown as Book;

    bookRepository.findById.mockResolvedValueOnce(desiredBook);
    bookRepository.findById.mockResolvedValueOnce(offeredBook);
    bookExchangeRepository.findByOfferedBookIdAndDesiredBookId.mockResolvedValue(
      { id: "3" } as unknown as BookExchange,
    );

    await expect(
      service.execute({
        desiredBookId: "1",
        offeredBookId: "2",
        exchangeOwnerPhone: "+123456789",
      }),
    ).rejects.toThrow(
      `Exchange already exists for offered book ID: 2 and desired book ID: 1`,
    );
  });

  it("should throw an error if the phone number is invalid", async () => {
    const desiredBook = { id: "1" } as unknown as Book;
    const offeredBook = { id: "2" } as unknown as Book;

    bookRepository.findById.mockResolvedValueOnce(desiredBook);
    bookRepository.findById.mockResolvedValueOnce(offeredBook);

    await expect(
      service.execute({
        desiredBookId: "1",
        offeredBookId: "2",
        exchangeOwnerPhone: "invalid-phone-number",
      }),
    ).rejects.toThrow(InvalidPhoneNumberError);
  });
});
