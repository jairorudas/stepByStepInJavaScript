/*
    metodo charCodeAt(indice);

    Este metodo retorna o codigo unicode do caracter da string que foi solicitado por parametro, ouseja 'indice'.
    O primeiro caracter da string ocupa a o índice 0 e o ultimo string.length -1.

    Vamos ver laguns exemplos
*/

var indice = 'jau%\SR=+t$@ 098si jap \\\a'
console.log(indice.charCodeAt(4)); //Retorna 83 que seria o codigo unicode da S maiuscula

var indice2 = 'jau%\SR=+t$@ 098si jap \\\a'
console.log(indice.charCodeAt(11)); // Retorna 32 que seria o codigo unicode do espaço em branco

var indice3 = 'jau%\SR=+t$@ 098si jap \\\a'
console.log(indice.charCodeAt(22)); // Retorna 92 que seria o codigo da \ invertida.
