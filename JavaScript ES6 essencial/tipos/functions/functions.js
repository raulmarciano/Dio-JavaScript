// Function padrão
function fn() {
    return 'Code';
}

// ES6 introduziu arrow functions
const arrowFn = () => 'Code';
const arrowFn2 = () => {
    // Com mais de uma expressão
    return 'Code';
}

// Funções também são objetos
fn.prop = 'Adicionando propriedade';

console.log(fn());
console.log(fn.prop);

// Receber parâmetros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam);

// Receber e retornar funções
// const controlFnExec => fnParam => allowed => {
//     if (allowed) {
//         fnParam();
//     }
// }

const handleFnExecution = controlFnExec(fn);

handleFnExecution(true); // Executara a função fn
handleFnExecution();     // Não executará a função fn

// constrolFnExec como função normal de se escrever
function controlFnExec(fnParam) {
    return function(allowed) {
        if (allowed) {
            fnParam();
        }
    }
}

