// const veiculo1 = prompt('Qual o nome do seu veículo? ')
// const velo1 = parseFloat(prompt('Qual a velocidade do seu veículo? '))
// const veiculo2 = prompt('Qual o nome do seu veículo? ')
// const velo2 = parseFloat(prompt('Qual a velocidade do seu veículo? '))

// if (velo1 > velo2) {
//     alert('O veículo '+veiculo1+ ' é mais rápido.')
// } else if (velo1 < velo2) {
//     alert('O veículo '+veiculo2+ ' é mais rápido.')
// } else {
//     alert('Os veículos estão com a mesma velocidade.')
// }

const primeiroVeiculo = prompt("Nome do primeiro veículo:")
const velocidadePrimeiroVeiculo = Number(prompt("Velocidade do primeiro veículo:"))
const segundoVeiculo = prompt("Nome do segundo veículo:")
const velocidadeSegundoVeiculo = Number(prompt("Velocidade do segundo veículo:"))

if (velocidadePrimeiroVeiculo > velocidadeSegundoVeiculo) {
    alert(`O veículo ${primeiroVeiculo} é mais rápido que o ${segundoVeiculo}`)
} else if (velocidadePrimeiroVeiculo < velocidadeSegundoVeiculo) {
    alert(`O veículo ${primeiroVeiculo} é mais devagar que o ${segundoVeiculo}`)
} else {
    alert(`Os veículos tem a mesma velocidade. `)
}