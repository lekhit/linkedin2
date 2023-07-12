/*
  Warnings:

  - Added the required column `resource_link` to the `Resources` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Resources" ADD COLUMN     "resource_link" STRING NOT NULL;
