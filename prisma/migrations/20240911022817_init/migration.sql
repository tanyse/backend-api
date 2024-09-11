/*
  Warnings:

  - A unique constraint covering the columns `[cpf]` on the table `colaboradores` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cpf` to the `colaboradores` table without a default value. This is not possible if the table is not empty.
  - Added the required column `data_nascimento` to the `colaboradores` table without a default value. This is not possible if the table is not empty.
  - Added the required column `genero` to the `colaboradores` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telefone` to the `colaboradores` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `colaboradores` ADD COLUMN `cpf` VARCHAR(191) NOT NULL,
    ADD COLUMN `data_nascimento` VARCHAR(191) NOT NULL,
    ADD COLUMN `genero` VARCHAR(191) NOT NULL,
    ADD COLUMN `telefone` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `endereco` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `endereco` VARCHAR(191) NOT NULL,
    `numero` INTEGER NOT NULL,
    `bairro` VARCHAR(191) NOT NULL,
    `cidade` VARCHAR(191) NOT NULL,
    `estado` VARCHAR(191) NOT NULL,
    `cep` VARCHAR(191) NOT NULL,
    `id_usuario` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `colaboradores_cpf_key` ON `colaboradores`(`cpf`);

-- AddForeignKey
ALTER TABLE `endereco` ADD CONSTRAINT `endereco_id_usuario_fkey` FOREIGN KEY (`id_usuario`) REFERENCES `colaboradores`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
