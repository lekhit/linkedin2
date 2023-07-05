-- AlterTable
ALTER TABLE "Tags" ADD COLUMN     "postsId" STRING;

-- CreateTable
CREATE TABLE "User" (
    "id" STRING NOT NULL DEFAULT gen_random_uuid(),
    "name" STRING NOT NULL,
    "email" STRING NOT NULL,
    "avatar" STRING,
    "description" STRING,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Posts" (
    "id" STRING NOT NULL DEFAULT gen_random_uuid(),
    "content" STRING NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" STRING NOT NULL,

    CONSTRAINT "Posts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CardToUser" (
    "A" STRING NOT NULL,
    "B" STRING NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_CardToUser_AB_unique" ON "_CardToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_CardToUser_B_index" ON "_CardToUser"("B");

-- AddForeignKey
ALTER TABLE "Tags" ADD CONSTRAINT "Tags_postsId_fkey" FOREIGN KEY ("postsId") REFERENCES "Posts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Posts" ADD CONSTRAINT "Posts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CardToUser" ADD CONSTRAINT "_CardToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Card"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CardToUser" ADD CONSTRAINT "_CardToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
