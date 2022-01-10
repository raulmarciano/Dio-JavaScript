const users = ['Raul', 'Marciano', 'Ligia'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
    {
        name: 'Raul',
        age: 24,
        gender: gender.MAN
    },
    {
        name: 'Gustavo',
        age: 22,
        gender: gender.MAN
    },
    {
        name: 'Jessica',
        age: 31,
        gender: gender.WOMAN
    }
]

// Quantos itens no Array
console.log(persons.length);

// Verifica se é array
console.log(Array.isArray(persons));

// Iterar os itens do array
persons.forEach((persons, index, arr) => {
    console.log(`Nome: ${persons.name}}`);
});

// Filtrar Array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log(mens);

// Retorna um novo Array Imutabilidade
const personsWithCourse = persons.map(person => {
    person.course = 'Introdução ao JavaScript';
    return person;
})
console.log(personsWithCourse);

// Transforma um array em outro tipo
const totalAge = persons.reduce((age, person) => {
    age + person.age;
    return age;
}, 0);
console.log(totalAge);

// Juntando operações
const totalEvenAges = persons
                        .filter(person => persons.age % 2 === 0)
                        .reduce((age, person) => {
                            age += person.age;
                            return age;
                        }, 0);
console.log(totalEvenAges);