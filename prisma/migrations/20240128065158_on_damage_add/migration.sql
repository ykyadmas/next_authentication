/*
  Warnings:

  - You are about to drop the column `motorbsg` on the `Proposal` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Proposal` DROP COLUMN `motorbsg`,
    ADD COLUMN `onDamage` BOOLEAN NOT NULL DEFAULT false;
