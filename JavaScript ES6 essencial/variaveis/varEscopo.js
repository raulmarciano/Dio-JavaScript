// var não respeita o escopo de bloco

var test = 'example';

// função de execução imediata
(() => { 
    console.log(`Valor dentro da função "${test}"`);
    // undefined

    if(true) {
        var test = 'example';
        console.log(`Valor dentro do if "${test}"`);
        // example
    }

    console.log(`Valor após a execução do if "${test}"`);
    // example
})();