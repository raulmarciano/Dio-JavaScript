// Hoisting: Levantar ou descer, escopo de variável e função/bloco
// Escopo de variável ela somente a criação e não a atribuição
// " " função elava ela com oum todo
// Uma boa prática é declarar antes de usar

function fn() {
    console.log(text);
    //Vai levantar a variável text, mas sem definição (atribuição) undefined

    var text = 'Exemplo';

    console.log(text); //Retorna o valor exemplo
}

fn();

/**
function fn() {
    var text;
    console.log(text);

    text = 'Exemplo';

    console.log(text);
}
 */