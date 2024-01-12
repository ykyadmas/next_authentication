-- AlterTable
ALTER TABLE `Proposal` MODIFY `startDate` DATETIME(3) NOT NULL,
    MODIFY `proposedDate` DATETIME(3) NOT NULL,
    MODIFY `endDate` DATETIME(3) NOT NULL;
