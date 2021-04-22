let angulo1 = 60;
let angulo2 = 60;
let angulo3 = 60;
let ehTriangulo = angulo1 + angulo2 + angulo3 === 180;
let angulosPositivos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

if (angulosPositivos) {
    if (ehTriangulo) {
        console.log('É triângulo: ', ehTriangulo);
    }
    else {
        console.log('É triângulo: ', ehTriangulo);
    }
}
else {
    console.log('Ângulos inválidos.')
}