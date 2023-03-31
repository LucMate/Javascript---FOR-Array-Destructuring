// For In lê os Índices ou Chaves do objeto

const pessoa = {
    nome: 'Lucas',
    sobrenome:'Campos',
    idade:24
};



for (let chave in pessoa){
    console.log(chave, pessoa[chave]);
}


// const frutas = ['Pera', 'Maçã', 'Uva'];

// for (let indice in frutas) {
//     console.log(frutas[indice]);
// }


// for (let i = 0; i < frutas.length; i++){
//     console.log(frutas[i]);
// }