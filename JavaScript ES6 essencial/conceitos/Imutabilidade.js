// Imutabilidade: Variável ou objeto nunca irá mudar
// É criada uma nova variável para poder usar o valor de uma variável já iniciada

const user = {
    name: 'Raul',
    lastName: 'Marciano'
};

function getUserWithFullName(user) {
    return {
        ...user, //Spread Operator: Usado ...variavel para usar como imutabilidade
        fullname: `${user.name} ${user.lastName}`
    }
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName, user);

// Outro exemplo

const students = [
    {
        name: 'Grace',
        grade: 7
    },
    {
        name: 'Jennifer',
        grade: 4
    },
    {
        name: 'Paul',
        grade: 10
    }
];

function getApprovadedStudents(studentsList) {
    return studentsList.filter(student => student.grade >= 7);
}

console.log('Alunos Aprovados');
console.log(getApprovadedStudents(students));

console.log('\nLista de alunos:');
console.log(students);