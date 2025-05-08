"use client";

import { fetcher } from "@/client/fetcher";
import { BookContext } from ".";
import { BookProviderProps } from "./provider-props";
import { useMemo, useState } from "react";
import useSWR from "swr";
import { toggleBookReadness } from "./handler/toggle-book-readness";
import { createBook } from "./handler/create-book";
import { createExchange } from "./handler/create-exchange";

const BookProvider = ({ children }: BookProviderProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [orderBy, setOrderBy] = useState("none");
  const [statusFilter, setStatusFilter] = useState("all");
  const [titleFilter, setTitleFilter] = useState("");
  const [isRequestLoading, setIsRequestLoading] = useState(false);

  const queryString = useMemo(() => {
    const params = {
      page: currentPage.toString(),
      pageSize: "6",
    };

    if (orderBy.length > 0 && orderBy.includes(":")) {
      const [orderByField, orderByDirection] = orderBy.split(":");

      Object.assign(params, { orderByField, orderByDirection });
    }

    if (statusFilter !== "all") {
      Object.assign(params, { readed: (statusFilter === "readed").toString() });
    }

    if (titleFilter.length > 1) {
      Object.assign(params, { title: titleFilter });
    }

    return `/book?${new URLSearchParams(params).toString()}`;
  }, [currentPage, orderBy, statusFilter, titleFilter]);

  const {
    data,
    isLoading: IsFetchLoading,
    mutate,
  } = useSWR(queryString, fetcher, {
    keepPreviousData: true,
  });

  const isLoading = useMemo(() => {
    return IsFetchLoading || isRequestLoading;
  }, [IsFetchLoading, isRequestLoading]);

  return (
    <BookContext.Provider
      value={{
        books: data?.items || [],
        isLoading,
        currentPage,
        setCurrentPage,
        totalPages: data?.pageTotal || 0,
        orderBy,
        setOrderBy,
        statusFilter,
        setStatusFilter,
        titleFilter,
        setTitleFilter,
        toggleBookReadness: toggleBookReadness(setIsRequestLoading, mutate),
        createBook: createBook(setIsRequestLoading, mutate),
        createExchange: createExchange(setIsRequestLoading, mutate),
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export { BookProvider };
