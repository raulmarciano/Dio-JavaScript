// let respeita o escopo de bloco

// função de execução imediata
(() => { 
    let test = 'valor função'
    console.log(`Valor dentro da função "${test}"`);
    // valor função

    if(true) {
        let test = 'example';
        console.log(`Valor dentro do if "${test}"`);
        // valor if
    }

    console.log(`Valor após a execução do if "${test}"`);
    // valor funcao
})();