function wordEnding(word, ending) {
    let fimPalavra = '';
    let ehIgual = false;
    for (let cont = ending.length; cont > 0; cont -= 1) {
        fimPalavra += word[word.length - cont];
    };
    if (fimPalavra === ending) {
        ehIgual = true;
    };
    return ehIgual;
};

console.log(wordEnding('marcos', 'cos'));