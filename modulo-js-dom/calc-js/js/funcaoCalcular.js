import { input, resultadoInput } from "./variaveis.js"

export function calcular() {
    resultadoInput.value = "ERROR"
    resultadoInput.classList.add("error")
    const resultado = eval(input.value)
    if (resultado === undefined) {
        resultadoInput.value = "ERROR"
        return
    }
    resultadoInput.value = resultado
    resultadoInput.classList.remove("error")
}