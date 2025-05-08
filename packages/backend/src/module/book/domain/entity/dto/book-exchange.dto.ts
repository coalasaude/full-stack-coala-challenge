import { PhoneVO } from "src/shared/domain/value-object/phone.vo";
import { Book } from "../book";

interface BookExchangeDTO {
  id: string;
  offeredBook?: Book | null;
  offeredBookId: string | null;
  desiredBook?: Book | null;
  desiredBookId: string | null;
  exchangeOwnerPhone: PhoneVO | string;
  exchangedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export { BookExchangeDTO };
