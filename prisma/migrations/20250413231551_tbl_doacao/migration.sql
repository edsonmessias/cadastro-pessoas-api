/*
  Warnings:

  - You are about to alter the column `createdAt` on the `usuario` table. The data in that column could be lost. The data in that column will be cast from `DateTime(3)` to `DateTime`.
  - You are about to alter the column `updatedAt` on the `usuario` table. The data in that column could be lost. The data in that column will be cast from `DateTime(3)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `usuario` MODIFY `createdAt` DATETIME NOT NULL,
    MODIFY `updatedAt` DATETIME NOT NULL;

-- CreateTable
CREATE TABLE `Doacao` (
    `doacao_id` INTEGER NOT NULL AUTO_INCREMENT,
    `codigo` INTEGER NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `doadorId` INTEGER NOT NULL,
    `dataCadastro` DATETIME NOT NULL,

    PRIMARY KEY (`doacao_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Doacao` ADD CONSTRAINT `Doacao_doadorId_fkey` FOREIGN KEY (`doadorId`) REFERENCES `Usuario`(`usuario_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
