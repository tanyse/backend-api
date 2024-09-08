/*
  Warnings:

  - Added the required column `equipamento` to the `estoque` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantidade` to the `estoque` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `estoque` ADD COLUMN `equipamento` VARCHAR(191) NOT NULL,
    ADD COLUMN `quantidade` VARCHAR(191) NOT NULL;
