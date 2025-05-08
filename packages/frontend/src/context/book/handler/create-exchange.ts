import { api } from "@/client/api";
import { createExchangeRequest } from "@/types/create-exchange-request";
import { Dispatch, SetStateAction } from "react";

const createExchange = (
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  refresh: () => Promise<void>,
) => {
  return async (req: createExchangeRequest) => {
    try {
      setIsLoading(true);
      await api.post(`/book-exchange`, req);

      await refresh();
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };
};

export { createExchange };
