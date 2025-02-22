/*
  Warnings:

  - Added the required column `costumerCPF` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `costumerName` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "costumerCPF" TEXT NOT NULL,
ADD COLUMN     "costumerName" TEXT NOT NULL;
