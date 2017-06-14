/*
    metodo match(expreg);

    Este metodo match() retorna as ocorrência da string definida no parâmetro expreg.
    Esse parâmetro é uma expreção regular supostamente contida na string que se faz a procura.
    O retorno é um array contendo as ocorrências encontradas.

    Para entender as expressões regulares pro favor vá até a pasta Objeto Regex. Se ainda não está terminado
    este  objeto por favor desculpa, espero terminar ele em breve.


    Se a String procurada não for achada na string pesquisada, o metodo retornará null.

    Vamos ver laguns exemplos
*/
 var boom = 'PrismaColor';
 var resultado = boom.match(/[A-P]/gi);

console.log(resultado); // retorna ["P", "i", "m", "a", "C", "o", "l", "o"];
