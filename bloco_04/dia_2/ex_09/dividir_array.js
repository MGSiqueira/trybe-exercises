let numbers = [];

for (let c = 25; c > 0; c -= 1) {
    numbers.unshift(c);
}

for (let number of numbers) {
    console.log(number + ' / 2 = ' + number / 2);
}