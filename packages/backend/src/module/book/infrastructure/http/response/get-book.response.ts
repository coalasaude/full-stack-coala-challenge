import { ApiProperty } from "@nestjs/swagger";
import { Book } from "src/module/book/domain/entity/book";
import { Paginated } from "src/shared/application/entity/paginated.entity";
import { BookResponse } from "./book.response";

class GetBookResponse extends Paginated<Book> {
  @ApiProperty({
    description: "The list of books for the current page",
    type: [BookResponse],
  })
  declare items: Book[];

  @ApiProperty({
    description: "The total number of books available",
    example: 100,
  })
  declare total: number;

  @ApiProperty({
    description: "The current page number",
    example: 1,
  })
  declare page: number;

  @ApiProperty({
    description: "The available pages number",
    example: 10,
  })
  declare pageTotal: number;

  @ApiProperty({
    description: "The number of books per page",
    example: 10,
  })
  declare pageSize: number;
}

export { GetBookResponse };
