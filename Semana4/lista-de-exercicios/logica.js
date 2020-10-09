/**---------------------LÓGICA
 * 
 * EXERCÍCIO 1
  Podemos percorrer um array, usando, for, while,forEach, for of
  
const lista = [11,12,13,14,15,16,17,18,19,20]
for(let i=0; i<lista.length;i++){
    console.log(lista[i])
}
let i=0
while(i<lista.length){
    console.log(lista[i])
    i++
}
lista.forEach((numeros)=>{
    console.log(numeros)
})
------------------------------------------------------------------------------------------- 
  
EXERCICIO 2
  a) false
  b) false
  c) true
  d) true
  e) true
--------------------------------------------------------------------------------------------
  
  EXERCÍCIO 3
  O código proposto não funciona, pois não é adicionado nenhum valor na variável, então a 
  lógica do while não funciona.
const quantidadeDeNumerosPares = Number(prompt("Digite um numero: "))
let i=0
while(i<quantidadeDeNumerosPares){
    console.log(i*2)
    i++
}
 * --------------------------------------------------------------------------------------------
 * 
 EXERCÍCIO 4
 console.log("====TIPOS DE TRIÂNGULO====")
 const a = Number(prompt("Informe o lado a: "))
 const b = Number(prompt("Informe o lado b: "))
 const c = Number(prompt("Informe o lado c: "))
  
if (a===b && b===c){
    console.log("Triângulo Equilátero") 
}else if (a===b || a===c || b===c){
    console.log("Triângulo Isóceles")
}else {
    console.log("Triângulo Escaleno")
}
  --------------------------------------------------------------------------------------------

  EXERCÍCIO 5

const num1 = Number(prompt("Informe primeiro número: "))
const num2 = Number(prompt("Informe segundo número: "))
let diferenca = 0

if(num1>num2){
    console.log(`O maior é: ${num1}`)
    diferenca = num1-num2
    
}else if(num2>num1){
    console.log(`O maior é: ${num2}`)
    diferenca = num2-num1
}else{
    console.log(`São iguais`)
}

if(num1%num2===0){
    console.log(`${num1} é divisível por ${num2}`)
}else{
    console.log(`${num1} não é divisível por ${num2}`)
}
if(num2%num1===0){
    console.log(`${num2} é divisível por ${num1}`)
}else{
    console.log(`${num2} não é divisível por ${num1}`)
}

console.log(`A diferença entre eles é ${diferenca}`)
-----------------------------------------------------------------------------------------------
*/