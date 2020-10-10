/**-----------------------OBJETOS
 * 
 * EXERCÍCIO 1
 * Arrays são listas simples, onde podemos armazenar valores de difersos tipos.
 * Já os objetos nós poderíamos armazenar dados mais complexos, seria como guardar muitas
 * variáveis dentro de uma só, no caso um obejto pessoa, contendo nome, idade, altura, peso.
 * --------------------------------------------------------------------------------------------
 * 
 * EXERCÍCIO 2
 
let criaRetangulo = (lado1,lado2)=>{
    let retangulo = {
        largura: lado1,
        altura: lado2,
        perimetro: 2*(lado1+lado2),
        area: lado1*lado2
    }    
    console.log("Objeto: ",retangulo)
    console.log(`Altura: ${retangulo.altura}cm`)
    console.log(`Largura: ${retangulo.largura}cm`)
    console.log(`Perímetro: ${retangulo.perimetro}cm`)
    console.log(`Área: ${retangulo.area}cm²`)
}
const ladoA=Number(prompt("Informe o lado A do Retângulo em cm: "))
const ladoB=Number(prompt("Informe o lado B do Retângulo em cm: "))
criaRetangulo(ladoA,ladoB)
-----------------------------------------------------------------------------------------------

EXERCÍCIO 3
*/
let filme={
    nome: "O resgate do soldado Ryan",
    ano: 1998,
    direcao: "Steven Spielberg",
    atores:["Tom Hanks","Tom Sizemore","Matt Damon","Edward Burns","Barry Pepper","Vin Diesel"]
}
console.log(`Venha assistir ao vencedor de 5 Óscars, ${filme.nome}, de ${filme.ano}, dirigido pelo aclamado e vencedor de melhor diretor ${filme.direcao} e estrelado por ${filme.atores}.`)