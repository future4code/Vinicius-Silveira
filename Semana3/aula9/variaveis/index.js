// EXERCÍCIOS INTERPRETAÇÃO
/*----Exercício 1 ---
    10
    10 5
 
 ----Exercício 2 ----
    10 10 10
 */
// -------Exercício 1--------
 let nome
 let idade
 console.log(typeof nome)
 console.log(typeof idade)
// Resultado foi indefined pois ao declarar a variável sem especificar o tipo dela, ela se torna automáticamente indefinida
nome=prompt("Qual seu nome ? ")
idade = prompt("Qual sua idade ? ")
console.log(typeof nome)
console.log(typeof idade)
// String e String, aqui ao inserir dados pelo prompt as variáveis atuomaticamente se tornam strings, mesmo inserindo número na caixa de texto
console.log(`Olá ${nome}, você tem ${idade} anos`)

// --------Exercício 2---------
let nome2=prompt(`Qual seu nome? `)
let idade2=prompt(`Qual sua idade? `)
let musica=prompt(`Qual seu estilo musical favorito? `)
let cor=prompt(`Qual sua cor favorita? `)
let cidade=prompt(`Qual cidade você nasceu? `)
console.log(`1-Qual seu nome ?\n Resposta:${nome}`)
console.log(`2-Qual sua idade?\n Resposta:${idade}`)
console.log(`3-Qual seu estilo musical favorito?\n Resposta:${musica}`)
console.log(`4-Qual sua cor favorita?\n Resposta:${cor}`)
console.log(`5-Qual cidade você nasceu?\n Resposta:${cidade}`)

//----------Exercício 3------------
let comida=["arroz","feijão","batata frita","bife","massa"]
console.log(comida)
console.log("Essas são minhas comidas favoritas: ")
console.log(comida[0])
console.log(comida[1])
console.log(comida[2])
console.log(comida[3])
console.log(comida[4])
comida[1]=prompt("Qual sua comida favorita?")
console.log("Essas são minhas comidas favoritas: ")
console.log(comida[0])
console.log(comida[1])
console.log(comida[2])
console.log(comida[3])
console.log(comida[4])

//---------Exercício 4 -------------
let perguntas=["Você está feliz hoje?","Você já ajudou algum colega hoje?","Você gosta de programar?"]
let respostas=[true,true,true]
console.log(`${perguntas[0]} ${respostas[0]}`)
console.log(`${perguntas[1]} ${respostas[1]}`)
console.log(`${perguntas[2]} ${respostas[2]}`)