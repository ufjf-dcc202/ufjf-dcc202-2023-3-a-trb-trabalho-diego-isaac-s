//imagens dos dados
let imagensDados = [
  'dados/dado1.jpg',
  'dados/dado2.jpg',
  'dados/dado3.jpg',
  'dados/dado4.jpg',
  'dados/dado5.jpg',
  'dados/dado6.jpg'
]
//rola dado
function rolaDado(){
  return Math.floor(Math.random * 6) + 1;
}
//adiciona dado
function adicionaDado(tabuleiro, coluna, valor){
  let linha = 0;
  while(tabuleiro[coluna, linha] != 0 && linha < 3){
    linha++;
  }
  if(linha <= 2 && linha >= 0){
    tabuleiro[coluna, linha] = valor;
  }
  console.log("Coluna cheia!");
  return false;
}
//img dado
function imgDado(numero){
  return imagensDados[numero];
}
//termina jogo
function terminaJogo(tabuleiro){
  for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
      if(tabuleiro[i][j] == 0){
        return false;
      }
    }
  }
  return true;
}
//novo dado
function novoDado(){
  
}
//numero repete
function numeroRepete(coluna, valor){
  let rep = 0;
  for(let i = 0; i < 3; i++){
    if(coluna[i] == valor){
      rep++
    }
  }
  return rep;
}
//retorna tabuleiro
function retornaTabuleiro(tabuleiro){
  for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
      let d = tabuleiro[i][j].content;
      if(d != 0){
        tabuleiro[i][j].src = imagensDados[d];
      }
    }
  }
}
//limpa numero de coluna
function limpaNumeroDeColuna(tabuleiro, coluna, valor){
  for(let linha = 0; linha < 3; linha++){
    if(tabuleiro[coluna][linha] == valor){
      tabuleiro[coluna][linha] = 0;
    }
  }
  for(let l = 0; l < 2; l++){
    if(tabuleiro[coluna][l] == 0){
      tabuleiro[coluna][l] = tabuleiro[coluna][l+1];
      tabuleiro[coluna][l+1] = 0;
    }
  }
}
//vencedor
function vencedor(tabs, tabBot, tabPlayer){
  let player = 0;
  let bot = 0;
  for(let i = 0; i < 3; i++){
    player = player + soma(tabPlayer[i]);
    bot = bot + soma(tabBot[i]);
  }
  if(player > bot){
    tabs.src = 'imagens/youWin.png';
  }else{
    if(bot > player){
      tabs.src = 'imagens/youLose.png';
    }else{
      tabs.src = 'imagens/draw.png'
    }
  }
}
//soma
function soma(coluna){
  let s = 0;
  for(let i = 0; i < 3; i++){
    s = s + coluna[i] * numeroRepete(coluna, coluna[i]);
  }
  return s;
}