//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação.
// Aqui você deverá desenvolver a lógica para resolver o problema.inputA

// ATRIBUICOES DAS VARIAVEIS

let seuNome;
let listaDeNomes = [];
let listaDeSorteados = [];
let inputAmigo = document.querySelector('#amigo');
let nomeDoAmigo = document.querySelectorAll('li');
let listaDeAmigos = document.querySelector('#listaAmigos');
let resultado = document.querySelector('#resultado');
let botaoAdicionar = document.querySelector('.button-add');

// FUNCOES SOLICITADAS

function adicionarAmigo(){
    validarAmigo();         // conferir valor no input
    listarAmigo(inputAmigo.value);
    inputAmigo.value = '';  // limpar o input
    inputAmigo.focus();
};

function sortearAmigo(){
    console.log(nomeDoAmigo)
    visualizarLista();
};

const validarAmigo = () => inputAmigo.value == ''?
    alert('Insira o nome de um amigo'): null;

// FUNCOES AUXILIARES

const listarAmigo = (amigo) =>
{   // inclui o nome na lista
    let criarItem = document.createElement('li');
        criarItem.append(amigo);
        criarItem.onclick = selecionarSeuNome;
    listaDeAmigos.append(criarItem);
    listaDeNomes.push(amigo);
};

const selecionarSeuNome = (e) =>
{   // informa qual nome nao deve ser sorteado
    selecionado(e);
    return seuNome = e.target.innerHTML;
};

const selecionado = (e) =>
{   // realca o nome selecionado
    let el = e.currentTarget;
    el.style.backgroundColor = 'lightgreen';
    el.style.margin = '5px';
    el.style.padding = '5px';
    el.style.textAlign = 'center';
}

const limparLista = () => {

};

const visualizarLista = () => {
    console.log(listaDeNomes);
};

const validarAmigoParceiro = () => {
    alert('Voce precisa ter mais um amigo adicionado para nao faltar presente.')
};
