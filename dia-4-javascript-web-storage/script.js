const coresFundo = document.querySelector('#colors');
const coresTexto = document.querySelector('#texto');
const tamanhoFonte = document.querySelector('#tamanho');
const linhaEspaco = document.querySelector('#linhas');
const tiposFonte = document.querySelector('#fontes');

function createColorsOptions() {
  const colorsOptions = ['---', 'Azul', 'Vermelho', 'Amarelo', 'Verde'];

  for (let i = 0; i < colorsOptions.length; i += 1) {
    const option = document.createElement('option');
    option.innerHTML = colorsOptions[i];
    option.value = colorsOptions[i];
    coresFundo.appendChild(option);
  }
}

function createFontOptions() {
  const colorsFontOptions = ['---', 'Azul', 'Vermelho', 'Preto', 'Branco'];

  for (let i = 0; i < colorsFontOptions.length; i += 1) {
    const option = document.createElement('option');
    option.innerHTML = colorsFontOptions[i];
    option.value = colorsFontOptions[i];
    coresTexto.appendChild(option);
  }
}

function createFontSizeOptions() {
  const fontSizeOptions = ['---', '8pt', '10pt', '12pt', '14pt', '20pt'];

  for (let i = 0; i < fontSizeOptions.length; i += 1) {
    const option = document.createElement('option');
    option.innerHTML = fontSizeOptions[i];
    option.value = fontSizeOptions[i];
    tamanhoFonte.appendChild(option);
  }
}

function createAlignOptions() {
  const fontAlignOptions = ['---', '1', 'normal', '1.5', '2.0', '3.0'];

  for (let i = 0; i < fontAlignOptions.length; i += 1) {
    const option = document.createElement('option');
    option.innerHTML = fontAlignOptions[i];
    option.value = fontAlignOptions[i];
    linhaEspaco.appendChild(option);
  }
}

function createFontTipeOptions() {
  const fontTipeOptions = ['---', 'Arial', 'Times New Roman', 'Sans Serif'];

  for (let i = 0; i < fontTipeOptions.length; i += 1) {
    const option = document.createElement('option');
    option.innerHTML = fontTipeOptions[i];
    option.value = fontTipeOptions[i];
    tiposFonte.appendChild(option);
  }
}

createColorsOptions();
createFontOptions();
createFontSizeOptions();
createAlignOptions();
createFontTipeOptions();
