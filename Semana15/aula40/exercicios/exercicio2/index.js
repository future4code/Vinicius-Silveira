const operacao = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])
var colors = require('colors')
if (process.argv.length <5 || process.argv.length>5){
    console.log ('Parâmetros inválidos, Insira uma operação válida add/sub/mult/div e 2 valores' .red)
} else{
    switch (operacao){
        case 'add':
            console.log(`Resposta: ${num1+num2}`.green)
            break
        case 'sub':
            console.log(`Resposta: ${num1-num2}`.green)
            break
        case 'mult':
            console.log(`Resposta: ${num1*num2}`.green)
            break
        case 'div':
            console.log(`Resposta: ${num1/num2}`.green)
            break
        default :
            console.log('Insira uma operação válida add/sub/mult/div'.red)
            break
    }
}
