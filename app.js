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
let botaoSorteio = document.querySelector('.button-draw');

// FUNCOES SOLICITADAS


function adicionarAmigo(){
    validarAmigo();         // conferir valor no input
    listarAmigo(inputAmigo.value);
    resetarInput();
};

function sortearAmigo(){
    let amigoSorteado = sortearNome(seuNome);
    visualizarResultado(amigoSorteado);
    criarBotao();
};

const validarAmigo = () =>
    inputAmigo.value == ''?
    alert('Insira o nome de um amigo'): null;

// FUNCOES AUXILIARES


const listarAmigo = (pAmigo) =>
{   // inclui o nome na lista
    let criarItem = document.createElement('li');   //cria item da lista com o nome do amigo
        criarItem.append(pAmigo);
        criarItem.onclick = selecionarSeuNome;
        criarItem.style.cursor = 'pointer';
    listaDeAmigos.append(criarItem);
    listaDeNomes.push(pAmigo);
};

const selecionarSeuNome = (pNome) =>
{   // informa qual nome nao deve ser sorteado
    evidenciarNome(pNome.currentTarget);
    return seuNome = pNome.target.innerHTML;
};

const evidenciarNome = (pNome) =>
{   // realca o nome selecionado
    let item = pNome;
    let nomes = document.querySelectorAll('li');
    if(item.style.backgroundColor != '#4B69FD'){
        nomes.forEach((nome) =>
        {   nome.removeAttribute('style');
            nome.style.cursor = 'pointer';                
        });
        item.style.backgroundColor = '#4B69FD';
        item.style.color = '#FFF';
        item.style.margin = '5px';
        item.style.padding = '5px';
        item.style.textAlign = 'center';
    }
};

const sortearNome = (pSeuNome) =>
{   // lista apenas os nomes dos amigos para sortear
    let listaParaSorteio = listaDeNomes.filter(nome => nome != pSeuNome);   //filtra apenas os nomes dos amigos para sorteio
    let listaFiltradaParaSorteio = filtrarSorteio(listaParaSorteio, listaDeSorteados, pSeuNome);
    let indexSorteado = Math.floor(Math.random(1) * listaFiltradaParaSorteio.length);
    let nomeSorteado = listaFiltradaParaSorteio[indexSorteado];
    return nomeSorteado;
};

const filtrarSorteio = (pArray1, pArray2, pSeuNome) =>
{   // sequencia para filtragem de nomes, importada do ChatGPT e modificada para se adequar ao projeto
    let listaFiltrada = [];
    let valoresNaoIguais = [];
    
    pArray1.forEach(valor => {
        if (!pArray2.includes(valor))
            valoresNaoIguais.push(valor);
    });    
    
    pArray2.forEach(valor => {
        if (!pArray1.includes(valor))
            valoresNaoIguais.push(valor);
    });
    listaFiltrada = valoresNaoIguais.filter(nome => nome != pSeuNome);   //enfatizando o nao uso do proprio nome para sorteio
    return listaFiltrada;
};

const visualizarResultado = (pAmigoSorteado) =>
{
    if(pAmigoSorteado == undefined){    //vai ser dificil acontecer, mas... ja e bom deixar aqui em Q.A.P.
        resultado.innerHTML = 'Falta mais um amigo para presentear!';
        alert('Tente incluir mais um amigo na lista.');
        resetarInput();
    }
    else{
        resultado.innerHTML = 'O amigo secreto sorteado é: ' + pAmigoSorteado;
        incluirAmigoSorteadoNaLista(pAmigoSorteado);
    };
};

const criarBotao = () =>
{
    let botaoContainer = document.querySelector('.button-container');
    let criarBotao = document.createElement('button');  //cria um botao para refresh
        criarBotao.style.backgroundColor = 'lightblue';
        criarBotao.append('OK, passar para o próximo...');
        criarBotao.className = ['botao-OK'];
        criarBotao.onclick = validarSorteio;
    botaoContainer.append(criarBotao);
    botaoSorteio.style.visibility = 'hidden';   //oculta botao de sortear
    botaoSorteio.style.margin = '-12.5%';
};

const validarSorteio = () =>
{
    botaoSorteio.style.visibility = 'visible';  //revela botao de sortear
    botaoSorteio.style.margin = '';
    resultado.innerHTML = '';
    let botaoOK = document.querySelector('.botao-OK');
    botaoOK.remove();
};

const incluirAmigoSorteadoNaLista = (pNomeSorteado) =>
{   // incluir em lista de amigos sorteados
    return pNomeSorteado == ''? null: listaDeSorteados.push(pNomeSorteado);
};

const resetarInput = () =>
{
    inputAmigo.value = '';
    inputAmigo.focus();
}

selecionarSeuNome()