/*
    metodo split( [separador], [limite] );

    Este metodo é muito parecido ou igual com o split do objeto Array.

    Este metodo destina-se a criar um array de substrings extraidas de uma string. Os
    parametros separador e limite são opcionais. O primeiro controla o caractere para
    separar as subtrings do array (ese parametro deve ser passado como string).
    Se o parametro separador for omitido, o array retonado contera uma string somente,
    igual a string original.

    Veamos alguns exempos:
*/

//==============================================================================

  //Exemplo 1

  var email = 'jairorudas@oul.com.br'

  email.split('@');

//==============================================================================

  //Exemplo 2

  var url = 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions'

  var res = url.split('/');
  console.log(res); //Retorna [ 'https:', '', 'developer.mozilla.org', 'pt-BR', 'docs', 'Web', 'JavaScript', 'Guide', 'Regular_Expressions' ]

//==============================================================================
