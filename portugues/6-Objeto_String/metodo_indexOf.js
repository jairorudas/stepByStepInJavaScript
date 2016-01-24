/*
    metodo indexOf(stringProcurada, [inicio]);

    Este metodo é o contrario de charAt(), pois ele devolve a posição onde começa a string procurada,
    O metodo é sensivel a o tamanho de caixa, e se a string não for achada então devolve -1

    Vamos ver alguns exemplos:
*/

// Exmeplo 1
var texto = 'jairo';
console.log(texto.indexOf('ai')); // Retorna 1

// Exemplo 2
var texto = 'jairo';
console.log(texto.indexOf('ro')); // Retorna 3 ali começa o array procurado.


// Exemplo 3
var texto = 'jairo';
console.log(texto.indexOf('jo')); // Retona -1, pois ainda que os caracteres fazem parte da string, a sequancia
//não corresponde. quer dizer a SubString 'jo' não existe no nosso array.
