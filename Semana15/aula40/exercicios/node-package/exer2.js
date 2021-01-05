const operacao = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

switch (operacao){
    case 'add':
        console.log(`Resposta: ${num1+num2}`)
        break
    case 'sub':
        console.log(`Resposta: ${num1-num2}`)
        break
    case 'mult':
        console.log(`Resposta: ${num1*num2}`)
        break
    case 'div':
        console.log(`Resposta: ${num1/num2}`)
        break
    default :
        console.log('Insira uma operação válida add/sub/mult/div')
        break
}