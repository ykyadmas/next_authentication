-- CreateTable
CREATE TABLE `InsuranceCancelationMessage` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `PaymentId` INTEGER NOT NULL,
    `InsuranceCancelationId` INTEGER NOT NULL,
    `cancilationDate` VARCHAR(191) NOT NULL,
    `cancilationTime` VARCHAR(191) NOT NULL,
    `userEmail` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `InsuranceCancelationMessage_PaymentId_key`(`PaymentId`),
    UNIQUE INDEX `InsuranceCancelationMessage_InsuranceCancelationId_key`(`InsuranceCancelationId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `InsuranceCancelationMessage` ADD CONSTRAINT `InsuranceCancelationMessage_PaymentId_fkey` FOREIGN KEY (`PaymentId`) REFERENCES `Payment`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InsuranceCancelationMessage` ADD CONSTRAINT `InsuranceCancelationMessage_InsuranceCancelationId_fkey` FOREIGN KEY (`InsuranceCancelationId`) REFERENCES `InsuranceCancelation`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InsuranceCancelationMessage` ADD CONSTRAINT `InsuranceCancelationMessage_userEmail_fkey` FOREIGN KEY (`userEmail`) REFERENCES `User`(`email`) ON DELETE CASCADE ON UPDATE CASCADE;
