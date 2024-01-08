/*
  Warnings:

  - Added the required column `model` to the `Proposal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Proposal` ADD COLUMN `model` VARCHAR(191) NOT NULL;
