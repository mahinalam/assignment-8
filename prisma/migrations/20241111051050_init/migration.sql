/*
  Warnings:

  - Added the required column `availableCopies` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Book" ADD COLUMN     "availableCopies" INTEGER NOT NULL;
