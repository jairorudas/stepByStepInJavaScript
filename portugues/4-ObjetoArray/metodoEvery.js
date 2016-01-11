/* Metodo every().
Para usar este metodo precisamos de uma função callback ou seja, ela é chamada e o trabalho dela é procesar nosso
Array com as caracteristica que queremos que sejam evaluadas.

A função every() testa cada um dos elementos do array e se TODOS eles satifazem nossa função retorna TRUE, se algum
dos elementos de nosso array no satisfaz a função callback retorna FALSE.

Normalmente usamos ela para testar um array e se esse test retorna TRUE é chamada outra função que faz alguma outra coisa.*/

//exemplo: 1
 var transporte = ["taxi", "ônibus", "Carro", "Moto"];

 /*A seguir a vamos criar a função callback e vou chamar ela de callback mesmo, mas pode ser qualquer nome.*/
function callback(elem, ind, obj){
  /*sim, precisamos desses parametros para ela funcionar.elem, ind, obj.
  elem: É o elemento que esta contido no indice, seja uma string, um numero, um objeto.
  ind: É o indice. sabemos que os arrays começam a partir do 0.
  obj: objeto Array sendo percorrido. */
     return (typeof elem == "string")
 }
 // Vamos a usar o metodo every()
var retorno = transporte.every(callback);
console.log(retorno); //Retona "TRUE"

//Exemplo: 2
 var numeros = [25,85,78];

 function testNumeros(elem, ind, obj){//obj aqui é a variavel NUMEROS, ela está sendo percorrida.
     return (typeof elem == "number");
     /*Lembre que dentro de este test você pode colocar qualquer tipo de coisa que você quiser testar do Array que está sendo
     percorrido.*/
 }
 // Vamos a usar metodo every()
 var resultado = numeros.every(testNumeros);
 console.log(resultado);// retona TRUE


//Exemplo: 3
 var numeros = [25,85,78];

 function testNumeros(elem, ind, obj){
     return (elem instanceof String);//rotorna FALSE
     /*Lembre que dentro de este test você pode colocar qualquer tipo de coisa que você quiser testar do Array que está sendo
     percorrido.*/
 }
 // Vamos a usar metodo every()
 var resultado = numeros.every(testNumeros);
 console.log(resultado);/* Retona false, aqui perguntamos a  JavaScipt se os elementos do Array numeros TODOS são uma instancia
 do objeto Naitivo de JavaScipt String.

# Atenção!
Note que lá encima no exemplo 1, está escrito (typeof elem == "string"), string está escrito com 's' minuscula, e aqui embaixo
no exemplo 3 (elem instanceof String) string está com "S" maisuculo. Isso porque no exemplo 3 estamos perguntando se é uma instancia de
um Objeto, no caso é o Objeto String; e lembremos em JavaScipt os Objetos construtores começam com MAIUSCULA.
E lá encima, exemplo 1, perguntamos a javaScript se O DADO que estamos testando é do TIPO "string" e não o objeto String.
*/

 //Exemplo: 4
var numeros = [22,22,22];

function soma(elem,ind,obj) {
    return elem == 10+12;
}
var retorno = numeros.every(soma);
console.log(retorno); //Retorna True, pois todos os elementods do Array satisfazem a condição da função callback.

/*# O navegador Internet explorer 8 não soporta este metodo até hoje 08/10/2015.
*/
