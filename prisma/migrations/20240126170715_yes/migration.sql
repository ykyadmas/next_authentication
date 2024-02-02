/*
  Warnings:

  - You are about to drop the column `comprehhensive` on the `Proposal` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Proposal` DROP COLUMN `comprehhensive`,
    ADD COLUMN `comprehensive` BOOLEAN NULL DEFAULT false;
