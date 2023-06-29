/*
  Warnings:

  - A unique constraint covering the columns `[detaId]` on the table `Card` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Deta_name_key";

-- CreateIndex
CREATE UNIQUE INDEX "Card_detaId_key" ON "Card"("detaId");
