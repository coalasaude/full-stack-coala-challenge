import { useContext } from "react";
import { BookContext } from ".";
import { BookContextType } from "./type";

const useBook = (): BookContextType => {
  const context = useContext(BookContext);

  if (!context) {
    throw new Error("useBook must be used within an BookProvider");
  }

  return context;
};

export { useBook };
