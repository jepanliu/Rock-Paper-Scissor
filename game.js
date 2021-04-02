var playerScore;
var computerScore;
var Score1 = 0;
var Score2 = 0;
let selection;

const gameContent = document.querySelector('.gameContent');
const gameText = document.createElement('p');
const gameScore = document.createElement('p');
const winnerText = document.createElement('p');
gameText.classList.add('gameText');

const scissors = document.querySelector('#scissors');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
    
    scissors.addEventListener('click', () => {
        selection = 'scissors';
        playRPS();
        winner();
    });
    rock.addEventListener('click', () => {
        selection = 'rock';
        playRPS();
        winner();
    });
    paper.addEventListener('click', () => {
        selection = 'paper';
        playRPS();
        winner();
    }); 



function game(){

playRPS();
playRPS();
playRPS();
playRPS();
playRPS();
winner();
}



function playRPS(){
 //prompt("Please choose Rock, Paper, or Scissors").toLowerCase();
let computer = computerPlay();

    if(selection == 'scissors' && computer == 'paper' || 
    selection == 'paper' && computer == 'rock' ||
    selection == 'rock' && computer == 'scissors'){

    gameText.textContent = `You win! ${selection} beats ${computer}`;
    gameContent.appendChild(gameText);

    playerScore = 1;

    }

    else if(selection == 'rock' && computer == 'paper' ||
    selection == 'scissors' && computer == 'rock' ||
    selection == 'paper' && computer == 'scissors'){
    
        gameText.textContent = `You Lose! ${selection} beats ${computer}`;
        gameContent.appendChild(gameText);
    computerScore = 1;

    }

    else if(selection == 'rock' && computer == 'rock' ||
    selection == 'scissors' && computer == 'scissors' ||
    selection == 'paper' && computer == 'paper'){
    computerScore = 0
    playerScore = 0;
    
    gameText.textContent = `it's a tie!`;
    gameContent.appendChild(gameText);
    
    }
    else {
    console.log("please try again");
    }

Scores();
}

function Scores(){

if (playerScore == 1){
    Score1++;
  }
  else if (computerScore == 1) {
    Score2++;
  }
  else if (computerScore == 0 && playerScore == 0) {
    Score1 + 0;
    Score2 + 0;
  }
  gameScore.textContent = 'player: ' + Score1 + '\n\n' + 'computer: ' + Score2;
  gameContent.appendChild(gameScore);
  
}

function winner(){
    if (Score1 == 5){
    winnerText.textContent = `You beat the computer!`;
    gameContent.appendChild(winnerText);
    }
    else if (Score2 == 5){
    winnerText.textContent = `You lost! The computer beat you!`;
    gameContent.appendChild(winnerText);
    }
}

function computerPlay(){
    let options = Math.floor((Math.random() * (4 - 1) + 1));
    
    if (options == 1){
      return('paper');
      
    }
    else if (options == 2){
      return('rock');
      
    }
    else if (options == 3) {
      return('scissors');
      
    }
    else {
      return('error');
      
    }
  }

//console.log(game());
