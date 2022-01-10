let user = {
    name: 'Raul'
};

console.log(user);

// Alterando
user.name = 'Marciano';
user['name'] = 'Marciano'; // Outra maneira alterar

console.log(user);

const prop = 'name';
user[prop] = 'Gustavo'; //Outra forma de pegar também

function getProp(prop) {
    return user[prop];
}

console.log(user);

// Criar a propriedade não definida
user.lastName = 'Marciano'

console.log(user);

// Deleta a propriedade
delete user.name;