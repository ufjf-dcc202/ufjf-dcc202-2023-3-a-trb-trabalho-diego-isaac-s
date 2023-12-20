//main.js

import {
  rolaDado,
  imgDado,
  novoDado,
  adicionaDado,
  numeroRepete,
  soma,
  imprimeSoma,
  limpaNumeroDeColuna,
  retornaTabuleiro,
  terminaJogo,
  vencedor   
} from './funcoes.js';

// Variáveis para representar o estado do jogo
let jogadorAtual = 'Player';
let proxDado = document.querySelector('#proxDadoSec p');
let tabuleiroBot = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let tabuleiroPlayer = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

let imagemDado = document.querySelector('#imagemDado');
let dado = rolaDado();
console.log(dado);
let linkImg = imgDado(dado);
imagemDado.innerHTML = `<img class="dado_img" src = ${linkImg} />`;

//reinicia o jogo

function reiniciarJogo() {
    tabuleiroBot = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    tabuleiroPlayer = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    jogadorAtual = 'Player';
    atualizarInterface();
}

//atualiza a interface

function atualizarInterface() {
    retornaTabuleiro(tabuleiroBot);
    retornaTabuleiro(tabuleiroPlayer);
  
    document.getElementById('valoresBotCol1').textContent = soma(tabuleiroBot[0]);
    document.getElementById('valoresBotCol2').textContent = soma(tabuleiroBot[1]);
    document.getElementById('valoresBotCol3').textContent = soma(tabuleiroBot[2]);
  
    document.getElementById('valoresPlayerCol1').textContent = soma(tabuleiroPlayer[0]);
    document.getElementById('valoresPlayerCol2').textContent = soma(tabuleiroPlayer[1]);
    document.getElementById('valoresPlayerCol3').textContent = soma(tabuleiroPlayer[2]);
  
    // proxDado.textContent = novoDado();
    document.getElementById('nomePlayer').textContent = jogadorAtual;
}

//jogar e troca de play para bot

function jogar(colunaSelecionada) {
    // const valorDado = parseInt(proxDado.textContent);
    let tabuleiroAtual;
    let valorDado = dado + 1;
    if(jogadorAtual === 'Player'){
      tabuleiroAtual = tabuleiroPlayer;
    }
    else{
      tabuleiroAtual = tabuleiroBot;
    }
    if (adicionaDado(tabuleiroAtual, colunaSelecionada, valorDado)) {
      limpaNumeroDeColuna(tabuleiroAtual, colunaSelecionada, valorDado);
      imprimeSoma(tabuleiroAtual[colunaSelecionada], document.getElementById(`valores${jogadorAtual}Col${colunaSelecionada + 1}`));
  
      if (terminaJogo(tabuleiroAtual)) {
        vencedor(document.getElementById('tabs'), tabuleiroBot, tabuleiroPlayer);
        alert(`${jogadorAtual} venceu!`);
        reiniciarJogo();
      } else {
        jogadorAtual = jogadorAtual === 'Player' ? 'BOT1' : 'Player';
        atualizarInterface();
      }
    } else {
      alert('Coluna cheia!');
    }
  }

//Recebe os elementos 
document.getElementById('botaoReiniciar').addEventListener('click', reiniciarJogo);
document.getElementById('colunaP1').addEventListener('click', () => jogar(0));
document.getElementById('colunaP2').addEventListener('click', () => jogar(1));
document.getElementById('colunaP3').addEventListener('click', () => jogar(2));

atualizarInterface();