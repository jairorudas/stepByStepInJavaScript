//Este metodo retorna um Array de Array, ele permite um ou dois argumentos que definem o índice,
//inicial e final del subArray a extrair.

//Exemplo 1
var arr = [1,2,3,4, "a","b","c"];

var x = arr.slice(2,5); //Resulta em x = [3,4,"a"]
var y = arr.slice(5,5);//Resulta em vazio b = []
var z = arr.slice(4,5); //Resulta em z = ["a"]
var w = arr.slice(5,6); //Resulta em w = ["b"]

//Podemos concluir que o primeiro parametro do metodo procura dentro do Array o valor passado e
//O segundo paramentro diz até qual posição deve chegar a busca. Mas a busca não mostrara
//a ultima posição, por isso "y" é vazio. Para não ser vazio, o segundo paramentro deve ser "6".

//Exemplo 2
var foo = [2,3,4,1,6, "3","5"];

var g = foo.slice(3);
console.log(g);

var f = foo.slice(2);
console.log(f);

//exemplo 3
var banana = [2,3,4,1,6, "3","5"];
var n = banana.slice(-2,6);
console.log(n); //retona ["3"]
//Neste exemplo os argumentos negativos invertem a contagem da busca, ou seja, o numeor 2
//será o ultimo dado, o 3 será o penultimo dado e assim por diante (a contagem sera feita no primeiro paramentro de direita para izquerda).
//Mas o segundo parametro que é positivo continua a contagem de izquerda para direita
