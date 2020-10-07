const entradaTitulo = document.getElementById("titulo-post")
const entradaAutor = document.getElementById("autor-post")
const entradaConteudo = document.getElementById("conteudo-post")

let postagens = []
let criarPost = () =>{
    const postObjeto = {
        titulo: entradaTitulo.value,
        autor: entradaAutor.value,
        conteudo: entradaConteudo.value
    }            
    postagens.push(postObjeto) //adiciona o objeto no array postagens
    // limpa os campos de entrada
    entradaTitulo.value=""
    entradaAutor.value=""
    entradaConteudo.value=""
    console.log(postagens)
    postarDados()
}

let postarDados = () => {
    const novaPostagem = document.getElementById("container-de-posts")
    let i=(postagens.length)-1
    novaPostagem.innerHTML+=`<div><h2>${postagens[i].titulo}</h2><h4>${postagens[i].autor}</h4><p>${postagens[i].conteudo}</p></div>`
}
