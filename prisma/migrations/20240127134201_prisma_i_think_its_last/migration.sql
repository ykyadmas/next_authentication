/*
  Warnings:

  - You are about to drop the column `motorBsg` on the `Proposal` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Proposal` DROP COLUMN `motorBsg`,
    ADD COLUMN `motorbsg` BOOLEAN NOT NULL DEFAULT false;
