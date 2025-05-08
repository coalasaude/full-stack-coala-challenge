import { Module } from "@nestjs/common";
import { BookController } from "../http/controller/book.controller";
import { provider as providers } from "../ioc-provider/provider";
import { BookExchangeController } from "../http/controller/book-exchange.controller";

@Module({
  controllers: [BookController, BookExchangeController],
  providers,
})
export class BookModule {}
