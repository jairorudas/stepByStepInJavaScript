/*
      Metodo push();
      Este metodo acrescenta os argumentos passados ao final do array e devolve a nova
      quatidade de elementos no array.
*/

//Exemplo 1
var cats = ['rossi', 'rosme', 'ketty'];
var jerry = cats.push('Tom');
console.log(jerry); // devolve o numero 4

/* Aqui temos que entender uma coisa importante, a função push devolve um numero
uma quantidade, mas não os elementos do array. por isso o valor de jerry é 4.
Mas se damos um console.log() de cats veremos que 'TOM' foi adicionado ao Array.*/
