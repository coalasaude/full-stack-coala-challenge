"use client";

import { Button } from "@/components/atoms/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PaginationProps } from "./props";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  let pagesToShow = pages;
  if (totalPages > 5) {
    if (currentPage <= 3) {
      pagesToShow = [...pages.slice(0, 5), totalPages];
    } else if (currentPage >= totalPages - 2) {
      pagesToShow = [1, ...pages.slice(totalPages - 5)];
    } else {
      pagesToShow = [
        1,
        currentPage - 1,
        currentPage,
        currentPage + 1,
        totalPages,
      ];
    }
  }

  return (
    <div className="flex justify-center items-center gap-1 mt-8">
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous page</span>
      </Button>

      {pagesToShow.map((page, index) =>
        page === null ? (
          <span key={`ellipsis-${index}`} className="px-3 py-2">
            ...
          </span>
        ) : (
          <Button
            key={`page-${page}`}
            variant={currentPage === page ? "default" : "outline"}
            size="icon"
            onClick={() => onPageChange(page as number)}
          >
            {page}
          </Button>
        ),
      )}

      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next page</span>
      </Button>
    </div>
  );
};

export { Pagination };
