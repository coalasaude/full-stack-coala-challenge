"use client";

import { BookCard } from "@/components/molecules/book-card";
import { Card } from "@/components/atoms/card";
import { Select } from "@/components/molecules/select";
import { bookStatusFilterOptions } from "./book-status-filter-options";
import { bookOrderByOptions } from "./book-order-by-options";
import { Input } from "@/components/atoms/input";
import { Pagination } from "@/components/molecules/pagination";
import { LoadingList } from "../loading-list";
import { Button } from "@/components/atoms/button";
import { useBook } from "@/context/book/hook";

const BookList = () => {
  const {
    currentPage,
    setCurrentPage,
    totalPages,
    books,
    isLoading,
    titleFilter,
    setTitleFilter,
    statusFilter,
    setStatusFilter,
    orderBy,
    setOrderBy,
  } = useBook();

  return (
    <div className="space-y-6">
      <Card className="py-4 px-6 p-4">
        <div className="flex flex-col sm:flex-row gap-2 md:gap-7 justify-between items-start sm:items-center w-full">
          <div className="w-full md:max-w-md">
            <Input
              placeholder="Search by title..."
              value={titleFilter}
              onChange={(e) => {
                setTitleFilter(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>

          <div className="flex flex-wrap sm:flex-nowrap gap-2 justify-end w-full sm:w-auto">
            <div className="w-full sm:w-40">
              <Select
                value={statusFilter}
                onValueChange={setStatusFilter}
                defaultValue="all"
                options={bookStatusFilterOptions}
              />
            </div>
            <div className="w-full sm:w-40">
              <Select
                value={orderBy}
                onValueChange={setOrderBy}
                defaultValue="none"
                options={bookOrderByOptions}
              />
            </div>
          </div>
        </div>
      </Card>

      {isLoading ? (
        <LoadingList />
      ) : (
        <>
          <section className="mt-0">
            {books.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {books.map((book) => (
                  <BookCard key={book.id} book={book} />
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
                    setStatusFilter("all");
                    setTitleFilter("");
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
};

export { BookList };
