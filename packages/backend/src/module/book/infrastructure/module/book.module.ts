import { Module } from "@nestjs/common";
import { BookController } from "../http/controller/book.controller";
import { provider as providers } from "../ioc-provider/provider";

@Module({
  controllers: [BookController],
  providers,
})
export class BookModule {}
