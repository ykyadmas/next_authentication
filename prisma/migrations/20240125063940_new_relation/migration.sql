/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Proposal` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Proposal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Proposal` ADD COLUMN `email` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Proposal_email_key` ON `Proposal`(`email`);

-- AddForeignKey
ALTER TABLE `Proposal` ADD CONSTRAINT `Proposal_email_fkey` FOREIGN KEY (`email`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
