import { Prisma } from "generated/prisma";

type BookWithExchangesType = Prisma.BookGetPayload<{
  include: {
    desiredExchanges: {
      include: {
        desiredBook: true;
        offeredBook: true;
      };
    };
    offeredExchanges: {
      include: {
        desiredBook: true;
        offeredBook: true;
      };
    };
  };
}>;

export type { BookWithExchangesType };
