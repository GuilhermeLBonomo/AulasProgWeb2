import app from './app/app.js';
import DADOS from '../dados.js';

app.listen(DADOS.HOST_PORT, () => {
    console.log(`Servidor rodando no endereço http://${DADOS.HOST_HOST}:${DADOS.HOST_PORT}`);
})


