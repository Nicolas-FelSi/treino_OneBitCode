const listaVagas = [];

let escolha;

while (escolha != 6) {
  escolha = parseInt(
    prompt(
      "1)Listar vagas disponíveis." +
        "\n2)Criar uma nova vaga." +
        "\n3)Visualizar uma vaga." +
        "\n4)Inscrever um candidato em uma vaga." +
        "\n5)Excluir uma vaga." +
        "\n6)Sair."
    )
  );

  switch (escolha) {
    case 1:
      listarVagas();
      break;
    case 2:
      criarVaga();
      break;
    case 3:
      if (listaVagas.length == 0) {
        alert("Não há vagas para visualizar.");
      } else {
        const indiceVaga = parseInt(
          prompt("Qual o indice da vaga deseja ver?")
        );
        visualizarVaga(indiceVaga);
      }
      break;
    case 4:
      if (listaVagas.length == 0) {
        alert("Não há vagas para inscrever o candidato.");
      } else {
        const candidato = prompt("Nome do candidato:");
        const indice = parseInt(prompt("Indice da vaga:"));
        inscreverCandidato(candidato, indice);
      }
      break;
    case 5:
      if (listaVagas.length == 0) {
        alert("Não há vagas para excluir.");
      } else {
        const indiceVaga = parseInt(
          prompt("Qual o indice da vaga deseja excluir?")
        );
        excluirVaga(indiceVaga);
      }
      break;
    case 6:
      alert("Sistema encerrando...");
      break;
    default:
      alert("Opção inválida. Tente novamente.");
      break;
  }
}

function listarVagas() {
  if (listaVagas.length == 0) {
    alert("Não há vagas para listar.");
    return;
  }
  const vagasEmTexto = listaVagas.reduce((textoFinal, textoAtual, indice) => {
    textoFinal += `\n${indice + 1} - `;
    textoFinal += textoAtual.nomeVaga;
    textoFinal += `( ${textoAtual.candidatos.length} candidatos)`;
    return textoFinal;
  }, "");

  alert(vagasEmTexto);
}

function criarVaga() {
  const vaga = {};
  vaga.nomeVaga = prompt("Digite o nome da vaga:");
  vaga.descricaoVaga = prompt("Digite a descrição da vaga:");
  vaga.dataLimite = prompt("Digite a data limite:");
  vaga.candidatos = [];
  const confirmVaga = confirm("Salvar os dados da vaga? [Ok/Cancelar]");
  if (confirmVaga) {
    listaVagas.push(vaga);
    alert("Dados salvos com sucesso.");
  } else {
    alert("Salvamento dos dados cancelado.");
  }
}

function visualizarVaga(indiceVaga) {
  if (listaVagas[indiceVaga] == undefined) {
    alert("Não há vaga com esse indice.");
    return;
  }
  // const indice = indiceVaga;
  // const vaga = listaVagas[indiceVaga].nomeVaga;
  // const descricao = listaVagas[indiceVaga].descricaoVaga;
  // const data = listaVagas[indiceVaga].dataLimite;
  // const quantCandidatos = listaVagas[indiceVaga].candidatos.length;
  // const arrayCandidatos = listaVagas[indiceVaga].candidatos.map(
  //   (candidato) => candidato
  // );

  // let nomesCandidatos = "";
  // for (const candidato of arrayCandidatos) {
  //   nomesCandidatos += `${candidato}, `;
  // }
  const vaga = listaVagas[indiceVaga];
  let candidatosEmTexto;
  if (vaga.candidatos.length == 0) {
    candidatosEmTexto = "Não há candidatos inscritos.";
  } else {
    candidatosEmTexto = vaga.candidatos.reduce((textoFinal, candidato) => {
        textoFinal += `${candidato}`;
      });
  }

  alert(`
      Dados da vaga
      Índice: ${indiceVaga}
      Vaga: ${vaga.nomeVaga}
      Descrição: ${vaga.descricaoVaga}
      Data Limite: ${vaga.dataLimite}
      Quantidade de candidatos: ${vaga.candidatos.length}
      Candidatos: ${candidatosEmTexto}
      `);
}

function inscreverCandidato(candidato, indice) {
  const confirmCandidato = confirm(`
    Dados da vaga
    Índice: ${indice}
    Vaga: ${listaVagas[indice].nomeVaga}
    Descrição: ${listaVagas[indice].descricaoVaga}
    Data limite: ${listaVagas[indice].dataLimite}
    Números de candidatos: ${listaVagas[indice].candidatos.length} 

    Tem certeza que quer inscrever esse candidato?
    `);

  if (confirmCandidato) {
    listaVagas[indice].candidatos.push(candidato);
    alert("Candidato inscrito com sucesso.");
  } else {
    alert("Cancelamento da inscrição do candidato.");
  }
}

function excluirVaga(indice) {
  const confirmExcluirVaga = confirm(`
  Dados da vaga
  Índice: ${indice}
  Vaga: ${listaVagas[indice].nomeVaga}
  Descrição: ${listaVagas[indice].descricaoVaga}
  Data limite: ${listaVagas[indice].dataLimite}
  Números de candidatos: ${listaVagas[indice].candidatos.length} 

  Tem certeza que quer excluir essa vaga?
  `);

  if (confirmExcluirVaga) {
    listaVagas.splice(indice, 1);
    alert("Vaga excluida com sucesso.");
  } else {
    alert("Exclusão cancelada.");
  }
}
