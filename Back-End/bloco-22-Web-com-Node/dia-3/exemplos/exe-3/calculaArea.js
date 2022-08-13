const readline = require('readline-sync');

function calculaArea() {
  const lado = readline.questionInt('Digite o lado do Quadrado: ');

  const result = Math.pow(lado, 2);

  return result;
}

module.exports = {
  calculaArea
}
