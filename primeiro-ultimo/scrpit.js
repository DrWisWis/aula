nomeCompleto = prompt("Escreva o seu nome completo: ")

function primeiroEUltimo(nome) {
    let partes = nome.trim().split(" ")
    let primeiro = partes[0]
    let ultimo = partes[partes.length - 1]

    return `${primeiro} ${ultimo}`

    // return primeiro, ultimo
}

let resultado = primeiroEUltimo(nomeCompleto)
alert("Primeiro e último nome: " + resultado)