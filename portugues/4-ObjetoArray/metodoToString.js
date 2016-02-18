/*
      Metodo toSring();

      O metodo toString() converte cada elemento do array em um string e retorna uma lista
      de elementos separados por vírgula, Este método tem o mesmo efeito do método join()
      quando usado sem argumentos. O metodo toLocalString() é uma versão localizada do método
      anterior, fazendo a conversão para string e usando separadores de acordo com as caracteristicas
      locais do dispositivo interpretador. Na pratica não há diferença entre os métodos.
*/

//---------------------------------------------------------------------------------------
//Exemplo 1

var pinguin = [23, 29, 33, 34];
var result = pinguin.toString();
console.log(result);
// Retona 23,29,33,34, se você guardar numa varievel e logo aplica typeof variavel será igual a 'string'

//---------------------------------------------------------------------------------------
