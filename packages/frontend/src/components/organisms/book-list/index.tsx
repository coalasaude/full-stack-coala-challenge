"use client";

import { useState } from "react";

// import { BookCard } from "./book-card";
// import { useBooks } from "@/hooks/use-books";
// import { Pagination } from "./pagination";
// import { LoadingScreen } from "./loading-screen";
import { ChevronDownIcon, ChevronUpIcon, RefreshCw } from "lucide-react";
import { Box, Button, Card, Container } from "@radix-ui/themes";
import { Select } from "radix-ui";
import { BookCard } from "@/components/molecules/book-card";

export function BookList() {
  // const { books, exchanges, isLoading, refreshBooks } = useBooks();
  const books = [
    {
      id: "123e4567-e89b-12d3-a456-426614174000",
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      summary:
        "An epic fantasy novel about the journey to destroy the One Ring.",
      cover: "https://example.com/cover.jpg",
      readed: true,
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
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("title");
  const [activeTab, setActiveTab] = useState("all");

  const itemsPerPage = 6;

  // If loading, show the loading screen
  // if (isLoading) {
  //   return <LoadingScreen />;
  // }

  return (
    <Container className="space-y-6">
      <Card className="mb-8">
        <Box className="p-4">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="flex-1">
              <input
                placeholder="Search by title or author..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="max-w-sm"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              <Select.Root>
                <Select.Trigger
                  className="inline-flex h-[35px] items-center justify-center gap-[5px] rounded bg-white px-[15px] text-[13px] leading-none text-violet11 shadow-[0_2px_10px] shadow-black/10 outline-none hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-violet9"
                  aria-label="Food"
                >
                  <Select.Value placeholder="Select a fruit…" />
                  <Select.Icon className="text-violet11">
                    <ChevronDownIcon />
                  </Select.Icon>
                </Select.Trigger>
                <Select.Portal>
                  <Select.Content className="overflow-hidden rounded-md bg-white shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
                    <Select.ScrollUpButton className="flex h-[25px] cursor-default items-center justify-center bg-white text-violet11">
                      <ChevronUpIcon />
                    </Select.ScrollUpButton>
                    <Select.Viewport className="p-[5px]">
                      <Select.Group>
                        <Select.Label className="px-[25px] text-xs leading-[25px] text-mauve11">
                          Fruits
                        </Select.Label>
                        <Select.Item value="apple">Apple</Select.Item>
                        <Select.Item value="banana">Banana</Select.Item>
                        <Select.Item value="blueberry">Blueberry</Select.Item>
                        <Select.Item value="grapes">Grapes</Select.Item>
                        <Select.Item value="pineapple">Pineapple</Select.Item>
                      </Select.Group>

                      <Select.Separator className="m-[5px] h-px bg-violet6" />

                      <Select.Group>
                        <Select.Label className="px-[25px] text-xs leading-[25px] text-mauve11">
                          Vegetables
                        </Select.Label>
                        <Select.Item value="aubergine">Aubergine</Select.Item>
                        <Select.Item value="broccoli">Broccoli</Select.Item>
                        <Select.Item value="carrot" disabled>
                          Carrot
                        </Select.Item>
                        <Select.Item value="courgette">Courgette</Select.Item>
                        <Select.Item value="leek">Leek</Select.Item>
                      </Select.Group>

                      <Select.Separator className="m-[5px] h-px bg-violet6" />

                      <Select.Group>
                        <Select.Label className="px-[25px] text-xs leading-[25px] text-mauve11">
                          Meat
                        </Select.Label>
                        <Select.Item value="beef">Beef</Select.Item>
                        <Select.Item value="chicken">Chicken</Select.Item>
                        <Select.Item value="lamb">Lamb</Select.Item>
                        <Select.Item value="pork">Pork</Select.Item>
                      </Select.Group>
                    </Select.Viewport>
                    <Select.ScrollDownButton className="flex h-[25px] cursor-default items-center justify-center bg-white text-violet11">
                      <ChevronDownIcon />
                    </Select.ScrollDownButton>
                  </Select.Content>
                </Select.Portal>
              </Select.Root>
              <Button variant="outline" size="1" title="Refresh books">
                <RefreshCw className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Box>
      </Card>

      <section className="mt-0">
        {books.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {books.map((book) => (
              <BookCard key={book.id} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No books found matching your criteria.
            </p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setFilter("all");
                setSearchQuery("");
                setCurrentPage(1);
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </section>

      {/* {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )} */}
    </Container>
  );
}
