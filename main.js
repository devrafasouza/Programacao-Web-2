const http = require('http'); /* modulo http */
const port = 3000; /* numero da porta */

const server = http.createServer((request, response) => {
  response.end("<h1>Olá Mundo</h1>");
}); /* cria o server e passa de callback uma resposta para o usuario */

