/*
    Variavel argument

    A variavel arguments que possuim as funcões são semelhante a um array, contendo os
    argumentos passados para a função. Não deve ser tratada como um array puro, pois não
    soporta os metodos dos arrays, execeto .length. Contudo veremos que podemos transformar
    este objeto em um objeto array puro.

    Este objeto indexa argumentos a partir do zero, Assim podemos usar a sintaxe dos array
    para referenciar elementos exemplo: array[0]. Argumentos só existe enquanto a funão esta sendo
    executada e esta acessivel so no corpo da função. tentar chamar essa variavel fora da função
    gera um erro.
*/

function calcular(b, g, h) {
  console.log(arguments.length);//retorna a quantidade de argumentos que estão sendo passadas pra função ouseja 3 argumentos.
  console.log(arguments[0]); // Retona 15
  console.log(arguments[1]); // Retona 3
  console.log(arguments[2]); // Retona 8
  return (b * h)/g
}
var resultado = calcular(15, 3, 8);
console.log(resultado);

/*
    arguments.callee

    A propridade callee do objeto argument fornece um mecanismo para chamar uma função
    anonima dentro de se mesma. ouseja permite chamar uma função anonima de maneira recursiva.
    veamos...
*/

function multiplica(r) {

  if(r == 0 ) {
    return 0
  }
  return r * multiplica(r-1);
}

console.log(multiplica(3));// Retona 6

//Agora com arguments
function multiplica(r) {

  if(r == 0 ) {
    return 1
  }
  return r * arguments.callee(r-1);
}

console.log(multiplica(3));// Retona 6
