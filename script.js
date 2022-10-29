'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const player0El = document.querySelector(`.player--0`);
const player1El = document.querySelector(`.player--1`);

const diceEl = document.querySelector('.dice');
const btnRollEl = document.querySelector('.btn--roll');

let activePlayer = 0;
let current = 0;
let scores = [0, 0];

score0El.textContent = 0;
score1El.textContent = 0;

btnRollEl.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;

  diceEl.src = `images/dice-${dice}.png`;

  if (dice === 1) {
    // scores[activePlayer] = +current;
    // document.querySelector(`#score--${activePlayer}`).textContent =
    //   scores[activePlayer];

    current = 0;
    document.querySelector(`#current--${activePlayer}`).textContent = current;

    activePlayer = activePlayer === 0 ? 1 : 0;

    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  } else {
    current += dice;

    document.querySelector(`#current--${activePlayer}`).textContent = current;
  }
});
