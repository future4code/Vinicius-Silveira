//a) console.log(process.argv) para vermos os argumentos passados no terminal
//b)
const nome = process.argv[2]
const idade = Number(process.argv[3])
var colors = require('colors')
//console.log(`Olá ${nome}! Você tem ${idade} anos.`)
//
if (process.argv.length===3){
    console.log('Você passou somente o nome, preciso nome e idade'.red)
}else if(process.argv.length===4){
    console.log(`Olá ${nome}! Você tem ${idade}anos. Em sete anos você terá ${idade+7} anos` .green)
} else {
    console.log('Você passou parâmetros errados, preciso de nome e idade' .red)
}
