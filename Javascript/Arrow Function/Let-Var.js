if (true) {
    let numero = 10;
}

console.log(numero);

// Erro, pois a variável "numero" foi declarada com "let" dentro do bloco if, e não está acessível fora dele.

if (true) {
    var numero = 10;
}

console.log(numero);

// Funcional, pois a variável "numero" foi declarada com "var" dentro do bloco if, e está acessível fora dele.

// Redeclaração de variáveis com "var" e "let"

var nome = "João";
var nome = "Maria"; // Redeclaração permitida com "var"

let sobrenome = "Silva";
let sobrenome = "Santos"; // Erro, pois a variável "sobrenome" já foi declarada com "let"