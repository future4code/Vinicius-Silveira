/*--------Interpretação------
Exercício 1
    const bool1=true
    const bool2=false
    const bool3=true
    resultado = true && false = false
    resultado = true && false && true = false
    resultado = !(false) && (true || true) = true

    a. false
    b. false 
    c. true
    e. boolean
----------------------------------------------------
Exercício 2
    a. undefined(pois não foi definido valor algum para a variável array)
    b. null(pois a variável array foi definida como null)
    c. 11
    d. 3(posição 0 do array array[0])
    e. 3,19,5,6,7,8,9,10,11,12,13(adiciona a posição 1 do array o valor 19)
    f. 9 (joga para a variável valor o valor da posição 6 do array)
*/

/*---------Escritas de código
Exercício 1

let idade = prompt("Qual sua idade ? ")
let idadeAmigo = prompt("Qual a idade do seu melhor amigo ? ")
console.log(`Sua idade é maior que a do seu amigo ? ${Number(idade)>Number(idadeAmigo)}`)
console.log(`Diferença da sua idade para seu amigo é de : ${Number(idade)-Number(idadeAmigo)}`)
//--------------------------------------------------------


Exercício 2

let numPar = Number(prompt("Insira um número PAR: "))
console.log(`Resto da divisão por 2 = ${numPar%2}`)
// O padrão é que todo resto de número par por 2 é sempre 0
// Todo número ímpar dividido por 2 o resto é 1
//----------------------------------------------------------


Exercício 3

let listaDeTarefas=[]
listaDeTarefas.push(prompt("1ª Tarefa a realizar no dia ?"))
listaDeTarefas.push(prompt("2ª Tarefa a realizar no dia ?"))
listaDeTarefas.push(prompt("3ª Tarefa a realizar no dia ?"))
console.log(`Suas 3 tarefas no dia são : ${listaDeTarefas}`)
let opcao = Number(prompt("Digite o índice da tarefa que já realizou[0 1 2]: "))
listaDeTarefas.splice(opcao,1)
console.log(`Sua nova lista: ${listaDeTarefas}`)
//----------------------------------------------------------
*/
//Exercício 4

let nome=prompt("Digite seu nome: ")
let email=prompt("Digite seu email: ")
console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vindo(a), ${nome} !`)
