let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior;

for (let c = 0; c < numbers.length; c += 1) {
    if (c === 0) {
        maior = numbers[c];
    } else if (maior < numbers[c]) {
        maior = numbers[c];
    }
}
console.log(`O maior número no array é ${maior}`);