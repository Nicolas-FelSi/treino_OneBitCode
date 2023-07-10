const numeroTabuada = parseInt(prompt("Digite um número para ver a tabuada"))
let tabuada = ""

for (let index = 1; index <= 20; index++) {
    tabuada += `\n${numeroTabuada} x ${index} = ${numeroTabuada*index}`
}

alert(tabuada)
