/*
  Warnings:

  - You are about to drop the column `onDamage` on the `Proposal` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Proposal` DROP COLUMN `onDamage`,
    ADD COLUMN `ondamage` BOOLEAN NOT NULL DEFAULT false;
