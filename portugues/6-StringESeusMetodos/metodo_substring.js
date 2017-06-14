/*
    metodo substring(indiceA, [indiceB]);

    Este metodo é muito parecido  com o metodo slice, a diferença entre eles está em que
    neste metodo quando o primeiro parametro é maior que o segundo ele inverte os valores
    dos dois parametros e se comporta igual ao metodo slice.

    Vamos ver alguns exempos:
*/

//==============================================================================
//Exemplo 1

var poema = 'Não te amo como se fosses rosa de sal';

var res = poema.substring(12, 0);
console.log(res); //Retorna 'Não te amo c'
