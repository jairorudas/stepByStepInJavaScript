/*
    metodo charAt(indice);

    Este metodo retorna o caracter da string que foi solicitado no parametro da função, ouseja 'indice'.
    O primeiro caracter da string ocupa a o índice 0 e o ultimo string.length -1.

    Vamos ver laguns exemplos
*/

var indice = 'jau%\SR=+t$@ 098si jap \\\a'
console.log(indice.charAt(4)); // retorna S ele ignora a barra invertida e retona o seguinte caracter.

var indice2 = 'jau%\SR=+t$@ 098si jap \\\a'
console.log(indice.charAt(11)); // Retorna o espaço em branco que colocamos.

var indice3 = 'jau%\SR=+t$@ 098si jap \\\a'
console.log(indice.charAt(22)); // devolve a barra invertida que esta entre duas barras invertidas \ '\' \.
