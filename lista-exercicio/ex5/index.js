let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));
let operacao = prompt("Digite a operação desejada (+, -, *, /):");

let resultado;

if (operacao === "+") {
  resultado = numero1 + numero2;
} else if (operacao === "-") {
  resultado = numero1 - numero2;
} else if (operacao === "*") {
  resultado = numero1 * numero2;
} else if (operacao === "/") {
  if (numero2 !== 0) {
    resultado = numero1 / numero2;
  } else {
    resultado = "Erro: divisão por zero!";
  }
} else {
  resultado = "Operação inválida!";
}

alert("Resultado: " + resultado);