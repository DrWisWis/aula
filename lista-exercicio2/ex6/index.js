function parImpar(a) {
    resultado = a % 2
    if (resultado = 0){
        return alert(`O seu numero é par`)
    } else {
        return alert(`O seu numero é impar`)
    }
}

num1 = Number(prompt("Escreva um numero: "))

parImpar(num1)