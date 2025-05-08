import Image from "next/image";
import { BookCheck, BookOpen, BookX, Heart } from "lucide-react";
// import { BookCardProps } from "./props";
import { useMemo } from "react";
// import placeholder from "@/app/placeholder.png";
import { Badge } from "@/components/atoms/badge";
import { Card } from "@/components/atoms/card";
import { CardContent } from "@/components/atoms/card-content";
import { CardFooter } from "@/components/atoms/card-footer";
import { Button } from "@/components/atoms/button";
// import { useBook } from "@/context/book/hook";

function BookCard() {
  // { book }: BookCardProps
  // const { changeBookReadness } = useBook();
  const book = {
    id: "123e4567-e89b-12d3-a456-426614174000",
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    summary: "An epic fantasy novel about the journey to destroy the One Ring.",
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg",
    readed: false,
    desiredExchanges: [
      {
        id: "123e4567-e89b-12d3-a456-426614174000",
        offeredBook: {},
        offeredBookId: "123e4567-e89b-12d3-a456-426614174000",
        desiredBook: {},
        desiredBookId: "123e4567-e89b-12d3-a456-426614174000",
        exchangeOwnerPhone: "+1-555-555-5555",
        exchangedAt: "2025-05-01T00:00:00Z",
        createdAt: "2025-05-01T00:00:00Z",
        updatedAt: "2025-05-02T00:00:00Z",
      },
    ],
    offeredExchanges: [
      {
        id: "123e4567-e89b-12d3-a456-426614174000",
        offeredBook: {},
        offeredBookId: "123e4567-e89b-12d3-a456-426614174000",
        desiredBook: {},
        desiredBookId: "123e4567-e89b-12d3-a456-426614174000",
        exchangeOwnerPhone: "+1-555-555-5555",
        exchangedAt: "2025-05-01T00:00:00Z",
        createdAt: "2025-05-01T00:00:00Z",
        updatedAt: "2025-05-02T00:00:00Z",
      },
    ],
    createdAt: "2025-05-01T00:00:00Z",
    updatedAt: "2025-05-02T00:00:00Z",
  };

  // const hasActiveExchange = useMemo(
  //   () => book.desiredExchanges.length > 0 || book.offeredExchanges.length > 0,
  //   [book],
  // );
  const hasActiveExchange = false;

  const phoneNumber = useMemo(() => {
    const exchange = book.desiredExchanges[0] || book.offeredExchanges[0];

    if (!exchange || !exchange.exchangeOwnerPhone) return null;

    return exchange.exchangeOwnerPhone;
  }, [hasActiveExchange]);

  const footerContent = useMemo(() => {
    if (hasActiveExchange) {
      return (
        <>
          Book owner contact: <span>{phoneNumber}</span>
        </>
      );
    }

    if (book.readed) {
      return book.desiredExchanges.length < 1 &&
        book.offeredExchanges.length < 1
        ? "Available to exchange"
        : "Not available for exchange";
    }

    return "On your wishlist";
  }, [book, hasActiveExchange]);

  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-[3/4] w-full">
        <Image
          src={book.cover}
          alt={book.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 right-2 flex flex-col gap-2">
          <Badge
            variant={book.readed ? "default" : "secondary"}
            className="flex items-center gap-1"
          >
            {book.readed ? (
              <>
                <BookOpen className="h-3 w-3" />
                <span>Read</span>
              </>
            ) : (
              <>
                <Heart className="h-3 w-3" />
                <span>Desired</span>
              </>
            )}
          </Badge>

          {hasActiveExchange && (
            <>
              <Badge
                variant="outline"
                className="bg-yellow-50 text-yellow-700 border-yellow-200"
              >
                Exchange Pending
              </Badge>
            </>
          )}
        </div>
      </div>
      <CardContent>
        <h3 className="font-semibold text-lg line-clamp-1">{book.title}</h3>
        <p className="text-muted-foreground text-sm">{book.author}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="text-sm text-muted-foreground">{footerContent}</div>
        {!hasActiveExchange ? (
          <Button
            variant="outline"
            size="sm"
            className="ml-2"
            // onClick={() => changeBookReadness(book.id, !book.readed)}
          >
            {book.readed ? (
              <BookX className="h-4 w-4 mr-1" />
            ) : (
              <BookCheck className="h-4 w-4 mr-1" />
            )}
            Mark {book.readed ? " Unread" : "Read"}
          </Button>
        ) : null}
      </CardFooter>
    </Card>
  );
}

export { BookCard };
