// Currying: Transformar uma função que recebe n parâmetros em uma que recebe somente um

// Modo normal (sem currying)
function soma(a, b) {
    return a + b;
}

soma(2, 2);
soma(2, 3);
soma(2, 4);
soma(2, 5);

console.log(soma(2, 2));
console.log(soma(2, 3));
console.log(soma(2, 4));
console.log(soma(2, 5));

// Com currying
// Se sempre repete 2, poderia receber somente um parâmetro, reaproveitar

function somaCurrying(a) {
    return function(b) {
        return a + b;
    }
}

const soma2 = somaCurrying(2);

soma(2);
soma(3);
soma(4);
soma(5);

console.log(soma(2));
console.log(soma(3));
console.log(soma(4));
console.log(soma(5));
