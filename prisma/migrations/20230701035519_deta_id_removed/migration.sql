-- CreateTable
CREATE TABLE "Tags" (
    "id" STRING NOT NULL DEFAULT gen_random_uuid(),
    "value" STRING NOT NULL,

    CONSTRAINT "Tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Information" (
    "id" STRING NOT NULL DEFAULT gen_random_uuid(),
    "content" JSONB NOT NULL,
    "cardId" STRING,

    CONSTRAINT "Information_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Card" (
    "id" STRING NOT NULL DEFAULT gen_random_uuid(),
    "company" STRING NOT NULL,
    "salaryView" STRING NOT NULL,
    "location" STRING,
    "modeOfWork" STRING NOT NULL,
    "positionName" STRING NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastDate" STRING,
    "applyURL" STRING,
    "typeOfOpp" STRING NOT NULL DEFAULT 'jobs',

    CONSTRAINT "Card_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CardToTags" (
    "A" STRING NOT NULL,
    "B" STRING NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Tags_value_key" ON "Tags"("value");

-- CreateIndex
CREATE UNIQUE INDEX "_CardToTags_AB_unique" ON "_CardToTags"("A", "B");

-- CreateIndex
CREATE INDEX "_CardToTags_B_index" ON "_CardToTags"("B");

-- AddForeignKey
ALTER TABLE "Information" ADD CONSTRAINT "Information_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CardToTags" ADD CONSTRAINT "_CardToTags_A_fkey" FOREIGN KEY ("A") REFERENCES "Card"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CardToTags" ADD CONSTRAINT "_CardToTags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;
