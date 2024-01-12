/*
  Warnings:

  - You are about to drop the column `todayDate` on the `Proposal` table. All the data in the column will be lost.
  - Added the required column `proposedDate` to the `Proposal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Proposal` DROP COLUMN `todayDate`,
    ADD COLUMN `proposedDate` DATETIME(3) NOT NULL;
