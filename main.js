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

function reiniciarJogo() {
    botColuna1 = botColuna2 = botColuna3 = 0;
    playerColuna1 = playerColuna2 = playerColuna3 = 0;
    jogadorAtual = 'Player';
    atualizarInterface();
  }