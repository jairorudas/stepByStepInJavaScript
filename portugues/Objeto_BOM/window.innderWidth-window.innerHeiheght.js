/*
    Objeto window.InnerWidth e window.innerHeight

    Estás propiedade definem respectivamente a largura e a altura da àrea de conteudo
    da janela do navegador. Não consideram as barras de Ferramentas, de Status, de Rolagem
    e Menus.

    Essas propiedades são suportadas epenas por navegadores modernos (visitar caniuse.com
    para obter informação atualizada sobre soporte)
    Para Internet Explorer a sintaxe é document.body.clientWidth e
    document.body.clientHeight.

*/

//==============================================================================

//Exercicio 1

console.log(window.innerWidth + ' ' + window.innerHeight);
// Ele retornará o o tamanho do window disponivel para usar no browser
// Se você perguntar assim screen.width retornará em pixels o tamanho da tela do usuario.
