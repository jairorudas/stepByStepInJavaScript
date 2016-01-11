/*
          Join([arg]);

      Este metodo transforma os elementos de um array em um string. admite um argumento
      opcional que se destina a criar um separador para os elementos do array. Se não
      for especificado o argumento, o separador adotado por padrão é a virgula.
*/

var plutao = [23,24,56,34,'AC'];

var g = plutao.join();
console.log(g); // Retorna 23,24,56,34,AC

var go = plutao.join('/');
console.log(go); // Retorna 23/24/56/34/AC
