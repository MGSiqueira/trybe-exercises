let n = 5;

if (n > 1) {
    for (let c = 0; c <= n; c += 1) {
        console.log('*'.repeat(c).padStart(n))
    }
} else {
    console.log('Impossível formar um triângulo.')
}