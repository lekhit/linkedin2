-- AlterTable
ALTER TABLE "Tags" ADD COLUMN     "resourcesId" STRING;

-- CreateTable
CREATE TABLE "Resources" (
    "id" STRING NOT NULL DEFAULT gen_random_uuid(),
    "title" STRING NOT NULL,
    "description" STRING NOT NULL,

    CONSTRAINT "Resources_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Tags" ADD CONSTRAINT "Tags_resourcesId_fkey" FOREIGN KEY ("resourcesId") REFERENCES "Resources"("id") ON DELETE SET NULL ON UPDATE CASCADE;
