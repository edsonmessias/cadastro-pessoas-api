/*
  Warnings:

  - You are about to alter the column `dataCadastro` on the `doacao` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `updatedAt` on the `usuario` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `doacao` MODIFY `dataCadastro` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `usuario` MODIFY `createdAt` DATE NULL,
    MODIFY `updatedAt` DATETIME NOT NULL;
