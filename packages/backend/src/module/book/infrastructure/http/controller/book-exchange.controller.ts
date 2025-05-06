import { Controller, Post, Body, HttpCode, HttpStatus } from "@nestjs/common";
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateBookExchangeService } from "src/module/book/application/create-book-exchange.service";
import { CreateBookExchangeRequest } from "../request/create-book-exchange.request";
import { CreateBookExchangeResponse } from "../response/create-book-exchange.response";

@ApiTags("BookExchange")
@Controller("book-exchange")
export class BookExchangeController {
  constructor(
    private readonly _createBookExchangeService: CreateBookExchangeService,
  ) {}

  @ApiOperation({ summary: "Create book exchange" })
  @ApiBody({ type: CreateBookExchangeRequest })
  @ApiResponse({
    description: "The book exchange has been successfully created.",
    type: CreateBookExchangeResponse,
    status: HttpStatus.CREATED,
  })
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createExchange(
    @Body() createBookExchangeDto: CreateBookExchangeRequest,
  ): Promise<CreateBookExchangeResponse> {
    const id = await this._createBookExchangeService.execute(
      createBookExchangeDto,
    );

    return {
      id,
    };
  }
}
