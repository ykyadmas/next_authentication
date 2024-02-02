/*
  Warnings:

  - You are about to drop the column `userId` on the `Proposal` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userEmail]` on the table `Proposal` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userEmail` to the `Proposal` table without a default value. This is not possible if the table is not empty.
  - Made the column `email` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Proposal` DROP FOREIGN KEY `Proposal_userId_fkey`;

-- AlterTable
ALTER TABLE `Proposal` DROP COLUMN `userId`,
    ADD COLUMN `userEmail` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `User` MODIFY `email` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Proposal_userEmail_key` ON `Proposal`(`userEmail`);

-- AddForeignKey
ALTER TABLE `Proposal` ADD CONSTRAINT `Proposal_userEmail_fkey` FOREIGN KEY (`userEmail`) REFERENCES `User`(`email`) ON DELETE CASCADE ON UPDATE CASCADE;
