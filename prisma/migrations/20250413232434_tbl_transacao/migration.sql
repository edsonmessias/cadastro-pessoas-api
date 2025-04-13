/*
  Warnings:

  - You are about to alter the column `dataCadastro` on the `doacao` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `createdAt` on the `usuario` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `updatedAt` on the `usuario` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `doacao` MODIFY `dataCadastro` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `usuario` MODIFY `createdAt` DATETIME NOT NULL,
    MODIFY `updatedAt` DATETIME NOT NULL;

-- CreateTable
CREATE TABLE `Transacao` (
    `transacao_id` INTEGER NOT NULL AUTO_INCREMENT,
    `beneficiarioId` INTEGER NOT NULL,
    `tipoEnvio` VARCHAR(191) NOT NULL,
    `dataTransacao` DATETIME(3) NOT NULL,
    `logradouro` VARCHAR(191) NOT NULL,
    `numeroLogradouro` INTEGER NOT NULL,
    `complementoLogradouro` VARCHAR(191) NOT NULL,
    `bairro` VARCHAR(191) NOT NULL,
    `cidade` VARCHAR(191) NOT NULL,
    `uf` VARCHAR(191) NOT NULL,
    `cep` VARCHAR(191) NOT NULL,
    `observacao` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`transacao_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Transacao` ADD CONSTRAINT `Transacao_beneficiarioId_fkey` FOREIGN KEY (`beneficiarioId`) REFERENCES `Usuario`(`usuario_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
