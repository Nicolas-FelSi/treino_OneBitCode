function criarLabel(text, htmlFor) {
    const label = document.createElement("label");
    label.innerText = text;
    label.htmlFor = htmlFor;
    return label;
}

function criarInput(id, name, type="text", value) {
    const input = document.createElement("input");
    input.id = id;
    input.name = name;
    input.type = type;
    input.value = value;
    return input; 
}

const form = document.querySelector("form");
const addTech = document.getElementById("addTech");
let contadorId = 0;

addTech.addEventListener("click", ()=>{
    const campoDados = document.getElementById("campoDados");
    const divDados = document.createElement("div");
    divDados.id = `div-${contadorId}`

    const labelNomeTech = criarLabel("Nome tecnologia: ", `inNomeTech-${contadorId}`);
    const inputNomeTech = criarInput(`inNomeTech-${contadorId}`, "nomeTecnologia", "text" , "");

    const inputTempExp0_2 = criarInput(`inTempoExp0_2-${contadorId}`, `tempoExp-${contadorId}`, "radio" , "0-2 anos");
    const labelTempExp0_2 = criarLabel("0-2 anos", `inTempoExp0_2-${contadorId}`);

    const inputTempExp3_4 = criarInput(`inTempoExp3_4-${contadorId}`, `tempoExp-${contadorId}`, "radio" , "3-4 anos");
    const labelTempExp3_4 = criarLabel("3-4 anos", `inTempoExp3_4-${contadorId}`);

    const inputTempExp5 = criarInput(`inTempoExp5-${contadorId}`, `tempoExp-${contadorId}`, "radio" , "5+ anos");
    const labelTempExp5 = criarLabel("5+ anos  ", `inTempoExp5-${contadorId}`);

    const btnRemover = document.createElement("button");
    btnRemover.innerText = "Apagar tecnologia";
    btnRemover.addEventListener("click", ()=>{
        campoDados.removeChild(divDados);
    })
    
    contadorId++;

    divDados.append(
        labelNomeTech, inputNomeTech, 
        inputTempExp0_2, labelTempExp0_2,
        inputTempExp3_4, labelTempExp3_4,
        inputTempExp5, labelTempExp5,
        btnRemover
    );

    campoDados.appendChild(divDados);
})

const desenvolvedores = [];

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    let contadorId = 0;
    const nomeDev = document.getElementById("inNome");
    const linhaDev = document.querySelectorAll("#campoDados div");
    const tecnologias = [];
    
    linhaDev.forEach((linha) => {
        const nomeTech = document.getElementById(`${linha.id} input[name=nomeTecnologia]`);
        const tempoExp = document.getElementById(`${linha.id} input[type=radio]:checked`);

        console.log(nomeTech);
        console.log(tempoExp);
    });
})