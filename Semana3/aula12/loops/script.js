/*-----------------------INTERPRETAÇÃO----------------------- 
EXERCÍCIO 1
O resultado impresso é 10, pois a cada iteração é feito a soma do valor com i,
valor = valor + i
valor = 0+0     i=0
valor = 0+1     i=1
valor = 1+2     i=2
valor = 3+3     i=3
valor = 6+4     i=4
------------------------------------------------------------------------------

EXERCÍCIO 2
a. será impresso todos os valores maiores que 18
b. O for...of... é suficiente, podemos acessar cada índice chamando lista[i], porém o for é mais simples de usar.
------------------------------------------------------------------------------

DESAFIO 1
A impressão vão ser linhas com a string "0"
0
00
000
0000
enquanto(0<4) o programa faz a seguinte sequência
joga para a variável linha uma string vazia, ou seja, zera ela a cada loop
daí entra no loop do for(0;1) e concatena a string com um "0"
imprimindo a primeira linha com "0" a cada incremento na quantidadeAtual,
o for aumenta de tamanho concatenando mais vezes a string"0"
-----------------------------------------------------------------------------------------------

--------------------------------ESCRITA DE CÓDIGO----------------------------
EXERCÍCIO 1


let arrayOriginal=[80,30,130,40,60,21,70,120,90,103,110,55]
// a.
for(let i=0; i<arrayOriginal.length; i++){
    console.log(arrayOriginal[i])
}
//b.
for(let i=0; i<arrayOriginal.length; i++){
    console.log(arrayOriginal[i]/10)
}
//c.
let novoArray=[]
for(let i=0; i<arrayOriginal.length; i++){
    if (arrayOriginal[i]%2===0)
        novoArray.push(arrayOriginal[i])
}
console.log(novoArray)
//d. 
let arrayStrings=[]
for(let i=0; i<arrayOriginal.length; i++){
    arrayStrings.push(`O elemento do índex ${i} é número ${arrayOriginal[i]}`)    
    console.log(arrayStrings[i])
}
//e.
let maior=arrayOriginal[0], menor=arrayOriginal[0] 
for(let i=0; i<arrayOriginal.length; i++){
    if(arrayOriginal[i]>maior){
        maior=arrayOriginal[i]
    }
    if(arrayOriginal[i]<menor){
        menor=arrayOriginal[i]
    }
}
console.log(`O maior número é ${maior} e o menor é ${menor}`)
----------------------------------------------------------------------------------------------

DESAFIO 2

console.log("Vamos Jogar !")
const numero1=Number(prompt("Informe o número a ser adivinhado: "))
let numero2=Number(prompt("Adivinhe o número que estou pensando: "))
let tentativas=1
while(numero1!==numero2){
    tentativas++
    if(numero2>numero1){        
        console.log("Xiiiiii você falou um número maior")
    }else{
        console.log("Uhhhhhhhh, você chutou um número menor")
    }
    numero2=Number(prompt("Adivinhe o número que estou pensando: "))    
}
if (tentativas>5){
    console.log("Aleluiaaaaa, você acertou !!!")
}else{
    console.log("Parabéns você foi rápido !")
}
console.log(`O número de tentativas foi: ${tentativas}`)
-----------------------------------------------------------------------------------------------

DESSAFIO 3

*/
console.log("Vamos Jogar !")
let numero2=Math.floor((Math.random()*100)+1)
let numero1=Number(prompt("Informe o número a ser adivinhado: "))
let tentativas=1
while(numero1!==numero2){    
    tentativas++
    if(numero1>numero2){        
        console.log("Xiiiiii você falou um número maior")
    }else{
        console.log("Uhhhhhhhh, você chutou um número menor")
    }
    numero1=Number(prompt("Adivinhe o número que estou pensando: "))    
}
if (tentativas>5){1
    console.log("Aleluiaaaaa, você acertou !!!")
}else{
    console.log("Parabéns você foi rápido !")
}
console.log(`O número de tentativas foi: ${tentativas}`)
/* foram feitas 2 alterações somente no código, a priimeira foi em gerar o número aleatório utilizando a função Math.floor(Math.random()*100), onde Math.floor tira o ponto flutuante do número e o .random gera o aleatório, multiplicando por 100 gera um valor até 100 e somamos +1 pois o intervalo desse valor é aberto [0,100) então para incluir o 100 é somado 1*/

