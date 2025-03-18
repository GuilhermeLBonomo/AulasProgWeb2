import mysql from 'mysql';

const conexao = mysql.createConnection({
  host: 'mysql', // Nome do serviço do MySQL no Docker Compose
  port: '3306',
  user: 'root',
  password: 'ugaUGA#123', // Senha definida no Docker Compose
  database: 'dbsenac',
});

conexao.connect();

export default conexao;
