/*
  Warnings:

  - Added the required column `id` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Message_email_key` ON `Message`;

-- AlterTable
ALTER TABLE `Message` ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);
