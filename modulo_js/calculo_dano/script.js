const attacker = prompt('Nome do Atacante: ')
const attack = parseInt(prompt('Pontos de Ataque: '))
alert('Nome: ' + attacker +
      '\nPoder de Ataque: ' + attack)

const defenser = prompt('Nome do Defensor: ')
const life = parseInt(prompt('Pontos de Vida: '))
const defense = parseInt(prompt('Pontos de Defesa'))
const shield = confirm('Possui Escudo?')

if (shield == true) {
    var result = 'Sim'
} else {
    var result = 'Não' 
}


alert('Nome: ' + defenser +
      '\nPontos de Vida: ' + life +
      '\nPontos de Defesa: ' + defense +
      '\nPossui Escudo? ' + result
)

alert(attacker + ' VS ' + defenser)

if (attack > defense && shield == false) {
    var damage = attack - defense 
    alert(defenser + ' recebeu ' + damage + ' de dano')
} else if (attack > defense && shield == true) {
    var damage = (attack - defense)/2
    alert(defenser + ' recebeu ' + damage + ' de dano')
} else if (attack <= defense) {
    var damage = 0
    alert(defenser + ' recebeu ' + damage + ' de dano')
}

alert('Vida de ' + defenser + ' foi de '  + life + ' para ' + (life-damage))