const gameForm = document.getElementById('game-form');
const userInput = document.getElementById('user-input');
const resultText = document.querySelector('.result-sec__result');
const computerResult = document.querySelector('.result-sec__com-choice');
const userResult = document.querySelector('.result-sec__user-choice');

const userScoreBox = document.getElementById('user-score')
const computerScoreBox = document.getElementById('computer-score')

let userScore = 0;
let computerScore = 0;

userScoreBox.textContent = userScore;
computerScoreBox.textContent = computerScore;

const computerOptions = ['rock', 'paper', 'scissors'];

gameForm.addEventListener('submit', (e) => {
  e.preventDefault();

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
    gameChoices(compT, userT);
  } else if (
    (userT === 'rock' && compT === 'scissors') ||
    (userT === 'paper' && compT === 'rock') ||
    (userT === 'scissors' && compT === 'paper')
  ) {
    setResult('You win!')
    updateScore('user');
    // userScore++;
    // userScoreBox.textContent = userScore;
  } else {
    setResult('Computer wins!');
    updateScore('computer');
    // computerScore++;
    // computerScoreBox.textContent = computerScore;
  }
  gameChoices(compT, userT);
};

function computerTurn() {
  return computerOptions[Math.floor(computerOptions.length * Math.random())];
};

function setResult(message) {
  resultText.textContent = message;
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