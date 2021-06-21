let array = [2, 3, 6, 7, 10, 1];

function maiorValor(lista) {
    let maior;
    let posicaoMaior;
        for (let posicao = 0; posicao < lista.length; posicao += 1) {
            if (posicao === 0) {
                maior = lista[posicao];
                posicaoMaior = posicao;
            } else if (maior < lista[posicao]) {
                maior = lista[posicao];
                posicaoMaior = posicao;
            };
        };
    return [maior, posicaoMaior];
}
//resultado = maiorValor(array)
resultado = maiorValor([1,2,3,4,5,6,7,8,9,0]);
console.log(`O maior valor encontrado foi ${resultado[0]} na ${resultado[1]}ª posição`);