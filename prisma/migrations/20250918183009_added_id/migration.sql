/*
  Warnings:

  - Changed the type of `url` on the `Stream` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "public"."Stream" DROP COLUMN "url",
ADD COLUMN     "url" BOOLEAN NOT NULL;
