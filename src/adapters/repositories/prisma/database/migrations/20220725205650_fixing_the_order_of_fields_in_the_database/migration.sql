/*
  Warnings:

  - Made the column `houseNumber` on table `students` required. This step will fail if there are existing NULL values in that column.
  - Made the column `postalCode` on table `students` required. This step will fail if there are existing NULL values in that column.
  - Made the column `street` on table `students` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "students" ALTER COLUMN "houseNumber" SET NOT NULL,
ALTER COLUMN "postalCode" SET NOT NULL,
ALTER COLUMN "street" SET NOT NULL;
