/*
    Propiedades do objeto String são listadas a seguir:

    * length
    * constructor
    * prototype
*/

/*
  * length: Length nos indica o numero de caracteres que possui uma String, inclui espaços
    em branco e caracteres especiais.
*/

var foo = "laranja";
console.log(foo.length) //retorna 7

var far = "laranja, pera, limão";
console.log(far.length)// retorna 20, lembra espaços em brancos contam.

/*
  * constructor: Esta propiedade faz referencia à função que criou a string.
*/
var far = new String("laranja, pera, limão");
console.log(far.constructor)// Retorna: function String() { [native code] }

/*
    * prototype: Esta propiedade permite adicionar novas propiedades e metodo a um objeto existente.
    Trata-se de uma propiedade comum a todos os objetos e seu emprego para o objeto string é pouco
    usual, fica aqui citado como referencia.

    - Para ver um exemplo pratico ve até a pasta funções no arquivo prototype.
*/
