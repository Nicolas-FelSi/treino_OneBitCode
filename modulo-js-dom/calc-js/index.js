const input = document.getElementById("input")
const main = document.querySelector("main")
const root = document.querySelector(":root")
const resultadoInput = document.getElementById("result")
const teclasAceitas = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

input.addEventListener("keydown", (evento) => {
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
})

document.querySelectorAll(".charKey").forEach( charkey => {
    charkey.addEventListener("click", () => {
        const buttonKey = charkey.dataset.value
        input.value += buttonKey
    })
} )

document.getElementById("clear").addEventListener("click", () => {
    input.value = ""
    input.focus()
})

document.getElementById("equal").addEventListener("click", () => {
    calcular()
})

document.getElementById("themeSwitcher").addEventListener("click", () => {
    if (main.dataset.theme === "dark") {
        root.style.setProperty("--bg-color", "f1f5f9")
        root.style.setProperty("--border-color", "#aaa")
        root.style.setProperty("--font-color", "#212529")
        root.style.setProperty("--primary-color", "#26834a")
        main.dataset.theme = "light"
    } else {
        root.style.setProperty("--bg-color", "#212529")
        root.style.setProperty("--border-color", "#666")
        root.style.setProperty("--font-color", "#f1f5f9")
        root.style.setProperty("--primary-color", "#4dff91")
        main.dataset.theme = "dark"
    }
})

document.getElementById("copyToClipboard").addEventListener("click", (evento) => {
    const button = evento.currentTarget
    if (button.innerText === "Copy") {
        button.classList.add("success")
        button.innerText = "Copied!"
        navigator.clipboard.writeText(resultadoInput.value)
    } else {
        button.classList.remove("success")
        button.innerText = "Copy"
    }
})

function calcular() {
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