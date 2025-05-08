import { Test, TestingModule } from "@nestjs/testing";
import { PatchBookService } from "../../../../../../src/module/book/application/patch-book.service";
import { Book } from "../../../../../../src/module/book/domain/entity/book";
import { BookNotFoundError } from "../../../../../../src/module/book/domain/error/book-not-found.error";
import { BookRepository } from "../../../../../../src/module/book/domain/repository/book.repository";

describe("PatchBookService", () => {
  let service: PatchBookService;
  let bookRepository: jest.Mocked<BookRepository>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PatchBookService,
        {
          provide: BookRepository,
          useValue: {
            findById: jest.fn(),
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<PatchBookService>(PatchBookService);
    bookRepository = module.get(BookRepository);
  });

  it("should update a book", async () => {
    const book = { id: "1", readed: false } as unknown as Book;
    bookRepository.findById.mockResolvedValue(book);

    await service.execute({ bookId: "1", readed: true });

    expect(bookRepository.findById).toHaveBeenCalledWith("1");
    expect(bookRepository.save).toHaveBeenCalledWith({
      ...book,
      readed: true,
    });
  });

  it("should throw an error if the book is not found", async () => {
    bookRepository.findById.mockResolvedValue(null);

    await expect(
      service.execute({ bookId: "1", readed: false }),
    ).rejects.toThrow(BookNotFoundError);
  });
});
