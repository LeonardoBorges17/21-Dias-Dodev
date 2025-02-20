do {
    
var nome = prompt("Digite seu nome:")
var idade = parseInt(prompt("Digite sua idade:"))
var salario = parseInt(prompt("Digite seu salário:"))

console.log(`${nome}, você tem ${idade} anos de idade, e recebe mensalmente um salário de $${salario} Reais`)

var continuar = prompt("Você confirma as informações citadas? S / N")
} while(continuar == "n")


let aumento = 0.015
console.log("Previsão salarial para os próximos 10 anos:")

for (let ano = 1; ano <= 10; ano++) {
    salario += salario * aumento
    aumento *= 2

    console.log((2023 + ano) + " = R$ " + salario)
}