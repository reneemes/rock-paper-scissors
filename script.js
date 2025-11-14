// Form
const gameForm = document.getElementById('game-form');
const userInput = document.getElementById('user-input');
// Text Outputs
const resultText = document.querySelector('.result-sec__result');
// const computerResult = document.querySelector('.result-sec__com-choice');
// const userResult = document.querySelector('.result-sec__user-choice');
// Hand Icons
// const userHand = document.getElementById('user-hand');
// const computerHand = document.getElementById('computer-hand');
const userHandSec = document.querySelector('.user-hand-sec');
const computerHandSec = document.querySelector('.computer-hand-sec');
// Score Board
const userScoreBox = document.getElementById('user-score');
const computerScoreBox = document.getElementById('computer-score');

let userScore = 0;
let computerScore = 0;

userScoreBox.textContent = userScore;
computerScoreBox.textContent = computerScore;

const computerOptions = ['rock', 'paper', 'scissors'];

gameForm.addEventListener('submit', (e) => {
  e.preventDefault();
  userHandSec.innerHTML = '';
  computerHandSec.innerHTML = '';

  if (!computerOptions.includes(userInput.value.trim().toLowerCase())) {
    console.error('Unexpected value', userInput);
    resultText.textContent = 'Invalid input. Please enter Rock, Paper, or Scissors.'
    userInput.value = '';
    return;
  }

  playGame(userInput.value);
  userInput.value = '';
});

function playGame(userTurn) {
  let compT = computerTurn();
  let userT = userTurn.toLowerCase();

  if (userT === compT) {
    setResult("It's a tie!");
    setIcons(userT, compT);
  } else if (
    (userT === 'rock' && compT === 'scissors') ||
    (userT === 'paper' && compT === 'rock') ||
    (userT === 'scissors' && compT === 'paper')
  ) {
    setResult('You win!')
    updateScore('user');
    setIcons(userT, compT);
  } else {
    setResult('Computer wins!');
    updateScore('computer');
    setIcons(userT, compT);
  }
  // gameChoices(compT, userT);
};

function computerTurn() {
  return computerOptions[Math.floor(computerOptions.length * Math.random())];
};

function setResult(message) {
  resultText.textContent = message;
};

const userRock = '<i class="fa-solid fa-hand-back-fist fa-rotate-90 fa-5x"></i>';
const userPaper = '<i class="fa-solid fa-hand fa-rotate-90 fa-5x"></i>';
const userScissors = '<i class="fa-solid fa-hand-scissors fa-flip-horizontal fa-5x"></i>';

const computerRock = '<div class="flip"><i class="fa-solid fa-hand-back-fist fa-flip-horizontal fa-5x"></i></div>';
const computerPaper = '<div class="flip"><i class="fa-solid fa-hand fa-flip-horizontal fa-5x"></i></div>';
const computerScissors = '<i class="fa-solid fa-hand-scissors fa-5x"></i>';

function setIcons(userT, compT) {
  if (userT === 'rock') {
    userHandSec.insertAdjacentHTML('beforeend', userRock);
  } else if (userT === 'paper') {
    userHandSec.insertAdjacentHTML('beforeend', userPaper);
  } else {
    userHandSec.insertAdjacentHTML('beforeend', userScissors);
  }

  if (compT === 'rock') {
    computerHandSec.insertAdjacentHTML('beforeend', computerRock);
  } else if (compT === 'paper') {
    computerHandSec.insertAdjacentHTML('beforeend', computerPaper);
  } else {
    computerHandSec.insertAdjacentHTML('beforeend', computerScissors);
  }
};

function updateScore(player) {
  if (player === 'user') {
    userScore++;
    userScoreBox.textContent = userScore;
  } else {
    computerScore++;
    computerScoreBox.textContent = computerScore;
  }
};

function gameChoices(comp, user) {
  computerResult.textContent = `Computer's choice: ${comp}.`;
  userResult.textContent = `Your choice: ${user}.`;
};

function resetGame() {
  userScore = 0;
  computerScore = 0;
  userScoreBox.textContent = userScore;
  computerScoreBox.textContent = computerScore;

  resultText.textContent = '';
  computerResult.textContent = '';
  userResult.textContent = '';
};