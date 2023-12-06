const imagensDados = [
    'imagens/dado1.jpg',
    'imagens/dado2.jpg',
    'imagens/dado3.jpg',
    'imagens/dado4.jpg',
    'imagens/dado5.jpg',
    'imagens/dado6.jpg'
]

//Retorna um número aleatório entre 1 e 6
function adicionaDado(){
    return Math.floor(Math.random() * 6) + 1;
}

// Retorna o caminho da imagem do dado
function imagemDado(indice){
    return imagensDados[indice];
}

// atualiza o valor do dado no HTML
function atualizaDado(dadoTexto){
    let dadoValor = adicionaDado();
    dadoTexto.src = imagemDado(Valor - 1);
    return Valor;
}

// Imprime o tabuleiro no HTML
function imprimeTabuleiro(tabuleiro, colunas){
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            let k = i * 3 + j;
            if(colunas[i][j] == 0){
                tabuleiro[k].src = "";
            } else {
                tabuleiro[k].src = imagemDado(colunas[i][j] - 1);
            }
        }
    }
}

// Adiciona um valor na coluna do tabuleiro
function adicionaValor(tabuleiro, coluna, valor, caixa){
    if(coluna < 0 || coluna > 2) {
        console.log("Coluna inválida");
        return false; // Se a coluna for inválida, retorna false
    }
    let linha = 0;
    while(tabuleiro[coluna][linha] != 0 && linha < 3){
        linha++;
    }
    if(linha <= 2 && linha >= 0){
        tabuleiro[coluna][linha] = valor;
        caixa[coluna * 3 + linha].classList.add("colocar");
        setTimeout(() => reiniciaAnimacaoColocar(caixa[coluna * 3 + linha]), 500);
        return true;
    }
    console.log("Coluna cheia");
    return false;
}