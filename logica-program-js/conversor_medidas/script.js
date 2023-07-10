// const measure = parseFloat(prompt('Digite um valor em metros (m): '))

// const option = prompt('Para qual medida quer converter?' +
//       '\n1) Milímetro (mm)' +
//       '\n2) Centímetro (cm)' +
//       '\n3) Decímetro (dm)' +
//       '\n4) Decâmetro (dam)' +
//       '\n5) Hectômetro (hm)' +
//       '\n6) Quilômetro (km)' 
// )
      
// switch (option) {
//     case '1':       
//         alert('Conversão: ' + measure + 'm = ' + measure * 1000 + 'mm')
//         break;
//     case '2':
//         alert('Conversão: ' + measure + 'm = ' + measure * 100 + 'cm')
//         break;
//     case '3':
//         alert('Conversão: ' + measure + 'm = ' + measure * 10 + 'dm')
//         break;
//     case '4':
//         alert('Conversão: ' + measure + 'm = ' + measure / 10 + 'dam')
//         break;
//     case '5':
//         alert('Conversão: ' + measure + 'm = ' + measure / 100 + 'hm')
//         break;
//     case '6':
//         alert('Conversão: ' + measure + 'm = ' + measure / 1000 + 'km')
//         break;
//     default:
//         alert('Opção inválida. Tente Novamente.')
//         break;
// }

const medidaMetros = Number(prompt("Medida em metros:"))
const escolha = parseInt(prompt(`
Para qual medida quer converter? 
    1) Milímetro (mm) 
    2) Centímetro (cm) 
    3) Decímetro (dm) 
    4) Decâmetro (dam) 
    5) Hectômetro (hm) 
    6) Quilômetro (km) 
`))

switch (escolha) {
    case 1:
        const milímetro = medidaMetros * 1000
        alert(milímetro)
        break;
    case 2:
        const centímetro = medidaMetros * 100
        alert(centímetro)
        break;

    case 3:
        const decímetro = medidaMetros * 10
        alert(decímetro)
        break;

    case 4:
        const decametro = medidaMetros / 10
        alert(decametro)
        break;

    case 5:
        const hectometro = medidaMetros / 100
        alert(hectometro)
        break;

    case 6:
        const quilometro = medidaMetros / 1000
        alert(quilometro)
        break;
                    
    default:
        alert("Opção inválida.")
        break;
}