let array = [2, 3, 2, 5, 8, 2, 3];

function maisRepete(lista) {
    let repeteMais = [];
    let qtde = 0;
    for (let numero in lista) {
        let cont = 0
        for (let check in lista) {
            if (lista[numero] === lista[check]) {
                cont += 1;
            };
        };
        if (numero === 0) {
            repeteMais = lista[numero];
            qtde = cont;
        } else if (qtde < cont) {
            qtde = cont;
            repeteMais.push(lista[numero]);
        } else if (qtde === cont) {
            repeteMais.push(lista[numero]);
        };
    };
    return [repeteMais, qtde];
};
let resultado = maisRepete([1,1,1,2,2,2,3,3])
//let resultado = maisRepete(array);
console.log(`O ${resultado[0]} é o número que mais repete: ${resultado[1]} vezes.`)
console.log(maisRepete([1,1,1,2,2,2,3,3]))
