import { ApiProperty } from "@nestjs/swagger";

class CreateBookExchangeResponse {
  @ApiProperty({
    description: "The unique identifier of the created book exchange",
    example: "123e4567-e89b-12d3-a456-426614174000",
  })
  id: string;
}

export { CreateBookExchangeResponse };
