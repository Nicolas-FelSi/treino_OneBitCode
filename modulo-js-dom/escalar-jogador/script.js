let posJogador = document.getElementById("posJogador")
let nomeJogador = document.getElementById("nomeJogador")
let numeroCamisa = document.getElementById("numeroCamisa")
const section = document.getElementById("jogadoresEscalados")
const escalarForm = document.getElementById("escalarForm")
const removerForm = document.getElementById("removerForm")

escalarForm.addEventListener("submit", escalarJogador)
removerForm.addEventListener("submit", removerJogador)

function escalarJogador(evento) {
    evento.preventDefault()
    const confirmEscalacao = confirm(`
    Dados do jogador
    Posição: ${posJogador.value}
    Nome: ${nomeJogador.value}
    Número da camisa: ${numeroCamisa.value}
    `)

    if (!confirmEscalacao) {
        alert("Jogador não escalado.")
        return
    }

    const div = document.createElement("div")
    div.id = `id${numeroCamisa}`

    const h3 = document.createElement("h3")
    h3.innerText = "Jogador"

    const ul = document.createElement("ul")

    const liPosJogador = document.createElement("li")
    liPosJogador.innerText = `Posição: ${posJogador.value}`
    const liNomeJogador = document.createElement("li")
    liNomeJogador.innerText = `Nome: ${nomeJogador.value}`
    const liNumCamisa = document.createElement("li")
    liNumCamisa.innerText = `Número da camisa: ${numeroCamisa.value}`

    ul.append(liPosJogador, liNomeJogador, liNumCamisa)
    div.append(h3, ul)
    section.appendChild(div)

    posJogador.value = ""
    nomeJogador.value = ""
    numeroCamisa.value = ""
}

function removerJogador(evento) {
    evento.preventDefault()
    const inputNumeroRemover = document.getElementById("numeroCamisaRemover")
    const numeroCamisaRemover = document.getElementById(`id${inputNumeroRemover}`)
    const confirmRemover = confirm(`
    Deseja remover o jogador camisa ${inputNumeroRemover.value}?
    `)

    if (confirmRemover) {
        numeroCamisaRemover.remove()
    } else {
        alert("Remoção cancelada")
    }
}



    
