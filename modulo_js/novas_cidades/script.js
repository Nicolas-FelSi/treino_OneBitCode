const nameTourist = prompt("Qual seu Nome? ");
alert("Olá " + nameTourist);
const question = prompt("Já visitou alguma cidade? Sim/Não");
var count = 0
var countCity = ""

if (question === "Sim") {
  while (option !== "Não") {
    var city = prompt("Qual o nome da cidade que você visitou? ");
    var option = prompt("Visitou outra cidade? Sim/Não");
    count ++
    countCity += '\n - ' + city + ''
  }
} else {
    alert('Saia mais de casa então.')
}

alert(nameTourist + ' visitou ' + count + ' cidades.' + 
      '\nAs cidades visitadas foram ' + countCity);
