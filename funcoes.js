//imagens dos dados
let imagensDados = [
    './dados/dado1.png',
    './dados/dado2.png',
    './dados/dado3.png',
    './dados/dado4.png',
    './dados/dado5.png',
    './dados/dado6.png'
  ]
  
  
  //rola dado
  
  export function rolaDado(){
    return Math.floor(Math.random() * 6) + 1;
  }
  
  
  //img dado
  
  export function imgDado(numero){
    return imagensDados[numero-1];
  }
  
  //adiciona dado
  
  export function adicionaDado(tabuleiro, coluna, valor){
    for(let i = 0; i < 3; i++){
      if(tabuleiro[coluna][i] === 0){
        tabuleiro[coluna][i] = valor;
        console.log(tabuleiro);
        return true;
      }
    }
  }
  
  
  //numero repete
  
  export function numeroRepete(coluna, valor){
    let rep = 0;
    for(let i = 0; i < 3; i++){
      if(coluna[i] == valor){
        rep++
      }
    }
    return rep;
  }
  
  
  //soma
  
  export function soma(coluna){
    let s = 0;
    for(let i = 0; i < 3; i++){
      s = s + coluna[i] * numeroRepete(coluna, coluna[i]);
    }
    return s;
  }
  
  
  //imprime a soma
  
  export function imprimeSoma(coluna, impSoma){
    let som = soma(coluna);
    console.log(impSoma + " " + som);
    impSoma.textContent = som;
  }
  
  
  //limpa numero de coluna
  
  export function limpaNumeroDeColuna(tabuleiro, coluna, valor){
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
  
  
  //retorna tabuleiro
  
  export function retornaTabuleiro(tabuleiro, colunas){
     for(let i = 0; i < 3; i++){
       for(let j = 0; j < 3; j++){
         let k = i * 3 + j;
         if(colunas[i][j] !== 0){
           tabuleiro[k].src = imagensDados[colunas[i][j]-1];
         } else {
            tabuleiro[k].src = "";
         }
       }
     }
  }
  
  
  //termina jogo
  
  export function terminaJogo(tabuleiro){
    for(let i = 0; i < 3; i++){
      for(let j = 0; j < 3; j++){
        if(tabuleiro[i][j] == 0){
          return false;
        }
      }
    }
    return true;
  }
  
  
  //vencedor
  export function vencedor(tabs, tabBot, tabPlayer){
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