/*
  Warnings:

  - Added the required column `exchangeOwnerPhone` to the `BookExchange` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BookExchange" ADD COLUMN     "exchangeOwnerPhone" TEXT NOT NULL,
ADD COLUMN     "exchangedAt" TIMESTAMP(3);
