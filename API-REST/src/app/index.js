import express from 'express';
import conexao from '../../infra/conexao.js';

const app = express();

app.use(express.json());


app.get('/listas', (req, res) => {
  try {
    const SQL = "USE dbsenac; SELECT * FROM dbsenac.alunos;";
    conexao.query(SQL, (error, result) => {
      if (error) {
        console.log(error);
        res.status(404).json({ 'error': error });
      } else {
        res.status(200).send(result);
      }
    });
  }
  catch {
    res.status(404);
  }
});

app.get('/listas/:id', (req, res) => {
  try {
    const ID = req.params.id;
    const SQL = `USE dbsenac; SELECT * FROM dbsenac.alunos WHERE id=${ID};`;
    conexao.query(SQL, ID, (error, result) => {
      const ROW = result(0);
      if (error) {
        console.log(error);
        res.status(404).json({ 'error': error });
      } else {
        res.status(200).send(ROW);
      }
    });
  }
  catch {
    res.status(404);
  }
});

app.post('/listas', (req, res) => {
  try {
    const ALUNO = req.body;
    const SQL = `USE dbsenac; INSER INTO alunos VALUES (${ALUNO.nome}, ${ALUNO.grupo});`;
    conexao.query(SQL, ID, (error, result) => {
      if (error) {
        console.log(error);
        res.status(404).json({ 'error': error });
      } else {
        res.status(201).send(ROW);
      }
    });
  }
  catch {
    res.status(404);
  }
});

app.delete('/listas', (req, res) => {
  listas.pop(req.body);
  res.status(201).send('Aluno apagado com sucesso!');
});


app.get('/teste', (req, res) => {
  res.status(200).send('Não é vc que testa');
});

app.get('/listasAlunos', (req, res) => {
  const dados = [
    {
      nome: 'José',
      idade: 23,
      curso: 'Programação Web',
      status: 'Ativo',
    },
    {
      nome: 'Maria',
      idade: 30,
      curso: 'Design Gráfico',
      status: 'Inativo',
    },
    {
      nome: 'Carlos',
      idade: 27,
      curso: 'Engenharia de Software',
      status: 'Ativo',
    }
  ];
  res.status(200).json(dados);
});

export default app



