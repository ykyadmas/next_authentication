/*
  Warnings:

  - Added the required column `branch` to the `Proposal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `Proposal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `enddate` to the `Proposal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kebele` to the `Proposal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `occupation` to the `Proposal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNo` to the `Proposal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `Proposal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `woreda` to the `Proposal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Proposal` ADD COLUMN `branch` VARCHAR(191) NOT NULL,
    ADD COLUMN `date` DATETIME(3) NOT NULL,
    ADD COLUMN `enddate` DATETIME(3) NOT NULL,
    ADD COLUMN `kebele` VARCHAR(191) NOT NULL,
    ADD COLUMN `occupation` VARCHAR(191) NOT NULL,
    ADD COLUMN `phoneNo` INTEGER NOT NULL,
    ADD COLUMN `startDate` DATETIME(3) NOT NULL,
    ADD COLUMN `woreda` VARCHAR(191) NOT NULL;
