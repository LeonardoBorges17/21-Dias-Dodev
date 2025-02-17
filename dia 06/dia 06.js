let numero = parseInt(prompt("Digite um número:"))
for (i = 0; i <= numero; i++) {
    console.log("O número atual é: " + i)
}

console.log("___________________________________________________")

let numero1 = 50

for (i = 0; i <= 50; i+= 5) {
    console.log("O número atual é: " + i)
}

console.log("___________________________________________________")

let numero2 = 50

for (i = 50; i >= 0; i-= 5) {
    console.log("O número atual é: " + i)
}

console.log("___________________________________________________")

let tabuada = parseInt(prompt("Digite um número para fazer a tabuada dele:"))

for (i = tabuada; i <= tabuada + 2; i++) {
    console.log("Tabuada do número: " + i)
    for (j = 0; j <= 10; j++) {
        console.log(i + " X " + j + " = " + (i * j))
    }
}