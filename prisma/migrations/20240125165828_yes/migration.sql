-- DropForeignKey
ALTER TABLE `Proposal` DROP FOREIGN KEY `Proposal_firstName_fkey`;

-- AddForeignKey
ALTER TABLE `Proposal` ADD CONSTRAINT `Proposal_firstName_fkey` FOREIGN KEY (`firstName`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
