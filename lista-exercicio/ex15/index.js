let altura = Number(prompt("Digite sua Altura: "))
let peso = Number(prompt("Digite seu peso: "))
let imc

imc = peso/(altura*altura)

if(imc < 18.5){
    alert("Você esta abaixo do peso")
} else if(imc >=18.5 && imc <= 24.9) {
    alert("Você esta no peso ideal")
} else if(imc >= 25 && imc <= 29.9) {
    alert("Você esta a cima do peso")
} else {
    alert("Você esta a cima do peso")
}