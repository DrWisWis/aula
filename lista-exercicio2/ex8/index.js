function idade(age) {
    if(age < 18) {
        alert("Vc é menor de idade!")
    } else {
        alert("Vc é maior de idade!")
    }
}

age = Number(prompt("Qual a sua idade? "))

idade(age)