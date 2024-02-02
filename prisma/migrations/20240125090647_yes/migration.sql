/*
  Warnings:

  - You are about to drop the column `email` on the `Proposal` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userEmail]` on the table `Proposal` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userEmail` to the `Proposal` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Proposal` DROP FOREIGN KEY `Proposal_email_fkey`;

-- AlterTable
ALTER TABLE `Proposal` DROP COLUMN `email`,
    ADD COLUMN `userEmail` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Proposal_userEmail_key` ON `Proposal`(`userEmail`);

-- AddForeignKey
ALTER TABLE `Proposal` ADD CONSTRAINT `Proposal_userEmail_fkey` FOREIGN KEY (`userEmail`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
