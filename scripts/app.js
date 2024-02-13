let scoreCount = 0;
let lifeCount = 5;

function gameContinue() {
  const alphabet = generateRandomAlphabet();
  const displayAlphabet = document.getElementById("single-alphabet");
  displayAlphabet.innerText = alphabet;
  setBackgroundColorById(alphabet);
}

function play() {
  hideElementById("home");
  showElementById("play-ground");
  gameContinue();
}

window.addEventListener("keyup", function (e) {
  countScoreAndLife(e);
  gameContinue();
  gameOver();
  setInnerTextById("final-score", scoreCount);
  setInnerTextById("score", scoreCount);
  setInnerTextById("life", lifeCount);
});

function gameOver() {
  if (lifeCount === 0) {
    hideElementById("play-ground");
    showElementById("score-board");
  }
}

function countScoreAndLife(e) {
  let previousLetter;
  const letters = document.getElementsByClassName("kbd");
  for (const letter of letters) {
    if (letter.classList.contains("bg-orange-400")) {
      previousLetter = letter;
    }
  }
  if (previousLetter.innerText === e.key) {
    scoreCount++;
  } else {
    lifeCount--;
  }
}

function playAgain() {
  lifeCount = 5;
  scoreCount = 0;
  hideElementById("score-board");
  showElementById("play-ground");
  setInnerTextById("score", scoreCount);
  setInnerTextById("life", lifeCount);
}
