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

for(let i=0;i<5;i++){
   let escolhaUser = prompt("Faça a sua jogada:").toLowerCase();
   let escolha = getComputerChoice().toLowerCase();

   console.log(`Você: ${capitalize(escolhaUser)},bot: ${capitalize(escolha)}`)
   if(hierarquia[escolhaUser]==escolha){
      console.log("Voce ganhou esta rodada!")
      userScore+=1
   }else if(hierarquia[escolha]==escolhaUser){
      console.log("Você perdeu esta rodada.")
      score +=1
   }else{
      console.log("Empate na rodada.")
   }
}

if(userScore>score){
   console.log(`Você ganhou! ${userScore} a ${score}`)
}else if (score>userScore){
   console.log(`Você perdeu. ${userScore} a ${score}`)
}else{
   console.log(`Empate! ${userScore} a ${score}`)
   
}

