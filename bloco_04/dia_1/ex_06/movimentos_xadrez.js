let pedra = "PEÃO".toLowerCase();

switch(pedra) {
    case 'peão':
        console.log('Uma casa para frente, duas se for o primeiro movimento, e uma na diagonal para capturar.');
        break;
    case 'torre':
        console.log('Na horizontal sem limite de casas.');
        break;
    case 'cavalo':
        console.log('Se movimenta em L podendo pular por outras peças');
        break;
    case 'bispo':
        console.log('Na diagonal sem limite de casas.');
        break;
    case 'rainha':
        console.log('Na diagonal e horizontal sem limite de casas.');
        break;
    case 'rei':
        console.log('Na diagonal e horizontal, apenas uma casa.');
        break;
    default:
        console.log('Peça inválida.')
}