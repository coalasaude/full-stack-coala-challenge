import { api } from "@/client/api";
import { CreateBookRequest } from "@/types/create-book-request";
import { Dispatch, SetStateAction } from "react";

const createBook = (
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  refresh: () => Promise<void>,
) => {
  return async (req: CreateBookRequest) => {
    try {
      setIsLoading(true);
      await api.post(`/book`, req);

      await refresh();
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };
};

export { createBook };
