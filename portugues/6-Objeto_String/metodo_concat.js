/*
    metodo concat(string1, string2, ..., stringN);

    Este metodo destina-se a juntar duas ou mais strings; o metodo não altera as Strings originais,
    em vez disso é criada uma nova String com o resultado da função.

    Vamos ver laguns exemplos
*/

var string1 = 'JavaScript';
var string2 = ' é';
var string3 = ' uma linguagem não tipada';

console.log(string1.concat(string2, string3)); //Retorna JavaScript é uma linguagem não tipada.
console.log(string1) // Retorna "JavaScript"
console.log(string2) // Retorna  " é"
console.log(string3) // Retorna  " uma linguagem não tipada"

/* Note que não foram alteradas as strings originais. */
