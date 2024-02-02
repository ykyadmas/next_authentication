/*
  Warnings:

  - You are about to drop the column `userEmail` on the `Proposal` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Proposal` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Proposal` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Proposal` DROP FOREIGN KEY `Proposal_userEmail_fkey`;

-- AlterTable
ALTER TABLE `Proposal` DROP COLUMN `userEmail`,
    ADD COLUMN `userId` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Proposal_userId_key` ON `Proposal`(`userId`);

-- AddForeignKey
ALTER TABLE `Proposal` ADD CONSTRAINT `Proposal_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
