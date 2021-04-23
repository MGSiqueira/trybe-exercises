let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let cont = 0;

for (let number of numbers) {
    if (number % 2 === 1) {
        cont += 1;
    }
}
if (cont !== 0) {
    console.log(`A quantidade de valores ímpares é de ${cont}`);
} else {
    console.log('Nenhum valor ímpar encontrado');
}