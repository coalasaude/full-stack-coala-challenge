import { ApiProperty } from "@nestjs/swagger";

class BookResponse {
  @ApiProperty({
    description: "The unique identifier of the book",
    example: "123e4567-e89b-12d3-a456-426614174000",
  })
  id: string | null;

  @ApiProperty({
    description: "The title of the book",
    example: "The Lord of the Rings",
  })
  title: string;

  @ApiProperty({
    description: "The author of the book",
    example: "J.R.R. Tolkien",
  })
  author: string;

  @ApiProperty({
    description: "A brief summary of the book",
    example: "An epic fantasy novel about the journey to destroy the One Ring.",
  })
  summary: string;

  @ApiProperty({
    description: "The genre of the book",
    example: "Fantasy",
  })
  genre: string;

  @ApiProperty({
    description: "The URL of the book's cover image",
    example: "https://example.com/cover.jpg",
    required: false,
  })
  cover: string | null;

  @ApiProperty({
    description: "Indicates whether the book has been read",
    example: true,
  })
  readed: boolean;

  @ApiProperty({
    description: "The date when the book was read",
    example: "2025-05-01T00:00:00Z",
    required: false,
  })
  readedAt: Date | null;

  @ApiProperty({
    description: "The publisher of the book",
    example: "Allen & Unwin",
  })
  publisher: string;

  @ApiProperty({
    description: "The publication date of the book",
    example: "1954-07-29T00:00:00Z",
  })
  publishedAt: Date;

  @ApiProperty({
    description: "The date when the book was created",
    example: "2025-05-01T00:00:00Z",
  })
  createdAt: Date;

  @ApiProperty({
    description: "The date when the book was last updated",
    example: "2025-05-02T00:00:00Z",
  })
  updatedAt: Date;
}

export { BookResponse };
