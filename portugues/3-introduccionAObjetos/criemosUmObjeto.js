/*

## Criando Objetos

Em JavaScript existe um operador espcial para criar Objeto, ele é o operador unario "new", com ele é possivel criar
objetos ou em outras palavras instanciar.
Exemplo:

*/

var smartPhone = new Object();

/*

Neste exemplo vemos a variavel smartPhone (pode ser qualquer nome), o operador "new", e a função que chamamos de
construtor, no caso é uma função nativa de JavaScript `Object()` que cria um objeto vazio e generico. JavaScipt tem
outros tipos de objetos não vazios, eles são nativos da linguagem e que você conhecerá mais adiante neste
repositorio.

Aqui criamos um objeto chamado `smartPhone` que conterá dados de nosso `smartPhone`, mas ainda não contem
propiedades nem metodos. vamos inserir dados a nosso objeto!

Para popular nosso objeto usamos o (.) ponto (existem outras forma de popular nosso objeto, mas a mais utilizada
é o ponto [.]). como mostrado no exemplo abaixo.

Agora, que é isso de chaves ou propiedades e valores em objetos?
propiedades ou chaves em objetos é o nome que identifica o valor de um objeto. para entender isso melhor vamos a
ver um exemplo:

*/

var smartPhone = new Object();// criação do objeto vazio.

/* para popular nosso objeto fazemos o seguinte. Inserimos propiedades ou chaves e valores a nosso objeto,
lembre-se devemos usar o [.] ponto, como mostrado a seguir:*/
    smartPhone.modelo = "Motorola"; //modelo é Chave e valor é Motorola, lembre-se quando uma chave tem uma função é chamada de metodo.
    smartPhone.altura = 3.2; //cm
    smartPhone.largura = 3.5 ;//cm;
    smartPhone.grosura = 2.1; //mm
    smartPhone.peso = 75 ;//gr

// Se perguntamos a javaSCript que ele é diz que é um objeto exemplo
typeof smartPhone; // retona "Object" ouseja é um objeto

// Se perguntamos a JavaScript se esta variavel é uma instancia de um objeto ?
smartPhone instanceof Object //Reorta "true"

//criando metodos no nosso Objeto
smartPhone.area = function(){

}
