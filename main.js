const http = require('http'); /* modulo http */
const port = 3000; /* numero da porta */

const server = http.createServer((request, response) => {
  response.end("<h1>Ola Mundo</h1>");
}); /* cria o server e passa de callback uma resposta para o usuario */

server.listen(port, () => {
  console.log("Ouvindo na porta " + port);
});