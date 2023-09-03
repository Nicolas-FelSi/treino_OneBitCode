import { input, resultadoInput, teclasAceitas } from "./variaveis.js"
import { calcular } from "./funcaoCalcular.js"

export function keyDown(evento) {
    evento.preventDefault()
    if (teclasAceitas.includes(evento.key)) {
        input.value += evento.key
    } 
    if (evento.key === "Backspace") {
        input.value = input.value.slice(0, -1)
    }
    if (evento.key === "Enter") {
        calcular()
        input.value = ""
    }
}

export function charKey(charkey) {
    charkey.addEventListener("click", () => {
        const buttonKey = charkey.dataset.value
        input.value += buttonKey
    })
}

export function clearCalc() {
    input.value = ""
    input.focus()
}

export function equalKeyResult() {
    calcular()
}

export function buttonCopyClipboard(evento) {
    const button = evento.currentTarget
    if (button.innerText === "Copy") {
        button.classList.add("success")
        button.innerText = "Copied!"
        navigator.clipboard.writeText(resultadoInput.value)
    } else {
        button.classList.remove("success")
        button.innerText = "Copy"
    }
}