/*  O metodo "concat()".
    O metodo "concat()"  do objeto "Array" pode inserir um ou varios valores no final de um Array.
*/

/*Criemos um objeto do tipo Array!. Para isso como vimos, pode ser feito de duas maneiras, como mostrado a seguir:*/
var arr = new Array(); //ou
var arr = [1,2,5,4,7];

//Exemplos 1:
var arr = [1,2,5,4,7];
arr.concat("Televisão", 100);
console.log(arr);
//Retorna [1, 2, 5, 4, 7, "Televisão", 100]

//exemplo 2:
var arr = [1,2,5,4,7];
arr.concat([123,456,789,"abc"]);
console.log(arr);
/*
  Aqui retorna [1, 2, 5, 4, 7, 123, 456, 789, "abc"].
  Repare que não cria um array dentro de array. Ou seja aqui tanto faz clocar corchetes ou não para adicionar
  1 ou mais elementos no nosso Array
*/

//exemplo 3:
var arr = [1,2,5,4,7];
arr.concat([[147,258,369,"jairo"]]);
console.log(arr);
/*
  Retorna [1, 2, 5, 4, 7, Array[4]0: 1471: 2582: 3693: "jairo"length: 4__proto__: Array[0]]. Repare que
  criamos um Array dentro de um Array. Aqui Sim faz toda diferencia usar dois pares de corchetes.
*/

//exemplo 4:
var arr = [1,2,5,4,7];
arr.concat({"Nome": "Jairo"}, {"Cargo": "Front-end"});
console.log(arr);
/*
  Retorna [1, 2, 5, 4, 7, Object, Object], dois Objetos, lembremos que um objetos são criados com chaves
  ({}), e é possivel adicionar mais de um objeto.
*/

//Exemplo 5:
var arr = [1,2,5,4,7];
arr.concat([28,32], [96,"node"]);
console.log(arr);
/*
  Retorna [1, 2, 5, 4, 7, 28, 32, 96, "node"], Repare que aqui tanto faz também colocar
  corchetes, pois os dados são adicionados ao Array sem ser Array dentro de Arrays. Já vimos que para criar outro Array dentro
  dele precisamos colocar dois pares de corchetes.
*/



// #importante!
/*
  A diferênça do metodo "push()", o metodo concat() junta Arrays sem criar ou acrescentar um novo Array dentro de Array.
  Para entender isso vamos fazer um exemplo.
*/
//Exemplo: 6
var caju = ["frutas", "28"];
var morango = [745, 857,987];
var acerola = new Object();
caju.concat(morango);
/*
  Concat acrescenta a nosso Array os dados contidos em morango, SEM CRIAR UM NOVO ARRAY dentro de caju.
  Agora copia e cola a seguiente linha no Browser.

 caju.concat(acerola); Aqui concat coloca dentro de caju o objeto. quer dizer ele NÃO anexa item a item nosso objeto dentro
 do array, senão que coloca o objeto inteiro como bloco dentro de nosso array. Copia e cola o codigo inteiro na consola do Browser para
 ver a explicação.
*/

/* Exemplo: 7
Temos um Array qualquer */
var laranja = [18,23,54,12,3];
var limao = ["manga", 471, "carro"];
laranja.push(limao);
console.log(laranja);
/*
  O metodo "PUSH" indexa dentro de nosso Array Laranja outro Array, quer dizer temos um Array e dentro
  temos outro Array. Para enchergar melhor cola copia e cola esse codigo na consola do Browser.
*/

var acerola = new Object();
laranja.push(acerola);
/*
  IMPORTANTE: O comportamento de "push()" é igual que o comportamento de "concat()" quando acrescentamos
  objetos que NÃO sejam do tipo Arrays, como new Array() ou array[0] = 1
*/
