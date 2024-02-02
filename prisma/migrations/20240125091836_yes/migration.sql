/*
  Warnings:

  - You are about to drop the column `userEmail` on the `Proposal` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Proposal` DROP FOREIGN KEY `Proposal_userEmail_fkey`;

-- AlterTable
ALTER TABLE `Proposal` DROP COLUMN `userEmail`;
