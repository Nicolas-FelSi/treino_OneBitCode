const measure = parseFloat(prompt('Digite um valor em metros (m): '))

const option = prompt('Para qual medida quer converter?' +
      '\n1) Milímetro (mm)' +
      '\n2) Centímetro (cm)' +
      '\n3) Decímetro (dm)' +
      '\n4) Decâmetro (dam)' +
      '\n5) Hectômetro (hm)' +
      '\n6) Quilômetro (km)' 
)
      
switch (option) {
    case '1':       
        alert('Conversão: ' + measure + 'm = ' + measure * 1000 + 'mm')
        break;
    case '2':
        alert('Conversão: ' + measure + 'm = ' + measure * 100 + 'cm')
        break;
    case '3':
        alert('Conversão: ' + measure + 'm = ' + measure * 10 + 'dm')
        break;
    case '4':
        alert('Conversão: ' + measure + 'm = ' + measure / 10 + 'dam')
        break;
    case '5':
        alert('Conversão: ' + measure + 'm = ' + measure / 100 + 'hm')
        break;
    case '6':
        alert('Conversão: ' + measure + 'm = ' + measure / 1000 + 'km')
        break;
    default:
        alert('Opção inválida. Tente Novamente.')
        break;
}