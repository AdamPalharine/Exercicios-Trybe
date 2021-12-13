/* PARTE 1 */

let ondeEsta = document.getElementById('elementoOndeVoceEsta');

let elementoPai = document.getElementById('elementoOndeVoceEsta').parentElement;
elementoPai.style.color = 'red';

let elementoFilho = elementoOndeVoceEsta.firstElementChild;
elementoFilho.innerText = 'Sei lá';

let primeiroFilho = pai.firstElementChild;
console.log(primeiroFilho);

let primeiroFilhoFilho = elementoOndeVoceEsta.previousElementSibling;
console.log(primeiroFilhoFilho);

let primeiroNo = elementoOndeVoceEsta.nextSibling;

let terceiroFilho = elementoOndeVoceEsta.nextElementSibling;
console.log(terceiroFilho);

let terceiroFilho2 = pai.lastElementChild.previousElementSibling;
console.log(terceiroFilho2);

/* PARTE 2 */
