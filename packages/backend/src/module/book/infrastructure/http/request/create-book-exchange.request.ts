import { IsString, IsNotEmpty, IsPhoneNumber } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

class CreateBookExchangeRequest {
  @ApiProperty({
    description: "The ID of the desired book for the exchange",
    example: "a1b2c3d4-e5f6-7890-abcd-1234567890ef",
  })
  @IsString()
  @IsNotEmpty()
  desiredBookId: string;

  @ApiProperty({
    description: "The ID of the offered book for the exchange",
    example: "f1e2d3c4-b5a6-7890-abcd-0987654321ef",
  })
  @IsString()
  @IsNotEmpty()
  offeredBookId: string;

  @ApiProperty({
    description:
      "The phone number of the exchange owner in international format",
    example: "+55 (84) 98162-3432",
  })
  @IsString()
  @IsNotEmpty()
  @IsPhoneNumber()
  exchangeOwnerPhone: string;
}

export { CreateBookExchangeRequest };
