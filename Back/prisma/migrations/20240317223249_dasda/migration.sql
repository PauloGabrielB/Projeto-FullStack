/*
  Warnings:

  - Made the column `name` on table `usuarios` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "usuarios" ALTER COLUMN "name" SET NOT NULL;
