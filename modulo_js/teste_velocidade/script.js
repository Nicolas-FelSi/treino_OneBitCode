const veiculo1 = prompt('Qual o nome do seu veículo? ')
const velo1 = parseFloat(prompt('Qual a velocidade do seu veículo? '))
const veiculo2 = prompt('Qual o nome do seu veículo? ')
const velo2 = parseFloat(prompt('Qual a velocidade do seu veículo? '))

if (velo1 > velo2) {
    alert('O veículo '+veiculo1+ ' é mais rápido.')
} else if (velo1 < velo2) {
    alert('O veículo '+veiculo2+ ' é mais rápido.')
} else {
    alert('Os veículos estão com a mesma velocidade.')
}