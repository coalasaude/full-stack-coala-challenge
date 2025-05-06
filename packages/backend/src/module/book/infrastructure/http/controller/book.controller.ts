import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Query,
} from "@nestjs/common";
import { CreateBookService } from "src/module/book/application/create-book.service";
import { CreateBookRequest } from "../request/create-book.request";
import {
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiQuery,
} from "@nestjs/swagger";
import { CreateBookResponse } from "../response/create-book.response";
import { GetBooksService } from "src/module/book/application/get-books.service";
import { GetBookResponse } from "../response/get-book.response";

@ApiTags("Book")
@Controller("book")
class BookController {
  constructor(
    private readonly _createBookService: CreateBookService,
    private readonly _getBooksService: GetBooksService,
  ) {}

  @ApiOperation({ summary: "Create book" })
  @ApiBody({ type: CreateBookRequest })
  @ApiResponse({
    description: "The book has been successfully created.",
    type: CreateBookResponse,
    status: HttpStatus.CREATED,
  })
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createBook(@Body() createBookDto: CreateBookRequest) {
    const id = await this._createBookService.execute(createBookDto);

    return {
      id,
    };
  }

  @ApiOperation({ summary: "Get books" })
  @ApiResponse({
    description: "The books have been successfully retrieved.",
    type: GetBookResponse,
    status: HttpStatus.OK,
  })
  @ApiQuery({
    name: "page",
    description: "The current page number",
    required: false,
    example: 1,
  })
  @ApiQuery({
    name: "pageSize",
    description: "The number of books per page",
    required: false,
    example: 10,
  })
  @ApiQuery({
    name: "readed",
    description: "Filter books by read status (true or false)",
    required: false,
    type: Boolean,
    example: true,
  })
  @ApiQuery({
    name: "author",
    description: "Filter books by author name (case-insensitive)",
    required: false,
    example: "J.R.R. Tolkien",
  })
  @ApiQuery({
    name: "genre",
    description: "Filter books by genre (case-insensitive)",
    required: false,
    example: "Fantasy",
  })
  @ApiQuery({
    name: "orderByField",
    description: "The field to order the books by",
    required: false,
    example: "createdAt",
  })
  @ApiQuery({
    name: "orderByDirection",
    description: "The direction to order the books (asc or desc)",
    required: false,
    example: "desc",
  })
  @Get()
  @HttpCode(HttpStatus.OK)
  async getBooks(
    @Query("page") page: number = 1,
    @Query("pageSize") pageSize: number = 10,
    @Query("readed") readed: string | null = null,
    @Query("author") author: string | null = null,
    @Query("genre") genre: string | null = null,
    @Query("orderByField") orderByField: string = "createdAt",
    @Query("orderByDirection") orderByDirection: "asc" | "desc" = "desc",
  ) {
    return this._getBooksService.execute({
      page,
      pageSize,
      readed: readed === "true" ? true : readed === "false" ? false : null,
      author,
      genre,
      orderBy: { field: orderByField, direction: orderByDirection },
    });
  }
}

export { BookController };
