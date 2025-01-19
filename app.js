//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação.
// Aqui você deverá desenvolver a lógica para resolver o problema.

// ATRIBUICOES DAS VARIAVEIS

let listaDeNomes = [];
let nomeDoAmigo = document.querySelector('#amigo');
let listaDeAmigos = document.querySelector('#listaAmigos');
let resultado = document.querySelector('#resultado');
let botaoAdicionar = document.querySelector('.button-add');

// FUNCOES SOLICITADAS

function adicionarAmigo()
{
    listarAmigo(nomeDoAmigo.value);
};

function sortearAmigo()
{
    visualizarLista();
};

// FUNCOES AUXILIARES

const listarAmigo = (amigo) => {
    let criarItem = document.createElement('li');
    criarItem.append(amigo);
    listaDeAmigos.append(criarItem);
    listaDeNomes.push(amigo);
};

const limparLista = () => {

};

const visualizarLista = () => {
    console.log(listaDeNomes);
};

const validarAmigoParceiro = () => {
    alert('Voce precisa ter mais um amigo adicionado para nao faltar presente.')
};