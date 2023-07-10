// const attacker = prompt('Nome do Atacante: ')
// const attack = parseInt(prompt('Pontos de Ataque: '))
// alert('Nome: ' + attacker +
//       '\nPoder de Ataque: ' + attack)

// const defenser = prompt('Nome do Defensor: ')
// const life = parseInt(prompt('Pontos de Vida: '))
// const defense = parseInt(prompt('Pontos de Defesa'))
// const shield = confirm('Possui Escudo?')

// if (shield == true) {
//     var result = 'Sim'
// } else {
//     var result = 'Não' 
// }


// alert('Nome: ' + defenser +
//       '\nPontos de Vida: ' + life +
//       '\nPontos de Defesa: ' + defense +
//       '\nPossui Escudo? ' + result
// )

// alert(attacker + ' VS ' + defenser)

// if (attack > defense && shield == false) {
//     var damage = attack - defense 
//     alert(defenser + ' recebeu ' + damage + ' de dano')
// } else if (attack > defense && shield == true) {
//     var damage = (attack - defense)/2
//     alert(defenser + ' recebeu ' + damage + ' de dano')
// } else if (attack <= defense) {
//     var damage = 0
//     alert(defenser + ' recebeu ' + damage + ' de dano')
// }

// alert('Vida de ' + defenser + ' foi de '  + life + ' para ' + (life-damage))

const atacante = prompt("Digite o nome do atacante")
const atacantePoderDeAtaque = Number(prompt("Digite seu poder de ataque"))
const defensor = prompt("Digite o nome do defensor")
const defensorPontosDeVida = Number(prompt("Digite seus pontos de vida"))
const defensorPoderDeDefesa = Number(prompt("Digite seu poder de defesa"))
const defensorEscudo = confirm('Possui escudo? Sim para "Possui", cancelar para "Não possui"')
const escudo = defensorEscudo ? "Sim" : "Não"

alert(`
    Nome do atacante: ${atacante}
    Poder de ataque do ${atacante}: ${atacantePoderDeAtaque}
    Nome do defensor: ${defensor}
    Pontos de vida do ${defensor}: ${defensorPontosDeVida}
    Poder de defesa do ${defensor}: ${defensorPoderDeDefesa}
    ${defensor} possui escudo? ${escudo}
`)

let dano;

if (atacantePoderDeAtaque > defensorPoderDeDefesa && !defensorEscudo) {
    dano = atacantePoderDeAtaque - defensorPoderDeDefesa
} else if (atacantePoderDeAtaque > defensorPoderDeDefesa && defensorEscudo) {
    dano = (atacantePoderDeAtaque - defensorPoderDeDefesa)/2
} else if (atacantePoderDeAtaque < defensorPoderDeDefesa || atacantePoderDeAtaque == defensorPoderDeDefesa) {
    dano = 0
}

alert(`
    Dano que o ${defensor} levou: ${dano}
    Pontos de vida do ${defensor}: ${defensorPontosDeVida - dano}
`)