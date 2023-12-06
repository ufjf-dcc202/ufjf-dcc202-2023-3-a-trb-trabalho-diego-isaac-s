//Retorna um número aleatório entre 1 e 6
function adicionaDado(){
    return Math.floor(Math.random() * 6) + 1;
}

// Retorna o caminho da imagem do dado
function imagemDado(indice){
    return spritesDados[indice];
}

// atualiza o valor do dado no HTML
function atualizaDado(dadoTexto){
    let dadoValor = adicionaDado();
    dadoTexto.src = imagemDado(Valor - 1);
    return Valor;
}