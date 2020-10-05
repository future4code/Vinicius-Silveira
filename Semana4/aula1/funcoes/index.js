/**-------------------EXERCÍCIOS DE INTERPRETAÇÃO 
 * EXERCÍCIO 1
 * a. Será impresso 10 e depois 50.
 * b. No console não apareceria nada.
 * --------------------------------------------------------------------------------------------
 * 
 * EXERCÍCIO 2
 * a. É impresso cada os valores do índice 0 e 1, Darvas e Caio.
 * b. Vai ser impresso os valores Amanda e Caio.
 * --------------------------------------------------------------------------------------------
 * 
 * EXERCÍCIO 3
 * Essa função faz uma potência de 2(eleva ao quadrado) dos números pares dentro do array.
 * Poderia ser chamada de potenciaNumero
 * --------------------------------------------------------------------------------------------
 * 
 * ---------------------EXERCÍCIOS DE ESCRITA
 * EXERCÍCIO 4
 * 
a.
function imprimeDados(){
    console.log("Eu sou Vinicius, tenho 36 anos, moro em Pelotas RS")
}
imprimeDados()
-----------------------------------------------------------------------------------------------
b.
let imprimeDadosCompletos=(nome,idade,cidade,estudante) =>{
    let resposta
    if(estudante){
        resposta= (`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou estudante`)
    }else{
        resposta=(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e não sou estudante`)
    }
    return resposta
}
const resultado = imprimeDadosCompletos("Goli",23,"Rua Guarapari 190",true)
console.log(resultado)
-----------------------------------------------------------------------------------------------

EXERCÍCIO 5
a.
let somaNumeros = (a,b)=>{
    return a+b
}
let resultado = somaNumeros(38,93)
console.log(resultado)
-----------------------------------------------------------------------------------------------
b.
let maiorIgual = (num1,num2)=>{
    return num1>=num2
}
console.log(maiorIgual(1,2))
-----------------------------------------------------------------------------------------------
c.
let imprimeDez = (texto)=>{
    for(let i=0;i<10;i++){
        console.log(texto)
    }    
}
imprimeDez("Texto")
-----------------------------------------------------------------------------------------------

EXERCÍCIO 6
a.
const arrayValores=[10,23,45,78,90,52,35,67,84,22]

let quantidadeElementosArray = (array)=> {
    return array.length
}    
const tamanho = quantidadeElementosArray(arrayValores)
console.log(`O tamanho do array é ${tamanho} elementos`)
-----------------------------------------------------------------------------------------------
b.
let numeroPar = (numero)=>{
    return (numero%2===0)
}
const valor = Number(prompt("Digite um número para saber se é par: "))
console.log(numeroPar(valor))
-----------------------------------------------------------------------------------------------
c.
const arrayValores=[10,23,45,78,90,52,35,67,84,22]
let quantidadeNumerosPares = (array)=>{
    let quantidade=0
    for(i=0;i<array.length;i++){
        if(array[i]%2===0){
            quantidade++
        }
    }
    return quantidade
}
console.log(`Temos ${quantidadeNumerosPares(arrayValores)} números pares no array`)
-----------------------------------------------------------------------------------------------
d.

const arrayValores=[10,23,45,78,90,52,35,67,84,22]
let numeroPar = (numero)=>{
    return (numero%2===0)
}

let quantidadeNumerosPares = (array)=>{
    let quantidade=0
    for(i=0;i<array.length;i++){
        if(numeroPar(array[i])){
            quantidade++
        }
    }
    return quantidade
}
console.log(`Temos ${quantidadeNumerosPares(arrayValores)} números pares no array`)
-----------------------------------------------------------------------------------------------

-------------------------DESAFIOS
DESAFIO 1
1.
let imprimeParametro = (parametro)=>{
    console.log(parametro)
}
let variavelImprimir = prompt("Digite algo para imprimir: ")
imprimeParametro(variavelImprimir)
-----------------------------------------------------------------------------------------------
2.
let imprimeParametro = (parametro)=>{
    console.log(parametro)
}
let somaDoisValores = (num1,num2) =>{
    const soma=num1+num2
    imprimeParametro(soma)
}
somaDoisValores(2,3)
-----------------------------------------------------------------------------------------------

DESAFIO 2
a.
const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]
function paresMultiplicados(array){
    let novoArray=[]
    for(let i=0;i<array.length;i++){
        if(array[i]%2===0){
            novoArray.push(array[i]*2)
        }
    }
    return novoArray
}
console.log(paresMultiplicados(numeros))
-----------------------------------------------------------------------------------------------
b.
const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]
let maiorNumero = (array)=>{
    let maior=array[0]
    for(let i=0;i<array.length;i++){
        if(array[i]>maior){
            maior=array[i]
        }
    }
    return maior
}
console.log(maiorNumero(numeros))
-----------------------------------------------------------------------------------------------
c.
const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]
let indiceMaior = (array)=>{
    let maior=array[0]
    let indice=0
    for(let i=0;i<array.length;i++){
        if(array[i]>maior){            
            maior=array[i] // tem q manter essa rotina, pois senão todo valor maior que o primeiro entra como índice
            indice=i
        }
    }
    return indice
}
console.log(indiceMaior(numeros))
-----------------------------------------------------------------------------------------------
d.
const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]
let inverteArray = (array)=>{      
    return array.reverse()
}
console.log(inverteArray(numeros))
-----------------------------------------------------------------------------------------------
//Fiz de duas formas, a primeira inverte diretamente o array numeros, na segunda maneira eu criei um novo array e fiz um for decrescente para jogar os valores para o novo array

const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]
let inverteNaUnha=(array)=>{
    let novoArray=[]
    for(let i=array.length-1;i>=0;i--){
        novoArray.push(array[i])                         
    }    
    return novoArray
}
console.log(inverteNaUnha(numeros))
*/