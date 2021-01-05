//a) console.log(process.argv) para vermos os argumentos passados no terminal
//b)
const nome = process.argv[2]
const idade = Number(process.argv[3])

//console.log(`Olá ${nome}! Você tem ${idade} anos.`)
//c)
console.log(`Olá ${nome}! Você tem ${idade}anos. Em sete anos você terá ${idade+7} anos`)