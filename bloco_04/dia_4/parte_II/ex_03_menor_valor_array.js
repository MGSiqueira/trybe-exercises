let array = [2, 4, 6, 7, 10, 0, -3];

function menorValor(lista) {
    let menor;
    let posicaoMenor;
    for (let posicao = 0; posicao < lista.length; posicao += 1){
        if (posicao === 0){
            menor = lista[posicao];
            posicaoMenor = posicao;
        } else if (menor > lista[posicao]){
            menor = lista[posicao];
            posicaoMenor = posicao;
        };
    };
    return [menor, posicaoMenor]
};

//resultado = menorValor(array);
resultado = menorValor([1,2,3,4,5,6,7,8,9,0])
console.log(`O menor valor é ${resultado[0]} na ${resultado[1]}ª posição.`)