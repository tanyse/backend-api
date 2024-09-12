/*
  Warnings:

  - Added the required column `id_Status` to the `servicos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `servicos` ADD COLUMN `id_Status` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `statusServico` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `status` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `servicos` ADD CONSTRAINT `servicos_id_Status_fkey` FOREIGN KEY (`id_Status`) REFERENCES `statusServico`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
