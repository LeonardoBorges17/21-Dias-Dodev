let nomes = []
let senhas = []
let contador = 0

let continuar = true

while(continuar) {
let opcao = prompt("O que deseja fazer?" + "1 - Cadastrar/ 2 - Login/ 3 - Excluir/ 4 - Encerrar")

switch(opcao) {
    case "1":
        nomes[contador] = prompt("Digite seu nome:")
        senhas[contador] = prompt("digite sua senha:")
        contador++
        break;

    case "2":
        let nome = prompt("Digite seu nome:")
        let senha = prompt("Digite sua senha:")
        let loginValido = false

        for (let i = 0; i < nomes.length; i++) {
            if (nome == nomes[i] && senha == senhas[i]) {
                loginValido = true
            } 
        }

        if (loginValido) {
            alert("Login feito com sucesso. Bem vindo!")
        } else {
            alert("Nome ou senha incorretos!")
        }
        break;

    case "3":
        let nomeExcluir = prompt("Digite seu nome:")
        let nomesAux = []
        let senhasAux = []
        let contadorAux = 0

        for (let i = 0; i < contador; i++) {
            if (nomeExcluir == nomes[i]) {
                alert("Cadastro excluido com sucesso!")
            } else {
                nomesAux[contadorAux] = nomes[i]
                senhasAux[contador] = senhas[i]
                contadorAux++
            }
        }

        nomes = nomesAux
        senhas = senhasAux
        contador--  
        break;

        case "4":
            continuar = false
            break;
        default:
            console.log("Opção inválida, escolha outra!")
            break;
}
}