let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessesLot = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const resultParas = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numberGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a  number");
  } else if (guess > 100) {
    alert("Please enter a  number less than 100");
  } else {
    prevGuess.push(guess);
    if (numberGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game over .Rendom number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage("You guessed it right");
  } else if (guess < randomNumber) {
    displayMessage(`Number id Tooo low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number id Tooo high`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessesLot.innerHTML += `${guess} , `;
  numberGuess++;
  lastResult.innerHTML = `${11 - numberGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id = 'newGame'>Start new Game</h2>`;
  resultParas.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numberGuess = 1;
    guessesLot.innerHTML = "";
    lastResult.innerHTML = `${11 - numberGuess}`;
    userInput.removeAttribute("disabled");
    resultParas.removeAttribute(p);
    lowOrHi.removeAttribute();
    playGame = true;
  });
}
