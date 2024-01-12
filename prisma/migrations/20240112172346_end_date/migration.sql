/*
  Warnings:

  - You are about to drop the column `enddate` on the `Proposal` table. All the data in the column will be lost.
  - Added the required column `endDate` to the `Proposal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Proposal` DROP COLUMN `enddate`,
    ADD COLUMN `endDate` DATETIME(3) NOT NULL;
