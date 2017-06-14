/*
    metodo localeCompare(string);

    Este metodo destina-se a comparar duas string e definir a orden alfabetica, para isso a função
    retorna tres tipos de valores são os seguientes:

    string1.localeCompare(string2);

    * -N quer dizer que a string1 va primeiro na ordem alfabetica

    * 0 quer dizer que as duas string são iguais.

    * N quer dizer que a string2 va primeiro que a string1 na ordem alfabetica.

    Vamos ver laguns exemplos
*/

//Exemplo 1
var h = 'a',
    i = 'z';

console.log(h.localeCompare(i)); // Retona -1, a string1 va primeiro na ordem alfabetica.

//Exemplo 2
var string1 = 'arma',
    string2 = 'alma';

console.log(string1.localeCompare(string2)); // Retorna 1, a String2 vem primeiro na ordem alfabetica.

//Exemplo 3
var string1 = 'alma',
    string2 = 'alma';

console.log(string1.localeCompare(string2)); // Retorna 0, são iguais.
