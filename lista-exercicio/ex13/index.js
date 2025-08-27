const usuario = "admin"
const senha = 1234

let usuarioVerificacao
let senhaverificacao

usuarioVerificacao = prompt("Digite o usuario: ")
senhaverificacao = prompt ("Digite a senha: ")

if(senha == senhaverificacao && usuario == usuarioVerificacao){
    alert("Você esta logado")
} else {
    alert("Senha ou Usuario errado tente novamente")
}