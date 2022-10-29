'use strict';

function genRandNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}
let secretNumber = genRandNumber();
let score = 20;
document.querySelector('.score').textContent = score;
let currHighScore = 0;
let playAgain = false;

function btnCheck() {
  const guessedNumber = Number(document.querySelector('.guess').value);

  if (playAgain) {
    btnAgain();
  } else {
    if (!guessedNumber) {
      document.querySelector('.message').textContent = '⛔ No number!';
    } else if (guessedNumber === secretNumber) {
      document.querySelector('.message').textContent = '✌️ Correct number!';
      currHighScore = Number(document.querySelector('.highscore').textContent);
      if (score > currHighScore) {
        document.querySelector('.highscore').textContent = score;
      }
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.check').textContent = 'Again!';
      playAgain = true;
    } else if (guessedNumber > secretNumber) {
      document.querySelector('.message').textContent = '👆 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (guessedNumber < secretNumber) {
      document.querySelector('.message').textContent = ' 👇 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    }
    if (score === 0) {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.check').textContent = 'Again!';
      playAgain = true;
    }
  }
}

function btnAgain() {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  secretNumber = genRandNumber();
  document.querySelector('.number').textContent = '?';
  playAgain = false;
  document.querySelector('.check').textContent = 'Check!';
}

document.querySelector('.check').addEventListener('click', btnCheck);
document.querySelector('.again').addEventListener('click', btnAgain);
