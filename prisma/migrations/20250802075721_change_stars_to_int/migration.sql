/*
  Warnings:

  - You are about to drop the column `name` on the `Feedback` table. All the data in the column will be lost.
  - Added the required column `person` to the `Feedback` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `stars` on the `Feedback` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "public"."Feedback" DROP COLUMN "name",
ADD COLUMN     "person" TEXT NOT NULL,
DROP COLUMN "stars",
ADD COLUMN     "stars" INTEGER NOT NULL;
