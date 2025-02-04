var nome = prompt("Digite seu nome:")
var idade = prompt("Digite sua idade:")
var altura = prompt("Digite sua altura:")
var peso = prompt("Digite seu peso:")

var ano = 2023 - idade

var imc = peso / (altura * altura)

console.log("Olá " + nome + " Você tem " + idade + " anos, nasceu em " + ano + ", tem " + altura + " de altura, pesa " + peso + "kg seu IMC é " + imc + " kg/m²")