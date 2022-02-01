console.log("Lista de exercícios - Exercício 1");

console.log(10 + 15); //25 numero
console.log("10" + 2); //'102' string
console.log("10" * 2); // 20 numero
console.log("10" / 3); //3.33333... float
console.log("10" % 3); //1 numero
console.log(10 + true); //11 numero
console.log(10 == "10"); // true boolean
console.log(10 === "10"); //false boolean
console.log(10 < 11); //true boolean
console.log(10 > 12); //false boolean
console.log(10 <= 10.1); //true boolean
console.log(10 > 9.99); //true boolean
console.log(10 != "dez"); //true boolean
console.log(10 + true); //11 numero
console.log("dez" + true); //'deztrue' string
console.log(10 + false); //10 numero
console.log(10 * false); //0 numero
console.log(true + true); //2 numero
//console.log(10++); deu erro
//console.log(10--); deu erro
console.log(1 & 1); //1 numero
console.log(1 & 0); //0 numero
console.log(0 & 0); //0 numero
console.log(0 & 1); //0 numero
console.log(0 / 1); //0 numero
console.log(5 + 5 == 10); //true boolean
console.log("5" + "5" == 10); //false boolean
console.log("5" * 2 > 9); //true boolean
console.log((10 + 10) * 2); //40 numero
console.log(10 + 10 * 2); //30 numero

console.log("Lista de exercício - Exercício 2");

var branco = "preto";
var preto = "cinza";
var cinza = "branco";
var carro = "preto";
var valor = 30000;
var prestacao = 750;

console.log(branco == "branco"); //false
console.log(branco == cinza); //false
console.log(carro === branco); //true

var cavalo = carro == "preto" ? "cinza" : "marrom";
console.log(cavalo); //'cinza'

console.log(
  "Quantas prestações são necessárias para pagar o valor do carro com uma entradade 3.000? Demonstre a operação."
);
var parcelas = valor - 3000;
var nparcelas = parcelas / 750;
console.log(nparcelas); //36

console.log(
  "Somando as variáveis de cores é formada uma string de quantos caracteres?"
);
var string = branco + preto + cinza;
console.log(string.length); //16
