import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean } from "class-validator";

export class PatchBookRequest {
  @ApiProperty({
    description: "Indicates if the book has been read",
    example: true,
  })
  @IsBoolean()
  readed!: boolean;
}
