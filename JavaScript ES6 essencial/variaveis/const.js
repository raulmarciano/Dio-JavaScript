// Const não deixar alterar os tipos primitvos
// Deixar alterar os valores dos objetos (arrays também), mas não o ponteiro

const name = 'Raul';

// Não permite torcar de valor
name = 'Marciano';

const user = {
    name: 'Raul'
};

// Objeto podemos trocar as propriedades
user.name = 'Marciano';

const persons = ['Raul', 'Ana', 'Gustavo'];

// Podemos adicionar um novo item
persons.push('João');

// Podemos remover um item
persons.shift();

// Podemos alterar o item
persons[1] = 'Maria';

// NÃO conseguimos fazer isso
// persons = [];

console.log('\nArray após as alterações: ', persons);