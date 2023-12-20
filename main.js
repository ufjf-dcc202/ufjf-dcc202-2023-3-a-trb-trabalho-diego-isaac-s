//main.js

import {
  rolaDado,
  imgDado,
  adicionaDado,
  soma,
  imprimeSoma,
  limpaNumeroDeColuna,
  retornaTabuleiro,
  terminaJogo,
  vencedor   
} from './funcoes.js';

// Variáveis para representar o estado do jogo
let tabuleiroBot = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let tabuleiroPlayer = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

let imagemDado = document.querySelector('#imagemDado');
let dado = rolaDado();
console.log(dado);
let linkImg = imgDado(dado);
imagemDado.innerHTML = `<img class="dado_img" src = ${linkImg} />`;

let somaDasColunas = document.querySelectorAll(".soma");
let somaDasColunasBot = document.querySelectorAll(".somaBot");
let imgsBot = document.querySelectorAll(".dadoBot");
let imgsPlayer = document.querySelectorAll(".dadoPlayer");
const imgFinal = document.querySelector("#imgVencedor");


//reinicia o jogo

function reiniciarJogo() {
    tabuleiroBot = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    tabuleiroPlayer = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    imgFinal.src = '';
    atualizarInterface();
}

//atualiza a interface

function atualizarInterface() {
    retornaTabuleiro(imgsBot, tabuleiroBot);
    retornaTabuleiro(imgsPlayer, tabuleiroPlayer);
  
    document.getElementById('valoresBotCol1').textContent = soma(tabuleiroBot[0]);
    document.getElementById('valoresBotCol2').textContent = soma(tabuleiroBot[1]);
    document.getElementById('valoresBotCol3').textContent = soma(tabuleiroBot[2]);
  
    document.getElementById('valoresPlayerCol1').textContent = soma(tabuleiroPlayer[0]);
    document.getElementById('valoresPlayerCol2').textContent = soma(tabuleiroPlayer[1]);
    document.getElementById('valoresPlayerCol3').textContent = soma(tabuleiroPlayer[2]);
}

//vez do jogador
function jogadaJogador(colunaSelecionada){
  let valorDado = dado;
  if(adicionaDado(tabuleiroPlayer, colunaSelecionada, valorDado)){
    limpaNumeroDeColuna(tabuleiroBot, colunaSelecionada, valorDado);
    imprimeSoma(tabuleiroPlayer[colunaSelecionada], somaDasColunas[colunaSelecionada]);
    imprimeSoma(tabuleiroBot[colunaSelecionada], somaDasColunasBot[colunaSelecionada]);
    atualizarInterface();
    dado = rolaDado();
    if(terminaJogo(tabuleiroPlayer)){
      vencedor(imgFinal, tabuleiroBot, tabuleiroPlayer);
    } else {
      jogarBot();
    }
  }
}

//vez do bot
function jogarBot(){
  let coluna = Math.floor(Math.random() * 3);
  let valorDado = dado;
  while(!adicionaDado(tabuleiroBot, coluna, valorDado)){
    coluna = Math.floor(Math.random() * 3);
  }
  limpaNumeroDeColuna(tabuleiroPlayer, coluna, valorDado);
  imprimeSoma(tabuleiroBot[coluna], somaDasColunasBot[coluna]);
  imprimeSoma(tabuleiroPlayer[coluna], somaDasColunas[coluna]);
  atualizarInterface();
  if(terminaJogo(tabuleiroBot)){
    vencedor(imgFinal, tabuleiroBot, tabuleiroPlayer);
    reiniciarJogo();
    return;
  }
  dado = rolaDado();
  let linkImg = imgDado(dado);
  imagemDado.innerHTML = `<img class="dado_img" src = ${linkImg} />`;
}



//Recebe os elementos 
document.querySelector('#botaoReiniciar').addEventListener('click', reiniciarJogo);
document.querySelector('#colunaP1').addEventListener('click', () => jogadaJogador(0));
document.querySelector('#colunaP2').addEventListener('click', () => jogadaJogador(1));
document.querySelector('#colunaP3').addEventListener('click', () => jogadaJogador(2));

atualizarInterface();