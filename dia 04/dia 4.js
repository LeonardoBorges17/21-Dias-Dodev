var fome = prompt("Você está com fome? (s/n)")
var dinheiro = prompt("Você tem dinheiro? (s/n)")
var restaurante = prompt("tem algum restaurante aberto? (s/n)")

if (fome == "n" || dinheiro == "n") {
    console.log("Hoje a janta será em casa")
} else if (fome == "s" && dinheiro == "s" && restaurante == "n") {
    console.log("Peça um delivery!")
} else if (fome == "s" && dinheiro == "s" && restaurante == "s") {
    console.log("Hoje o jantar será no seu restaurante preferido!")
}