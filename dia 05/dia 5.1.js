var opcao = prompt("Qual das opções deseja fazer?" + "1 - Abastecer com gasolina \ 2 - abastecer com álcool \ 3 - calibrar os pneus")
var valor
var quantidade

switch(opcao) {
    case "1":
    quantidade = parseInt(prompt("Quanto deseja abastecer com gasolina?"))
    valor = 5
    console.log("Foi abastecido: " + (quantidade / valor) + " Litros de gasolina")
    break
    case "2":
    quantidade = parseInt(prompt("Quanto deseja abastecer com álcool?"))
    valor = 3
    console.log("Foi abastecido: " + (quantidade / valor) + " Litros de álcool")
    break
    case "3":
        console.log("Pneus calibrados com sucesso")
    break
    }