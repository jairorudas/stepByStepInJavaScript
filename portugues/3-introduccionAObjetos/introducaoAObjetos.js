/*
Objeto

Nesta serie de introdução a Objetos, aprenderemos também herança, escopo, contexto e clousuras.

Objeto é um típo de dado em JavaScript. Podemos dizer que é o tipo de dado mais importante em JavaScipt
e, estritamente considerando, tudo em JavaScript é um Objeto, por exemplo: Arrays, String, funções, etc.
Em JavaScript existem varios tipos de Objetos como os objetos nativos da linguagem, objetos do entorno
onde JavaScript esta sendo executado (nodeJs, Browser, etc) e objetos criados
pelo desenvolvedor.

Objetos nativos da linguagem: Array, Number, Math, Date, Object. Estudaremos eles mais adiante.

Objetos do Browser: windows, navigator, document, etc. Também estudaremos mais adiante.

Objetos criados pelo Desenvolvedor: É uma boa pratica quando criamos objetos construtores eles começarem
com MAIUSCULA ex: Carro, Aluno, etc.

Mas pera ai, que é isso de Objeto construtores??
Objetos construtores são chamdos em outras linguagem de "Classes". para saber
mais disso veamos um exemplo:

*/
var Carro = {
  RECTIFICAR
};

/*

Que é um objeto?
Um objeto é um tipo de dado onde podemos colocar informação relevante sobre alguma coisa, esse objeto
possui dados e metodos (ações). Exemplo:
objeto pessoa:
  chaves: pessoa possui um nome, sobrenome, identidade, profissão, etc.
  pessoa faz ações: caminha, toma banho, trabalha.

Nosso objeto ficaria da seguinte maneira

*/

var pessoa = new Object();
pessoa.nome = "Fernando";
pessoa.apellido = "Moura";
pessoa.caminha = function(passos,velocidadeDePassos){ // O que você está vendo entre parentesis da função são chamados de parametros (veremos funções mais adiante).
  return passos * velocidadeDePassos; // esta função é o que chamamos de metodo, pois o objeto fez uma ação. E retorna o resultado da operação multiplicação.
}

//exemplo 2
var retangulo = new Object();
retangulo.largura = 3 //cm
retangulo.altura = 2 //cm
retangulo.area = function(altura,largura){
  return this.largura * this.altura; // Retorna o resultado da operação matematica ouseja 6. lembre "this" faz referência ao Objeto, no nosso casso é retangulo.
}
