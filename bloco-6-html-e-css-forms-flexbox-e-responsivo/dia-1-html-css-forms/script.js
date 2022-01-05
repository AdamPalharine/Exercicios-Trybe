const listaEstado = document.getElementById('lista');

function createStateOptions() {
  const stateOptions = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

  for (let i = 0; i < stateOptions.length; i += 1) {
    const option = document.createElement('option');
    option.innerText = stateOptions[i];
    option.value = stateOptions[i];
    listaEstado.appendChild(option);
  }
}

createStateOptions();