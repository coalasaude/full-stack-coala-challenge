import { ApiProperty } from "@nestjs/swagger";
import { BookResponse } from "./book.response";

class BookExchangeResponse {
  @ApiProperty({
    description: "The unique identifier of the book exchange",
    example: "123e4567-e89b-12d3-a456-426614174000",
  })
  id: string;

  @ApiProperty({
    description: "The book being offered in the exchange",
    type: BookResponse,
  })
  offeredBook: BookResponse | null;

  @ApiProperty({
    description: "The ID of the book being offered in the exchange",
    example: "123e4567-e89b-12d3-a456-426614174000",
  })
  offeredBookId: string;

  @ApiProperty({
    description: "The book desired in the exchange",
    type: BookResponse,
  })
  desiredBook: BookResponse | null;

  @ApiProperty({
    description: "The ID of the book desired in the exchange",
    example: "123e4567-e89b-12d3-a456-426614174000",
  })
  desiredBookId: string;

  @ApiProperty({
    description: "The phone number of the exchange owner",
    example: "+1-555-555-5555",
  })
  exchangeOwnerPhone: string;

  @ApiProperty({
    description: "The date when the exchange was completed",
    example: "2025-05-01T00:00:00Z",
    nullable: true,
  })
  exchangedAt: Date | null;

  @ApiProperty({
    description: "The date when the exchange was created",
    example: "2025-05-01T00:00:00Z",
  })
  createdAt: Date;

  @ApiProperty({
    description: "The date when the exchange was last updated",
    example: "2025-05-02T00:00:00Z",
  })
  updatedAt: Date;
}

export { BookExchangeResponse };
