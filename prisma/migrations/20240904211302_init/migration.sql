-- DropForeignKey
ALTER TABLE `equipamentos` DROP FOREIGN KEY `equipamentos_servicos_id_fkey`;

-- AlterTable
ALTER TABLE `equipamentos` MODIFY `servicos_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `equipamentos` ADD CONSTRAINT `equipamentos_servicos_id_fkey` FOREIGN KEY (`servicos_id`) REFERENCES `servicos`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
