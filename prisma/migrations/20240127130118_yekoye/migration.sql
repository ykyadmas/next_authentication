/*
  Warnings:

  - Made the column `thirdParty` on table `Proposal` required. This step will fail if there are existing NULL values in that column.
  - Made the column `thirdPartyFireAndTheft` on table `Proposal` required. This step will fail if there are existing NULL values in that column.
  - Made the column `comprehensive` on table `Proposal` required. This step will fail if there are existing NULL values in that column.
  - Made the column `motorBsg` on table `Proposal` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Proposal` MODIFY `thirdParty` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `thirdPartyFireAndTheft` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `comprehensive` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `motorBsg` BOOLEAN NOT NULL DEFAULT false;
