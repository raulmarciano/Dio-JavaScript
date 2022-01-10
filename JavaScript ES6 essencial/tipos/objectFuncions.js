const user = {
    name: 'Raul',
    lastName: 'Marciano'
}

// Recupera as chaves do objeto (nome das propriedades)
console.log(Object.keys(user));
// ['name', 'lastName']

// Recupera os valores da chave do objeto
console.log(Object.values(user));
// ['Raul', 'Marciano']

// Retorna Array de Arrays com o nome da propriedade e valor
console.log(Object.entries(user));

// Merge propriedades de objetos (imutabilidade) não é a melhor forma para imutabilidade
// Adiciona a propriedade fullName no objeto de exemplo
Object.assign(user, {fullName: 'Marciano'});

// Igual ao anterior, mas cria um novo objeto, respeita a imutabilidade
Object.assign({}, user, {age: 24});

const newObj = { foo: 'bar' };
// Não é possível alterar além do ponteiro (padrão do const)
// Não commita as alterações feitas na propriedade após o freeze
// É possível escreve newObj.foo = 30, mas não é alterado 
Object.freeze(newObj);

const person = { name: 'Raul' }
// Mesma lógica do freeze, mas é possível alterar o valor da propriedade
Object.seal(person);
