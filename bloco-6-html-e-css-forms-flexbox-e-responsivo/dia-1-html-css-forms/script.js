const listaEstado = document.getElementById('lista');
const limparLista = document.getElementById('limpar');
const divs = document.getElementById("form");
const filhos = divs.children;

function createStateOptions() {
  const stateOptions = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

  for (let i = 0; i < stateOptions.length; i += 1) {
    const option = document.createElement('option');
    option.innerText = stateOptions[i];
    option.value = stateOptions[i];
    listaEstado.appendChild(option);
  }
}

limparLista.addEventListener('click', apagar)

function apagar(){
    const apagando = document.getElementsByClassName('form')
    for (let i = filhos.length; i > 0 ; i -= 1) {
        divs.removeChild(apagando[0]);
    }    
}

createStateOptions();