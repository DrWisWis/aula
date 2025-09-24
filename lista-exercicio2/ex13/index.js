function area(raio) {
    let area
    area = Math.PI * (raio * raio)
    alert(`A area do circulo é de ${area}`)
}


let r = Number(prompt("Qual é o raio do seu circulo? "))
area(r)