/* Metodo ForEach()

Este método destina-se a percorrer cada um dos elementos de um array e executar uma função
callback. Não alterá o array original e admite um argumento obrigatório, que é uma função
callback, e um argumento opcional.

Este metodo é uma forma mais facil de percorrer um Array, pode ser substituir em algumas ocações
ao clasico ciclo 'for'.

Está função é executada para cada um dos elementos do array e o valor retornado é inserido
em um novo array que se constitui no "array resultado"  da aplicação da função callback

O metodo requer três argumementos que representam respectivamente o valor de cada
elemento do Array, do o indice de cada elemento e o objeto Array sendo percorrido.

foreach(funcaoCallback(elem,ind,obj,[thisObjeto]))

O argumento thisObjeto define um objeto a ser usado como this na função callback, se for omitido
será usado o objeto global sendo percorrido.

Veremos exemplo a seguir
*/

//Exemplo 1
var edad = [21,3,18,"a", 290];
var mensage;
//criamos nossa função callback
function andando(elem, ind, obj){
  mensage += "\n" + "arr[" + ind + "] = " + elem + "\n";
  return mensage;
}

//vamos colocar para funcionar
edad.forEach(andando);
console.log(mensage);

//Exemplo 2
var saida,
objeto,
oficina = [{
  endereco : "AV das Americas",
  sala : 301,
  bloco : 15
}];

function recorrendo(elem,ind,obj){
  for (var k = 0; k <= oficina.length; k += 1) {
    if(typeof oficina[k] == "object"){
      for (var i in oficina[k]) {
        objeto += i + " : " + oficina[k][i] + " \n"
      }
    }
  }
 }
oficina.forEach(recorrendo);
console.log(objeto);

//Exemplo 3
var frutas = ["pepino", "pera", "ponche", "mamão", 22],
    saida   = " ";

  function callback(elem, ind, obj){
    if(typeof frutas[ind] == "string"){
      saida += ind+ " " + elem + " \n";
    }else {
      var naosei = typeof frutas[ind];
      alert(elem + " Não é uma fruta, é um  " + naosei + " \n" + " ");
    }

    /* NAO FAZER O SEGUIENTE DENTRO DE UM forEach(), SÓ SE VC SABE O QUE ESTÁ FAZENDO
    Pois estará percorrendo o array de novo.
      for (var i = 0; i == morango.length; i++) {
        if (typeof morango[i] ==  "string"){
          saida += morango[i] + " \n";
          continue;
        }else {
          console.log("Não é uma string " + morango[i] + " \n");
        }
      }*/
  }
frutas.forEach(callback);
console.log(saida);

//Exemplo 4
/*
  Este exemplo é igual ao anterior a diferença está em como testar que tipo de dado
  é o elemento. lee o comentario a baixo
*/
var frutas = ["pepino", "pera", "ponche", "mamão", 22],
    saida   = " ";

  function callback(elem, ind, obj){
    if(typeof elem === "string"){ //esta linha é diferente ao exercicio anterior
      saida += elem + " \n";
    }else {
      var naoseioquee = typeof ind;
      alert(elem + " Não é uma fruta, é um  " + naoseioquee + " \n");
    }
  }
frutas.forEach(callback);
console.log(saida);

/*Exemplo 5
  Este exemplo em especial, faz a mesma coisa que o exemplo 1 do metodoMap(),
  mas o ideal seria usar o metodo map() para modificar os elementos do array.
  A grande diferença etsa em que o metodo map devolve um novo array com as mudanças.
 já forEach() não. */

var lego = [12, 23,45, 30,22];
var fet = new Array;
function tetri(elem, ind, obj){
  fet.push(elem = elem + 1);
  console.log(fet);
  return fet
}
lego.forEach(tetri);
