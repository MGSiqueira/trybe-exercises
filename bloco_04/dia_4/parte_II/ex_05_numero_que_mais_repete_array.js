//let array = [2, 3, 2, 5, 8, 2, 3];

function maisRepete(lista) {
    let maisRepete = [];
    let qtde = 0;
    for (let numero in lista) {
        let cont = 0
        for (let check in lista) {
            if (lista[numero] === lista[check]) {
                cont += 1;
            };
        };
        if (numero === 0) {
            maisRepete = lista[numero];
            qtde = cont;
        } else if (qtde < cont) {
            qtde = cont;
            maisRepete = lista[numero];
        } else if (qtde === cont) {
            maisRepete.push(lista[numero]);
        };
    };
    return [maisRepete, qtde];
};
resultado = maisRepete([1,1,1,1,1,1,1,1,1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,6,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,])
//resultado = maisRepete(array);
console.log(`O ${resultado[0]} é o número que mais repete: ${resultado[1]} vezes.`)
