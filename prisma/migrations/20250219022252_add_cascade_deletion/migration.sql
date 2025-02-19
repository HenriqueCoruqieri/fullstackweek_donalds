/*
  Warnings:

  - You are about to drop the column `restaurantID` on the `MenuCategory` table. All the data in the column will be lost.
  - You are about to drop the column `restaurantsId` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `updatdetAt` on the `OrderProduct` table. All the data in the column will be lost.
  - You are about to drop the column `createAt` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `imageURL` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `avatarImageURL` on the `Restaurant` table. All the data in the column will be lost.
  - You are about to drop the column `coverImageURL` on the `Restaurant` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `Restaurant` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `Restaurant` table. All the data in the column will be lost.
  - Added the required column `restaurantId` to the `MenuCategory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `restaurantId` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `status` on the `Order` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `updatedAt` to the `OrderProduct` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `avatarImageUrl` to the `Restaurant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `coverImageUrl` to the `Restaurant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Restaurant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Restaurant` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('PENDING', 'IN_PREPARATION', 'FINISHED');

-- DropForeignKey
ALTER TABLE "MenuCategory" DROP CONSTRAINT "MenuCategory_restaurantID_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_restaurantsId_fkey";

-- AlterTable
ALTER TABLE "MenuCategory" DROP COLUMN "restaurantID",
ADD COLUMN     "restaurantId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "restaurantsId",
ADD COLUMN     "restaurantId" TEXT NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "OrderStatus" NOT NULL,
ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "OrderProduct" DROP COLUMN "updatdetAt",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "createAt",
DROP COLUMN "imageURL",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "imageUrl" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Restaurant" DROP COLUMN "avatarImageURL",
DROP COLUMN "coverImageURL",
DROP COLUMN "nome",
DROP COLUMN "updateAt",
ADD COLUMN     "avatarImageUrl" TEXT NOT NULL,
ADD COLUMN     "coverImageUrl" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- DropEnum
DROP TYPE "OderStatus";

-- AddForeignKey
ALTER TABLE "MenuCategory" ADD CONSTRAINT "MenuCategory_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
