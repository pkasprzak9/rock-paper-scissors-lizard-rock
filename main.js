import { playRound } from './modules/game-logic.js';

const startButton = document.getElementById('start__button');
startButton.addEventListener('click', () => {
  playRound();
});
