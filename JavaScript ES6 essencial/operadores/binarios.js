// in
something in somethingItens

// Array
var arvores = new Array("pau-brasil", "loureiro", "cedro", "carvalho", "sincômoro");
0 in arvores; // true
3 in arvores; // true
6 in arvores; // false

"cedro" in arvores[2]; // true, necessários especificar o índice
"length" in arvores; // true, length é uma propriedade para array e string

// Objetos predefinidos
"PI" in Math // retorna true

// Verificar se a propriedade existe dentro do objeto
var meucarro = {marca: "Honda", modelo: "Accord", ano: 1998};
"marca" in meucarro; // true
"modelo" in meucarro; // true

// Verifica se é uma instância de alguma coisa
objeto instanceof TipoObjeto

var dia = new Date(2019, 11, 18);

if (dia instanceof Date) {
    // code
}