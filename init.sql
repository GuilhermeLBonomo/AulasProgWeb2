-- Criação do banco de dados com charset UTF-8 e collation utf8_unicode_ci
CREATE DATABASE IF NOT EXISTS dbsenac
  CHARACTER SET utf8
  COLLATE utf8_unicode_ci;

USE dbsenac;

CREATE TABLE `dbsenac`.`alunos` (
  `id_alunos` UNSIGNED BIGINT NOT NULL AUTO_INCREMENT,
  `alunos_nome` VARCHAR(45) NOT NULL,
  `alunos_grupo` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_alunos`));