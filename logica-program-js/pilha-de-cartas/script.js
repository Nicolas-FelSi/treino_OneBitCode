const baralho = [];
let escolha = 0;

while (escolha != 3) {
    escolha = parseInt(prompt
    ("Cartas no baralho: " + baralho.length +
     "\n1)Adicionar uma carta." +
     "\n2)Puxar uma carta." +
     "\n3)Sair."))

     switch (escolha) {
        case 1:
            const adicionarCarta = prompt("Nome da carta que vai adicionar.")
            baralho.push(adicionarCarta)
            break;
        case 2:
            if (baralho.length == 0) {
                alert("Não há cartas no baralho.")
            } else {
                alert(`Puxando a carta ${baralho[0]}`)
                baralho.shift()
            }
            break;
        case 3:
            alert("Sistema encerrando.")
            break;
     
        default:
            alert("Opção inválida. Tenta novamente.")
            break;
     }
}