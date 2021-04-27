function palindromo(string) {
    let stringReversa = '';
    for (let c = string.length - 1; c >= 0; c -= 1) {
        stringReversa += string[c];
    };
    if (string === stringReversa) {
        return 'É palíndromo';
    } else {
        return 'Não é palíndromo!';
    };
    
};
console.log(`Hue ${palindromo('hue')}`);

console.log(`Arara ${palindromo('arara')}`);
