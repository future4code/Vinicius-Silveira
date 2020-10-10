/**----------------------------FUNÇÕES DE ARRAY
 * EXERCÍCIO 1
 * 
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
*/