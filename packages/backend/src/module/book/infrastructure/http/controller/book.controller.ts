import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { CreateBookService } from "src/module/book/application/create-book.service";
import { CreateBookRequest } from "../request/create-book.request";
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateBookResponse } from "./response/create-book.response";

@ApiTags("Book")
@Controller("book")
class BookController {
  constructor(private readonly _createBookService: CreateBookService) {}

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
}

export { BookController };
