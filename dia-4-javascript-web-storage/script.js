const coresFundo = document.querySelector('#colors');
const coresTexto = document.querySelector('#texto');
const tamanhoFonte = document.querySelector('#tamanho');
const linhaEspaco = document.querySelector('#linhas');
const tiposFonte = document.querySelector('#fontes');
const listOptions = document.getElementsByTagName('option');
const bodyPage = document.getElementsByTagName('body');
const title1 = document.getElementsByTagName('h1');
const title2 = document.getElementsByTagName('h2');
const paragraph = document.getElementsByTagName('p');

function createColorsOptions() {
  const colorsOptions = ['---', 'Blue', 'Red', 'Yellow', 'Green'];

  for (let i = 0; i < colorsOptions.length; i += 1) {
    const option = document.createElement('option');
    option.innerHTML = colorsOptions[i];
    option.value = colorsOptions[i];
    coresFundo.appendChild(option);
  }
}

function createFontOptions() {
  const colorsFontOptions = ['---', 'Blue', 'Red', 'Black', 'White'];

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
  const fontAlignOptions = ['---', '5pt', '10pt', '15pt', '20pt', '25pt'];

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

// selected em cada objeto
function criandoSelected() {
  coresFundo.children[0].classList.add('selected');
  coresTexto.children[0].classList.add('selected');
  tamanhoFonte.children[0].classList.add('selected');
  linhaEspaco.children[0].classList.add('selected');
  tiposFonte.children[0].classList.add('selected');
}

coresFundo.addEventListener('change', (event) => {
  bodyPage[0].style.backgroundColor = event.target.value;
  localStorage.setItem('backColor', event.target.value); // localStorage.setItem(key, event)
});

function retornoBackground() {
  bodyPage[0].style.backgroundColor = localStorage.getItem('backColor');
};

coresTexto.addEventListener('change', (event) => {
  for (let i = 0; i < title1.length; i += 1) {
    title1[i].style.color = event.target.value; 
  }
  for (let i = 0; i < title2.length; i += 1) {
    title2[i].style.color = event.target.value;
  }
  for (let i = 0; i < paragraph.length; i += 1) {
    paragraph[i].style.color = event.target.value;
  }
  localStorage.setItem('textColor', event.target.value);
});

function retornotextColor() {
  for (let i = 0; i < title1.length; i+= 1) {
    title1[i].style.color = localStorage.getItem('textColor');  
  }
  for (let i = 0; i < title2.length; i += 1) {
    title2[i].style.color = localStorage.getItem('textColor');  
  }
  for (let i = 0; i < paragraph.length; i += 1) {
    paragraph[i].style.color = localStorage.getItem('textColor');  
  }
};

tamanhoFonte.addEventListener('change', (event) => {
  for (let i = 0; i < title1.length; i += 1) {
    title1[i].style.fontSize = event.target.value; 
  }
  for (let i = 0; i < title2.length; i += 1) {
    title2[i].style.fontSize = event.target.value;
  }
  for (let i = 0; i < paragraph.length; i += 1) {
    paragraph[i].style.fontSize = event.target.value;
  }
  localStorage.setItem('fontSiz', event.target.value);
});

function retornofontSize() {
  for (let i = 0; i < title1.length; i+= 1) {
    title1[i].style.fontSize = localStorage.getItem('fontSiz');  
  }
  for (let i = 0; i < title2.length; i += 1) {
    title2[i].style.fontSize = localStorage.getItem('fontSiz');  
  }
  for (let i = 0; i < paragraph.length; i += 1) {
    paragraph[i].style.fontSize = localStorage.getItem('fontSiz');  
  }
};

linhaEspaco.addEventListener('change', (event) => {
  for (let i = 0; i < title1.length; i += 1) {
    title1[i].style.lineHeight = event.target.value; 
  }
  for (let i = 0; i < title2.length; i += 1) {
    title2[i].style.lineHeight = event.target.value;
  }
  for (let i = 0; i < paragraph.length; i += 1) {
    paragraph[i].style.lineHeight = event.target.value;
  }
  localStorage.setItem('linhaSpace', event.target.value);
});

function retornoLineHeight() {
  for (let i = 0; i < title1.length; i+= 1) {
    title1[i].style.color = localStorage.getItem('linhaSpace');  
  }
  for (let i = 0; i < title2.length; i += 1) {
    title2[i].style.color = localStorage.getItem('linhaSpace');  
  }
  for (let i = 0; i < paragraph.length; i += 1) {
    paragraph[i].style.color = localStorage.getItem('linhaSpace');  
  }
};

tiposFonte.addEventListener('change', (event) => {
  for (let i = 0; i < title1.length; i += 1) {
    title1[i].style.fontFamily = event.target.value; 
  }
  for (let i = 0; i < title2.length; i += 1) {
    title2[i].style.fontFamily = event.target.value;
  }
  for (let i = 0; i < paragraph.length; i += 1) {
    paragraph[i].style.fontFamily = event.target.value;
  }
  localStorage.setItem('familyFont', event.target.value);
});

function retornoFontFamily() {
  for (let i = 0; i < title1.length; i+= 1) {
    title1[i].style.fontFamily = localStorage.getItem('familyFont');  
  }
  for (let i = 0; i < title2.length; i += 1) {
    title2[i].style.fontFamily = localStorage.getItem('familyFont');  
  }
  for (let i = 0; i < paragraph.length; i += 1) {
    paragraph[i].style.fontFamily = localStorage.getItem('familyFont');  
  }
};

createColorsOptions();
createFontOptions();
createFontSizeOptions();
createAlignOptions();
createFontTipeOptions();
criandoSelected();
localStorage.getItem('backColor');
localStorage.getItem('textColor');
localStorage.getItem('fontSiz');
localStorage.getItem('linhaSpace');
localStorage.getItem('familyFont');
retornoBackground();
retornoFontFamily();
retornofontSize();
retornotextColor();
retornoLineHeight();

// não tava funcionando

// movendo selected (funciona, mas movendo pro lugar errado)
/* function movendoSelected(event) {
  let techElement = document.getElementsByClassName('selected');
  const evento = event.target;
  techElement[0].classList.remove('selected');
  evento.classList.add('selected');
  console.log(evento);
}
*/

// não funciona (remove, mas não adiciona)
/* coresFundo.addEventListener('change', (event) => {
  for (const i of listOptions) {
    i.classList.remove('selected');
  }
  event.target.classList.add('selected');
  event.currentTarget.classList.remove('selected');
  bodyPage.style.backgroundColor = event.target.value;
  console.log(event.target.value);
}); */  

// tbm não
/* function movendoSelected(event) {
  for (const i of listOptions) {
    i.classList.remove('selected');
  }
  event.target.classList.add('selected');
  event.currentTarget.classList.remove('selected');
} */
// coresFundo.addEventListener('change', movendoSelected);
// coresTexto.addEventListener('change', movendoSelected);
// tamanhoFonte.addEventListener('change', movendoSelected);
// linhaEspaco.addEventListener('change', movendoSelected);
// tiposFonte.addEventListener('change', movendoSelected);