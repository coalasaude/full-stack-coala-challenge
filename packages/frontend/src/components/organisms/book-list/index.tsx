"use client";

import { useState } from "react";

import { Button } from "@radix-ui/themes";

import { BookCard } from "@/components/molecules/book-card";
import { Card } from "@/components/atoms/card";
import { Select } from "@/components/molecules/select";
import { bookStatusFilterOptions } from "./book-status-filter-options";
import { bookOrderByOptions } from "./book-order-by-options";
import { Input } from "@/components/atoms/input";
import { Pagination } from "@/components/molecules/pagination";
import { LoadingList } from "../loading-list";

export function BookList() {
  const totalPages = 10;
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

  return (
    <div className="space-y-6">
      <Card className="py-4 px-6 p-4">
        <div className="flex flex-col sm:flex-row gap-2 md:gap-7 justify-between items-start sm:items-center w-full">
          <div className="w-full md:max-w-md">
            <Input
              placeholder="Search by title..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>

          <div className="flex flex-wrap sm:flex-nowrap gap-2 justify-end w-full sm:w-auto">
            <div className="w-full sm:w-40">
              <Select defaultValue="all" options={bookStatusFilterOptions} />
            </div>
            <div className="w-full sm:w-40">
              <Select defaultValue="none" options={bookOrderByOptions} />
            </div>
          </div>
        </div>
      </Card>

      {false ? (
        <LoadingList />
      ) : (
        <>
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

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </>
      )}
    </div>
  );
}
