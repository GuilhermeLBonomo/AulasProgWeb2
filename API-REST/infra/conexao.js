import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'mysql',
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'ugaUGA#123',
  database: process.env.DB_NAME || 'dbsenac'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.stack);
    return;
  }
  console.log('Conectado ao banco de dados com ID ' + connection.threadId);
});
