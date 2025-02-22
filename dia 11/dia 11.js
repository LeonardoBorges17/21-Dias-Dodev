let nomes = []
let notas = []
let contador = 0
let continuar

do{
    let nome = prompt("Qual nome do aluno(a)?")
    let nota = parseInt(prompt("Qual foi a nota desse aluno(a)?"))
    nomes[contador] = nome
    notas[contador] = nota
    contador++

    let confirmar = prompt("Deseja inserir mais dados? S/N")
    if (confirmar == "s") {
        continuar = true
    } else {
        continuar = false
    }
} while(continuar)

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i] + " - " + notas[i])
}

let notaGeral = 0
for (let i = 0; i < notas.length; i++) {
    notaGeral += notas[i]
}

let mediaGeral = notaGeral / notas.length
console.log("A soma total das notas foi: " + notaGeral)
console.log(mediaGeral)
