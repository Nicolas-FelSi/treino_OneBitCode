// const nameTourist = prompt("Qual seu Nome? ");
// alert("Olá " + nameTourist);
// const question = prompt("Já visitou alguma cidade? Sim/Não");
// var count = 0
// var countCity = ""

// if (question === "Sim") {
//   while (option !== "Não") {
//     var city = prompt("Qual o nome da cidade que você visitou? ");
//     var option = prompt("Visitou outra cidade? Sim/Não");
//     count ++
//     countCity += '\n - ' + city + ''
//   }
// } else {
//     alert('Saia mais de casa então.')
// }

// alert(nameTourist + ' visitou ' + count + ' cidades.' + 
//       '\nAs cidades visitadas foram ' + countCity);

const nomeTurista = prompt("Digite seu nome")
const visitouCidade = prompt("Já visitou alguma cidade? [S/N]").toUpperCase()

if (visitouCidade == "S" || visitouCidade == "SIM") { 
  let cidadeVisitada = "";
  let outraCidade;
  let contador = 0

  do {
    cidadeVisitada += prompt("Nome da cidade visitada") + ", "
    contador++
    outraCidade = prompt("Visitou outra cidade? [S/N]").toUpperCase()
  } while (outraCidade == "S" || outraCidade == "SIM");

  alert(`
      Turista ${nomeTurista} visitou ${contador} cidade(s) e elas são:
      ${cidadeVisitada}
  `)
} else if (visitouCidade == "N" || visitouCidade == "NÃO") {
  alert("Visite alguma cidade")
} else {
  alert("Opção inválida.")
}

