/*
    metodo replace(string | expreg, nova_string | função);

    Este metodo replace() recebe dois parametro. O primeiro parametro é uma string a procurar ou subtring
    ele pode ser também uma expreção regular.

    * O segundo parametro pode ser uma string definida pelo desenvoldor ou o RETORNO de uma função.

    Veamos alguns exempos:
*/

//Exemplo 1
var garrafa = "garrafa em portugues é botella"; // definimos nossa string
var botella = garrafa.replace("portugues", "espanhol"); // chamamos a função para ser aplicada na varivel anterior
console.log(botella);


//Exemplo 2
var amor = "Na verdade eu amo a patricia";

var realidade = amor.replace("patricia", function(casou, pos, string){
  /*
    * Arguments nos devolve um array os valores de esses tres argumentos
    * casou: "patricia"
    * pos: Posição da string procurada 20
    * string: A string completa sem ser modificada ainda.
    * Resultado final assim:
    
      ["patricia", 20, "Na verdade eu amo a patricia"]
  */
  console.log(arguments);

  if ( casou === "patricia" ) {
    return "Diana"
  } else {
    return " "
  }

});

console.log(realidade);
