let number
let tabuada
let total

for(tabuada = 1; tabuada <= 10; tabuada++){
    console.log(`Tabuada do ${tabuada}`)
    for(number = 0; number <= 10; number++){
        total = number * tabuada
        console.log(`${number} x ${tabuada} = ${total}`)
    }
    console.log("\n")
}