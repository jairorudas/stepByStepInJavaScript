/*
    metodo slice();

    Este metodo retorna um subArray de Array, ele permite um ou dois argumentos que definem o índice,
    inicial e final del subArray a extrair.

    As diretrizes de extração do sbarray são:

    * O subArray extraido contem o elemento definido no indice inicial (arg1).

    * Se for definido apenas um indice (arg1) o subarray extraido começa com o elemento na posição
        do argumento (arg1) até o final.

    * Argumentos negativos revertem o inicio da contagem do ultimo para o primeiro.(Explicaré este detalhe baixo).
*/

//---------------------------------------------------------------------------------------

//Exemplo 1
var arr = [1,2,3,4, "a","b","c"];

var x = arr.slice(2,5); //Resulta em x = [3,4,"a"]
var y = arr.slice(5,5);//Resulta em vazio b = []
var z = arr.slice(4,5); //Resulta em z = ["a"]
var w = arr.slice(5,6); //Resulta em w = ["b"]

/*
  Podemos concluir que o primeiro parametro do metodo procura dentro do Array o valor passado e
  O segundo paramentro diz até qual posição deve chegar a busca. Mas a busca não mostrara
  a ultima posição, por isso "y" é vazio. Para não ser vazio, o segundo paramentro deve ser "6".
*/

//---------------------------------------------------------------------------------------

//Exemplo 2
var foo = [2,3,4,1,6, "3","5"];

var g = foo.slice(3);
console.log(g);
// Retorna [1, 6, "3", "5"].

var f = foo.slice(2);
console.log(f);
// Retorna [4, 1, 6, "3", "5"].

//---------------------------------------------------------------------------------------

//exemplo 3
var banana = [2,3,4,1,6, "3","5"];
var n = banana.slice(-2,6);
console.log(n); //retona ["3"]
/*
    Neste exemplo os argumentos negativos invertem a contagem da busca e o ultimo element não é 0,
    é 1; então ele conta duas casas 1 = "5" e segunda casa 2 = "3". o segundo argumento 6
    faz a contagem normal, pois o numero é positivo. No final retorna "3" pois não é mostrado o
    ultimo elemento. Não é mostrado porque a ultima posição do segundo argumento nunca é mostrada.
*/

//---------------------------------------------------------------------------------------
