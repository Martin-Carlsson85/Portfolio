'use strict';

// console.log(document.querySelector(`.message`).textContent);
// document.querySelector(`.message`).textContent = `Correct number`;

// document.querySelector(`.number`).textContent = 13;
// document.querySelector(`.score`).textContent = 25;

let secretNumber = Math.trunc(Math.random() * 20) + 1; //Math = objekt, random = metod
document.querySelector(`.number`).textContent = secretNumber; //Gör hemliga talet synligt när sidan laddas om

let score = 20;
let highScore = 0;

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);

  if (!guess) {
    document.querySelector(`.message`).textContent = `No number!`;
  } else if (guess === secretNumber) {
    document.querySelector(`.message`).textContent = `Correct number!`;
    document.querySelector(`.number`).textContent = secretNumber;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
    if (score > highScore) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
    }
  } else if (guess > secretNumber) {
    if (score !== 1) {
      document.querySelector(`.message`).textContent = `To high number!`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `You lost`;
      document.querySelector(`.score`).textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score !== 1) {
      document.querySelector(`.message`).textContent = `To low number!`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `You lost`;
      document.querySelector(`.score`).textContent = 0;
      document.querySelector(`body`).style.backgroundColor = `#ff0000`;
    }
  }
});

// document.querySelector(`.again`).addEventListener(`click`, function () {
//   document.querySelector(`.score`).textContent = 20;
//   secretNumber = Math.trunc(Math.random() * 20) + 1; //Skapar ett nytt heligt nummer med samma variabel (reassign)
//   //document.querySelector(`.number`).textContent = secretNumber;
//   document.querySelector(`body`).style.backgroundColor = `#222`;
//   document.querySelector(`.number`).style.width = `15rem`;
//   document.querySelector(`.guess`).value = ``;
//   document.querySelector(`.number`).textContent = `?`;
//   document.querySelector(`.message`).textContent = `Start guessing...`;
// });

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1; //Skapar ett nytt heligt nummer med samma variabel (reassign)
  document.querySelector(`.message`).textContent = `Start guessing...`;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

//If no number

//If correct number

//If to low or to high number

//If you lost the game
