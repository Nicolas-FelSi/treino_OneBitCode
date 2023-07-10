let escolha;

while (escolha != 6) {
  escolha = parseInt(
    prompt(
      "Deseja calcular o que: " +
        "\n1)Área do triângulo." +
        "\n2)Área do retângulo." +
        "\n3)Área do quadrado." +
        "\n4)Área do trapézio." +
        "\n5)Área do círculo." +
        "\n6)Sair"
    )
  );

  switchEscolhas(escolha);
}

function calcularTriangulo(base, altura) {
  const resultado = (base * altura) / 2;
  return alert(`Resultado: ${resultado}`);
}

function calcularRetangulo(base, altura) {
  const resultado = base * altura;
  return alert(`Resultado: ${resultado}`);
}

function calcularQuadrado(lado) {
  const resultado = lado * lado;
  return alert(`Resultado: ${resultado}`);
}

function calcularTrapezio(baseMaior, baseMenor, altura) {
  const resultado = ((baseMaior + baseMenor) * altura) / 2;
  return alert(`Resultado: ${resultado}`);
}

function calcularCirculo(raio) {
  const resultado = 3.14 * (raio * raio);
  return alert(`Resultado: ${resultado}`);
}

function switchEscolhas(escolha) {
  switch (escolha) {
    case 1:
      const baseTri = Number(prompt("Digite a base:"));
      const alturaTri = Number(prompt("Digite a altura:"));
      calcularTriangulo(baseTri, alturaTri);
      break;
    case 2:
      const baseRet = Number(prompt("Digite a base:"));
      const alturaRet = Number(prompt("Digite a altura:"));
      calcularRetangulo(baseRet, alturaRet);
      break;
    case 3:
      const ladoQuad = Number(prompt("Digite o lado:"));
      calcularQuadrado(ladoQuad);
      break;
    case 4:
      const baseMaior = Number(prompt("Digite a base maior:"));
      const baseMenor = Number(prompt("Digite a base menor:"));
      const alturaTrap = Number(prompt("Digite a altura:"));
      calcularTrapezio(baseMaior, baseMenor, alturaTrap);
      break;
    case 5:
      const raioCirc = Number(prompt("Digite o raio:"));
      calcularCirculo(raioCirc);
      break;
    case 6:
      alert("Sistema encerrando...");
      break;
    default:
      alert("Opção inválida. Tente novamente.");
      break;
  }
}
