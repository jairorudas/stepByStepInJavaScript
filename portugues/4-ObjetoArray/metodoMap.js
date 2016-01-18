/*
    map(função(elem, ind, obj));

    Este metodo destinase a percorrer CADA UM dos elementos do array, e modifica-lo
    conforme definido em uma função callback. Não altera o array original e admite
    um argumento obrigatorio, que é uma função callback, e u argumento opcional.

    A função é executada para cada um dos elementos do array e o valor retornado é inserido
    em um novo Array. A função requer tres argumentos que representam, respectivamente, o valor
    de cada elemento do array, o indice de cada elemento e o objeto array sendo percorrido.

    Os navegadores firefox 3, safari 4, chrome 3 e opera 10 suportam este metodo e o navegador
    internet explorer até a versão 8 atual, não.
*/

//exemplo 1
var neptuno = [21,3,18,290];

function saturno ( elem, ind, obj ) {
  return (elem = elem * 10);
}

var g = neptuno.map( saturno );
console.log(g);// devolve um novo array [ 210, 30, 180, 2900 ]


//Exemplo 2
var venus = [25,36,"jairo rudas", 29,32];

function mercurio ( a, v, obj ) {
    if(typeof a != "string"){
        return a + " edad";
    }
}
var u = venus.map(mercurio);
console.log(u)//retona [ '25 edad', '36 edad', undefined, '29 edad', '32 edad' ]
/*Repare que ainda que colocamos um if na parte interna da função callback não
foi respeitado inteiramente, ele devolveu un undefined na parte onde temos o string, não passou
batido; ele retornou um undefined. O metodo passa por cada um dos elementos do array. */

//Exemplo 3
var celulares = [
                    { 'label': 'Motorola Atrix XT 682', 'tipoChip': 'normal', 'imagem': 'chip-normal.png', 'value': '1' },
                    { 'label': 'Motorola Atrix XT 687', 'tipoChip': 'normal', 'imagem': 'chip-normal.png', 'value': '1' },
                    { 'label': 'Motorola Moto E', 'tipoChip': 'micro', 'imagem': 'chip-mini.png', 'value': '2' },
                    { 'label': 'Motorola Moto G (2013)', 'tipoChip': 'micro', 'imagem': 'chip-mini.png', 'value': '2' },
                    { 'label': 'Motorola Moto X (2013)', 'tipoChip': 'nano', 'imagem': 'chip-nano.png', 'value': '3' },
                    { 'label': 'Motorola Moto X (2014)', 'tipoChip': 'nano', 'imagem': 'chip-nano.png', 'value': '3' }
                ];

var mudaValue = function (ind, elem, obj) {

    if (ind.tipoChip === 'normal') {
         ind.value = 'CHIPNORMAL4GT';
         return {ind};
     } else if (ind.tipoChip ==='micro') {
          ind.value = 'CHIPMICRO4GTIM';
          return {ind};
    } else {
         ind.value = 'CHIPNANO4GTIM';
         return {ind};
     }
}
var retorno = celulares.map(mudaValue);
console.log(retorno); //Retorna [ Object, Object, Object, Object, Object, Object ]
