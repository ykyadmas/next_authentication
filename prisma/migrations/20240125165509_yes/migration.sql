/*
  Warnings:

  - You are about to drop the column `userId` on the `Proposal` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[firstName]` on the table `Proposal` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[firstName]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `Proposal` DROP FOREIGN KEY `Proposal_userId_fkey`;

-- AlterTable
ALTER TABLE `Proposal` DROP COLUMN `userId`;

-- CreateIndex
CREATE UNIQUE INDEX `Proposal_firstName_key` ON `Proposal`(`firstName`);

-- CreateIndex
CREATE UNIQUE INDEX `User_firstName_key` ON `User`(`firstName`);

-- AddForeignKey
ALTER TABLE `Proposal` ADD CONSTRAINT `Proposal_firstName_fkey` FOREIGN KEY (`firstName`) REFERENCES `User`(`firstName`) ON DELETE CASCADE ON UPDATE CASCADE;
