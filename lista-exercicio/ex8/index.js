let valorCompra

valorCompra = prompt("Qual o valor da sua compra? ")

if(valorCompra > 100){
    valorCompra = valorCompra-(valorCompra/100)*10
    alert("A sua compra foi aplicado um desconto de 10%", valorCompra)
} else {
    alert("Não teve desconto na sua compra")
}