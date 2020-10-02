/*---------EXERCÍCIOS INTERPRETAÇÃO

EXERCÍCIO 1

É criada uma variável que solicita ao usuário um número, porém como está no prompt esse numero será criado como string.

Logo após valor digitado pelo usuário é convertido para o tipo Number e jogamos para a variável numero.
No if é feita uma comparação se o resto da divisão do numero digitado pelo usuário por 2 for igual a 0 (tanto em tipo de variavel quanto valor), mostra no console a mensagem Passou no teste. Caso contrário mostra a mensagem Não passou no teste que está dentro do else.

Resumindo, faz um teste para ver se o número é par.

---------------------------------------------------------------------------------------

EXERCÍCIO 2
a. O código serve para o usuário inserir o nome de uma fruta e dependendo da fruta inserida o código insere um valor diferente na variável preco e mostra no final uma mensagem com o nome inserido e o preco dela.

b. O preço da fruta Maçã é R$ 2.25

c. Sem o brake o switch continua seu fluxo e adiciona o valor 5 para o preco. 
-----------------------------------------------------------------------------------------

EXERCÍCIO 3
a. Na primeira linha está criando uma variável numero que recebe o que o usuário digitar e convertendo para o tipo Number.

b. Se o usuário digitar 10 vai aparecer a mensagem Esse número passou no teste e um erro. Se ele digitar -10 não faz nada, pois não temos a condição else nesse caso, porém mostra o erro.

c. Acontece um erro, pois a variável mensagem foi declarada no escopo do bloco if se tornando uma variável local.
------------------------------------------------------------------------------------------

-----------------EXERCÍCIOS DE ESCRITA DE CÓDIGO

EXERCICIO 4

const idade = Number(prompt("Digite sua idade: "))

if (idade>=18){
    console.log("Você pode dirigir")
}else{
    console.log("Você não pode dirigir")
}
-------------------------------------------------------------------------------------------

EXERCÍCIO 5

const turno=prompt("Informe seu turno, M[Matutino]-V[Vespertino]-N[Noturno]").toUpperCase()
if (turno==='M'){
    console.log("Bom Dia!")
}else if (turno==='V'){
    console.log("Boa Tarde!")
}else if (turno==='N'){
    console.log('Boa Noite!')
}else{
    console.log('Turno não identificado!')
}
------------------------------------------------------------------------------------------

EXERCÍCIO 6

const turno=prompt("Informe seu turno, M[Matutino]-V[Vespertino]-N[Noturno]").toUpperCase()
switch (turno){
    case 'M':
        console.log('Bom Dia!')
        break;
    case 'V':
        console.log('Boa Tarde!')
        break;
    case 'N':
        console.log('Boa Noite!')
        break;
    default:
        console.log('Turno não identificado')
        break;
}
------------------------------------------------------------------------------------------

EXERCÍCIO 7

const genero = prompt("Digite o gênero de filme que você gosta: ")
const preco = Number(prompt("Informe o preço do ingresso: R$"))
if (genero==='fantasia' && preco<15){
    console.log("Bom filme!")
}else{
    console.log("Escolha outro filme :(")
}
-----------------------------------------------------------------------------------------

---------------------DESAFIOS

DESAFIO 1

const genero = prompt("Digite o gênero de filme que você gosta: ")
const preco = Number(prompt("Informe o preço do ingresso: R$"))
if (genero==='fantasia' && preco<15){
    const snack=prompt("Que snack vai comprar ? ")
    console.log(`Bom filme\n... com ${snack}`)
}else{
    console.log("Escolha outro filme :(")
}
------------------------------------------------------------------------------------------

DESAFIO 2
*/
const nome=prompt("Digite seu nome completo: ")
const tipo=prompt("Selecione o tipo de jogo: [IN]-Internacional [DO]-Doméstico").toUpperCase()
let etapa=prompt("Selecione a etapa: [SF]-Semi-final [DT]-3º lugar [FI]-Final").toUpperCase()
const categoria=Number(prompt("Selecione a categoria[1] [2] [3] [4]: "))
const ingressos=Number(prompt("Quantos ingressos ?"))
let valor
const cotacao=4.1

console.log("---Dados da compra---")
console.log(`Nome do cliente: ${nome}`)

switch (etapa){
    case 'SF':
        etapa="Semi-final"
        switch (categoria){
            case 1:
                valor=1320
                break;
            case 2:
                valor=880
                break;
            case 3:
                valor=550
                break;
            case 4:
                valor=220
                break;
            default:
                valor=0
                break;                
            }            
        break;
    case 'DT':
        etapa="Decisão do 3º lugar"
        switch (categoria){
            case 1:
                valor=660
                break;
            case 2:
                valor=440
                break;
            case 3:
                valor=330
                break;
            case 4:
                valor=170
                break;
            default:
                valor=0
                break;                
            }
        break;
    case 'FI':
        etapa="Final"
        switch (categoria){
            case 1:
                valor=1980
                break;
            case 2:
                valor=1320
                break;
            case 3:
                valor=880
                break;
            case 4:
                valor=330
                break;
            default:
                valor=0
                break;                
            }
        break;
    default :
        etapa="Etapa não selecionada!"
        valor=0
        break;
}
switch (tipo){
    case 'DO':
        console.log("Tipo de jogo: Nacional")
        break;
    case 'IN':
        console.log("Tipo do jogo: Internacional")
        valor=valor/cotacao
        break;
    default:
        console.log("Tipo do jogo indeterminado")
        break;
}

console.log(`Etapa do jogo: ${etapa}`)
console.log(`Categoria: ${categoria}`)
console.log(`Quantidade de Ingressos: ${ingressos}`)
console.log("---Valores---")
if(tipo==='IN'){
    console.log(`Valor do ingresso: U$${valor}`)
    console.log(`Valor total: U$${valor*ingressos}`)
}else if(tipo==='DO'){
    console.log(`Valor do ingresso: R$${valor}`)
    console.log(`Valor total: R$${valor*ingressos}`)
}
