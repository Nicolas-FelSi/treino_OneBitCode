const imoveisCadastrados = [];
let escolha = 0;

while (escolha != 3) {
  escolha = parseInt(
    prompt(
      "Imovéis cadastrados: " +
        imoveisCadastrados.length +
        "\n1)Salvar um imóvel." +
        "\n2)Mostrar todos os imóveis salvos." +
        "\n3)Sair"
    )
  );

  let mostrarImovel = ""
  
  for (const imovel of imoveisCadastrados) {
    mostrarImovel +=
      "\n\nNome do propietário: " +
      imovel.nomePropietário +
      "\nQuantidade de quartos: " +
      imovel.quantDeQuartos +
      "\nQuantidade de banheiros: " +
      imovel.quantDeBanheiros +
      "\nPossui garagem? " +
      imovel.possuiGaragem;
  }

  switch (escolha) {
    case 1:
      const imovel = {};
      imovel.nomePropietário = prompt("Nome do propietário.");
      imovel.quantDeQuartos = prompt("Quantidade de quartos.");
      imovel.quantDeBanheiros = prompt("Quantidade de banheiros.");
      imovel.possuiGaragem = prompt("Possui garagem?");
      imoveisCadastrados.push(imovel);
      break;
    case 2:
      alert(mostrarImovel);
      break;
    case 3:
      alert("Sistema encerrando...");
      break;
    default:
      alert("Opção inválida. Tente novamente.");
      break;
  }
}
