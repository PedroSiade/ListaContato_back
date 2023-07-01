/*
  Warnings:

  - Added the required column `telefone` to the `Cadastro` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cadastro" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" INTEGER NOT NULL
);
INSERT INTO "new_Cadastro" ("email", "id", "nome") SELECT "email", "id", "nome" FROM "Cadastro";
DROP TABLE "Cadastro";
ALTER TABLE "new_Cadastro" RENAME TO "Cadastro";
CREATE UNIQUE INDEX "Cadastro_id_key" ON "Cadastro"("id");
CREATE UNIQUE INDEX "Cadastro_email_key" ON "Cadastro"("email");
CREATE UNIQUE INDEX "Cadastro_telefone_key" ON "Cadastro"("telefone");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
