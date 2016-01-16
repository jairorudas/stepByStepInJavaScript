/*
    Prototype

    Com Prototype podemos adicionar novas propriedades e/ou metodos a um objeto já existe
    vamos ver:
*/

var Casa = function (numeroPortas, cor) {
  this.portas = numeroPortas,
  this.cor = cor
}

Casa.prototype.tipoPiso = String; // todos os objetos que instanciam a Clase Casa receberam a nova
//propriedade tipoPiso, mas sem valor nenhum.

var casaJairo = new Casa(2, 'branco', 'ceramica'); // ceramica será ignorado pelo sistema
// ele deve ser ingresado na mão assim.

casaJairo.tipoPiso = 'ceramica'; //Assim nosso objeto terá a nova propiedade definida. 
