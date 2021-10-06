let roll = document.querySelector("#roll-dice");
let hold = document.querySelector("#hold");
let currentScoreP1 = document.querySelector("#pointP1");
let currentScoreP2 = document.querySelector("#pointP2");
let totalScoreP1 = document.querySelector("#total-pointP1");
let totalScoreP2 = document.querySelector("#total-pointP2");
let newGame = document.querySelector("#new-game");
let imgDice = document.querySelector("#img-dice");
let player1 = document.querySelector("#player-name1");
let player2 = document.querySelector("#player-name2");

// *********************DICE-IMG*****************
function diceImg(randomDice) {
   if (randomDice == 1) {
      randomDice = imgDice.innerHTML =
       '<img src="./assets/img/dice1.png">';
   } else if (randomDice == 2) {
      randomDice = imgDice.innerHTML =
       '<img src="/assets/img/dice2.png">';
   } else if (randomDice == 3) {
      randomDice = imgDice.innerHTML =
       '<img src="/assets/img/dice3.png">';
   } else if (randomDice == 4) {
      randomDice = imgDice.innerHTML =
       '<img src="/assets/img/dice4.png">';
   } else if (randomDice == 5) {
     randomDice = imgDice.innerHTML =
       '<img src="/assets/img/dice5.png">';
   } else if (randomDice == 6) {
      randomDice = imgDice.innerHTML =
       '<img src="/assets/img/dice6.png">';
   }
 }
  // *********************DICE SOUND*****************
  let audioFailed = new Audio("assets/audio/fail.mp3");
  let audioDiceRoll = new Audio("assets/audio/dice.wav");
  let audioVictory = new Audio("assets/audio/victory.mp3");
  let audioHold = new Audio("assets/audio/hold.mp3");
 // *********************RAMDOM-NUMBER*****************
function randomNumber() {
  return Math.floor(Math.random() * 6 + 1);
}

