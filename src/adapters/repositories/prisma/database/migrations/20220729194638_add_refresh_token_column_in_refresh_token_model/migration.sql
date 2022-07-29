/*
  Warnings:

  - Added the required column `refresh_token` to the `refresh_token` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "refresh_token" ADD COLUMN     "refresh_token" TEXT NOT NULL;
