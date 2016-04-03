/*
    metodo split(inicio, [fim]);

    Este metodo split() permite criar uma nova STRING a partir da extração de uma string.
    O parametro inicio indica a parti de qual posição a extração deve começar. O parametro fim
    indica onde a extração deve parar; e se for omitido o entende-se que a extração deve seguir até o final.

    O caracter inicio é incluido na estração mas o paramtro FIM não.

    O metodo é muito parecido com o mesmo metodo dos array.

    Veamos alguns exempos:
*/

//==============================================================================
  //Exemplo 1

  var nome = 'Florencia';

  var res = nome.slice(0, 4);
  console.log(res); // Retorna 'FLor'

//==============================================================================
