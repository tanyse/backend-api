/*
  Warnings:

  - Added the required column `cargo` to the `colaboradores` table without a default value. This is not possible if the table is not empty.
  - Added the required column `funcao` to the `colaboradores` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `colaboradores` ADD COLUMN `cargo` VARCHAR(191) NOT NULL,
    ADD COLUMN `funcao` VARCHAR(191) NOT NULL;
