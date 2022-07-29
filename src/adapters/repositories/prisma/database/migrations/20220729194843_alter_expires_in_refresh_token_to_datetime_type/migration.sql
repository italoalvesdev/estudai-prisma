/*
  Warnings:

  - Changed the type of `expiresIn` on the `refresh_token` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "refresh_token" DROP COLUMN "expiresIn",
ADD COLUMN     "expiresIn" TIMESTAMP(3) NOT NULL;
