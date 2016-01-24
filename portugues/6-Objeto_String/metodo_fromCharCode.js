/*
    metodo fromCharCode(p1, p2, p3, ...N);

    Este metodo é um pouco diferente aos outros que manipulam strings. porque ele não é aplicado diretamente
    a uma string, se não que é aplicado diretmente sobre o objeto String.
    String.fromCharCode(...).

    Ele devolve os caracteres UNICODE contidos no ou nos parametros da função.

    Vamos ver alguns exemplos:
*/

var t = 34,
    u = 45;

String.fromCharCode(t, u, 98); // Retona '  "-b  '. Ou seja 34 é igual a ( " ), 45 é igual ao operador ( - ),
// e 98 é igual a ( b ).

// ==============
String.fromCharCode(200); //Retona " É "
