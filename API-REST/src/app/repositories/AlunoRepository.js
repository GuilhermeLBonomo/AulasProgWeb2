import { consulta } from "../database/conexao.js";

class AlunoRepository {

  create(alunoData) {
    const sql = "INSERT INTO dbsenac.alunos (alunos_nome, alunos_grupo) VALUES (?, ?)";
    return consulta(sql, [alunoData.alunos_nome, alunoData.alunos_grupo], 'Não foi possível cadastrar o aluno');
  }

  findAll() {
    const sql = "SELECT * FROM dbsenac.alunos";
    return consulta(sql, [], 'Não foi possível encontrar os alunos');
  }

  findById(id) {
    const sql = "SELECT * FROM dbsenac.alunos WHERE id_alunos = ?";
    return consulta(sql, [id], 'Não foi possível encontrar o aluno');
  }

  update(id, updatedData) {
    const sql = "UPDATE dbsenac.alunos SET alunos_nome = ?, alunos_grupo = ? WHERE id_alunos = ?";
    return consulta(sql, [updatedData.alunos_nome, updatedData.alunos_grupo, id], 'Não foi possível atualizar os dados do aluno');
  }

  delete(id) {
    const sql = "DELETE FROM dbsenac.alunos WHERE id_alunos = ?";
    return consulta(sql, [id], 'Não foi possível deletar o aluno');
  }
}

export default AlunoRepository;
