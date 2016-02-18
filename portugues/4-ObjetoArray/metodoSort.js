/*
    Metodo sort() ou sort(function(a,b){});

    Este metodo se destina a ordenar os elementos de um array. Admite uma função como
    argumento opcional para definir como será processada a ordenação dos elementos. Se
    o argumento for omitido, a ordenação será em ordem alfabetica crescente. havendo numeros
    serão transformados em string para determinar a ordem, resultando em ordenação não numerica.
*/

//---------------------------------------------------------------------------------------

//Exemplo 1
var conjunto = ['casa', 'camera', 'cabo', 'café'];
conjunto.sort(); //Retorna ["cabo", "café", "camera", "casa"] ordem alfabetica;

//Exemplo 2
var numeros = [111,2,3,5,98,4,5];
numeros.sort();// /Retorna [111, 2, 3, 4, 5, 5, 98]; ordem alfabetica

//---------------------------------------------------------------------------------------

//Exemplo 2

/*
  Agora vamos ordenar o anterior array do menor numero ao maior. Para isso passamos como argumento
  uma função.
*/

var ordem = [111,2,3,5,98,4,5];
ordem.sort(function(a,b){
    return a - b;
});

console.log(ordem); // obtemos [2, 3, 4, 5, 5, 98, 111];
