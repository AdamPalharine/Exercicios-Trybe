const operations = require('../operacoes');
const readLine = require('readline-sync')
    //extenção para rodar no terminal

console.log("Calculadora Simples")
const num1 = readLine.questionInt("Digitr um numero: ")
    //questInt já questiona se o numero que for digitado é um numero inteiro
const oper = readLine.question("Digite a operação: +, -, * ou /")
const num2 = readLine.questionInt("Digitr um numero: ")

switch (oper) {
  case "+":
    operations.sum(num1, num2)
    break;
  case "-":
    operations.sub(num1, num2)
    break;
  case "*":
    operations.mul(num1, num2)
    break;
  case "/":
    operations.div(num1, num2)
    break;
  default:
    console.log("Operação desconhecida.")
}
