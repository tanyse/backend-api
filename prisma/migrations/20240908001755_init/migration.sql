/*
  Warnings:

  - You are about to drop the column `equipamento` on the `estoque` table. All the data in the column will be lost.
  - You are about to alter the column `quantidade` on the `estoque` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - Added the required column `equipamentos` to the `estoque` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `estoque` DROP COLUMN `equipamento`,
    ADD COLUMN `equipamentos` VARCHAR(191) NOT NULL,
    MODIFY `quantidade` INTEGER NOT NULL;
