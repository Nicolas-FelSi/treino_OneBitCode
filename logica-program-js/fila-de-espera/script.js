const listaPacientes = [];
let escolha = 0;

while (escolha != 3) {  
    let paciente = "";

    for (let index = 0; index < listaPacientes.length; index++) {
        paciente += `\n${index+1} - ${listaPacientes[index]}`;
    }

    escolha = parseInt(prompt
    ("Lista pacientes: "+ paciente +
    "\n\n1)Novo paciente" +
    "\n2)Consultar paciente" +
    "\n3)Sair"))

    switch (escolha) {
        case 1:
            const novoPaciente = prompt("Nome do novo paciente")
            listaPacientes.push(novoPaciente)
            break;
        case 2:
            if (listaPacientes.length == 0) {
                alert("Não há pacientes para consultar")
            } else {
                alert(`O paciente ${listaPacientes[0]} foi consultado.`)
                listaPacientes.shift()     
            }
            break;             
        case 3:
            alert("Sistema encerrando...")
            break;
    
        default:
            alert("Opção inválida. Tente novamente.")
            break;
    }
}
