/*
      Metodo splice();

      Este metodo se destina a inserir e/ou remover elementos de um array, isto é, podemos
      somente inserir, somente remover ou inserir e remover ao mesmo tempo elementos em um Array.
      Admite um argumento obrigatorio e vários argumentos opcionais, cujas finalidades são descritas a seguir:

      * O primeiro argumento define a posição onde iniciará a inserção ou remoção. atenção: posção não é indice.
        O primeiro elemento ocupa a posição 1 e seu indice é 0.

      * O segundo argumento define a quantidade de elementos a remover se esse argumento for omitido, serão removidos
        todos os elementos do array a partir da posição definida no primeiro argumento até o final do array.

      * Do terceiro argumento em diante, definimos os elementos a inserir a partir da posição definida no primeiro argumento
        e depois de removidos tantos elementos quantos especificamos no segundo argumento.

        Vejamos alguns exemplos:
*/

var conjunto = [2,5,9,7,8,9,5,6,4];

conjunto.splice(5);
console.log(conjunto); // Retorna [2, 5, 9, 7, 8] os demais valores foram apagados

conjunto.splice(3, 4);
console.log(conjunto);// Retorna [2, 5, 9, 6, 4] o segundo parametro da função especifica quantos valores
//depois do primeiro paramentro devem ser apagados, ouseja foram apagados [7,8,9,5]

conjunto.splice(5, 0, 28,29,33);
console.log(conjunto); // Retorna [2, 5, 9, 7, 8, 28, 29, 33, 6, 4], não apaga nenhum valor e adiciona após a quinta posição
//os valores contido após o segundo parametro.
