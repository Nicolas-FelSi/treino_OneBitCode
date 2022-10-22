do {
  var option = prompt(
    "Qual opção você escolhe? " +
      "\nA) Série" +
      "\nB) Filme" +
      "\nC) PC" +
      "\nD) XBOX" +
      "\nE) PS5" +
      "\nF) Encerrar"
  );
  if (option === "A") {
    alert("Você escolheu Série");
  } else if (option === "B") {
    alert("Você escolheu Filme");
  } else if (option === "C") {
    alert("Você escolheu PC");
  } else if (option === "D") {
    alert("Você escolheu XBOX");
  } else if (option === "E") {
    alert("Você escolheu PS5");
  } else {
    alert('Opção Inválida. Tente Novamente.')
  }
} while (option !== "F");

alert("Sistema Encerrando..." + "\nEncerrado");
