import express from 'express';
import conexao from '../../infra/index.js';

const app = express();

app.use(express.json());


function buscarAlunoporId(id) {
  return listas.filter(listas => listas.id == id);
}


app.get('/listas', (req, res) => {
  const sql = "USE dbsenac; SELECT * FROM dbsenac.alunos;";
  conexao.query(sql, (error, result) => {
    if (error) {
      console.log(error);
      res.status(404).json({ 'error': error });
    } else {
      res.status(200).send(result);
    }
  });
});

app.get('/listas/:id', (req, res) => {
  res.json(buscarAlunoporId(req.params.id));
});
app.post('/listas', (req, res) => {
  listas.push(req.body);
  res.status(201).send('Aluno cadastrdo com sucesso!');
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



