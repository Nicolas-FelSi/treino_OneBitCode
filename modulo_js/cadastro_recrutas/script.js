let primeiroNome= prompt("Primeiro Nome: ")
let sobrenome = prompt("Sobrenome")
let estuda = prompt("Campo de Estudos:")
let anoNasc = prompt("Ano de Nascimento:")

alert('Bem-Vindo ' + primeiroNome +' '+ sobrenome)
alert('Dados do Candidato: ' +
      '\nNome Completo: ' + primeiroNome +' '+ sobrenome +
      '\nÁrea Pretendida: ' + estuda +
      '\nIdade: ' + (2022 - anoNasc) + 'anos'
)

console.log('Nome Completo: ' + primeiroNome +' '+ sobrenome)
console.log('Campo de Estudos: ' + estuda)
console.log('Idade: ' + (2022 - anoNasc) + ' anos')
