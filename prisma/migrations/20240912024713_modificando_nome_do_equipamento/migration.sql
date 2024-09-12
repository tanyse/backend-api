/*
  Warnings:

  - You are about to drop the column `equipamentos` on the `estoque` table. All the data in the column will be lost.
  - Added the required column `equipamento` to the `estoque` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `estoque` DROP COLUMN `equipamentos`,
    ADD COLUMN `equipamento` VARCHAR(191) NOT NULL;
