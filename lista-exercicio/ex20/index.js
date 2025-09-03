let nota_um
let nota_dois
let nota_tres
let nota

nota_um = prompt("Qual foi a sua primeira nota? ")
nota_dois = prompt("Qual foi a sua segunda nota? ")
nota_tres = prompt("Qual foi a sua terceira nota? ")

nota = (nota_um + nota_dois + nota_tres) / 3

if (nota > 7){
    alert("vc foi aprovado")
} else if (nota < 7 && nota >= 5) {
    alert("vc esta de recuperação") }
else {
    alert("vc esta reprovado")
}