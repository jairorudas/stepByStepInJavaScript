/*
    Neste arquivo veremos basicamente dois metodos que possuem todas as funcões
    O metodo call(this.argumentos), e o metodo apply(this, array).
*/

    call(this, argumentos);
/*
    O metodo call(this, arguments) permite mesclar dois ou mais metodos em um só objeto.
    Isso é possivel chamando um metodo dentro do outro e passando o obejeto como parâmetro.

    Este metdo admite dois parametros obrigatorios. Primeiro a palavra chave this e os
    argumentos do metodo a ser mezclados.
*/

//Declaramos nossa primeira Classe.
function Cafe ( aroma, acidez, estado ) {
  this.aroma  = aroma,
  this.acidez = acidez,
  this.estado = estado
}

// Declaramos nossa segunda classe, que chamará a classe anterior.
function Cafe_venda ( aroma, acidez, estado, quantidade, preco_uni, origem, destino ) {
  this.quantidade = quantidade,
  this.preco_uni  = preco_uni,
  this.origem     = origem,
  this.destino    = destino,

  Cafe.call(this, aroma, acidez, estado); // aqui chamamos a classe Cafe. Todas as propiedades  e metodos
  // de Cafe, agora são criados dentro de Cafe_venda. Mas eles devem ser declarados como parametros em Cafe_venda.
}

// fazemos uma instancia de Cafe_venda.
var compra = new Cafe_venda ( 'delicia', 'intensa', 'grão', 200, 50, 'Cartagena - Colômbia', 'Rio de Janeiro - Rio de Janeiro' );

/*
  Este tipo de metodo é bastante usado quando queremos gerar relatorios.
  Quando desejamos reutilizar alguma classe. Seria um tipo de herança.
*/

  apply(this, array)

/*
    O metodo apply funciona de maneira semelhante ao método call mostrado anteriormente a diferença é a forma
    como os parametros são passados para o metodo. enquanto que para o metodo call os parametros são uma lista
    de argumentos separados por virgula, para o metodo aplly deve ser um array. Podemos passar o pseudo array
    'arguments'

    Veamos...
*/

//Declaramos nossa primeira Classe.
function Cafe ( aroma, acidez, estado ) {
  this.aroma  = aroma,
  this.acidez = acidez,
  this.estado = estado
}

// Declaramos nossa segunda classe, que chamará a classe anterior.
function Cafe_venda ( aroma, acidez, estado, quantidade, preco_uni, origem, destino ) {
  this.quantidade = quantidade,
  this.preco_uni  = preco_uni,
  this.origem     = origem,
  this.destino    = destino,

  Cafe.call(this, arguments); // aqui chamamos a classe Cafe. Todas as propiedades  e metodos
  // de Cafe, agora são criados dentro de Cafe_venda. Mas eles devem ser declarados como parametros em Cafe_venda.
}
