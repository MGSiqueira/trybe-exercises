//let n = 5;

function somaTuto(numero) {
    let soma = 0;
    for (let cont = 0; cont <= numero; cont += 1) {
        soma += cont;
    };
    return soma;
};
console.log(somaTuto(100));