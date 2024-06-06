/*
  Warnings:

  - You are about to drop the column `InsuranceCancelationId` on the `InsuranceCancelationMessage` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `InsuranceCancelationMessage` DROP FOREIGN KEY `InsuranceCancelationMessage_InsuranceCancelationId_fkey`;

-- AlterTable
ALTER TABLE `InsuranceCancelationMessage` DROP COLUMN `InsuranceCancelationId`;
