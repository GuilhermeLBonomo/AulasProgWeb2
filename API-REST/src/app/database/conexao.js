import mariadb from 'mariadb';

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const conexao = mariadb.createConnection({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME
});

conexao.then(conn => {
    console.log('Conexão bem-sucedida ao banco de dados MariaDB!');
}).catch(err => {
    console.error('Erro ao conectar ao MariaDB:', err);
});

export default conexao;
