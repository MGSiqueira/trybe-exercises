let valorCusto = 1000;
let valorCustoTotal = valorCusto + 0.2 * valorCusto;
let valorVenda = 2000;
let lucro = valorVenda - valorCustoTotal;

if (valorCusto < 0 || valorVenda < 0) {
    console.log('Valor inválido');
} else {
    console.log(lucro);
}