/*
  Warnings:

  - You are about to drop the column `userId` on the `Proposal` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Proposal_userId_key` ON `Proposal`;

-- AlterTable
ALTER TABLE `Proposal` DROP COLUMN `userId`;
