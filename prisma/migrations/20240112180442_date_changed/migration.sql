/*
  Warnings:

  - You are about to alter the column `startDate` on the `Proposal` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.
  - You are about to alter the column `proposedDate` on the `Proposal` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.
  - You are about to alter the column `endDate` on the `Proposal` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.

*/
-- AlterTable
ALTER TABLE `Proposal` MODIFY `startDate` DATETIME(3) NOT NULL,
    MODIFY `proposedDate` DATETIME(3) NOT NULL,
    MODIFY `endDate` DATETIME(3) NOT NULL;
