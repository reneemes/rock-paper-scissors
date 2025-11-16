// Form
const gameForm = document.getElementById('game-form');
const userInput = document.getElementById('user-input');
// Text Output
const resultText = document.querySelector('.result-sec__result');
// Hand Icons
const userHandSec = document.querySelector('.user-hand-sec');
const computerHandSec = document.querySelector('.computer-hand-sec');
// Icon HTML
const icons = {
  user: {
    rock: '<div class="shake-wrapper"><i class="fa-solid fa-hand-back-fist fa-rotate-90 fa-5x"></i></div>',
    paper: '<div class="shake-wrapper"><i class="fa-solid fa-hand fa-rotate-90 fa-5x"></i></div>',
    scissors: '<div class="shake-wrapper"><i class="fa-solid fa-hand-scissors fa-flip-horizontal fa-5x"></i></div>'
  },
  computer: {
    rock: '<div class="shake-wrapper"><div class="flip"><i class="fa-solid fa-hand-back-fist fa-flip-horizontal fa-5x"></i></div></div>',
    paper: '<div class="shake-wrapper"><div class="flip"><i class="fa-solid fa-hand fa-flip-horizontal fa-5x"></i></div></div>',
    scissors: '<div class="shake-wrapper"><i class="fa-solid fa-hand-scissors fa-5x"></i></div>'
  }
};
setDefaultHands();
// Score Board
const userScoreBox = document.getElementById('user-score');
const computerScoreBox = document.getElementById('computer-score');
// Default Scores
let userScore = 0;
let computerScore = 0;
userScoreBox.textContent = userScore;
computerScoreBox.textContent = computerScore;
// Computer Options
const computerOptions = ['rock', 'paper', 'scissors'];

gameForm.addEventListener('submit', (e) => {
  e.preventDefault();
  userHandSec.innerHTML = '';
  computerHandSec.innerHTML = '';

  if (!computerOptions.includes(userInput.value.trim().toLowerCase())) {
    console.error('Unexpected value', userInput);
    setDefaultHands();
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
};

function computerTurn() {
  return computerOptions[Math.floor(computerOptions.length * Math.random())];
};

function setResult(message) {
  resultText.textContent = message;
};

function setDefaultHands() {
  userHandSec.innerHTML = icons.user.rock;
  computerHandSec.innerHTML = icons.computer.rock;
};

function setIcons(userT, compT) {
  userHandSec.insertAdjacentHTML('beforeend', icons.user[userT]);
  computerHandSec.insertAdjacentHTML('beforeend', icons.computer[compT]);
  animate();
};

function animate() {
  let userIcon = userHandSec.querySelector('.shake-wrapper');
  let compIcon = computerHandSec.querySelector('.shake-wrapper');

  userIcon.classList.add('user-shake');
  compIcon.classList.add('computer-shake');

  userIcon.addEventListener('animationend', () => {
    userIcon.classList.remove('user-shake');
  });

  compIcon.addEventListener('animationend', () => {
    compIcon.classList.remove('computer-shake');
  });
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

function resetGame() {
  userScore = 0;
  computerScore = 0;
  userScoreBox.textContent = userScore;
  computerScoreBox.textContent = computerScore;
  setDefaultHands();
  resultText.textContent = '';
};