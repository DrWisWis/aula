function areaQuadrado(lado) {
    let resultado
    resultado = lado * lado
    alert(`a area do seu quadrado é de ${resultado}`)
}

let lado = Number(prompt("qual é o lado do seu quadrado? "))

areaQuadrado(lado)