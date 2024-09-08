-- DropForeignKey
ALTER TABLE `servicos` DROP FOREIGN KEY `servicos_id_usuario_fkey`;

-- AlterTable
ALTER TABLE `servicos` MODIFY `id_usuario` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `servicos` ADD CONSTRAINT `servicos_id_usuario_fkey` FOREIGN KEY (`id_usuario`) REFERENCES `colaboradores`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
