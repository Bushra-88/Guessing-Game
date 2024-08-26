// Declare Variables
let attempts = 0;
let randomNum = Math.floor(Math.random() * 24 + 1);
// console.log(randomNum);

const guess = document.getElementById("guess");
const playButton = document.getElementById("submit");
const hint = document.getElementById("hint");
const attemptsText = document.getElementById("attempts");

//Eventlistener
playButton.addEventListener("click", checkGuess);

function checkGuess() {
  const userValue = Number(guess.value); //get the user guessing number
  attempts++; // attempts= attempts+1

  if (userValue === randomNum) {
    hint.textContent = `Awesome! ${userValue}  was correct ! 🎉`;
  } else if (userValue < randomNum) {
    hint.textContent = "It's too low! Try again🙄";
  } else {
    hint.textContent = "It's too high! Try again😉";
  }
  attemptsText.textContent = "Attempts: " + attempts;
}
