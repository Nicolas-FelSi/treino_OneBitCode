var amountMoney = parseFloat(prompt("Quanto você tem de dinheiro? "));

do {
  var option = prompt(
    "Você tem a quantia: " +
      amountMoney +
      "\nA) Adicionar dinheiro." +
      "\nB) Remover dinheiro." +
      "\nC) Sair."
  );
  // 1º FORMA
  if (option === 'A') {
    let sum = parseFloat(prompt('Quanto você quer adicionar?'))
    amountMoney += + sum
  } else if (option === 'B') {
    let sub = parseFloat(prompt('Quanto você quer remover?'))
    amountMoney += - sub
  } else if (option !== 'C' && 'A' && 'B'){
    alert('Opção inválida. Tente Novamente')
  }
  // 2º FORMA
  // switch (option) {
  //   case "A":
  //     let sum = parseFloat(prompt("Quanto você quer adicionar?"));
  //     amountMoney += +sum;
  //     break;
  //   case "B":
  //     let sub = parseFloat(prompt("Quanto você quer remover?"));
  //     amountMoney += -sub;
  //     break;
  //   case "C":
  //     alert("Encerrando programa..." + "Encerrado.");     
  //     break;
  //   default:
  //     alert("Opção inválida. Tente Novamente");
  //     break;
  // }
} while (option !== "C");

alert("Encerrando programa..." + "Encerrado.")
