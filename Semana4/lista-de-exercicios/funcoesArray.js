/**----------------------------FUNÇÕES DE ARRAY
 * EXERCÍCIO 1
 *  //Filter cria um novo array com o mesmo ou menor tamanho que o original
 let pessoas=[
    {nome:'Pedro',idade:20},
    {nome:'Paulo',idade:10},
    {nome:'Paula',idade:12},
    {nome:'Artur',idade:89}
]
a) let retornaAdultos = pessoas.filter((dados)=>{
    if(dados.idade>=20){
        return true
    }
    return false
})
console.log("Adultos: ",retornaAdultos)
b)
let retornaMenores = pessoas.filter((dados)=>{
    if(dados.idade<20){
        return true
    }
    return false
})
console.log("Menores: ",retornaMenores)
-----------------------------------------------------------------------------------------------

EXERCÍCIO 2
// MAP cria um novo array com o mesmo tamanho do original
const array =[1,2,3,4,5,6]
a)
let multiplicaPorDois = array.map((dados)=>{
    return dados*2
})
console.log(multiplicaPorDois)
b)
let multiplicaPorTres = array.map((dados)=>{
    return `${dados*3}`
})
console.log(multiplicaPorTres)
c)
let parImpar = array.map((dados)=>{
    if (dados%2===0){
        return `${dados} é par`
    }else {
        return `${dados} é ímpar`
    }
})
console.log(parImpar)
-----------------------------------------------------------------------------------------------

EXERCÍCIO 3
const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]
//a)
let permissaoEntrar = pessoas.filter((dados)=>{
    if(dados.idade>14 && dados.idade<60 && dados.altura>=1.5){
        return true
    }                        
    return false
})
//b)
let naoEntra = pessoas.filter((dados)=>{
    if(dados.idade<=14 || dados.idade>=60 || dados.altura<1.5){
        return true
    }                        
    return false
})
console.log("===Podem usar a montanha Russa===")
console.log(permissaoEntrar)
console.log("===Não podem usar a montanha Russa===")
console.log(naoEntra)
-----------------------------------------------------------------------------------------------

EXERCÍCIO 4

const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

let criaEmail = consultas.map((dados)=>{
    if(dados.cancelada===true){
        switch(dados.genero){
            case "masculino":
                return (`Olá, Sr. ${dados.nome}. Infelizmente, sua consulta marcada
                para o dia ${dados.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la`)
            case "feminino":
                return (`Olá, Sra. ${dados.nome}. Infelizmente, sua consulta marcada
                para o dia ${dados.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la`)
        }
    }else{
        switch(dados.genero){
            case "masculino":
                return (`Olá, Sr.${dados.nome}. Estamos enviando esta mensagem para lembrá-lo  da sua consulta no dia ${dados.dataDaConsulta}. Por favor, acuse
                o recebimento deste e-mail.`)
            case "feminino":
                return (`Olá, Sra.${dados.nome}. Estamos enviando esta mensagem para lembrá-la  da sua consulta no dia ${dados.dataDaConsulta}. Por favor, acuse
                o recebimento deste e-mail.`)
        }
    }
})

console.log(criaEmail)
-----------------------------------------------------------------------------------------------

EXERCÍCIO 5
*/
const contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]
contas.forEach((dados,index)=>{
    switch (index){
        case 0:
            dados.saldoTotal = 400
            break;
        case 1:
            dados.saldoTotal =6260
            break;
        case 2:
            dados.saldoTotal = -3340
            break;
        case 3:
            dados.saldoTotal = -1900
            break;
        case 4:
            dados.saldoTotal = 1300
            break;
        case 5: 
            dados.saldoTotal =1200
            break;
    }
})
console.log(contas)