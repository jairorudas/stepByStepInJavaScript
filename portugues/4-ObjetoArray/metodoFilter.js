/*
  O metodo Filter()

  Este método destina-se a filtrar elementos de um Array e após a filtragem retornar um novo Array SEM modificar o
  array original. O novo array que pode ser guardado numa variavel. Ele admite um argumento obrigatorio, que é uma
  função de filtragem (função callback) e um argumento opcioncal.

  A função de filtragem é executada para cada um dos elementos do Array e o valor retornado é inserido em um novo
  Array que se constitui no Array resultante após o filtro.

  O Array requer 3 argumentos, que representam respectivamente, o valor de cada elemento do Array o indice de cada
  elemento e o objeto Array sendo filtrado.
*/

//Exemplo 1
var arr = [21,8,"r", 290, "c", 7];

function filtrandoArray(elem,ind,obj){
    return (elem >= 18);
}

var resultado = arr.filter(filtrandoArray);
console.log(resultado);
/*
  Retorna [21, 290], pois ele devolve só aqueles elementos do array que satisfazem a condição da função Callback
  ela é [filtrandoArray()]. Se ele não achar nada que satisfaça a filtragem retona um Array vazio []
*/

//Exemplo 2
var bom = ["jairo", 28, "rudas", "cartagena"];

function dadospessoais(a,b,c){
  //Os parametros elem,ind,obj pode ser trocados por qualquer letra.
  return typeof a ==  "string";
}

var retorno = bom.filter(dadospessoais);
console.log(retorno);
/*
   * Retorna ["jairo", "rudas", "cartagena"]
*/


/*
    * # O navegador Internet explorer 8 não soporta este metodo até hoje 08/10/2015.
*/
