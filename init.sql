-- Criação do banco de dados com charset UTF-8mb4 e collation utf8mb4_unicode_ci
CREATE DATABASE IF NOT EXISTS dbsenac
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE dbsenac;

CREATE TABLE `alunos` (
  `id_alunos` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `alunos_nome` VARCHAR(45) NOT NULL,
  `alunos_grupo` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_alunos`)
);
