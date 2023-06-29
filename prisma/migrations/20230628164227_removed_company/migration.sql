/*
  Warnings:

  - You are about to drop the column `companyId` on the `Card` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Card" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "company" TEXT NOT NULL,
    "salaryView" TEXT NOT NULL,
    "location" TEXT,
    "modeOfWork" TEXT NOT NULL,
    "positionName" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "LastDate" DATETIME,
    "applyURL" TEXT,
    "detaId" INTEGER NOT NULL,
    CONSTRAINT "Card_detaId_fkey" FOREIGN KEY ("detaId") REFERENCES "Deta" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Card" ("LastDate", "applyURL", "company", "createdAt", "detaId", "id", "location", "modeOfWork", "positionName", "salaryView") SELECT "LastDate", "applyURL", "company", "createdAt", "detaId", "id", "location", "modeOfWork", "positionName", "salaryView" FROM "Card";
DROP TABLE "Card";
ALTER TABLE "new_Card" RENAME TO "Card";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
