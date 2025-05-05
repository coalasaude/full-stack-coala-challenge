import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  IsBoolean,
  IsNotEmpty,
  IsUrl,
  IsISO8601,
} from "class-validator";

class CreateBookRequest {
  @ApiProperty({
    description: "The title of the book",
    example: "The Lord of the Rings",
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  title!: string;

  @ApiProperty({
    description: "The author of the book",
    example: "J.R.R. Tolkien",
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  author!: string;

  @ApiProperty({
    description: "A brief summary of the book",
    example: "An epic fantasy novel about the journey to destroy the One Ring.",
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  summary!: string;

  @ApiProperty({
    description: "The genre of the book",
    example: "Fantasy",
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  genre!: string;

  @ApiProperty({
    description: "The URL of the book's cover image",
    example: "https://example.com/cover.jpg",
    required: false,
  })
  @IsUrl()
  @IsOptional()
  cover!: string | null;

  @ApiProperty({
    description: "Indicates whether the book has been read",
    example: true,
    required: false,
  })
  @IsBoolean()
  @IsOptional()
  readed!: boolean | null;

  @ApiProperty({
    description: "The date when the book was read (ISO 8601 format)",
    example: "2025-05-01T00:00:00Z",
    required: false,
  })
  @IsISO8601()
  @IsOptional()
  readedAt!: string | null;

  @ApiProperty({
    description: "The publisher of the book",
    example: "Allen & Unwin",
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  publisher!: string;

  @ApiProperty({
    description: "The publication date of the book (ISO 8601 format)",
    example: "1954-07-29T00:00:00Z",
    required: true,
  })
  @IsISO8601()
  @IsNotEmpty()
  publishedAt!: string;
}

export { CreateBookRequest };
