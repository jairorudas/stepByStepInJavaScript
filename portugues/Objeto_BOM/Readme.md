Aqui estudaremos o BOM (Borwser Object Model). Que descreve o Objeto navegador, suas
propiedades, metodos e eventos. Apesar de não ser objeto de especificação e ter ficado
a criterio dos fabricantes as implementações JavaScript para o BOM, muitas de suas
funcionalidades são suportadas pela maioria dos navegadores atuais. Contudo, fica desde já
o alerta de que a opção pelo seu uso requer testes de verificação do correto funcionamento
nos navegadores a servir.

Este objeto descreve BOM faz parte de JavaScript que descreve os objetos proprios do
browser (Navegador), suas propiedades e metodos.

O objeto BOM não esta previsto no ECMAScript ou qualquer outra espesificação, mas está bem
implementado na maioria dos navegadores, muitas de suas funcionalidades tem seu equivalente
no DOM (Document Object Model) que faz parte da especificação ECMAScript.

* As boas practicas de desenvolvimento recomendam, sempre que houver alternativa usar o
  DOM em detrimento do BOM !!!!

* Um navegador com suas funcionalidades de BOM não tem como identificar atualizações ou
  novas implementações no ambiente em que se acha instalado podendo falhar ao rodar um
  Script no BOM !!!

* Ainda que muitas funcinalidades do BOM sejam bem suportadas pelos navegadores, o
  desenvolvedor precisa estar ciente e conhecer as possiveis fontes de error ao usar o
  BOM. Fazer analise fundamentada e levar em consideração todos os prós e contras é
  essencial para o sucesso do projeto. !!!

  * O objeto de nivel mais elevado no BOM é o windows, que além de suas propiedades e
    metodos como status, self, open(), alert() contem varios outros objetos como document,
    history e location que veremos aqui.
