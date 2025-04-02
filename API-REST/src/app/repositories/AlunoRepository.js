import conexao, { consulta } from "../database/conexao.js";

class AlunoRepository {

  create(alunoData) {
    const sql = "INSERT INTO dbsenac.alunos (alunos_nome, alunos_grupo) VALUES (?, ?)";
    return consulta(sql, [alunoData.alunos_nome, alunoData.alunos_grupo]);
  }

  findAll() {
    const sql = "SELECT * FROM dbsenac.alunos";
    return consulta(sql);
  }

  findById(id) {
    const sql = "SELECT * FROM dbsenac.alunos WHERE id_alunos = ?";
    return consulta(sql, [id]);
  }

  update(id, updatedData) {
    const sql = "UPDATE dbsenac.alunos SET alunos_nome = ?, alunos_grupo = ? WHERE id_alunos = ?";
    return consulta(sql, [updatedData.alunos_nome, updatedData.alunos_grupo, id]);
  }

  delete(id) {
    const sql = "DELETE FROM dbsenac.alunos WHERE id_alunos = ?";
    return consulta(sql, [id]);
  }
}

export default AlunoRepository;
