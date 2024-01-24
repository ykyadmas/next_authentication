/*
  Warnings:

  - You are about to drop the column `userId` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Proposal` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Message` DROP FOREIGN KEY `Message_userId_fkey`;

-- DropForeignKey
ALTER TABLE `Proposal` DROP FOREIGN KEY `Proposal_userId_fkey`;

-- AlterTable
ALTER TABLE `Message` DROP COLUMN `userId`;

-- AlterTable
ALTER TABLE `Proposal` DROP COLUMN `userId`;
