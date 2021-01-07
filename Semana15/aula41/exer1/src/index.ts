//a) Ao tentar adicionar um número a uma variável do tipo string, o código gera um erro.
//const minhaString : string = 3
//----------------------------------------------------------------------------------------
//b) Ao usar union type, podemos utilizar mais de um tipo de variável.
/*let meuNumero : number | string = 3
console.log(meuNumero)
meuNumero = 'três'
console.log(meuNumero)*/
//----------------------------------------------------------------------------------------
//c)
/*const pessoa:{
    nome:string,
    idade:number,
    corFavorita:string
}={
    nome:'teste',
    idade:2,
    corFavorita:'preto'
}
console.log(pessoa)*/
//d)
/*type pessoa ={
    nome:string,
    idade:number,
    corFavorita:string
}
const astrodev : pessoa={
    nome:'teste',
    idade:2,
    corFavorita:'preto'   
}
const astrodev2 : pessoa={
    nome:'teste2',
    idade:3,
    corFavorita:'pretoo'   
}
const astrodev3 : pessoa={
    nome:'teste3',
    idade:4,
    corFavorita:'pretooo'
}
console.log('Objeto1: ',astrodev)
console.log('Objeto2: ',astrodev2)
console.log('Objeto3: ',astrodev3)*/

//e)
enum corFavorita{
    VERMELHO = 'vermelho',
    LARANJA = 'laranja',
    AMARELO = 'amarelo',
    VERDE = 'verde',
    AZUL = 'azul',
    ANIL = 'anil',
    VIOLETA = 'violeta'
}

type pessoa ={
    nome:string,
    idade:number,
    corFavorita:corFavorita
}

const luffy: pessoa={
    nome:'luffy',
    idade:3,
    corFavorita:corFavorita.AMARELO
}
console.log(luffy)