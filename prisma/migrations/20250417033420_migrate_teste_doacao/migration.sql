/*
  Warnings:

  - You are about to drop the column `dataCadastro` on the `doacao` table. All the data in the column will be lost.
  - You are about to alter the column `createdAt` on the `usuario` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `updatedAt` on the `usuario` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- DropForeignKey
ALTER TABLE `doacao` DROP FOREIGN KEY `Doacao_doadorId_fkey`;

-- DropIndex
DROP INDEX `Doacao_doadorId_fkey` ON `doacao`;

-- AlterTable
ALTER TABLE `doacao` DROP COLUMN `dataCadastro`;

-- AlterTable
ALTER TABLE `usuario` MODIFY `createdAt` DATETIME NOT NULL,
    MODIFY `updatedAt` DATETIME NOT NULL;
