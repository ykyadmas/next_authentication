-- DropIndex
DROP INDEX `Proposal_firstName_key` ON `Proposal`;

-- DropIndex
DROP INDEX `User_firstName_key` ON `User`;

-- AlterTable
ALTER TABLE `User` MODIFY `email` VARCHAR(191) NULL;
