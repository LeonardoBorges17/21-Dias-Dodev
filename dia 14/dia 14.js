var nome
var salario

function Informacoes() {
    nome = prompt("Digite seu nome:")
    salario = parseInt(prompt("Digite seu salário:"))
    CalculoAumento(nome, salario)
}

function CalculoAumento(nome, salario) {
    var aumento = 0

    if(salario <= 1500) {
        aumento = 0.2
    } else if(salario > 1500 && salario <= 2000) {
        aumento = 0.15
    } else if(salario > 2000 && salario <= 3000) {
        aumento = 0.1
    } else if(salario > 3000) {
        aumento = 0.05
    }

    var novoSalario = salario + (salario * aumento)

    console.log("Nome do colaborador: " + nome)
    console.log("Salário: R$" + salario)
    console.log("Aumento: " + (aumento * 100) + "%")
    console.log("Salário reajustado: R$" + novoSalario)

    perguntarNovamente()
}

function perguntarNovamente() {
    var resposta = prompt("Deseja calcular novamente? (s/n)")

    if (resposta == "s") {
        Informacoes()
    } else {
        console.log("Programa encerrado.")
    }
}