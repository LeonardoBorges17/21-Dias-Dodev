do {

let nome = prompt("Digite seu nome:")
let idade = parseInt(prompt("Digite sua idade:"))
let peso = prompt("Digite seu peso:")
let altura = prompt("Digite sua altura:")
let profissao = prompt("Digite sua profissão:")

console.log(`Olá ${nome}, você tem ${idade} anos, é ${profissao}, tem ${altura}M de altura e pesa ${peso}Kg`)

if (idade >= 18) {
    console.log("Está liberado para tomar umas geladas")
} else {
    console.log("Sem gelada para você")
}

let dias = idade * 365
let semanas = idade * 52
let meses = idade * 12

console.log(`${nome}, sua idade em meses é ${meses}, em semanas ${semanas}, e em dias ${dias}`)

let imc = peso / (altura * altura)

if (imc < 18,5) {
    console.log("Magreza")
} else if (imc = 18,5 && imc < 24,9) {
    console.log("Normal")
} else if (imc = 24,9 && imc < 30) {
    console.log("Sobrepeso")
} else if (imc >= 30) {
    console.log(Obesidade)
}

let ano = 2023
let anoNascimento = 2023 - idade
console.log("Você nasceu no ano de " + anoNascimento)

let anoVivido = anoNascimento
let idadeAtual = 0

for (let anoVivido = anoNascimento; anoVivido <= ano; anoVivido++) {
    console.log(anoVivido + " - " + idadeAtual + " anos de idade")
    idadeAtual++
}
    var continuar = prompt("Deseja inserir novos dados? S / N")
} while(continuar == "s")