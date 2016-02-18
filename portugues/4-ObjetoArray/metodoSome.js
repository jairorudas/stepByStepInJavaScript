/*      Metodo some().

        A função some() testa cada um dos elementos do array e se AO MENOS UM ELEMENTO satifaz a nossa função callback
        retorna TRUE. Se nehum dos elementos de nosso array não satisfaz a função callback retorna FALSE.

        Ele é o contrario do metodo every().

        A função requer três argumentos que representam respectivamente o valor de cada elemento do array,
        o indice de cada elemento do array e o objeto array sendo percorrido.
        asi:        some(função(elem, ind, obj));

        Para usar este metodo precisamos de uma função callback ou seja, ela é chamada e o trabalho dela é
        procesar nosso  Array com as caracteristica que queremos que sejam evaluadas.

        Ele não altera a o array original.

*/

// Exemplo 1
 var numeros = [25,85,"78"];

 function testNumeros(elem, ind, obj){
     return (typeof elem == "string");
     /*
        rotorna TRUE
        pois ao menos um deles satisfaz a condição.
    */
 }

 // Vamos a usar metodo some()
 var resultado = numeros.some(testNumeros);
 console.log(resultado); //Retorna TRUE

//---------------------------------------------------------------------------------------

// Exemplo 2
var nomes = ["jairo", "patricia", "marcos", "carla", 7];

function testeNome(elem, ind, obj){
  if (nomes !== undefined) {
    return typeof elem === "number";
  }
}

var resposta = nomes.some(testeNome);
console.log(resposta);
// Seu retorno é TRUE, pois um elemento satisfaz a condição.
