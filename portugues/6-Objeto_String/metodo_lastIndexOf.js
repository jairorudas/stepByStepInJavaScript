/*
    metodo lastIndexOf(stringProcurada, [inicio]);

    O metodo lastIndexOf retorna o indice da ultima ocorrência da string que está sendo procurada, ouseja
    a string que está sendo passada por parametro.

    O metodo é sensivel ao tamanho de caixa e se a string procurada não for encontrada retorna -1.

    podemos passar para prucurar um caracter como string ou uma sequencia de caracteres.

    Este metodo é parecido ao metodo anterior, só que aqui a busca é feita buscando a ultima ocorrencia da
    string.

    Vamos ver alguns exemplos:
*/

//Exemplo 1
var navegador = 'Chrome , chrome, Opera, opera, Safari, safari, Mozilla, mozilla';
console.log(navegador.lastIndexOf(",")); // Retorna 54 é o indice da ultima virgula achada.

//Exemplo 2
var navegador = 'Chrome , chrome, Opera, opera, Safari, safari, Mozilla, mozilla';
console.log(navegador.lastIndexOf("a")); // Retorna 62, é a ultima 'a' achada.

//Exemplo 3
var navegador = 'Chrome , chrome, Opera, opera, Safari, safari, Mozilla, mozilla';
console.log(navegador.lastIndexOf("M", 17)); // Retorna -1, pois ele fez a busca da letra 'M' da posição 17 até
// A posiçã 0 e não achou 'M' em caixa alta nessas posições.
