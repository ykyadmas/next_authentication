-- DropForeignKey
ALTER TABLE `Proposal` DROP FOREIGN KEY `Proposal_email_fkey`;

-- AddForeignKey
ALTER TABLE `Proposal` ADD CONSTRAINT `Proposal_email_fkey` FOREIGN KEY (`email`) REFERENCES `User`(`email`) ON DELETE CASCADE ON UPDATE CASCADE;
