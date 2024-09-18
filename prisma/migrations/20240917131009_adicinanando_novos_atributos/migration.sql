/*
  Warnings:

  - You are about to drop the column `servico` on the `servicos` table. All the data in the column will be lost.
  - Added the required column `descricao` to the `servicos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dtabertura` to the `servicos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dtfechamento` to the `servicos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `equipamento` to the `servicos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `servicos` DROP COLUMN `servico`,
    ADD COLUMN `descricao` VARCHAR(191) NOT NULL,
    ADD COLUMN `dtabertura` DATETIME(3) NOT NULL,
    ADD COLUMN `dtfechamento` DATETIME(3) NOT NULL,
    ADD COLUMN `equipamento` VARCHAR(191) NOT NULL;
