/**
 * arquivo: server.js
 * descrição: arquivo responsável por toda a configuração e execução do Back-end ('Employee')
 * data: 03/04/2021
 * autor: William R. Ferreira
 */

const app = require('./src/app')

const port = process.env.PORT || 3000;


app.listen(port, () => {
  console.log('Aplicação sendo executada na porta.: ',port)
})