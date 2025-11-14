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
    tie(compT);
    gameChoices(compT, userT);
  } else if (
    (userT === 'rock' && compT === 'scissors') ||
    (userT === 'paper' && compT === 'rock') ||
    (userT === 'scissors' && compT === 'paper')
  ) {
    winner()
    gameChoices(compT, userT);
    userScore += 1;
    userScoreBox.textContent = userScore;
  } else {
    loser();
    gameChoices(compT, userT)
    computerScore += 1;
    computerScoreBox.textContent = computerScore;
  }
};

function computerTurn() {
  let randomValue = computerOptions[Math.floor(computerOptions.length * Math.random())];
  return randomValue
};

function tie() {
  resultText.textContent = "It's a tie!";
};

function winner() {
  resultText.textContent = 'You win!';
};

function loser() {
  resultText.textContent = 'Computer wins!';
};

function gameChoices(comp, user) {
  computerResult.textContent = `Computer's choice: ${comp}.`;
  userResult.textContent = `Your choice: ${user}.`
};

function resetGame() {
  userScore = 0;
  computerScore = 0;
  userScoreBox.textContent = userScore;
  computerScoreBox.textContent = computerScore;
};