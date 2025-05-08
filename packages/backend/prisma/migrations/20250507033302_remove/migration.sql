/*
  Warnings:

  - You are about to drop the column `genre` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `publishedAt` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `publisher` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `readedAt` on the `Book` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Book_author_idx";

-- DropIndex
DROP INDEX "Book_genre_idx";

-- AlterTable
ALTER TABLE "Book" DROP COLUMN "genre",
DROP COLUMN "publishedAt",
DROP COLUMN "publisher",
DROP COLUMN "readedAt";

-- CreateIndex
CREATE INDEX "Book_title_idx" ON "Book"("title");
