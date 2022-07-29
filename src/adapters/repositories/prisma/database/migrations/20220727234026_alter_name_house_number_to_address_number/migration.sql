/*
  Warnings:

  - You are about to drop the column `houseNumber` on the `students` table. All the data in the column will be lost.
  - Added the required column `addressNumber` to the `students` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "students" DROP COLUMN "houseNumber",
ADD COLUMN     "addressNumber" TEXT NOT NULL;
