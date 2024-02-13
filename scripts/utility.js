function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function setInnerTextById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function generateRandomAlphabet() {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");
  const randomNumber = Math.floor(Math.random() * 26);
  const alphabet = alphabets[randomNumber];
  return alphabet;
}

function setBackgroundColorById(elementId) {
  const letters = document.getElementsByClassName("kbd");
  for (const letter of letters) {
    if (letter.classList.contains("bg-orange-400")) {
      letter.classList.remove("bg-orange-400");
      break;
    }
  }
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}
// setBackgroundColorById();
