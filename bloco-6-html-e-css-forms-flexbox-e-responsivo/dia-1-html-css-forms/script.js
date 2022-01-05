const listaEstado = document.getElementById('lista');
const limparLista = document.getElementById('limpar');
const pai = document.getElementsByClassName('bloco');
const filhos = pai.children;

limparLista.addEventListener('click', apagar)

function apagar(){
    const apagando = document.getElementsByTagName('input')
    for (let i = pai.length; i > 0 ; i -= 1) {
        pai.removeChild(apagando[0]);
    }    
}