'use strict';

//Välja element på två olika sätt
const score0El = document.querySelector(`#score--0`);
const score1El = document.getElementById(`score--1`); // Klassnamn men utan punkt
const current0El = document.getElementById(`current--0`);
const current1El = document.getElementById(`current--1`);
const diceEl = document.querySelector(`.dice`); //El = Element
const btnNew = document.querySelector(`.btn--new`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);

let currentScore = 0; //Kan inte vara inuti funktionen då det skulle generera 0 poäng varje gång man klickar på musen

//Startvillkor
score0El.textContent = 0; //JavaScript konverterar siffror till strängar här
score1El.textContent = 0;
diceEl.classList.add(`hidden`);

//Funktion för att kasta tärningen
btnRoll.addEventListener(`click`, function () {
  //Function handler
  // 1.Här genereras tärningskastet
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. Display dice
  diceEl.classList.remove(`hidden`);
  diceEl.src = `dice-${dice}.png`;

  // 3. Kolla om tärningen är lika med noll
  if (dice !== 1) {
    //Lägg till tärnings värde till befintligt värde(current score)
    currentScore = currentScore + dice; //Går även att skriva currentScore += dice
    current0El.textContent = currentScore;
  } else {
    //SKifta till andra spelaren
  }
});
