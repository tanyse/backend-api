/*
  Warnings:

  - You are about to drop the `usuarios` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `despesas` DROP FOREIGN KEY `despesas_id_usuario_fkey`;

-- DropForeignKey
ALTER TABLE `servicos` DROP FOREIGN KEY `servicos_id_usuario_fkey`;

-- DropForeignKey
ALTER TABLE `solicitados` DROP FOREIGN KEY `solicitados_id_usuario_fkey`;

-- DropTable
DROP TABLE `usuarios`;

-- CreateTable
CREATE TABLE `colaboradores` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `colaboradores_nome_key`(`nome`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `servicos` ADD CONSTRAINT `servicos_id_usuario_fkey` FOREIGN KEY (`id_usuario`) REFERENCES `colaboradores`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `solicitados` ADD CONSTRAINT `solicitados_id_usuario_fkey` FOREIGN KEY (`id_usuario`) REFERENCES `colaboradores`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `despesas` ADD CONSTRAINT `despesas_id_usuario_fkey` FOREIGN KEY (`id_usuario`) REFERENCES `colaboradores`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
