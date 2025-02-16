var n1 = parseInt(prompt("Digite um número:"))
var n2 = parseInt(prompt("Digite outro número:"))
var operacao = prompt("Qual operação deseja fazer com os valores que você digitou?" + "\ 1 - + \ 2 - - \ 3 - * \ 4 - /")

switch(operacao) {
    case "1":
        console.log("O resultado de " + n1 + " + " + n2 + " é: " + (n1 + n2))
    break
    case "2":
        console.log("O resultado de " + n1 + " - " + n2 + " é: " + (n1 - n2))
    break
    case "3":
        console.log("O resultado de " + n1 + " * " + n2 + " é: " + (n1 * n2))
    break
    case "4":
        console.log("O resultado de " + n1 + " / " + n2 + " é: " + (n1 / n2))
    break
    default:
        console.log("Selecione um número de 1 a 4")
    break
}