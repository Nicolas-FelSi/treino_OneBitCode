// do {
//   var option = prompt(
//     "Qual opção você escolhe? " +
//       "\nA) Série" +
//       "\nB) Filme" +
//       "\nC) PC" +
//       "\nD) XBOX" +
//       "\nE) PS5" +
//       "\nF) Encerrar"
//   );
//   if (option === "A") {
//     alert("Você escolheu Série");
//   } else if (option === "B") {
//     alert("Você escolheu Filme");
//   } else if (option === "C") {
//     alert("Você escolheu PC");
//   } else if (option === "D") {
//     alert("Você escolheu XBOX");
//   } else if (option === "E") {
//     alert("Você escolheu PS5");
//   } else {
//     alert('Opção Inválida. Tente Novamente.')
//   }
// } while (option !== "F");

// alert("Sistema Encerrando..." + "\nEncerrado");

let escolha;

while (escolha != 5) {
  escolha = parseInt(prompt(`
    1) PC
    2) PS
    3) XBOX
    4) Nintendo
    5) Sair
  `))

  switch (escolha) {
    case 1:
      alert("PC")
      break;
    case 2:
      alert("PS")
      break;
    case 3:
      alert("XBOX")
      break;
    case 4:
      alert("Nintendo")
      break;
    case 5:
      alert("Saindo...")
      break;
    default:
      alert("Opção inválida. Tente Novamente.")
      break;
  }
}