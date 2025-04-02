import express from 'express';
import conexao from './database/conexao.js';

const app = express();

app.use(express.json());

app.get('/listas', async (req, res) => {
  try {
    const SQL = "SELECT * FROM dbsenac.alunos;";
    conexao.query(SQL, (error, result) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro ao listar os alunos', details: error.message });
      }
      res.status(200).json(result);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno do servidor', details: error.message });
  }
});

app.get('/listas/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const SQL = "SELECT * FROM dbsenac.alunos WHERE id = ?;";
    conexao.query(SQL, [id], (error, result) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro ao buscar o aluno', details: error.message });
      }
      if (result.length === 0) {
        return res.status(404).json({ message: `Aluno com ID ${id} não encontrado.` });
      }
      res.status(200).json(result[0]);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno do servidor', details: error.message });
  }
});

app.post('/listas', async (req, res) => {
  const aluno = req.body;
  try {
    const SQL = "INSERT INTO dbsenac.alunos (alunos_nome, alunos_grupo) VALUES (?, ?);";
    conexao.query(SQL, [aluno.alunos_nome, aluno.alunos_grupo], (error, result) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro ao criar o aluno', details: error.message });
      }
      res.status(201).json({ message: 'Aluno criado com sucesso!', aluno: { id: result.insertId, ...aluno } });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno do servidor', details: error.message });
  }
});

app.delete('/listas/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const SQL = "DELETE FROM dbsenac.alunos WHERE id = ?;";
    conexao.query(SQL, [id], (error, result) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro ao deletar o aluno', details: error.message });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: `Aluno com ID ${id} não encontrado.` });
      }
      res.status(200).json({ message: `Aluno com ID ${id} deletado com sucesso!` });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno do servidor', details: error.message });
  }
});

app.get('/teste', (req, res) => {
  res.status(200).send('Não é vc que testa');
});

app.get('/listasAlunos', (req, res) => {
  const dados = [{ nome: "Aluno 1" }, { nome: "Aluno 2" }];
  res.status(200).json(dados);
});

export default app;
