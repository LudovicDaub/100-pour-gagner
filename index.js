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
  const audioFailed = new Audio("assets/audio/fail.mp3");
  const audioDiceRoll = new Audio("assets/audio/dice.wav");
  const audioVictory = new Audio("assets/audio/victory.mp3");
  const audioHold = new Audio("assets/audio/hold.mp3");
  const audio = [audioFailed, audioDiceRoll, audioVictory, audioHold];
 // *********************RAMDOM-NUMBER*****************
function randomNumber() {
  return Math.floor(Math.random() * 6 + 1);
}

let randomDice;
let player1Turn = true;
let resultP1 = 0;
let resultGlobalP1 = 0;
let resultP2 = 0;
let resultGlobalP2 = 0;
 // *********************HOLD BUTTON + WIN CONDITION*****************
hold.addEventListener("click", () => {
  if (player1Turn) {
    audioHold.play();
    player2.style.border = "red 5px solid"
    player1.style.border = "none"
    resultGlobalP1 += resultP1;
    totalScoreP1.textContent = resultGlobalP1;
    resultP1 = 0;
    currentScoreP1.textContent = "0";
    if (resultGlobalP1 >= 100) {
      audioVictory.play();
      imgDice.innerHTML =
        '<img style="height:150px; width:80px " src="./assets/img/trophy.jpg">' +
        " Joueur 1 gagne !";
        win();
    } else {
      player1Turn = false;
    }
  } else {
    audioHold.play();
    player1.style.border = "red 5px solid"
    player2.style.border = "none"
    resultGlobalP2 += resultP2;
    totalScoreP2.textContent = resultGlobalP2;
    resultP2 = 0;
    currentScoreP2.textContent = "0";
    if (resultGlobalP2 >= 100) {
      audioVictory.play();
      imgDice.innerHTML =
      '<img style="height:150px; width:100px " src="./assets/img/trophy.jpg">' +
        " Joueur 2 Gagne !";
        win();
    } else {
      player1Turn = true;
    }
  }
});
 // *********************DICE ROLL*****************
roll.addEventListener("click", () => {
  audioDiceRoll.play();
  if (player1Turn) {
   randomDice = randomNumber();
    if (randomDice == 1) {
      audioFailed.play();
      player2.style.border = "red 5px solid"
      player1.style.border = "none"
      diceImg(randomDice);
      totalScoreP1.textContent = resultGlobalP1;
      currentScoreP1.textContent = "0";
      resultP1 = 0;
      player1Turn = false;
    } else {
      audioDiceRoll.play();
      setTimeout(() => {    
         diceImg(randomDice);
        resultP1 = resultP1 + randomDice;
        currentScoreP1.textContent = resultP1;  
      }, 500);
    }
  } else {
   randomDice = randomNumber();  
    if (randomDice == 1) {
      audioFailed.play();
      player1.style.border = "red 5px solid"
      player2.style.border = "none"
      diceImg(randomDice);
      totalScoreP2.textContent = resultGlobalP2;
      currentScoreP2.textContent = 0;
      resultP2 = 0;
      player1Turn = true;
    } else {
      audioDiceRoll.play();
      setTimeout(() => {
      diceImg(randomDice);
      resultP2 = resultP2 + randomDice;
      currentScoreP2.textContent = resultP2;
      }, 500);
    }
  }
});
 // *********************RESET BUTTON*****************
newGame.addEventListener("click", () => {
  rules();
  win();
});

function win() {
  resultGlobalP1 = 0;
  resultGlobalP2 = 0;
  resultP1 = 0;
  resultP2 = 0;
  currentScoreP2.textContent = "0";
  currentScoreP1.textContent = "0";
  totalScoreP1.textContent = "0";
  totalScoreP2.textContent = "0";
  player1Turn = true;
  player1.style.border = "red 5px solid"
  player2.style.border = "none"
}
 // *********************RESET BUTTON*****************
 function rules() {
 window.alert("Règles du jeu : chaque joueur lance le dé. Le score de chaque tour est cumulé jusqu'à ce que le joueur clique sur retenir le score ou fasse 1, ce qui met son tour à zéro et la main passe à l'autre joueur. Le premier à 100 remporte la partie. Bonne chance !");
}
rules();
// *********************MUTED*****************
let muted = document.querySelector("#muted")
let mutedText = document.querySelector("#mutedText")
let mutedLogo =document.querySelector("#mutedLogo")

muted.addEventListener('click', () => {
  if(mutedText.innerText === 'Désactiver le son :'){
      mutedText.innerText = 'Activer le son :';
      mutedLogo.innerHTML = '&#128266;';
      for(let track of audio){
        track.muted = true;
      }

  } else if(mutedText.innerText === 'Activer le son :') {
      mutedText.innerText = 'Désactiver le son :';
      mutedLogo.innerHTML = '&#128263;';
      for(let track of audio){
        track.muted = false;
      }
  }
});    