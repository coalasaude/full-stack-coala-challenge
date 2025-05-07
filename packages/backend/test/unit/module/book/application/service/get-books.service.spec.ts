import { Test, TestingModule } from "@nestjs/testing";
import { GetBooksService } from "../../../../../../src/module/book/application/get-books.service";
import { Book } from "../../../../../../src/module/book/domain/entity/book";
import { BookRepository } from "../../../../../../src/module/book/domain/repository/book.repository";

describe("GetBooksService", () => {
  let service: GetBooksService;
  let bookRepository: jest.Mocked<BookRepository>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetBooksService,
        {
          provide: BookRepository,
          useValue: {
            findAllPaginated: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<GetBooksService>(GetBooksService);
    bookRepository = module.get(BookRepository);
  });

  it("should return paginated books", async () => {
    const paginatedBooks = {
      items: [{ id: "1", title: "Book 1" } as unknown as Book],
      total: 100,
      page: 1,
      pageTotal: 10,
      pageSize: 10,
    };

    bookRepository.findAllPaginated.mockResolvedValue(paginatedBooks);

    const result = await service.execute({
      page: 1,
      pageSize: 10,
      title: "Book",
      readed: true,
      orderBy: { field: "title", direction: "asc" },
    });

    expect(bookRepository.findAllPaginated).toHaveBeenCalledWith(
      1,
      10,
      true,
      "Book",
      { field: "title", direction: "asc" },
    );
    expect(result).toEqual(paginatedBooks);
  });
});
