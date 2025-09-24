function fatorial(a) {
    let resultado = 1
    let i = a
    while (i > 0) {
        resultado *= i
        i--
    }
    alert(`O fatorial deste numero é ${resultado}`)
}

let num = Number(prompt("Qual o numero que deseja fatoriar? "))

fatorial(num)