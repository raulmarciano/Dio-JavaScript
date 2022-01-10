// Hoisting: Levantar ou descer, escopo de variável e função/bloco
// Escopo de variável ela somente a criação e não a atribuição
// " " função elava ela com oum todo
// Uma boa prática é declarar antes de usar

function fn() {
    log('Hoisting de função');

    function log(value) {
        console.log(value);
    }
}

fn();

/** 
function fn() {
    function log(value) {
        console.log(value);
    }

    log('Hoisting de função');
}
*/