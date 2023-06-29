-- CreateTable
CREATE TABLE "Deta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "entry_key" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Tags" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "value" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Card" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "company" TEXT NOT NULL,
    "salaryView" TEXT NOT NULL,
    "location" TEXT,
    "modeOfWork" TEXT NOT NULL,
    "positionName" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "LastDate" DATETIME,
    "applyURL" TEXT,
    "companyId" INTEGER NOT NULL,
    "detaId" INTEGER NOT NULL,
    CONSTRAINT "Card_detaId_fkey" FOREIGN KEY ("detaId") REFERENCES "Deta" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_CardToTags" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_CardToTags_A_fkey" FOREIGN KEY ("A") REFERENCES "Card" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CardToTags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tags" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Deta_name_key" ON "Deta"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Tags_value_key" ON "Tags"("value");

-- CreateIndex
CREATE UNIQUE INDEX "_CardToTags_AB_unique" ON "_CardToTags"("A", "B");

-- CreateIndex
CREATE INDEX "_CardToTags_B_index" ON "_CardToTags"("B");
