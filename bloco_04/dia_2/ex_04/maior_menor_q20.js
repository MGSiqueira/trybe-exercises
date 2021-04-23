let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media;

for (let number of numbers) {
    soma += number;
}
media = soma/numbers.length;
if (media < 20) {
    console.log(`${media} menor que 20`);
} else if (media > 20) {
    console.log(`${media} é maior que 20`);
} else {
    console.log('A média é igual a 20');
}