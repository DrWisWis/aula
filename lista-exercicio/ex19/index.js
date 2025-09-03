let lado_um = Number(prompt("Escreva o tamanho do primeiro lado: "))
let lado_dois = Number(prompt("Escreva o tamanho do segundo lado: "))
let lado_tres = Number(prompt("Escreva o tamanho do terceiro lado: "))

if (lado_tres < lado_dois+lado_um) {
    alert("Esse é um triangulo")
} else {
    alert("Isto não pe um triangulo")
}