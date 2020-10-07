/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
*/ 
const rodada=confirm("Deseja iniciar uma nova rodada ?")

if (rodada){      
   const jogador = [comprarCarta(),comprarCarta()]
   const computador = [comprarCarta(),comprarCarta()]   
   const somaJogador = jogador[0].valor+jogador[1].valor
   const somaComputador = computador[0].valor+computador[1].valor

   console.log("====USUÁRIO====")
   console.log(`Cartas: ${jogador[0].texto} ${jogador[1].texto}`)
   console.log(`Pontuação: ${somaJogador}`)
   console.log("====COMPUTADOR====")
   console.log(`Cartas: ${computador[0].texto} ${computador[1].texto}`)
   console.log(`Pontuação: ${somaComputador}`)
   if(somaJogador>somaComputador){
      console.log("Parabéns Usuário você foi o vencedor !!!")
   }else if(somaComputador>somaJogador){
      console.log("Computador foi o vencedor !!!")
   }else{
      console.log("Temos um empate !!!")
   }
}else{
   console.log("Obrigado por Jogar !!!")   
}
