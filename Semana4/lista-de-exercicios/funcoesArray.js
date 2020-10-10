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
*/
