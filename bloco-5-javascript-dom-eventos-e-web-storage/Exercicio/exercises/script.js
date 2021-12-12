  /*
      Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
      - document.getElementById()
      - document.getElementsByClassName()
      - document.getElementsByTagName()
Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
Crie uma função que mude a cor do quadrado vermelho para branco.
Crie uma função que corrija o texto da tag <h1>.
Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
Crie uma função que exiba o conteúdo de todas as tags <p> no console.
      */

/* 
FORMA SIMPLES DE FAZER
document.getElementById("futuro").innerText = "Estar trabalhando, com uma renda fixa e boa, morando na minha casinha com meu gato, meu doguinho e meu furão" ;
 */

/* 
ELEMENTO 1
*/

function mudarTexto() {
    let texto = document.getElementsByTagName('p')[1];
    texto.innerText = "Estar trabalhando, com uma renda fixa e boa, morando na minha casinha com meu gato, meu doguinho e meu furão";
  }
  mudarTexto();
  
  /* 
  ELEMENTO 2
  */
  
  function quadradoVerde() {
    let viraAmarelo = document.getElementsByClassName('main-content')[0];
    viraAmarelo.style.background = "rgb(76,164,109)";
  }
  quadradoVerde();
  
  /* 
  ELEMENTO 3
  */
  
  function quadradoVerde() {
    let viraBranco = document.getElementsByClassName('center-content')[0];
    viraBranco.style.background = "#fff";
  }
  quadradoVerde();
  
  /* 
  ELEMENTO 4
  */
  
  function mudarTitulo() {
    let texto = document.getElementsByTagName('h1')[0];
    texto.innerHTML = "Exercício 5.1 - JavaScript";
  }
  mudarTitulo();
  
  /* 
  ELEMENTO 5
  */
  
  function mudarParagrafo() {
    let texto = document.getElementsByTagName('p')[0];
    texto.innerHTML = texto.innerHTML.toUpperCase();
  }
  mudarParagrafo();
  
  /* 
  ELEMENTO 6
  */
  
  function exibirParagrafos() {
    let texto = document.getElementsByTagName('p');
    for (let index = 0; index < texto.length; index += 1) {
      console.log(texto[index].innerHTML);
    }
  }
  exibirParagrafos();