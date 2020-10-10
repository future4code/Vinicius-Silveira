/**----------------------------FUNÇÕES DE ARRAY
 * EXERCÍCIO 1
 * 
 */

let pessoas=[
    {nome:'Pedro',idade:20},
    {nome:'Paulo',idade:10},
    {nome:'Paula',idade:12},
    {nome:'Artur',idade:89}
]
console.log(pessoas)
let retornaAdultos = pessoas.filter((dados)=>{
    if(dados.idade>=20){
        return true
    }
    return false
})
let retornaMenores = pessoas.filter((dados)=>{
    if(dados.idade<20){
        return true
    }
    return false
})

console.log("Adultos: ",retornaAdultos)
console.log("Menores: ",retornaMenores)
