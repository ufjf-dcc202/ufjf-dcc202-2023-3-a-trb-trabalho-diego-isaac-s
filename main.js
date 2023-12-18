//main.js

import{
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

let botColuna1 = 0, botColuna2 = 0, botColuna3 = 0;
let playerColuna1 = 0, playerColuna2 = 0, playerColuna3 = 0;

//reinicia o jogo

function reiniciarJogo() {
    botColuna1 = botColuna2 = botColuna3 = 0;
    playerColuna1 = playerColuna2 = playerColuna3 = 0;
    jogadorAtual = 'Player';
    atualizarInterface();
}

//atualiza a interface

function atualizarInterface() {
    retornaTabuleiro(botColuna1, botColuna2, botColuna3);
    retornaTabuleiro(playerColuna1, playerColuna2, playerColuna3);
  
    document.getElementById('valoresBotColuna1').textContent = soma([botColuna1, botColuna2, botColuna3]);
    document.getElementById('valoresBotColuna2').textContent = soma([botColuna1, botColuna2, botColuna3]);
    document.getElementById('valoresBotColuna3').textContent = soma([botColuna1, botColuna2, botColuna3]);
  
    document.getElementById('valoresPlayerColuna1').textContent = soma([playerColuna1, playerColuna2, playerColuna3]);
    document.getElementById('valoresPlayerColuna2').textContent = soma([playerColuna1, playerColuna2, playerColuna3]);
    document.getElementById('valoresPlayerColuna3').textContent = soma([playerColuna1, playerColuna2, playerColuna3]);
  
    proxDado.textContent = novoDado(document.querySelector('.dado'));
    document.getElementById('nomePlayer').textContent = jogadorAtual;
}  