import { showGameScreen, showResultScreen, showStartScreen } from './ui.js';

function getSelectedWeapon() {
  return new Promise((resolve) => {
    const weapons = document.querySelectorAll('.game__weapon');
    weapons.forEach(weapon => {
      weapon.addEventListener('click', () => {
        resolve(weapon.dataset.weapon);
      }), { once: true };
    });
  });
};

function getComputerSelection() {
  const weapons = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  return weapons[Math.floor(Math.random() * weapons.length)];
}

function getResult(playerSelection, computerSelection) {
  const winMessage = 'You win!';
  const loseMessage = 'You lose!';
  const drawMessage = 'It\'s a draw';
  let winnerRule;
  let winnerMessage;
  switch (playerSelection) {
    case 'rock':
      switch (computerSelection) {
        case 'rock':
          winnerRule = '';
          winnerMessage = drawMessage;
          break;
        case 'paper':
          winnerRule = 'Paper covers rock!';
          winnerMessage = loseMessage;
          break;
        case 'scissors':
          winnerRule = 'Rock crushes scissors!';
          winnerMessage = winMessage;
          break;
        case 'lizard':
          winnerRule = 'Rock crushes lizard!';
          winnerMessage = winMessage;
          break;
        case 'spock':
          winnerRule = 'Spock vaporizes rock!';
          winnerMessage = loseMessage;
          break;
      }
      break;
    case 'paper':
      switch (computerSelection) {
        case 'rock':
          winnerRule = 'Paper covers rock!';
          winnerMessage = winMessage;
          break;
        case 'paper':
          winnerRule = '';
          winnerMessage = drawMessage;
          break;
        case 'scissors':
          winnerRule = 'Scissors cuts paper!';
          winnerMessage = loseMessage;
          break;
        case 'lizard':
          winnerRule = 'Lizard eats paper!';
          winnerMessage = loseMessage;
          break;
        case 'spock':
          winnerRule = 'Paper disproves Spock!';
          winnerMessage = winMessage;
          break;
      }
      break;
    case 'scissors':
      switch (computerSelection) {
        case 'rock':
          winnerRule = 'Rock crushes scissors!';
          winnerMessage = loseMessage;
          break;
        case 'paper':
          winnerRule = 'Scissors cuts paper!';
          winnerMessage = winMessage;
          break;
        case 'scissors':
          winnerRule = '';
          winnerMessage = drawMessage;
          break;
        case 'lizard':
          winnerRule = 'Scissors decapitates lizard!';
          winnerMessage = winMessage;
          break;
        case 'spock':
          winnerRule = 'Spock smashes scissors!';
          winnerMessage = loseMessage;
          break;
      }
      break;
    case 'lizard':
      switch (computerSelection) {
        case 'rock':
          winnerRule = 'Rock crushes lizard!';
          winnerMessage = loseMessage;
          break;
        case 'paper':
          winnerRule = 'Lizard eats paper!';
          winnerMessage = winMessage;
          break;
        case 'scissors':
          winnerRule = 'Scissors decapitates lizard!';
          winnerMessage = loseMessage;
          break;
        case 'lizard':
          winnerRule = '';
          winnerMessage = drawMessage;
          break;
        case 'spock':
          winnerRule = 'Lizard poisons Spock!';
          winnerMessage = winMessage;
          break;
      }
      break;
    case 'spock':
      switch (computerSelection) {
        case 'rock':
          winnerRule = 'Spock vaporizes rock!';
          winnerMessage = winMessage;
          break;
        case 'paper':
          winnerRule = 'Paper disproves Spock!';
          winnerMessage = loseMessage;
          break;
        case 'scissors':
          winnerRule = 'Spock smashes scissors!';
          winnerMessage = winMessage;
          break;
        case 'lizard':
          winnerRule = 'Lizard poisons Spock!';
          winnerMessage = loseMessage;
          break;
        case 'spock':
          winnerRule = '';
          winnerMessage = drawMessage;
          break;
      }
      break;
  };
  return { winnerRule, winnerMessage };
}

function playAgain() {
  const playAgainButton = document.getElementsByClassName('btn--play-again')[0];
  playAgainButton.addEventListener('click', () => {
    showStartScreen();
  });
}

export async function playRound() {
  showGameScreen();
  const computerSelection = getComputerSelection();
  const playerSelection = await getSelectedWeapon();
  showResultScreen();
  const playerSelectionText = document.getElementById('player__choice');
  playerSelectionText.textContent = playerSelection;
  const computerSelectionText = document.getElementById('computer__choice');
  computerSelectionText.textContent = computerSelection;
  const { winnerRule, winnerMessage } = getResult(playerSelection, computerSelection);
  console.log(winnerRule, winnerMessage);
  const resultRule = document.getElementById('winner__rule');
  resultRule.textContent = winnerRule;
  const resultMessage = document.getElementById('winner__message');
  resultMessage.textContent = winnerMessage;
  playAgain();
}
