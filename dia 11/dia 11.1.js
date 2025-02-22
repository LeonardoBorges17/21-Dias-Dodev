let modelos = []
let anos = []
let valores = []
let contador = 0
let continuar = true

while(continuar) {
    let modelo = prompt("Digite um modelo de carro:")
    let ano = parseInt(prompt("Digite o ano do carro:"))
    let valor = parseInt(prompt("Digite o valor do veículo:"))
    modelos[contador] = modelo
    anos[contador] = ano
    valores[contador] = valor
    contador++

    let confirmar = prompt("Deseja inserir mais veículos? S/N")
    if(confirmar == "n") {
        continuar = false
}
}

console.log("Carros cadastrados:")
for (let i = 0; i <= modelos.length; i++) {
    console.log("O Modelo do veículo é: " + modelos[i] + ", O ano do veículo é: " + anos[i] + ", O valor do veículo é: " + valores[i])
}

for (let i = 0; i < valores.length - 1; i++) {
    for (let j = 0; j < valores.length - i - 1; j++) {
        if (valores[j] > valores[j + 1]) {

            let modeloMaiorValor = modelos[j]
            modelos[j] = modelos[j + 1]
            modelos[j + 1] = modeloMaiorValor
            
            let anoMaiorValor = anos[j]
            anos[j] = anos[j + 1]
            anos[j + 1] = anoMaiorValor

            let maiorValor = valores[j]
            valores[j] = valores[j + 1]
            valores[j + 1] = maiorValor
        }
    }
}

console.log("Carros ordenados pelo preço:")
for (let i = 0; i < modelos.length; i++) {
    console.log(modelos[i] + " - " + anos[i] + " - " + valores[i])
}