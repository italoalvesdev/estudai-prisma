/*
  Warnings:

  - You are about to drop the column `addressDetails` on the `students` table. All the data in the column will be lost.
  - You are about to drop the column `foneCompany` on the `students` table. All the data in the column will be lost.
  - You are about to drop the column `fullAddress` on the `students` table. All the data in the column will be lost.
  - You are about to drop the column `zip` on the `students` table. All the data in the column will be lost.
  - Added the required column `houseNumber` to the `students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postalCode` to the `students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `street` to the `students` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "students" DROP COLUMN "addressDetails",
DROP COLUMN "foneCompany",
DROP COLUMN "fullAddress",
DROP COLUMN "zip",
ADD COLUMN     "details" TEXT,
ADD COLUMN     "houseNumber" TEXT NOT NULL,
ADD COLUMN     "postalCode" TEXT NOT NULL,
ADD COLUMN     "street" TEXT NOT NULL;
