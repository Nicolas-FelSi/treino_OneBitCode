// let num1 = parseInt(prompt('Insira o Primeiro número: '))
// let num2 = parseInt(prompt('Insira o Segundo Número: '))
// let soma = num1 + num2
// let sub = num1 - num2
// let mult = num1 * num2
// let div = num1 / num2

// alert('Soma entre ' + num1 + ' e ' + num2 + ' é ' + soma +
//       '\nSubtração entre ' + num1 + ' e ' + num2 + ' é ' + sub +
//       '\nMultiplicação entre ' + num1 + ' e ' + num2 + ' é ' + mult +
//       '\nDivisão entre ' + num1 + ' e ' + num2 + ' é ' + div
// )

// console.log('Soma: ' + soma)
// console.log('Subtração: ' + sub)
// console.log('Multiplicação: ' + mult)
// console.log('Divisão: ' + div)

const primeiroNumero = Number(prompt("Digite o primeiro número:"))
const segundoNumero = Number(prompt("Digite o segundo Número"))
const soma = primeiroNumero + segundoNumero
const subtracao = primeiroNumero - segundoNumero
const multiplicacao = primeiroNumero * segundoNumero
const divisao = primeiroNumero / segundoNumero

alert(`
      Números escolhidos: ${primeiroNumero} e ${segundoNumero}
      Soma: ${soma}
      Subtração: ${subtracao}
      Multiplicação: ${multiplicacao}
      Divisão: ${divisao}
`)