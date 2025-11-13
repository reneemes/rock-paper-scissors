const gameForm = document.getElementById('game-form');
const userInput = document.getElementById('user-input');
const resultText = document.querySelector('.result-sec__result');

const computerOptions = ['rock', 'paper', 'scissors'];

gameForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!computerOptions.includes(userInput.value.trim().toLowerCase())) {
    console.error('Unexpected value', userInput);
    resultText.textContent = 'Invalid input. Please enter Rock, Paper, or Scissors.'
    userInput.value = '';
    return;
  }

  checkWinner(userInput.value)
  userInput.value = '';
});

function checkWinner(userTurn) {
  let compT = computerTurn();
  let userT = userTurn.toLowerCase();

  if (userT === compT) {
    console.log("It's a tie!")
  } else if (
    (userT === 'rock' && compT === 'scissors') ||
    (userT === 'paper' && compT === 'rock') ||
    (userT === 'scissors' && compT === 'paper')
  ) {
    console.log('You win!')
  } else {
    console.log('Computer wins!')
  }
};

function computerTurn() {
  let randomValue = computerOptions[Math.floor(computerOptions.length * Math.random())];
  return randomValue
};
