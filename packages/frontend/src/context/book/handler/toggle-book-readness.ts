import { api } from "@/client/api";
import { Dispatch, SetStateAction } from "react";

const toggleBookReadness = (
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  refresh: () => Promise<void>,
) => {
  return async (bookId: string, readed: boolean) => {
    try {
      setIsLoading(true);
      await api.patch(`/book/${bookId}`, {
        readed,
      });

      await refresh();
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };
};

export { toggleBookReadness };
