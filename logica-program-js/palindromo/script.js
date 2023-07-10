const palavra = prompt("Digite uma palavra sem acentos").toUpperCase().trim()
const palavraSemEspaco = palavra.replace(/\s/g, "")
let palavraInvertida = "";

for (let index = palavraSemEspaco.length-1; index >= 0; index--) {
    palavraInvertida += palavraSemEspaco[index];
}

if (palavraSemEspaco == palavraInvertida) {
    alert(`A palavra ${palavra} é um palíndromo:
          Esquerda pra direita ${palavraSemEspaco}
          Direita pra esquerda ${palavraInvertida}`)
} else {
    alert(`A palavra ${palavra} não é um palíndromo:
    Esquerda pra direita ${palavraSemEspaco}
    Direita pra esquerda ${palavraInvertida}`)
}
