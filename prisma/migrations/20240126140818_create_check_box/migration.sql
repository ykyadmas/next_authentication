/*
  Warnings:

  - You are about to alter the column `checkbox1` on the `Proposal` table. The data in that column could be lost. The data in that column will be cast from `TinyInt` to `VarChar(191)`.
  - You are about to alter the column `checkbox2` on the `Proposal` table. The data in that column could be lost. The data in that column will be cast from `TinyInt` to `VarChar(191)`.
  - You are about to alter the column `checkbox3` on the `Proposal` table. The data in that column could be lost. The data in that column will be cast from `TinyInt` to `VarChar(191)`.
  - You are about to alter the column `checkbox4` on the `Proposal` table. The data in that column could be lost. The data in that column will be cast from `TinyInt` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `Proposal` MODIFY `checkbox1` VARCHAR(191) NULL,
    MODIFY `checkbox2` VARCHAR(191) NULL,
    MODIFY `checkbox3` VARCHAR(191) NULL,
    MODIFY `checkbox4` VARCHAR(191) NULL;
