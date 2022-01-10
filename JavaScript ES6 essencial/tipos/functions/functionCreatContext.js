(() => {

    this.name = 'arrow function';

    // Diz name ira sempre referenciar o escopo de onde ela foi criada
    // Nesse caso o escopo de bloco
    const getNameArrowFn = () => this.name;

    // No contexto em que foi executada
    function getName() {
        return this.name;
    }

    const user = {
        name: 'Nome do objeto em execução',
        getNameArrowFn, // outra forma de criação propriedades, mesma coisa que getNameArrowFn: getNameArrowFn 
        getName,
    } 

    console.log(user.getNameArrowFn());
    // arrow function
    console.log(user.getName());
    // Nome do objeto em execução

})();