/*
        Metod reduce(v1, v2,ind, array, [valor inicial]);
        O metodo percorre cada elemento dentro de um array e executar uma função callback.
        A função é executada para cada uma dos elementos do array e retorna um valor unico.
        Além o metodo aceita quatro argumentos e um opcional que é o valor inicial.
        Esse valor inicial, o valor v1 seria igual a ele e o valor v2 seria o array
        na primeira posição exemplo ( array[0] );
*/

//Exemplo 1
var plutonio = [1,2,3,4,5];

//criemos nossa função callback, ela será chamada para processar nosso array
uranio = function(v1,v2,ind,arr,start){
      var k = v1 + v2;
      return k
}

var g = plutonio.reduce(uranio, 200);
console.log(g);
  /*
    Este processo nos loguea 215 porque o valor inicial foi 200, lembra do
    ultimo parametro opcional que recebe a funcão?
  */

//---------------------------------------------------------------------------------------

//Exemplo 2

//Agora vamos tentar fazer a mesma coisa sem o parametro inicial de 200, veamos que retona
var plutonio = [1,2,3,4,5];

//criemos nossa função callback, ela será chamada para processar nosso array
uranio = function(v1,v2,ind,arr,start){
      var k = v1 + v2;
      return k
}

var p = plutonio.reduce(uranio);
console.log(p); //loguea 15 pois faz a soma dos elementos que estão dentro do array;

//---------------------------------------------------------------------------------------

//Exemplo 3
var plutonio = [1,2,3,4,5, 'jairo','patricia'];

//criemos nossa função callback, ela será chamada para processar nosso array
uranio = function(v1,v2,ind,arr,start){
      var k = v1 * v2;
      return k
}

var d = plutonio.reduce(uranio);
console.log(d);

  /*
    Atenção isso devolve um NaN, ouseja não é um numero, pois o array possui 'Strings'
    Além dentro de está função não é possivel ter um if pois se alguma coisa da errado, não devolve nada
    o ideal seria que a filtragem seja feita pela função filter() e dessa forma você terá um codigo melhor
    estruturado.
  */

//---------------------------------------------------------------------------------------

//Exemplo 4
var plutonio = [1,2,3,4,5, 'jairo','patricia'];

//criemos nossa função callback, ela será chamada para processar nosso array
uranio = function(v1,v2,ind,arr,start){
      var k = v1 + v2;
      return k
}

var p = plutonio.reduce(uranio);
console.log(p);
/*
  Retorna 15jairopatricia o operando + lembra ele é especial, pois além de somar,
  ele concatena strings, cuidado!
*/
