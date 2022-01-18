/* Versão estendida */

const fatorial = '7';
let resultado = fatorial;

for (let i = 1; i < fatorial; i+= 1) {
    resultado *= i; // O mesmo que resultado = resultado * i 
    console.log(i);
}
console.log(resultado); 

/* Tentando com ternary operator */
/* Para fazer sentido eu teria que ter feito o fatorial em um função */

const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(5));
