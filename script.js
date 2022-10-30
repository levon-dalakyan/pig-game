'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const player0El = document.querySelector(`.player--0`);
const player1El = document.querySelector(`.player--1`);

const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

let activePlayer, current, scores, playGame;

const init = function () {
  activePlayer = 0;
  current = 0;
  scores = [0, 0];
  playGame = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--winner', 'player--active');
  diceEl.classList.remove('hidden');
};
init();

const togglePlayer = function () {
  current = 0;
  document.querySelector(`#current--${activePlayer}`).textContent = current;

  activePlayer = activePlayer === 0 ? 1 : 0;

  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (playGame) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceEl.src = `images/dice-${dice}.png`;

    if (dice === 1) {
      togglePlayer();
    } else {
      current += dice;

      document.querySelector(`#current--${activePlayer}`).textContent = current;
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playGame) {
    scores[activePlayer] += current;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      diceEl.classList.add('hidden');

      playGame = false;
    } else {
      togglePlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  init();
});
