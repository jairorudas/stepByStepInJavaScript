/*
      Metodo unshift();

      O metodo unshift() insere elementos no inicio de um array e retorna a nova quantidade
      de elementos do array (arr.length)
*/

var app = [1,2,'@', '%']
var result = app.unshift('beisbol');
console.log(result); // Resulta em que result é iagual a 5 e app é igual a ["beisbol", 1, 2, "@", "%"]
