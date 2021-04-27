let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorNome(lista) {
    let maiorNome = ''; //<<<<<<< importante colocar a string vazia
    for (let posicao in lista) {
        if (posicao === 0) {
            maiorNome = lista[posicao];
        } else if (maiorNome.length < lista[posicao].length) {
            maiorNome = lista[posicao];
        };
    };
    return maiorNome;
};

console.log(maiorNome(array));