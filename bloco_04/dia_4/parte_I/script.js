let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'//ex_02
};
let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
};
//ex_01
/*console.log(`Bem-vinda, ${info.personagem}!`);*/
//ex_03
/*for (let key in info) {
    console.log(key);
};*/
//ex_04
/*for (key in info) {
    console.log(info[key]);
};*/

for (let key in info, info2) {
    if (info[key] === info2[key] && info[key] === 'Sim' && info2[key] === 'Sim') {
        console.log('Ambos recorrentes');
    } else {
    console.log(info[key] + ' e ' + info2[key])
    }
};