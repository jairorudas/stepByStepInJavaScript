/*
        Metodo reduceRight(função(v1,v2,ind,arr), valorInicial):

        Este metodo destina-se a percorrer cada um dos elementos do array e executar uma função
        callback. Funciona de modo semelhante ao metodo Reduce(), a diferença é que o array é reduzido
        do ultimo ao primeiro. Não altera o array original e admite um argumento obrigatorio que é uma função callback,
        e um argumento opcional definindo um valor inicial.

*/

//Exemplo 1
var arr = [1,2,7,25];

functionCall = function(v1,v2,ind, arr){
    return v1 + v2;
}
var x  = arr.reduceRight(functionCall);
console.log(x);
