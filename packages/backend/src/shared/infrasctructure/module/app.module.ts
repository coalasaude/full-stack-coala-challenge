import { Module } from "@nestjs/common";
import { BookModule } from "../../../module/book/infrastructure/module/book.module";
import { DatabaseModule } from "./database.module";

@Module({
  imports: [BookModule, DatabaseModule],
})
export class AppModule {}
