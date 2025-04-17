/*
  Warnings:

  - You are about to alter the column `createdAt` on the `usuario` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `updatedAt` on the `usuario` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - Added the required column `dataCadastro` to the `Doacao` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `doacao` ADD COLUMN `dataCadastro` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `usuario` MODIFY `createdAt` DATETIME NOT NULL,
    MODIFY `updatedAt` DATETIME NOT NULL;

-- AddForeignKey
ALTER TABLE `Doacao` ADD CONSTRAINT `Doacao_doadorId_fkey` FOREIGN KEY (`doadorId`) REFERENCES `Usuario`(`usuario_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
