import conexao from "../database/conexao.js";

class AlunoRepository {
  create() { }

  findAll() {
    const sql = "SELECT * FROM dbsenac.alunos;";
    return new Promise((resolve, reject) => {
      conexao.query(sql, (error, result) => {
        if (error) {
          return reject(`Erro:\n${error}`);
        } else {
          const rows = JSON.parse(JSON.stringify(result));
          return resolve(rows);
        }
      });
    });
  }

  findById(id) {
    const sql = "SELECT * FROM dbsenac.alunos WHERE id = ?";
    return new Promise((resolve, reject) => {
      conexao.query(sql, [id], (error, result) => {
        if (error) {
          return reject(`Erro:\n${error}`);
        } else {
          const row = JSON.parse(JSON.stringify(result));
          return resolve(row);
        }
      });
    });
  }

  update(id, updatedData) {
    const sql = "UPDATE dbsenac.alunos SET ? WHERE id = ?";
    return new Promise((resolve, reject) => {
      conexao.query(sql, [updatedData, id], (error, result) => {
        if (error) {
          return reject(`Erro:\n${error}`);
        } else {
          return resolve(result);
        }
      });
    });
  }

  delete(id) {
    const sql = "DELETE FROM dbsenac.alunos WHERE id = ?";
    return new Promise((resolve, reject) => {
      conexao.query(sql, [id], (error, result) => {
        if (error) {
          return reject(`Erro:\n${error}`);
        } else {
          return resolve(result);
        }
      });
    });
  }
}

export default AlunoRepository;
