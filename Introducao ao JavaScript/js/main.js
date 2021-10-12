var nome = "Raul Marciano";
var idade = 24;
var idadeMais = 1;
var so = "Windows 10";

//alert(nome + " tem " + idade + " anos");
//alert("Idade ano que vem " + (idade + idadeMais));

console.log(idade);
console.log(so.replace("10", "11"));
console.log(so.toUpperCase());

//listas

var lista = ["Maçã", "Banana", "Mamão"];
console.log(lista[1]);
lista.push("Uva");

console.log(lista);
lista.pop();
console.log(lista);
console.log(lista.reverse())
console.log(lista.length)
console.log(lista.toString())
console.log(lista.toString()[0])
console.log(lista.join(", "));

//dicionarios
var fruta = {nome: "Banana", cor: "Amarelo"};
console.log(fruta.nome);

var frutas = [{nome: "Banana", cor: "Amarelo"}, {nome: "Melancia", cor: "Verde"}];
console.log(frutas[1].cor);

//condicionais

var idadeUsuario = 0; //prompt("Digite sua idade");

if(idadeUsuario > 20)
    console.log("Já paga boleto em");
else
    console.log("O boletos ainda vão vim kk");

//laços

var count = 0;

while(count < 5) {
    console.log(count)
    count++;
}

for(countFor = 0; count < 5; count++) {
    console.log(countFor);
};

//Date

var data = new Date();
console.log(data);
console.log(data.getMonth() + 1); // + 1 porque o mês começa em zero

//Functions

function Soma(n1, n2) {
    return n1 + n2;
}

function Media(n1, n2) {
    var somatorio = Soma(n1, n2)
    return somatorio / 2;
}

console.log(Soma(5, 10));
console.log(Media(5, 10));

//Eventos onclick e outros

function CliqueBotao() {
    //alert("Clicou");
    document.getElementById("Clique").innerHTML = "<b>Obrigado por clicar</b>";
}

function ClickAmericanas() {
    window.open("https://www.americanas.com.br");
    //window.location.href = "https://web.digitalinnovation.one/home";
}

function TrocarTexto(elemento) {
    elemento.innerHTML = "Passou o mouse";
}

function Load() {
    console.log("Página carregada");
}

function SelecionaOpcao(elemento) {
    console.log("Mudou a opção para " + elemento.value)
}