-- CreateTable
CREATE TABLE "BookExchange" (
    "id" UUID NOT NULL,
    "offeredBookId" UUID NOT NULL,
    "desiredBookId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BookExchange_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "BookExchange_offeredBookId_idx" ON "BookExchange"("offeredBookId");

-- CreateIndex
CREATE INDEX "BookExchange_desiredBookId_idx" ON "BookExchange"("desiredBookId");

-- CreateIndex
CREATE INDEX "BookExchange_createdAt_idx" ON "BookExchange"("createdAt");

-- CreateIndex
CREATE INDEX "BookExchange_updatedAt_idx" ON "BookExchange"("updatedAt");

-- CreateIndex
CREATE INDEX "Book_createdAt_idx" ON "Book"("createdAt");

-- CreateIndex
CREATE INDEX "Book_updatedAt_idx" ON "Book"("updatedAt");

-- AddForeignKey
ALTER TABLE "BookExchange" ADD CONSTRAINT "BookExchange_offeredBookId_fkey" FOREIGN KEY ("offeredBookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookExchange" ADD CONSTRAINT "BookExchange_desiredBookId_fkey" FOREIGN KEY ("desiredBookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
