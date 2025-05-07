import { Test, TestingModule } from "@nestjs/testing";
import { CreateBookService } from "../../../../../../src/module/book/application/create-book.service";
import { Book } from "../../../../../../src/module/book/domain/entity/book";
import { BookAlreadyExistsError } from "../../../../../../src/module/book/domain/error/book-already-exists.error";
import { BookRepository } from "../../../../../../src/module/book/domain/repository/book.repository";

describe("CreateBookService", () => {
  let service: CreateBookService;
  let bookRepository: jest.Mocked<BookRepository>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateBookService,
        {
          provide: BookRepository,
          useValue: {
            findByTitleAndAuthor: jest.fn(),
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<CreateBookService>(CreateBookService);
    bookRepository = module.get(BookRepository);
  });

  it("should create a new book", async () => {
    bookRepository.findByTitleAndAuthor.mockResolvedValue(null);

    const result = await service.execute({
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      summary: "An epic fantasy novel.",
      cover: "https://example.com/cover.jpg",
      readed: false,
    });

    expect(bookRepository.findByTitleAndAuthor).toHaveBeenCalledWith(
      "The Lord of the Rings",
      "J.R.R. Tolkien",
    );
    expect(bookRepository.save).toHaveBeenCalled();
    expect(result).toBeDefined();
  });

  it("should throw an error if the book already exists", async () => {
    bookRepository.findByTitleAndAuthor.mockResolvedValue({ id: "1" } as Book);

    await expect(
      service.execute({
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        summary: "An epic fantasy novel.",
        cover: "https://example.com/cover.jpg",
        readed: false,
      }),
    ).rejects.toThrow(BookAlreadyExistsError);
  });
});
