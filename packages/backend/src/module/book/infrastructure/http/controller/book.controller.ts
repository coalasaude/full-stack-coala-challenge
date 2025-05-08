import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
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
import { PatchBookService } from "src/module/book/application/patch-book.service";
import { PatchBookRequest } from "../request/patch-book.request";
import { PatchBookResponse } from "../response/patch-book.response";

@ApiTags("Book")
@Controller("book")
class BookController {
  constructor(
    private readonly _createBookService: CreateBookService,
    private readonly _getBooksService: GetBooksService,
    private readonly _patchBookService: PatchBookService,
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
    name: "title",
    description: "Filter books by title name (case-insensitive)",
    required: false,
    example: "The Lord of the Rings",
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
    @Query("title") title: string | null = null,
    @Query("orderByField") orderByField: string = "createdAt",
    @Query("orderByDirection") orderByDirection: "asc" | "desc" = "desc",
  ) {
    return this._getBooksService.execute({
      page,
      pageSize,
      readed: readed === "true" ? true : readed === "false" ? false : null,
      title,
      orderBy: { field: orderByField, direction: orderByDirection },
    });
  }

  @ApiOperation({ summary: "Update book" })
  @ApiBody({ type: PatchBookRequest })
  @ApiResponse({
    description: "The book has been successfully updated.",
    type: PatchBookResponse,
    status: HttpStatus.OK,
  })
  @Patch(":id")
  @HttpCode(HttpStatus.OK)
  async updateBook(
    @Param("id") id: string,
    @Body() updateBookDto: PatchBookRequest,
  ) {
    await this._patchBookService.execute({
      bookId: id,
      readed: updateBookDto.readed,
    });

    return {
      id,
    };
  }
}

export { BookController };
