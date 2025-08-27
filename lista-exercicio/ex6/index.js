let a, b, total, operacao
a = prompt("Digite o primeiro valor")
b = prompt("Digite o segundo valor")

operacao = prompt("Escreva qual operação deseja fazer: 1-soma, 2-subtração, 3-multiplicação, 4-divisão")

switch (operacao) {
    case "1":
        total = a + b
        alert(`a soma do valores é de: ${total}`)
        break;
    case "2":
        total = a - b
        alert(`a subtração do valores é de: ${total}`)
        break;
    case "3":
        total = a * b
        alert(`a multiplicação do valores é de: ${total}`)
        break;
    case "4":
        total = a / b
        alert(`a divisão do valores é de: ${total}`)
        break;

    default:
        break;
}