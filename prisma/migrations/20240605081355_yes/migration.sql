/*
  Warnings:

  - You are about to drop the column `cancilationDate` on the `InsuranceCancelationMessage` table. All the data in the column will be lost.
  - You are about to drop the column `cancilationTime` on the `InsuranceCancelationMessage` table. All the data in the column will be lost.
  - Added the required column `message` to the `InsuranceCancelationMessage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `InsuranceCancelationMessage` DROP COLUMN `cancilationDate`,
    DROP COLUMN `cancilationTime`,
    ADD COLUMN `message` VARCHAR(191) NOT NULL;
