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
let rodada=confirm("Deseja iniciar uma nova rodada ?")
//Aqui começa o jogo
if (rodada){      
   //Declaração das variáveis principais do jogo, de início são 2 cartas para cada
   let jogador = [comprarCarta(),comprarCarta()]
   let computador = [comprarCarta(),comprarCarta()]      
   let somaJogador = jogador[0].valor+jogador[1].valor
   let somaComputador = computador[0].valor+computador[1].valor
   let jogadorCartas=[]
   let computadorCartas=[]

   //rotina para evitar que saiam dois Ases iniciais o que daria o estouro no jogo
   while(somaJogador>21 || somaComputador>21){      
      jogador = [comprarCarta(),comprarCarta()]
      computador = [comprarCarta(),comprarCarta()]      
      somaJogador = jogador[0].valor+jogador[1].valor
      somaComputador = computador[0].valor+computador[1].valor
   }
   
   //impressão inicial do jogo com as 2 cartas do usuário e 1 do computador
   console.log("====USUÁRIO====")
   console.log(`Cartas: ${jogador[0].texto} ${jogador[1].texto}`)
   console.log(`Pontuação: ${somaJogador}`)
   console.log("====COMPUTADOR====")
   console.log(`Cartas: ${computador[0].texto}`)
   
   //rotina para nova carta para o usuário
   rodada = confirm("Deseja comprar outra carta ? ")   
   if(rodada){
      console.log("====USUÁRIO====")
   }
   while(rodada && somaJogador<21){      
      jogador.push(comprarCarta())
      somaJogador +=jogador[jogador.length-1].valor      
      console.log(`Sua nova carta é: ${jogador[jogador.length-1].texto}`)                      
      //caso a soma passe 21 não é feita a pergunta novamente
      if(somaJogador<=21){
         rodada = confirm("Deseja comprar outra carta ? ")     
      }      
   }

   //rotina para passar todas as cartas para uma nova variável, para facilitar na impressão das cartas
   for (let i=0;i<jogador.length;i++){
      jogadorCartas.push(jogador[i].texto)
   }

   //rotina que adiciona cartas ao computador casa não seja maior que a soma do usuário se o jogador não exceder os 21 pontos,caso exceda não precisa adicionar pois ele perdeu
   if(somaJogador<=21){
      while(somaComputador<somaJogador){      
         computador.push(comprarCarta())
         somaComputador +=computador[computador.length-1].valor                      
      }
   }
   
   //rotina para passar todas as cartas para uma nova variável, para facilitar na impressão das cartas
   for(let i=0;i<computador.length;i++){
      computadorCartas.push(computador[i].texto)
   }

   //rotina para comparar e mostrar os resultados do jogo
   console.log("====USUÁRIO====")
   console.log(`Cartas: ${jogadorCartas}`)
   console.log(`Pontuação: ${somaJogador}`)
   console.log("====COMPUTADOR====")
   console.log(`Cartas: ${computadorCartas}`)
   console.log(`Pontuação: ${somaComputador}`)
   console.log("====RESULTADO====")
   
   if(somaJogador>21 || (somaComputador>somaJogador && somaComputador<=21)){      
      console.log(`Computador foi o vencedor !!!`)
   }else if(somaComputador>21 || (somaJogador>somaComputador && somaJogador<=21)){      
      console.log(`Usuário foi o vencedor !!!`)
   }else{
      console.log("Incrível o jogo terminou empatado !!!")
   }

}else{
   console.log("Obrigado por Jogar !!!")   
}