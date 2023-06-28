-- CreateTable
CREATE TABLE "City" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "value" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Country" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "value" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Location" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cityId" INTEGER NOT NULL,
    "countryId" INTEGER NOT NULL,
    CONSTRAINT "Location_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Location_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Deta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "entry_key" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Company" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "locationId" INTEGER NOT NULL,
    "detaId" INTEGER NOT NULL,
    CONSTRAINT "Company_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Company_detaId_fkey" FOREIGN KEY ("detaId") REFERENCES "Deta" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Salary" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "value" DECIMAL NOT NULL,
    "placeValue" TEXT,
    "currency" TEXT DEFAULT 'Rupee'
);

-- CreateTable
CREATE TABLE "Tags" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "value" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Card" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "salaryDuration" TEXT,
    "modeOfWork" TEXT NOT NULL,
    "positionName" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "LastDate" DATETIME,
    "companyId" INTEGER NOT NULL,
    "salaryMinId" INTEGER,
    "salaryMaxId" INTEGER,
    "locationId" INTEGER NOT NULL,
    "detaId" INTEGER NOT NULL,
    CONSTRAINT "Card_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Card_salaryMinId_fkey" FOREIGN KEY ("salaryMinId") REFERENCES "Salary" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Card_salaryMaxId_fkey" FOREIGN KEY ("salaryMaxId") REFERENCES "Salary" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Card_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
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
CREATE UNIQUE INDEX "City_value_key" ON "City"("value");

-- CreateIndex
CREATE UNIQUE INDEX "Country_value_key" ON "Country"("value");

-- CreateIndex
CREATE UNIQUE INDEX "Deta_name_key" ON "Deta"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_CardToTags_AB_unique" ON "_CardToTags"("A", "B");

-- CreateIndex
CREATE INDEX "_CardToTags_B_index" ON "_CardToTags"("B");
