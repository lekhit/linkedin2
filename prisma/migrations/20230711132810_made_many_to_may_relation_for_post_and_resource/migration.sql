/*
  Warnings:

  - You are about to drop the column `postsId` on the `Tags` table. All the data in the column will be lost.
  - You are about to drop the column `resourcesId` on the `Tags` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Tags" DROP CONSTRAINT "Tags_postsId_fkey";

-- DropForeignKey
ALTER TABLE "Tags" DROP CONSTRAINT "Tags_resourcesId_fkey";

-- AlterTable
ALTER TABLE "Tags" DROP COLUMN "postsId";
ALTER TABLE "Tags" DROP COLUMN "resourcesId";

-- CreateTable
CREATE TABLE "_PostsToTags" (
    "A" STRING NOT NULL,
    "B" STRING NOT NULL
);

-- CreateTable
CREATE TABLE "_ResourcesToTags" (
    "A" STRING NOT NULL,
    "B" STRING NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PostsToTags_AB_unique" ON "_PostsToTags"("A", "B");

-- CreateIndex
CREATE INDEX "_PostsToTags_B_index" ON "_PostsToTags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ResourcesToTags_AB_unique" ON "_ResourcesToTags"("A", "B");

-- CreateIndex
CREATE INDEX "_ResourcesToTags_B_index" ON "_ResourcesToTags"("B");

-- AddForeignKey
ALTER TABLE "_PostsToTags" ADD CONSTRAINT "_PostsToTags_A_fkey" FOREIGN KEY ("A") REFERENCES "Posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostsToTags" ADD CONSTRAINT "_PostsToTags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ResourcesToTags" ADD CONSTRAINT "_ResourcesToTags_A_fkey" FOREIGN KEY ("A") REFERENCES "Resources"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ResourcesToTags" ADD CONSTRAINT "_ResourcesToTags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;
