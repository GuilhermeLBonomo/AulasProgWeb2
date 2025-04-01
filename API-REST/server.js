import app from './src/app/app.js';
import DADOS from './dados.js';

app.listen(port, () => {
    console.log(`Servidor rodando no endereço http://${DADOS.HOST_HOST}:${DADOS.HOST_PORT}`);
})


