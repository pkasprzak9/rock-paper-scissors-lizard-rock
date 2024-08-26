// Getting the elements from the DOM
const screenStart = document.getElementsByClassName('screen--start')[0];
const screenGame = document.getElementsByClassName('screen--game')[0];
const screenResult = document.getElementsByClassName('screen--results')[0];

export function showGameScreen() {
  screenStart.classList.remove('screen--active');
  screenGame.classList.add('screen--active');
};

export function showResultScreen() {
  screenGame.classList.remove('screen--active');
  screenResult.classList.add('screen--active');
}

export function showStartScreen() {
  screenResult.classList.remove('screen--active');
  screenStart.classList.add('screen--active');
}
