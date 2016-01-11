/* Metodo indexOf()

  indexOf(elemento [argumento2, true ou false]), já veremos que sifnifica cada um.

  Este metodo foi inspirado no metodo do mesmo nome do Objeto STRING. Retorna o indice do elemento
  de um Array. Admite um argumento obrigatorio, que é o elemento do array cujo índice desejamos saber
  ou achar. Caso o elemento não exista no Array, retorna " -1 ".

  A busca do índice no array se faz levando em conta o tipo de dado, ou seja, o argumento que é passada
  ao metodo indexOf() deve ser um dado do mesmo tipo do dado no array.

  O segudo argumento é opcional. a função dele é sinalizar a partir de qual posição o Array deve começar
  a busca.

  Vejamos um exemplo da afirmação anterior:
*/

// Exemplo 1
indexOf(2) //busca  o numero 2 no array sendo percorrido.
indexOf("2") // buscará uma STRING que contem o número 2.

//Exemplo 2
var colecao = [2,3,5,1,7,3];

var busca1 = colecao.indexOf("3");
console.log(busca1);
/*Retorna -1, pois esse tipo de dado (string com o número 3) não existe nesse Array */

var busca2 = colecao.indexOf(3);
console.log(busca2); // Retorna 1, pois o NUMERO 3 está na posição 1 do Array.
/*Ele retorna o PRIMEIRO elemento que satisfaça a condição e ali para, e retorna a posição do elemento.*/


/*Agora vamos fazer um exercicio usando o segundo argumento*/

var busca3 = colecao.indexOf(7, 3);
console.log(bucsa3);
/*Retona 4!, você se estará perguntando, como assim que 4 se eu mandei buscar desde a posição 3, ele deve ser retornar
que está na posição 1, pois começo a busca a partir do 3.

Bom, na verdade aqui as posições não mudam se você espesifica a posição onde deve começãr a busca; os developers
usam este segundo parametro quando tem certeça que aquilo que  procuram não estará nas posições anteriores do array.
Se usa mais para poupar ao processador percorrer espaços no Array desnecessarios. Ao final isso aumenta a performance
do programa.*/
