-- CreateTable
CREATE TABLE `ClaimForm` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `driverFullName` VARCHAR(191) NOT NULL,
    `driverAddress` VARCHAR(191) NOT NULL,
    `driverOccupation` VARCHAR(191) NOT NULL,
    `place` VARCHAR(191) NOT NULL,
    `age` VARCHAR(191) NOT NULL,
    `LicenceNo` VARCHAR(191) NOT NULL,
    `policyFile` VARCHAR(191) NOT NULL,
    `carFile` VARCHAR(191) NOT NULL,
    `acidentDate` DATETIME(3) NOT NULL,
    `time` DATETIME(3) NOT NULL,
    `PaymentId` INTEGER NOT NULL,
    `userEmail` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `ClaimForm_PaymentId_key`(`PaymentId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ClaimForm` ADD CONSTRAINT `ClaimForm_PaymentId_fkey` FOREIGN KEY (`PaymentId`) REFERENCES `Payment`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ClaimForm` ADD CONSTRAINT `ClaimForm_userEmail_fkey` FOREIGN KEY (`userEmail`) REFERENCES `User`(`email`) ON DELETE CASCADE ON UPDATE CASCADE;
