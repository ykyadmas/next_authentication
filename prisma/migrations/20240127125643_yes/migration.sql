/*
  Warnings:

  - You are about to drop the column `compulsory` on the `Proposal` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Proposal` DROP COLUMN `compulsory`,
    ADD COLUMN `motorBsg` BOOLEAN NULL DEFAULT false;
