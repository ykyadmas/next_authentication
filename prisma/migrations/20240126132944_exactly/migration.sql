/*
  Warnings:

  - You are about to drop the column `useId` on the `Proposal` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Proposal` DROP FOREIGN KEY `Proposal_useId_fkey`;

-- AlterTable
ALTER TABLE `Proposal` DROP COLUMN `useId`;
