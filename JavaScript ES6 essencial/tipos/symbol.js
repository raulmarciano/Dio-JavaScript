const symbol1 = Symbol();
const symbol2 = Symbol();

//Symbol são sempre únicos
console.log(symbol1 === symbol2);
// False

// Symbol não aparece nas estruturas padrões de repetição

// Não aparece nas objets keys e values

// Criação de ENUM
const directions = {
    UP    : Symbol( 'UP' ),
    DOWN  : Symbol( 'DOWN' ),
    LEFT  : Symbol( 'LEFT' ),
    RIGHT : Symbol( 'RIGHT' )
};