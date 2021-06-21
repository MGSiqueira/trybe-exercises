let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor;

for (let c = 0; c < numbers.length; c += 1) {
    if (c === 0) {
        menor = numbers[c];
    } else if (menor > numbers[c]) {
        menor = numbers[c];
    }
}
console.log(`O menor valor é ${menor}`);