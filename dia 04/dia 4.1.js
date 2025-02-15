var nome = prompt("Digite seu nome:")
var idade = parseInt(prompt("Digite sua idade:"))
var carta = prompt("Você tem carteira de motorista?")
var carro = prompt("Você tem carro?")

if (idade <= 17 || carta == "n") {
    console.log(nome + ", Você não pode dirigir")
} else if (idade >= 18 && carta == "s" && carro == "n") {
    console.log(nome + ", você pode dirigir mas não tem um carro")
} else if (idade >= 18 && carta == "s" && carro == "s") {
    console.log(nome + ", Você será o motorista!")
}