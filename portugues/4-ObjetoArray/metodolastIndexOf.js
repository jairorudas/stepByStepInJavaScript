/*
            lastIndexOf(elemento, [argumeno2, true ou false]);

Este metodo foi inspirado no método de mesmo nome para String. Retorna o indice
do elemento de um array, admite os mesmo argumentos do metodo indexOf, mas a única diferença
em relação a esse método é que retorna o ultimo indice do elemento procurado caso haja mais um.
Caso o elemento não exista no array, retorna -1 */

var arr = [1, 2,'a', 'b', '2', 'c', 1, 'a', '45'];

var x = arr.indexOf('a')    -> //Retorna 2
var y = arr.lastIndexOf('a') -> //Retorna 7 pois este metodo, retorna o ultimo que satisfaça a condição.

//Agora vamos tentar o seguiente.
var w = arr.lastIndexOf('a', 1)
/* Retorna -1, mas porque?? Ele faz a busca de tras para frente, o metodo chega na posição 1 e logo
 na posição 0 e como não acha nada que satisfaça a condição retorna -1 */

//Tentemos algo parecido:
var t = arr.lastIndexOf('a', 5);
/*Retorna 2, pois como vimos ele começa fazer a busca a partir da posição 5 até a posição 0 de tras para frente*/
