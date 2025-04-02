import mariadb from 'mariadb';

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const conexao = mariadb.createPool({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    connectionLimit: 5  // Limite de conexões simultâneas
});


conexao.getConnection()
    .then(conn => {
        console.log('Conexão bem-sucedida ao banco de dados MariaDB!');
        conn.release();
    })
    .catch(err => {
        console.error('Erro ao conectar ao MariaDB:', err);
    });

const consulta = (sql, params, messageReject) => {
    return new Promise((resolve, reject) => {
        conexao.query(sql, params)
            .then(result => resolve(result))
            .catch(error => reject(`${messageReject}:\n${error.message}`));
    });
};

export { conexao, consulta };
