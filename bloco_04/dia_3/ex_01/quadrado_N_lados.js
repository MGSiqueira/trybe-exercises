let n = 15;

if (n > 1) {
    for (let c = 0; c < n; c += 1) {
        console.log('*'.repeat(n));
    }
} else {
    console.log('Impossível formar um quadrado.');
}