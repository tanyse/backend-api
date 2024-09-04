/*
  Warnings:

  - You are about to drop the `usuario` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `servicos_id` to the `equipamentos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `equipamentos` ADD COLUMN `servicos_id` INTEGER NOT NULL;

-- DropTable
DROP TABLE `usuario`;

-- CreateTable
CREATE TABLE `usuarios` (
    `nome` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `usuarios_nome_key`(`nome`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `equipamentos` ADD CONSTRAINT `equipamentos_servicos_id_fkey` FOREIGN KEY (`servicos_id`) REFERENCES `servicos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
