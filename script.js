function capitalize(palavra){
   return palavra.charAt(0).toUpperCase() + palavra.slice(1)
}

const opcoes = {
   0:"Pedra",
   1:"Papel",
   2:"Tesoura"
}

function getComputerChoice(){
   
   let choice = Math.floor(Math.random()*3)
   return opcoes[`${choice}`]
   
}
const hierarquia = {
   "pedra":"tesoura",
   "tesoura":"papel",
   "papel":"pedra"
}

let userScore = 0
let score = 0
let gameOver = false


const jogadas = document.querySelector("#jogadas")
const rightSection = document.querySelector("#rightSection")
const scoreJogador= document.querySelector("#p1 .score")
const scoreMaquina= document.querySelector("#p2 .score")
const botaoReiniciar = document.createElement("button")
botaoReiniciar.textContent= "Jogar novamente"
botaoReiniciar.addEventListener("click", e=>{
   scoreJogador.textContent = 0;
   scoreMaquina.textContent = 0;
   userScore = 0
   score = 0
   gameOver = false;
   [...rightSection.children].forEach(e=>{
      rightSection.removeChild(e)
   })
})



jogadas.addEventListener("click", (e)=>{
   if(!gameOver){
      switch(e.target.id){
         case "pedra": playRound("pedra")
         break;
         case "papel": playRound("papel")
         break;
         case "tesoura":playRound("tesoura")
         break;
      }
      if(score>4 || userScore>4){
         finishGame();
      }
   }
})

function finishGame(){
   if(userScore> score){
      rightSection.innerHTML += `<p style="color:green">WIN!</p><p>Você ganhou o jogo: <span>${userScore}</span> X <span>${score}</span></p>`
   }else{
      rightSection.innerHTML += `<p style="color:red">Game Over!</p><p>Você perdeu o jogo: <span>${userScore}</span> X <span>${score}</span></p>`
   }
   gameOver = true
   rightSection.appendChild(botaoReiniciar)

}


function playRound(jogada){
   let escolha = getComputerChoice().toLowerCase();
   rightSection.innerHTML = (`<p>Você: ${capitalize(jogada)} | Maquina: ${capitalize(escolha)}</p>`)
   if(hierarquia[jogada]==escolha){
      rightSection.innerHTML += `<p style="color:green">Você ganhou a rodada </p>`
      scoreJogador.textContent = Number(scoreJogador.textContent) + 1
      userScore+=1
   }else if(hierarquia[escolha]==jogada){
      rightSection.innerHTML += `<p style="color:red">Você perdeu a rodada </p>`
      scoreMaquina.textContent = Number(scoreMaquina.textContent) + 1
      score +=1
   }else{
      rightSection.innerHTML += `<p style="color:purple">Empate na rodada </p>`
   }
}

