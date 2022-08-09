const imc = require('./calculation');
const readLine = require('readline-sync');

const seuPeso = () => {
  return readLine.questionFloat("Digite seu Peso: ");
}

const suaAltura = () => {
  return readLine.questionFloat("Digite sua Altura: ");
}

const seuNome = () => {
  return readLine.question("Digite seu Nome: ");
}

const name = seuNome();
const peso = seuPeso();
const altura = suaAltura();

const result = imc(peso, altura);

console.log(`O IMC de ${name} é: ${result}`);
