// função básica

function somar(a, b) {
    return a + b;
}

console.log(somar(2, 3)); 

______________________________________________________________________________________________________

// Aplicando Arrow Function

const // Const: Cria uma variável que não pode receber outra atribuição.
somarArrow = // Nome da função.
(a, b)  // parametros que a função recebe.
=>     // indica que estamos criando uma Arrow Function.
    {        // { }: delimitam o bloco de código.
        return a + b; // devolve o resultado da operação.
};

const somarArrow = (a, b) => {
    return a + b;
};

console.log(somarArrow(10, 5)); 

_______________________________________________________________________________________________________

//  Arrow function simplificada 

const somarArrowSimples = (a, b) => a + b;

console.log(somarArrowSimples(8, 2));

const dobro = numero => numero * 2;

const quadrado = numero => numero * numero;

const saudacao = nome => "Olá, " + nome;

_______________________________________________________________________________________________________

// Arrow function com mais de uma linha de código

const calcularMedia = (n1, n2) => {
    let media = (n1 + n2) / 2;

    if (media >= 6) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
};

console.log(calcularMedia(8, 7));









