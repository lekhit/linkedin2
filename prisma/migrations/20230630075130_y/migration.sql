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
    "lastDate" TEXT,
    "applyURL" TEXT,
    "typeOfOpp" TEXT NOT NULL DEFAULT 'jobs',
    "detaId" INTEGER NOT NULL,
    CONSTRAINT "Card_detaId_fkey" FOREIGN KEY ("detaId") REFERENCES "Deta" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Card" ("applyURL", "company", "createdAt", "detaId", "id", "lastDate", "location", "modeOfWork", "positionName", "salaryView", "typeOfOpp") SELECT "applyURL", "company", "createdAt", "detaId", "id", "lastDate", "location", "modeOfWork", "positionName", "salaryView", "typeOfOpp" FROM "Card";
DROP TABLE "Card";
ALTER TABLE "new_Card" RENAME TO "Card";
CREATE UNIQUE INDEX "Card_detaId_key" ON "Card"("detaId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
