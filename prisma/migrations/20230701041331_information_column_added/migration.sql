/*
  Warnings:

  - You are about to drop the column `cardId` on the `Information` table. All the data in the column will be lost.
  - Added the required column `information` to the `Card` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Information" DROP CONSTRAINT "Information_cardId_fkey";

-- AlterTable
ALTER TABLE "Card" ADD COLUMN     "information" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "Information" DROP COLUMN "cardId";
