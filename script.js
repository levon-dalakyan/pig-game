'use strict';

const score0El = document.querySelector('.score--0');
const score1El = document.querySelector('.score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const dice = document.querySelector('.dice');

const btnRoll = document.querySelector('.btn--roll');

let activePlayer = 0;
let current = 0;
let scores = [0, 0];

btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;

  if (dice === 1) {
    activePlayer = activePlayer === 0 ? 1 : 0;
    current = 0;

    document.querySelector(`.player--0`).classList.toggle('player--active');
    document.querySelector(`.player--1`).classList.toggle('player--active');
  } else {
    current += dice;

    document.querySelector(`#current--${activePlayer}`).textContent = current;
  }
});
