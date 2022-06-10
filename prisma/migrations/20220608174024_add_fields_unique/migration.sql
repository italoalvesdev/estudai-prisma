/*
  Warnings:

  - A unique constraint covering the columns `[foneMobile]` on the table `students` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `students` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "students" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE UNIQUE INDEX "students_foneMobile_key" ON "students"("foneMobile");

-- CreateIndex
CREATE UNIQUE INDEX "students_email_key" ON "students"("email");
