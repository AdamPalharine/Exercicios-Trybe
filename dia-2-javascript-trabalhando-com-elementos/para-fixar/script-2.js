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

/* 

// 7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

// 8. Agora acesse o terceiroFilho a partir de pai.
const terceiroFilho2 = pai.lastElementChild.previousElementSibling; */