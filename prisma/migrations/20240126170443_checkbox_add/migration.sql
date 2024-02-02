/*
  Warnings:

  - You are about to drop the column `checkbox1` on the `Proposal` table. All the data in the column will be lost.
  - You are about to drop the column `checkbox2` on the `Proposal` table. All the data in the column will be lost.
  - You are about to drop the column `checkbox3` on the `Proposal` table. All the data in the column will be lost.
  - You are about to drop the column `checkbox4` on the `Proposal` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Proposal` DROP COLUMN `checkbox1`,
    DROP COLUMN `checkbox2`,
    DROP COLUMN `checkbox3`,
    DROP COLUMN `checkbox4`,
    ADD COLUMN `comprehhensive` BOOLEAN NULL DEFAULT false,
    ADD COLUMN `compulsory` BOOLEAN NULL DEFAULT false,
    ADD COLUMN `thirdParty` BOOLEAN NULL DEFAULT false,
    ADD COLUMN `thirdPartyFireAndTheft` BOOLEAN NULL DEFAULT false;
